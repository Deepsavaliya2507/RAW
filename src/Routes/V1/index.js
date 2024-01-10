const express = require("express");
const studentRoute = require("./students/student.route");
const courseRoute = require("./courses/course.route");
const facultyRoute = require("./facultes/faculty.route");
const adminRoute = require("./admin/admin.route");
const subAdminRoute = require("./subAdmin/subAdmin.route");
const signinshitRoute = require("./signinshit/signinshit.route");
const attendanceRoute = require("./attendance/attendance.route");
const imageRoute = require("./images/images.route");

const router = express.Router();

router.use("/student", studentRoute);
router.use("/course", courseRoute);
router.use("/faculty", facultyRoute);
router.use("/admin", adminRoute);
router.use("/subAdmin", subAdminRoute);
router.use("/signinshit", signinshitRoute);
router.use("/attendance", attendanceRoute);
router.use("/image", imageRoute);

module.exports = router;
