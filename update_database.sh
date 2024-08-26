#!/bin/bash

# Ruta al archivo database.js
DATABASE_JS_PATH="backend/config/database.js"

# Modificar el archivo database.js con la nueva URI
echo "Modificando el archivo database.js con la nueva URI..."

cat > $DATABASE_JS_PATH <<EOL
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Conectar a MongoDB Atlas con la URI proporcionada
    const conn = await mongoose.connect('mongodb+srv://reinaldobermudezcr:HU6teuSlMiovL2Gh@loteria.dr7wa.mongodb.net/?retryWrites=true&w=majority&appName=Loteria');
    console.log(\`MongoDB conectado: \${conn.connection.host}\`);
  } catch (error) {
    console.error(\`Error: \${error.message}\`);
    process.exit(1);
  }
};

module.exports = connectDB;
EOL

echo "Archivo database.js actualizado."

# Agregar y hacer commit de los cambios en Git
echo "Sincronizando con GitHub..."
git add $DATABASE_JS_PATH
git commit -m "Actualizando database.js con la nueva URI de MongoDB Atlas"
git push origin main

echo "Sincronización completada."
