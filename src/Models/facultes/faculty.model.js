const mongoose = require("mongoose");

const facultySchema = new mongoose.Schema(
  {
    faculty_name: {
      type: String,
      trim: true,
    },
    which_subject: {
      type: String,
      trim: true,
    },
    total_class_number: {
      type: Number,
      trim: true,
    },
    total_student_in_their_class: {
      type: Number,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Faculty = mongoose.model("faculty", facultySchema);
module.exports = Faculty;