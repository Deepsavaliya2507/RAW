const express = require("express");
const { courseValidation } = require("../../../Validations");
const { courseController } = require("../../../Controllers");
const validate = require("../../../Middlewares/validate");
// const auth = require("../../middlewares/auth");

const router = express.Router();

/** create course */
router.post(
  "/create-course",
  // auth(),
  validate(courseValidation.createCourse),
  courseController.createCourse
);

/** Get course list */
router.get(
  "/list",
  validate(courseValidation.getCourseList),
  courseController.getCourseList
);

/** Get course details by id */
router.get(
  "/get-details/:courseId",
  validate(courseValidation.getDetails),
  courseController.getCourseDetails
);

/** course details update by id */
router.put(
  "/update-details/:courseId",
  validate(courseValidation.updateDetails),
  courseController.updateDetails
);

/** Delete course */
router.delete(
  "/delete-course/:courseId",
  validate(courseValidation.getDetails),
  courseController.deleteCourse
);

module.exports = router;
