const mongoose = require("mongoose");

const connectToMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("successfully connected to mongo db");
  } catch (error) {
    console.log("error connecting to mongo db", error);
  }
};

module.exports = connectToMongoDb;