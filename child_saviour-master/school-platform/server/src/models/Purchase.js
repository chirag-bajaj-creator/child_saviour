const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema(
  {
    school: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'School',
      required: true,
    },
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Teacher',
      required: true,
    },
    module: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Module',
      required: true,
    },
    module_name: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
    },
    status: {
      type: String,
      enum: ['pending', 'active'],
      default: 'pending',
    },
    razorpay_order_id: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Purchase', purchaseSchema);
