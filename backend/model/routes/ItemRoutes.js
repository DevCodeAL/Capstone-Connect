import express from 'express';
import Item from '../models/Item.js';
import authMiddleware from '../../middleware/authMiddleware.js';
import bycrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { OAuth2Client } from 'google-auth-library';
import UserItems from '../models/googleSignupSchema.js';

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
