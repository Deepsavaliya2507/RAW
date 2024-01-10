const express = require("express");
const { attendanceValidation } = require("../../../Validations");
const { attendanceController } = require("../../../Controllers");
const validate = require("../../../Middlewares/validate");
const router = express.Router();

/** create Attendance */
router.post(
  "/create-Attendance",
  validate(attendanceValidation.createAttendance),
  attendanceController.createAttendance
);

/** Get Attendance list */
router.get(
  "/list",
  validate(attendanceValidation.getAttendanceList),
  attendanceController.getAttendanceList
);

/** Get Attendance details by id */
router.get(
  "/get-details/:AttendanceId",
  validate(attendanceValidation.getDetails),
  attendanceController.getAttendanceDetails
);

/** Attendance details update by id */
router.put(
  "/update-details/:AttendanceId",
  validate(attendanceValidation.updateDetails),
  attendanceController.updateDetails
);

/** Delete Attendance */
router.delete(
  "/delete-Attendance/:AttendanceId",
  validate(attendanceValidation.getDetails),
  attendanceController.deleteAttendance
);

module.exports = router;
