const Joi = require("joi");

// create Attendance data
const createAttendance = {
  body: Joi.object().keys({
    attendance: Joi.string().required().trim(),
    date: Joi.string().required().trim(),
  }),
};

// get Attendance list
const getAttendanceList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

// get Attendance details by id
const getDetails = {
  params: Joi.object().keys({
    AttendanceId: Joi.string().required().trim(),
  }),
};

// Attendance details update by id
const updateDetails = {
  params: Joi.object().keys({
    AttendanceId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    attendance: Joi.string().required().trim(),
    date: Joi.string().required().trim(),
  }),
};

module.exports = {
  createAttendance,
  getAttendanceList,
  getDetails,
  updateDetails,
};
