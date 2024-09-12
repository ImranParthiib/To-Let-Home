const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config(); // Load environment variables from .env file

const uri = process.env.DATABASE;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let db;

async function connectToDatabase() {
  if (!db) {
    try {
      await client.connect();
      db = client.db(process.env.MONGODB_DB); // Replace with your MongoDB database name
      console.log('Connected to MongoDB');
      // Send a ping to confirm a successful connection
      await db.command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
      console.error('Failed to connect to MongoDB', error);
      throw error;
    }
  }
  return db;
}

module.exports = { connectToDatabase };
