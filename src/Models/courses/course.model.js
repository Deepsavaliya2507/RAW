const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    course_field: {
      type: String,
      trim: true,
    },
    course_name: {
      type: String,
      trim: true,
    },
    course_fee: {
      type: Number,
      trim: true,
    },
    course_time_length: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Course = mongoose.model("course", courseSchema);
module.exports = Course;
