const Joi = require("joi");

// create SignInShit data
const createSignInShit = {
  body: Joi.object().keys({
    topic_number: Joi.number().integer().required(),
    topic_name: Joi.string().required().trim(),
    grade: Joi.string().required().trim(),
  }),
};

// get SignInShit list
const getSignInShitList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

// get SignInShit details by id
const getDetails = {
  params: Joi.object().keys({
    SignInShitId: Joi.string().required().trim(),
  }),
};

// SignInShit details update by id
const updateDetails = {
  params: Joi.object().keys({
    SignInShitId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    topic_number: Joi.number().integer(),
    topic_name: Joi.string().required().trim(),
    grade: Joi.string().required().trim(),
  }),
};

module.exports = {
  createSignInShit,
  getSignInShitList,
  getDetails,
  updateDetails,
};
