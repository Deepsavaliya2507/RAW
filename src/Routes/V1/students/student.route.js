const express = require("express");
const { studentValidation } = require("../../../Validations");
const { studentController } = require("../../../Controllers");
const validate = require("../../../Middlewares/validate");
// const auth = require("../../../middlewares/auth");

const router = express.Router();

/** create student */
router.post(
  "/create-student",
  validate(studentValidation.createStudent),
  studentController.createStudent
);

/** Get student list */
router.get(
  "/list",
  validate(studentValidation.getStudentList),
  studentController.getStudentList
);

/** Get student details by id */
router.get(
  "/get-details/:studentId",
  validate(studentValidation.getDetails),
  studentController.getStudentDetails
);

/** student details update by id */
router.put(
  "/update-details/:studentId",
  validate(studentValidation.updateDetails),
  studentController.updateDetails
);

/** Delete student */
router.delete(
  "/delete-student/:studentId",
  validate(studentValidation.getDetails),
  studentController.deleteStudent
);

module.exports = router;
