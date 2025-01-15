import express from 'express';
import Item from '../models/Item.js';
import authMiddleware from '../../middleware/authMiddleware.js';
import bycrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { OAuth2Client } from 'google-auth-library';
import UserItems from '../models/googleSignupSchema.js';
import upload from '../../middleware/multerMiddleware.js';
import File from '../models/multimediaScema.js';
import Reaction from '../models/userReaction.js';

const router = express.Router();

//User Registration
router.put('/register/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const { role, username, email, password, Confirmed_Password } = req.body;

      // Validate required fields
      if (!role || !username || !email || !password || !Confirmed_Password) {
          return res.status(400).json({ message: 'All fields are required!' });
      }

      // Check if passwords match
      if (password !== Confirmed_Password) {
          return res.status(400).json({ message: 'Passwords do not match!' });
      }

      // Find the user by ID
      const existingUser = await UserItems.findById(id);
      if (!existingUser) {
          return res.status(404).json({ message: 'User not found!' });
      }

      // Hash the password
      const hashedPassword = await bycrypt.hash(password, 10);

      // Update user data
      existingUser.role = role;
      existingUser.username = username;
      existingUser.email = email; // Typically email shouldn't be editable here
      existingUser.password = hashedPassword;

      // Save the updated user
      const updatedUser = await existingUser.save();
      console.log('Registered Successfully!', updatedUser);

      res.status(200).json({ message: 'Registration completed successfully!', user: updatedUser });
  } catch (err) {
      console.error('Failed to register:', err.message);
      res.status(500).json({ message: 'Internal Server Error', error: err.message });
  }
});


// Login user Account
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find user by username
    const user = await UserItems.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Compare passwords
    const isMatch = await bycrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    // Create a JWT token
    const jwtToken = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Send the token along with user details
    res.status(200).json({
      message: 'Login successful',
      token: jwtToken,
      user: {
        userId: user._id,
        userRole: user.role,
        userName: user.username,
        userEmail: user.email,
      },
    });
  } catch (err) {
    console.error('Login failed:', err.message);
    res.status(500).json({ message: err.message });
  }
});


// Google Login Endpoint
router.post('/google-login', async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ message: 'Google token is required' });
  }

  try {
    const client = new OAuth2Client(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET);

    // Verify Google token
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.CLIENT_ID,
    });
    
    const payload = ticket.getPayload();
    const { sub: googleId, email, name, picture } = payload;

    // Check if user exists in the database
    let user = await UserItems.findOne({ googleId });
    if (!user) {
      user = new UserItems({
        googleId,
        email,
        name,
        picture,
        role: 'user', // Default role
      });
      await user.save();
    }

    // Generate a JWT for the session
    const jwtToken = jwt.sign(
      { id: user._id, email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Send response
    res.status(200).json({
      message: 'Login successful',
      token: jwtToken,
      user: {
        userId: user._id,
        userName: user.name,
        userEmail: user.email,
        userPicture: user.picture,
        userRole: user.role,
      },
    });
  } catch (err) {
    console.error('Error during Google login:', err.message);
    res.status(401).json({ message: 'Invalid Google token' });
  }
});


//Authenticated user profile
router.get('/profile', authMiddleware, async (req, res)=>{
      try{
        const user = await UserItems.findById(req.googleId);
        res.status(200).json({message: {user}});
      }catch(err){
        res.status(500).json({ message: 'Server error' });
      }
});

// Upload files , Pdf, Docx, Doc Image, Videos
router.post("/stats", upload.single("file"), async (req, res) => {
  try {
    const { title, repositoryURL, uploadDate, googleId, userPicture, userName } = req.body;

    let fileData = null;
    if (req.file) {
      const { originalname, mimetype, size, path } = req.file;

      // Determine file type
      const fileType = getFileType(mimetype);
      if (fileType === "unknown") {
        return res.status(400).json({ message: "Unsupported file type" });
      }

      fileData = {
        filename: originalname,
        fileType,
        mimetype,
        size,
        metadata: { path }, // Save path for internal reference
      };
    }

    // Create and save file document
    const newItem = new File({
      title,
      repositoryURL,
      files: fileData,
      uploadDate,
      googleId,
      userPicture,
      userName,
    });
    await newItem.save();

    res.status(201).json({ message: "File uploaded successfully", newItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error uploading file", error: error.message });
  }
});

// Helper function to determine file type
function getFileType(mimetype) {
  if (mimetype.startsWith("image")) return "image";
  if (mimetype.startsWith("video")) return "video";
  if (mimetype === "application/pdf") return "pdf";
  if (mimetype === "application/vnd.ms-powerpoint") return "ppt"; // For .ppt files
  if (mimetype === "application/vnd.openxmlformats-officedocument.presentationml.presentation")
    return "pptx"; // For .pptx files
  if (mimetype === "application/msword") return "doc"; // For .doc files
  if (mimetype === "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
    return "docx"; // For .docx files
  return "unknown";
}



// Endpoint to list files with unique identifiers
router.get('/file', async (req, res) => {
    try {
        const files = await File.find();
        res.status(200).json(files);
    } catch (error) {
        console.error('Error fetching items from DB:', error);
        res.status(500).json({ message: "Error fetching files", error: error.message });
    }
});

// API Routes for Heart user reactions
router.post("/heart", async (req, res) => {
  try {
    console.log("Incoming Request Body:", req.body);
      const { userReaction, userId } = req.body;

      const userExist = Reaction.findOneAndUpdate({ userId });

      // if(userExist){
      //   return res.status(200).json({message: "User Is exist!"});
      // }


      // Create new reaction entry
      const newReaction = new Reaction({
          userReaction,
          userId: userId.googleId,
      });

      await newReaction.save();

      res.status(200).json({
          success: true,
          message: "Reaction successfully saved",
          data: newReaction,
      });
  } catch (error) {
      console.error("Error handling heart reaction:", error.message);
      res.status(500).json({
          success: false,
          message: "Failed to save reaction",
          error: error.message,
      });
  }
});

// Get User Count
router.get('/hear-react', async (req, res)=>{
    try {
      const reactItems = await Reaction.find();
      res.status(200).json(reactItems);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
});



///////////////////////////////////////////////////////////////
//Read
router.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (err) {
    console.error('Error fetching items from DB:', err.stack);  // Log the stack trace for more details
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
  }
});


// Create
router.post('/items', async (req, res) => {
  const newItem = new Item(req.body);
  try {
    const savedItem = await newItem.save();
    console.log('New item saved:', savedItem);  // Log the saved item
    res.status(201).json(savedItem);
  } catch (err) {
    console.error('Error saving item:', err.message);  // Log the error message
    res.status(400).json({ message: err.message });
  }
});


// Update
router.put('/items/:id', async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete
router.delete('/items/:id', async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Item deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


export default router;
