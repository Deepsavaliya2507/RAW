const mongoose = require("mongoose");

const signInShitSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Types.ObjectId,
      ref: "student",
    },
    topic_number: {
      type: Number,
      trim: true,
    },
    topic_name: {
      type: String,
      trim: true,
    },
    grade: {
      type: String,
      trim: true,
      enum: ["a", "A", "b", "B", "c", "C", "d", "D"],
    },
    attendance: {
      type: mongoose.Types.ObjectId,
      ref: "Attendance",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const SignInShit = mongoose.model("SignInShit", signInShitSchema);
module.exports = SignInShit;
