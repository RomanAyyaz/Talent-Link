const mongoose = require('mongoose')

const notificationSchema = new mongoose.Schema(
  {
    recipientId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Company',     },
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', 
    },
    type: {
      type: String,
      required: true,
      enum: ['job_application', 'interview_schedule', 'course_recommendation', 'general'],
    },
    message: {
      type: String,
      required: true,
    },
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Job',
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification