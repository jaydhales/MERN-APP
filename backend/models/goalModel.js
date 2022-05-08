const { Schema, default: mongoose } = require('mongoose');

const goalSchema = new Schema(
  {
    text: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Goal', goalSchema);
