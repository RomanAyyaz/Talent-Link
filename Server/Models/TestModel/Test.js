const mongoose = require('mongoose');

const testAttemptSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  correctAnswers: Number,
  wrongAnswers: Number,
  isDisqualified: Boolean,
  startTime: Date,
  endTime: Date
});

const Test = mongoose.model('TestAttempt', testAttemptSchema);

module.exports = Test
