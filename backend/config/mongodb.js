const { MongoClient } = require('mongodb');
require('dotenv').config(); // Load environment variables from .env file

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db;

async function connectToDatabase() {
  if (!db) {
    try {
      await client.connect();
      db = client.db(process.env.MONGODB_DB); // Replace with your MongoDB database name
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Failed to connect to MongoDB', error);
      throw error;
    }
  }
  return db;
}

module.exports = { connectToDatabase };
