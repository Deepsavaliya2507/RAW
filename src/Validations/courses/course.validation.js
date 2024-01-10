const Joi = require("joi");

// create course
const createCourse = {
  body: Joi.object().keys({
    course_field: Joi.string().required().trim(),
    course_name: Joi.string().required().trim(),
    course_fee: Joi.number().required().integer(),
    course_time_length: Joi.string().required().trim(),
  }),
};

// get course list
const getCourseList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

// get course details by id
const getDetails = {
  params: Joi.object().keys({
    courseId: Joi.string().required().trim(),
  }),
};

// course details update by id
const updateDetails = {
  params: Joi.object().keys({
    courseId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    course_field: Joi.string().trim(),
    course_name: Joi.string().trim(),
    course_fee: Joi.number().integer(),
    course_time_length: Joi.string().trim(),
  }),
};

module.exports = {
  createCourse,
  getCourseList,
  getDetails,
  updateDetails,
};
