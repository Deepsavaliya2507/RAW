const Joi = require("joi");

// create student data
const createStudent = {
  body: Joi.object().keys({
    sur_name: Joi.string().required().trim(),
    middle_name: Joi.string().required().trim(),
    father_name: Joi.string().required().trim(),
    father_mobile_number: Joi.number().required().integer(),
  }),
};

// get student list
const getStudentList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

// get student details by id
const getDetails = {
  params: Joi.object().keys({
    studentId: Joi.string().required().trim(),
  }),
};

// student details update by id
const updateDetails = {
  params: Joi.object().keys({
    studentId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    sur_name: Joi.string().trim(),
    middle_name: Joi.string().required().trim(),
    father_name: Joi.string().required().trim(),
    father_mobile_number: Joi.number().required().integer(),
  }),
};

module.exports = {
  createStudent,
  getStudentList,
  getDetails,
  updateDetails,
};
