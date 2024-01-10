const Joi = require("joi");

// create admin data
const createAdmin = {
  body: Joi.object().keys({
    admin_name: Joi.string().required().trim(),
    email: Joi.string().required().trim(),
    password: Joi.string().required().trim(),
    mobile_number: Joi.string().required().trim(),
  }),
};

// get admin list
const getAdminList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

// get admin details by id
const getDetails = {
  params: Joi.object().keys({
    adminId: Joi.string().required().trim(),
  }),
};

// admin details update by id
const updateDetails = {
  params: Joi.object().keys({
    adminId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    admin_name: Joi.string().required().trim(),
    email: Joi.string().required().trim(),
    password: Joi.string().required().trim(),
    mobile_number: Joi.string().required().trim(),
  }),
};

module.exports = {
  createAdmin,
  getAdminList,
  getDetails,
  updateDetails,
};
