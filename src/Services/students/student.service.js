const { Student } = require("../../Models");

// Create student
const createStudent = async (reqBody) => {
  return Student.create(reqBody);
};

// Get student list
const getStudentList = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return Student.find(filter)
    .skip(skip)
    .limit(options.limit)
    .select("-password");
};

// Get student by first_name
const getStudentByName = async (first_name) => {
  return Student.findOne({ first_name });
};

// Get student details by id
const getStudentById = async (studentId) => {
  return Student.findById(studentId);
};

// student details update by id
const updateDetails = async (studentId, updateBody) => {
  return Student.findByIdAndUpdate(studentId, { $set: updateBody });
};

// Delete student
const deleteStudent = async (studentId) => {
  return Student.findByIdAndDelete(studentId);
};

module.exports = {
  createStudent,
  getStudentList,
  getStudentById,
  updateDetails,
  getStudentByName,
  deleteStudent,
};
