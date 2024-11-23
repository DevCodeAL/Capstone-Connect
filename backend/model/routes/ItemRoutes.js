import express from 'express';
import Item from '../models/Item.js';
import RegistrationModel from '../models/signup-model.js';
import authMiddleware from '../../middleware/authMiddleware.js';
import bycrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const router = express.Router();

//This is for Registration users
router.post('/register', async (req, res)=>{
   try{
    const { role, username, email, password } = req.body;
    if(!role || !username || !email || !password){
      return res.status(400).json({message: 'All fields required!'});
    }

     //Check if email is duplicate
     const userEmail  = await RegistrationModel.findOne({ email });
     if(userEmail){
      return res.status(404).json({message: 'Email is already exist!'});
     } 

        const HashPassword = await bycrypt.hash(password, 10);
        const create_newUser = new RegistrationModel({role, username, email, password: HashPassword});
        const save_newUser = await create_newUser.save();
        console.log('Registered Successfully!', save_newUser);
        res.status(200).json(save_newUser);
    
   }catch(err){
      console.error('Failed to register', err.message);
      res.status(500).json({message: err.message});
   }
});

//This is for Login users
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
     const user = await RegistrationModel.findOne({ username: username });

     if (!user) {
        return res.status(404).json({ message: 'User not found.' });
        
     }

     // Compare passwords
     const isMatch = await bycrypt.compare(password, user.password);

     if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials.' });
     }
      // Create a JWT token
      const token = jwt.sign(
        { userId: user._id },
          process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN }
      );
  
      // Send the token along with user details
      res.status(200).json({
        message: 'Login successful',
        token,
        user: {
          userId: user._id,
          userRole: user.role,
          userName: user.username,
          userEmail: user.email
        }
      });

  } catch (err) {
     console.error('Login failed', err.message);
     res.status(500).json({ message: err.message });
  }
});

//This is for UserID Profile
// Protected route
router.get('/profile', authMiddleware, async (req, res)=>{
      try{
        const user = await RegistrationModel.findById(req.userId);
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
