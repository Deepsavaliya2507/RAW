const { Admin } = require("../../Models");

// create admin
const createAdmin = async (reqBody) => {
  return Admin.create(reqBody);
};

// get admin list
const getAdminList = async (filter, option) => {
  const skip = (Number(option.page || 1) - 1) * Number(option.limit || 10);

  return Admin.find(filter).skip(skip).limit(option.limit.select("-password"));
};

// get admin by email
const getAdminByEmail = async (email) => {
  return Admin.findOne({ email });
};

// get admin details by id
const getAdminById = async (adminId) => {
  return Admin.findById(adminId);
};

// admin details update by id
const updateDetails = async (adminId, updateBody) => {
  return Admin.findByIdAndUpdate(adminId, { $set: updateBody });
};

// delete admin
const deleteAdmin = async (adminId) => {
  return Admin.findByIdAndDelete(adminId);
};

module.exports = {
  createAdmin,
  getAdminList,
  getAdminByEmail,
  getAdminById,
  updateDetails,
  deleteAdmin,
};
