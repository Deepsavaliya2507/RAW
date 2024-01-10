const { Course } = require("../../Models");

/**
 * Create course
 * @param {object} reqBody
 * @returns {Promise<course>}
 */
const createCourse = async (reqBody) => {
  return Course.create(reqBody);
};

/**
 * Get course list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<course>}
 */
const getCourseList = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return Course.find(filter).skip(skip).limit(options.limit).select("-password");
};

/**
 * Get course by first_name
 * @param {string} first_name
 * @returns {Promise<course>}
 */
const getCourseByName = async (first_name) => {
  return Course.findOne({ first_name });
};

/**
 * Get course details by id
 * @param {ObjectId} courseId
 * @returns {Promise<course>}
 */
const getCourseById = async (courseId) => {
  return Course.findById(courseId);
};

/**
 * course details update by id
 * @param {ObjectId} courseId
 * @param {object} updateBody
 * @returns {Promise<course>}
 */
const updateDetails = async (courseId, updateBody) => {
  return Course.findByIdAndUpdate(courseId, { $set: updateBody });
};

/**
 * Delete course
 * @param {ObjectId} courseId
 * @returns {Promise<course>}
 */
const deleteCourse = async (courseId) => {
  return Course.findByIdAndDelete(courseId);
};

module.exports = {
  createCourse,
  getCourseList,
  getCourseById,
  updateDetails,
  getCourseByName,
  deleteCourse,
};
