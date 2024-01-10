const Joi = require("joi");

// create faculty data
const createFaculty = {
  body: Joi.object().keys({
    faculty_name: Joi.string().required().trim(),
    which_subject: Joi.string().required().trim(),
    total_class_number: Joi.number().integer().required(),
    total_student_in_their_class: Joi.number().integer().required(),
  }),
};

// get faculty list
const getFacultyList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

// get faculty details by id
const getDetails = {
  params: Joi.object().keys({
    facultyId: Joi.string().required().trim(),
  }),
};

// faculty details update by id
const updateDetails = {
  params: Joi.object().keys({
    facultyId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    faculty_name: Joi.string().trim(),
    which_subject: Joi.string().trim(),
    total_class_number: Joi.number().integer().required(),
    total_student_in_their_class: Joi.number().integer().required(),
  }),
};

module.exports = {
  createFaculty,
  getFacultyList,
  getDetails,
  updateDetails,
};
