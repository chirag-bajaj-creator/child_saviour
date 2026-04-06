const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema(
  {
    recipient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    recipient_role: {
      type: String,
      enum: ['student', 'teacher', 'admin', 'controller'],
    },
    message: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'general',
    },
    related_id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    is_read: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Notification', notificationSchema);
