const mongoose = require('mongoose');

const schoolRequestSchema = new mongoose.Schema(
  {
    school_name: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    contact_name: {
      type: String,
      required: true,
    },
    contact_email: {
      type: String,
      required: true,
    },
    contact_phone: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('SchoolRequest', schoolRequestSchema);
