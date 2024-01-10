const { Faculty } = require("../../Models");

// create faculty
const createFaculty = async (reqBody) => {
  return Faculty.create(reqBody);
};

// get faculty list
const getFacultyList = async (filter, option) => {
  const skip = (Number(option.page || 1) - 1) * Number(option.limit || 10);

  return Faculty.find(filter).skip(skip).limit(option, limit).select("-password");
};

// get faculty by faculty_name
const getFacultyByName = async (faculty_name) => {
  return Faculty.findOne({ faculty_name });
};

// get faculty details by id
const getFacultyById = async (facultyId) => {
  return Faculty.findById(facultyId);
};

// faculty details update by id
const updateDetails = async (facultyId, updateBody) => {
  return Faculty.findByIdAndUpdate(facultyId, { $set: updateBody });
};

// delete faculty
const deleteFaculty = async (facultyId) => {
  return Faculty.findByIdAndDelete(facultyId);
};

module.exports = {
  createFaculty,
  getFacultyList,
  getFacultyByName,
  // getFacultyById,
  updateDetails,
  deleteFaculty,
};
