#!/bin/bash

# Asegurarse de que estamos en el directorio backend
cd backend

# Paso 1: Crear el modelo Result.js para almacenar los resultados ganadores
echo "Creando el modelo Result.js en backend/models/..."
cat <<EOT > models/Result.js
const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  winningNumbers: { type: [Number], required: true },  // Lista de números ganadores
  date: { type: Date, default: Date.now },  // Fecha del resultado
});

const Result = mongoose.model('Result', resultSchema);

module.exports = Result;
EOT

# Paso 2: Actualizar server.js para asegurar la conexión correcta con MongoDB (si se configura en Codesandbox)
echo "Actualizando server.js para conectar con MongoDB..."
cat <<EOT > server.js
const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./config/database');  // Conectar con MongoDB
const apiRoutes = require('./routes/api');

// Conectar a MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Usar las rutas de la API
app.use('/api', apiRoutes);

// Escuchar en el puerto 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(\`Servidor corriendo en el puerto \${PORT}\`);
});
EOT

# Paso 3: Actualizar las rutas en api.js para manejar las jugadas, resultados y saldo
echo "Actualizando rutas en api.js..."
cat <<EOT > routes/api.js
const express = require('express');
const router = express.Router();
const Play = require('../models/Play');
const User = require('../models/User');
const Result = require('../models/Result');

// Ruta para realizar una jugada
router.post('/play', async (req, res) => {
  const { username, numberPlayed, amount } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

    const newPlay = new Play({
      user: user._id,
      numberPlayed,
      amount,
    });

    await newPlay.save();
    res.json({ message: 'Jugada registrada', play: newPlay });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar la jugada', error });
  }
});

// Ruta para consultar el historial de jugadas
router.get('/history', async (req, res) => {
  const { username } = req.query;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

    const plays = await Play.find({ user: user._id });
    res.json({ history: plays });
  } catch (error) {
    res.status(500).json({ message: 'Error al consultar el historial', error });
  }
});

// Ruta para consultar los resultados ganadores
router.get('/results', async (req, res) => {
  try {
    const results = await Result.find().limit(10).sort({ date: -1 });
    res.json({ results });
  } catch (error) {
    res.status(500).json({ message: 'Error al consultar los resultados', error });
  }
});

// Ruta para actualizar el saldo del usuario
router.post('/balance', async (req, res) => {
  const { username, amount } = req.body;

  try {
    const user = await User.findOneAndUpdate(
      { username },
      { $inc: { balance: amount } },
      { new: true }
    );
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

    res.json({ message: 'Saldo actualizado', balance: user.balance });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el saldo', error });
  }
});

// Ruta para registrar resultados ganadores (administrativa)
router.post('/admin/results', async (req, res) => {
  const { winningNumbers } = req.body;

  try {
    const newResult = new Result({ winningNumbers });
    await newResult.save();
    res.json({ message: 'Resultado registrado', result: newResult });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar los resultados', error });
  }
});

module.exports = router;
EOT

echo "Fase 5 completada. Por favor, sincroniza con GitHub y reinicia el servidor en Codesandbox."
