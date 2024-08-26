const express = require('express');
const router = express.Router();
const Play = require('../models/Play');
const User = require('../models/User');
const Result = require('../models/Result');

// Ruta para manejar el login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    // Buscar al usuario en la base de datos
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

    // Verificar la contraseña (actualmente sin cifrar)
    if (user.password === password) {
      return res.json({ message: 'Inicio de sesión exitoso', user });
    } else {
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error del servidor', error });
  }
});

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
