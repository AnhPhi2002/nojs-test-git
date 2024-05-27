const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/nodejs-api', { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connection to MongoDB successful!');
  } catch (err) {
    console.log('Connection to MongoDB failed:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
