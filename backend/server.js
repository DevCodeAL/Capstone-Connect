import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import ItemRoutes from './model/routes/ItemRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;  // Use environment variable for port or fallback to 5000
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware setup 
app.use(cors());
app.use(express.json());  // Use express.json() to parse JSON payloads
app.use('/api', ItemRoutes);

// Function to create a collection
async function collection() {
    try {
        // Access the MongoDB database using Mongoose's connection instance
        const db = mongoose.connection.db;  // Correct way to access the database
        const collection = await db.createCollection('UserDb');  // Create the collection
        console.log('Created collection successfully', collection.collectionName);  // Log the collection name
    } catch (err) {
        console.error('Error creating collection', err);  // Log any errors that occur
    }
}

// Function to connect to the database
async function Database_Connection() {
    try {
        await mongoose.connect(MONGODB_URI);
        await collection();  // Call the function to create the collection
        console.log('Connected to MongoDB');  // Log successful connection
    } catch (err) {
        console.error('Connection error', err);  // Log any connection errors
    }
}

// Initialize the database connection
Database_Connection();

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);  // Log server start
});
