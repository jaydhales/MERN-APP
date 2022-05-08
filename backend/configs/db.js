const { default: mongoose } = require('mongoose');
const dotenv = require('dotenv').config();

const mongoUri = process.env.MONGO_URI;

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDb;
