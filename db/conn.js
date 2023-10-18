const mongoose = require('mongoose');
require('dotenv').config();
const mongooseUser = process.env.MONGOOSE_USER;
const mongoosePass = process.env.MONGOOSE_PASS;

async function dbConnect() {
  try {
    await mongoose.connect(
      `mongodb+srv://${mongooseUser}:${mongoosePass}@cluster0.c6vo5lv.mongodb.net/`
    );
    console.log('Connected to the database');
  } catch (error) {
    console.log('Something went wrong', error);
  }
}
module.exports = dbConnect;
