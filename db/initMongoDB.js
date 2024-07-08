const mongoose = require('mongoose');
const DB_HOST = require('../config');

const initMongoDB = async () => {
  try {
    // const DB_HOST =
    //   'mongodb+srv://annetaliss:29248@cluster0.yy6y8we.mongodb.net/my_contacts?retryWrites=true&w=majority&appName=Cluster0';
    await mongoose.connect(DB_HOST);
    console.log('Database connection successful');
  } catch (err) {
    console.log('error db');
    throw err;
  }
};

module.exports = initMongoDB;
