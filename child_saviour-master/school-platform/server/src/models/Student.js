const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    school: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'School',
      required: true,
    },
    class: {
      type: String,
    },
    section: {
      type: String,
    },
    roll_number: {
      type: String,
    },
    parent_name: {
      type: String,
    },
    parent_mobile: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Student', studentSchema);
