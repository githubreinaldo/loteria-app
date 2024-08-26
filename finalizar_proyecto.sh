#!/bin/bash

# Paso 1: Crear las rutas del backend que faltan y completar la implementación

echo "Creando las rutas del backend y asegurando la conexión con MongoDB..."

cat <<EOT > backend/routes/api.js
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
    const newPlay = new Play({ user: user._id, numberPlayed, amount });
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
      { \$inc: { balance: amount } },
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

# Paso 2: Conectar el frontend con el backend mediante solicitudes HTTP

echo "Conectando el frontend con el backend mediante solicitudes HTTP..."

# Modificar el archivo PlayScreen.js para interactuar con el backend
cat <<EOT > src/screens/PlayScreen.js
import React, { useState } from 'react';

function PlayScreen() {
  const [numberPlayed, setNumberPlayed] = useState('');
  const [amount, setAmount] = useState('');

  const handlePlay = async () => {
    const response = await fetch('/api/play', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: 'usuarioEjemplo', numberPlayed, amount }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <h1>Realizar Jugada</h1>
      <input
        type="text"
        placeholder="Número"
        value={numberPlayed}
        onChange={(e) => setNumberPlayed(e.target.value)}
      />
      <input
        type="text"
        placeholder="Monto"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handlePlay}>Jugar</button>
    </div>
  );
}

export default PlayScreen;
EOT

# Paso 3: Sincronizar con GitHub

echo "Sincronizando cambios con GitHub..."

# Agregar todos los cambios locales
git add .

# Hacer commit con un mensaje
git commit -m "Terminando la implementación del backend y conectando el frontend con el backend"

# Enviar los cambios a la rama principal de GitHub
git push origin main

# Finalización
echo "Script completado. El proyecto ha sido actualizado y sincronizado con GitHub."
