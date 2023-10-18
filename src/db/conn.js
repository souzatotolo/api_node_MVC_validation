const mongoose = require('mongoose');
require('dotenv').config();
const MONGODB_USER = process.env.MONGOOSE_USER;
const MONGODB_PASS = process.env.MONGOOSE_PASS;

async function dbConnect() {
  try {
    await mongoose.connect(
      `mongodb+srv://${MONGODB_USER}:${MONGODB_PASS}@cluster0.c6vo5lv.mongodb.net/`
    );
    console.log('Connected to the database');
  } catch (error) {
    console.log('Something went wrong', error);
  }
}
module.exports = dbConnect;
