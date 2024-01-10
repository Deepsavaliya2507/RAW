const mongoose = require("mongoose");

const studentsSchema = new mongoose.Schema(
  {
    sur_name: {
      type: String,
      trim: true,
    },
    middle_name: {
      type: String,
      trim: true,
    },
    father_name: {
      type: String,
      trim: true,
    },
    father_mobile_number: {
      type: Number,
      trim: true,
    },
    course: {
      type: mongoose.Types.ObjectId,
      ref: "course",
    },
    // fees: {
    //   type: Number,
    //   trim: true,
    // },
    join_date: {
      type: Date,
      trim: true,
    },
    house_flat_number: {
      type: String,
      trim: true,
    },
    building_name: {
      type: String,
      trim: true,
    },
    land_mark: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      trim: true,
    },
    state: {
      type: String,
      trim: true,
    },
    zip_code: {
      type: Number,
      trim: true,
    },
    country: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Students = mongoose.model("student", studentsSchema);
module.exports = Students;
