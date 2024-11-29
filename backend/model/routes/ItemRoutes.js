import express from 'express';
import Item from '../models/Item.js';
import authMiddleware from '../../middleware/authMiddleware.js';
import bycrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { OAuth2Client } from 'google-auth-library';
import UserItems from '../models/googleSignupSchema.js';

const router = express.Router();


//This is for Registration users
router.post('/register', async (req, res)=>{
   try{
    const { role, username, email, password } = req.body;
    if(!role || !username || !email || !password){
      return res.status(400).json({message: 'All fields required!'});
    }

     //Check if email is duplicate
     const userEmail  = await UserItems.findOne({ email });
     if(userEmail){
      return res.status(404).json({message: 'Email is already exist!'});
     } 

        const HashPassword = await bycrypt.hash(password, 10);
        const create_newUser = new UserItems({role, username, email, password: HashPassword});
        const save_newUser = await create_newUser.save();
        console.log('Registered Successfully!', save_newUser);
        res.status(200).json(save_newUser);
    
   }catch(err){
      console.error('Failed to register', err.message);
      res.status(500).json({message: err.message});
   }
});

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
    const client = new OAuth2Client(process.env.CLIENT_ID);

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


//This is for UserID Profile
router.get('/profile', authMiddleware, async (req, res)=>{
      try{
        const user = await UserItem.findById(req.googleId);
        res.status(200).json({message: {user}});
      }catch(err){
        res.status(500).json({ message: 'Server error' });
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
