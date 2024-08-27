const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },  // Nombre de usuario único y requerido
  password: { type: String, required: true },  // Contraseña requerida
  balance: { type: Number, default: 0 },  // Saldo del usuario, valor por defecto 0
  createdAt: { type: Date, default: Date.now },  // Fecha de creación, por defecto la fecha actual
});

const User = mongoose.model('User', userSchema);

module.exports = User;
