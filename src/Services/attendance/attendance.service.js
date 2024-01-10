const { Attendance } = require("../../Models");

/**
 * Create Attendance
 * @param {object} reqBody
 * @returns {Promise<Attendance>}
 */
const createAttendance = async (reqBody) => {
  return Attendance.create(reqBody);
};

/**
 * Get Attendance list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Attendance>}
 */
const getAttendanceList = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return Attendance.find(filter).skip(skip).limit(options.limit).select("-password");
};

/**
 * Get Attendance by first_name
 * @param {string} first_name
 * @returns {Promise<Attendance>}
 */
const getAttendanceByName = async (first_name) => {
  return Attendance.findOne({ first_name });
};

/**
 * Get Attendance details by id
 * @param {ObjectId} AttendanceId
 * @returns {Promise<Attendance>}
 */
const getAttendanceById = async (AttendanceId) => {
  return Attendance.findById(AttendanceId);
};

/**
 * Attendance details update by id
 * @param {ObjectId} AttendanceId
 * @param {object} updateBody
 * @returns {Promise<Attendance>}
 */
const updateDetails = async (AttendanceId, updateBody) => {
  return Attendance.findByIdAndUpdate(AttendanceId, { $set: updateBody });
};

/**
 * Delete Attendance
 * @param {ObjectId} AttendanceId
 * @returns {Promise<Attendance>}
 */
const deleteAttendance = async (AttendanceId) => {
  return Attendance.findByIdAndDelete(AttendanceId);
};

module.exports = {
  createAttendance,
  getAttendanceList,
  getAttendanceById,
  updateDetails,
  getAttendanceByName,
  deleteAttendance,
};
