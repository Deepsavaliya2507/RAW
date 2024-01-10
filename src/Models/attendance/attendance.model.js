const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Types.ObjectId,
      ref: "student",
    },
    attendance: {
      type: String,
      trim: true,
      enum: ["p", "P", "a", "A"],
    },
    date: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Attendance = mongoose.model("Attendance", AttendanceSchema);
module.exports = Attendance;
