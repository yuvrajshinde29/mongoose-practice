const mongoose = require("mongoose");

module.exports = async function connectDB() {
  try { 
    await mongoose.connect("mongodb://localhost:27017/practiceDB");
    
    console.log("DB connection success");
  } catch (error) {
    console.log("DB connection failed: ", error);
    process.exit(1);
  }
};
