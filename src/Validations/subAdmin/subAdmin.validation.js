const Joi = require("joi");

// create subADmin data
const createsubAdmin = {
  body: Joi.object().keys({
    subadmin_name: Joi.string().required().trim(),
    email: Joi.string().required().trim(),
    password: Joi.string().required().trim(),
    mobile_number: Joi.string().required().trim(),
  }),
};

// get subadmin list
const getsubAdminList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

// get subAdmindetails by id
const getDetails = {
  params: Joi.object().keys({
    subAdminId: Joi.string().required().trim(),
  }),
};

// subAdmin details update by id
const updateDetails = {
  params: Joi.object().keys({
    subAdminId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    subadmin_name: Joi.string().required().trim(),
    email: Joi.string().required().trim(),
    password: Joi.string().required().trim(),
    mobile_number: Joi.string().required().trim(),
  }),
};

module.exports = {
  createsubAdmin,
  getsubAdminList,
  getDetails,
  updateDetails,
};
