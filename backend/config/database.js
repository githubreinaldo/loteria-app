// backend/config/database.js

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Conectar a MongoDB sin las opciones obsoletas
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/loteria');
    console.log(`MongoDB conectado: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;

