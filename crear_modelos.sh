#!/bin/bash

# Crear el archivo User.js en backend/models
echo "Creando el archivo User.js..."

cat <<EOT > backend/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  balance: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
EOT

echo "Archivo User.js creado correctamente."

# Crear el archivo Play.js en backend/models
echo "Creando el archivo Play.js..."

cat <<EOT > backend/models/Play.js
const mongoose = require('mongoose');

const playSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  numberPlayed: { type: Number, required: true },
  amount: { type: Number, required: true },
  isWinner: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const Play = mongoose.model('Play', playSchema);

module.exports = Play;
EOT

echo "Archivo Play.js creado correctamente."

# Crear el archivo Result.js en backend/models
echo "Creando el archivo Result.js..."

cat <<EOT > backend/models/Result.js
const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  winningNumbers: { type: [Number], required: true },  // Lista de números ganadores
  date: { type: Date, default: Date.now },             // Fecha del resultado
});

const Result = mongoose.model('Result', resultSchema);

module.exports = Result;
EOT

echo "Archivo Result.js creado correctamente."

# Verificación de que todos los archivos se han creado
echo "Todos los modelos se han creado correctamente en la carpeta backend/models."
