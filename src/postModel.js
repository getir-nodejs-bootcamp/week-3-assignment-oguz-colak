
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, min: 2 },
    user: { type: String, required: true, min: 2 },
    content: {
      type: String,
      required: true,
      max: 50000,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);
