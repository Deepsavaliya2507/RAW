const mongoose = require("mongoose");

const subAdminSchema = new mongoose.Schema(
  {
    subadmin_name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    },
    mobile_number: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const subAdmin = mongoose.model("subAdmin", subAdminSchema);
module.exports = subAdmin;
