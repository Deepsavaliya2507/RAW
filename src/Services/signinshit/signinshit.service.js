const { SignInShit } = require("../../Models");

/**
 * Create SignInShit
 * @param {object} reqBody
 * @returns {Promise<SignInShit>}
 */
const createSignInShit = async (reqBody) => {
  return SignInShit.create(reqBody);
};

/**
 * Get SignInShit list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<SignInShit>}
 */
const getSignInShitList = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return SignInShit.find(filter).skip(skip).limit(options.limit).select("-password");
};

/**
 * Get SignInShit by first_name
 * @param {string} first_name
 * @returns {Promise<SignInShit>}
 */
const getSignInShitByName = async (first_name) => {
  return SignInShit.findOne({ first_name });
};

/**
 * Get SignInShit details by id
 * @param {ObjectId} SignInShitId
 * @returns {Promise<SignInShit>}
 */
const getSignInShitById = async (SignInShitId) => {
  return SignInShit.findById(SignInShitId);
};

/**
 * SignInShit details update by id
 * @param {ObjectId} SignInShitId
 * @param {object} updateBody
 * @returns {Promise<SignInShit>}
 */
const updateDetails = async (SignInShitId, updateBody) => {
  return SignInShit.findByIdAndUpdate(SignInShitId, { $set: updateBody });
};

/**
 * Delete SignInShit
 * @param {ObjectId} SignInShitId
 * @returns {Promise<SignInShit>}
 */
const deleteSignInShit = async (SignInShitId) => {
  return SignInShit.findByIdAndDelete(SignInShitId);
};

module.exports = {
  createSignInShit,
  getSignInShitList,
  getSignInShitById,
  updateDetails,
  getSignInShitByName,
  deleteSignInShit,
};
