const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema(
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
    subject: {
      type: String,
      required: true,
    },
    marks: {
      type: Number,
    },
    total_marks: {
      type: Number,
    },
    grade: {
      type: String,
    },
    exam_type: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Grade', gradeSchema);
