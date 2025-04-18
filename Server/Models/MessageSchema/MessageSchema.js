const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  senderType: {
    type: String,
    enum: ['user', 'company'],
    required: true,
  },
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: 'senderType',
  },
  receiverType: {
    type: String,
    enum: ['user', 'company'],
    required: true,
  },
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: 'receiverType',
  },
  message: {
    type: String,
    required: true,
  },
  sentAt: {
    type: Date,
    default: Date.now,
  },
  read: {
    type: Boolean,
    default: false,
  }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
