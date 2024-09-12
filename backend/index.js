const express = require('express');
const cors = require('cors');
const { ObjectId } = require('mongodb');
const { connectToDatabase } = require('./config/mongodb');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Property Management API');
});

// Fetch all properties
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

// Add a new property
app.post('/api/properties', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const newProperty = req.body;
    const result = await db.collection('properties').insertOne(newProperty);
    res.status(201).json({ ...newProperty, _id: result.insertedId });
  } catch (error) {
    console.error('Error adding property:', error);
    res.status(500).json({ error: 'Failed to add property' });
  }
});

// Update a property
app.put('/api/properties/:id', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const { id } = req.params;
    const updatedProperty = req.body;
    const result = await db.collection('properties').updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedProperty }
    );
    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'Property not found' });
    }
    res.status(200).json({ message: 'Property updated successfully' });
  } catch (error) {
    console.error('Error updating property:', error);
    res.status(500).json({ error: 'Failed to update property' });
  }
});

// Delete a property
app.delete('/api/properties/:id', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const { id } = req.params;
    const result = await db.collection('properties').deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Property not found' });
    }
    res.status(200).json({ message: 'Property deleted successfully' });
  } catch (error) {
    console.error('Error deleting property:', error);
    res.status(500).json({ error: 'Failed to delete property' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
