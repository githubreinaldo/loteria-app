const express = require('express');
const router = express.Router();
const Play = require('../models/Play');
const User = require('../models/User');
const Result = require('../models/Result');

// Ruta para manejar el login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  console.log('Datos recibidos desde el frontend:', username, password);

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

    if (user.password === password) {
      return res.json({ message: 'Inicio de sesión exitoso', user });
    } else {
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error del servidor', error });
  }
});

// Nueva Ruta para registrar un nuevo usuario o administrador
router.post('/register', async (req, res) => {
  const { username, password, isAdmin } = req.body;  // Se añade isAdmin para identificar administradores

  if (!username || !password) {
    return res.status(400).json({ message: 'El nombre de usuario y la contraseña son obligatorios' });
  }

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'El nombre de usuario ya está en uso' });
    }

    const newUser = new User({ username, password, isAdmin });  // Se guarda con el flag isAdmin
    await newUser.save();

    res.status(201).json({ message: 'Usuario registrado con éxito', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar el usuario', error });
  }
});

// Ruta para realizar una jugada
router.post('/play', async (req, res) => {
  const { username, numberPlayed, amount } = req.body;

  console.log('Jugada recibida:', username, numberPlayed, amount);

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

  console.log('Consultando historial para:', username);

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

  console.log('Actualizando saldo para:', username, 'Monto:', amount);

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

  console.log('Registrando resultados ganadores:', winningNumbers);

  try {
    const newResult = new Result({ winningNumbers });
    await newResult.save();
    res.json({ message: 'Resultado registrado', result: newResult });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar los resultados', error });
  }
});

module.exports = router;
