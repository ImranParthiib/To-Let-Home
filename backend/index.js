const express = require('express');
const cors = require('cors');
const { connectToDatabase } = require('./config/mongodb');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON

// Example API route to fetch all properties from MongoDB
app.get('/api/properties', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const properties = await db.collection('properties').find({}).toArray();
    res.status(200).json(properties);
  } catch (error) {
    console.error('Error fetching properties:', error);
    res.status(500).json({ error: 'Failed to fetch properties' });
  }
});

// Example API route to add a property
app.post('/api/properties', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const newProperty = req.body;
    const result = await db.collection('properties').insertOne(newProperty);
    res.status(201).json(result.ops[0]);
  } catch (error) {
    console.error('Error adding property:', error);
    res.status(500).json({ error: 'Failed to add property' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
