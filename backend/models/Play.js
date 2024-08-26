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
