const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  winningNumbers: { type: [Number], required: true },  // Lista de números ganadores
  date: { type: Date, default: Date.now },             // Fecha del resultado
});

const Result = mongoose.model('Result', resultSchema);

module.exports = Result;
