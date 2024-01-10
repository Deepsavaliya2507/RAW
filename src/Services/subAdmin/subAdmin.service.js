const { subAdmin } = require("../../Models");

// create subAdmin
const createsubAdmin = async (reqBody) => {
  return subAdmin.create(reqBody);
};

// get subADmin list
const getsubAdminList = async (filter, option) => {
  return subAdmin.find();
};

// get subAdmin by email
const getsubAdminByEmail = async (email) => {
  return subAdmin.findOne({ email });
};

// get subAdmin details by id
const getsubAdminById = async (subAdminId) => {
  return subAdmin.findById(subAdminId);
};

// subAdmin details update by id
const updateDetails = async (subAdminId, updateBody) => {
  return subAdmin.findByIdAndUpdate(subAdminId, { $set: updateBody });
};

// delete subAdmin
const deletesubAdmin = async (subAdminId) => {
  return subAdmin.findByIdAndUpdate(subADminId);
};

module.exports = {
  createsubAdmin,
  getsubAdminList,
  getsubAdminByEmail,
  getsubAdminById,
  updateDetails,
  deletesubAdmin,
};
