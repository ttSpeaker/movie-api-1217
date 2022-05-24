const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let db;

const connectMongo = async () => {
  try {
    const client = await MongoClient.connect(process.env.DATABASE_MONGO_URL);
    db = client.db("nuevaDB");
    return client;
  } catch (error) {
    console.log(error);
    throw "Error connecting to mongo";
  }
};

const getCollection = (collection) => {
  if (db) {
    return db.collection(collection);
  }
  throw "No MongoDB connection";
};

module.exports = { connectMongo, getCollection };
