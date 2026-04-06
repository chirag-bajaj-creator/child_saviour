const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
      required: true,
    },
    school: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'School',
      required: true,
    },
    type: {
      type: String,
      default: 'attendance_dispute',
    },
    date_of_dispute: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true,
      minlength: 20,
    },
    status: {
      type: String,
      enum: ['open', 'resolved'],
      default: 'open',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Issue', issueSchema);
