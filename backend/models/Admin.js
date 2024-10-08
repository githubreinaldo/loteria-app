const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: true },  // Campo isAdmin para identificar administradores
  createdAt: { type: Date, default: Date.now },
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
