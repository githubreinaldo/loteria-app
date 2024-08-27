const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Asegúrate de que el nombre de la base de datos sea 'Loteria' en la URI
    const conn = await mongoose.connect('mongodb+srv://reinaldobermudezcr:HU6teuSlMiovL2Gh@loteria.dr7wa.mongodb.net/Loteria?retryWrites=true&w=majority&appName=Loteria');
    console.log(`MongoDB conectado: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
