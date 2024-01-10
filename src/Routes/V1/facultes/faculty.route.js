const express = require("express");
const { facultyValidation } = require("../../../Validations");
const { facultyController } = require("../../../Controllers");
const validate = require("../../../Middlewares/validate");

const router = express.Router();

// create faculty data
router.post(
    "/create-faculty",
    validate(facultyValidation.createFaculty),
    facultyController.createFaculty
);

// get faculty list
router.get(
    "/list",
    validate(facultyValidation.getStudentList),
    facultyController.getFacultyList
);

// faculty details by id
router.get(
    "/get-details/:facultyId",
    validate(facultyValidation.getDetails),
    facultyController.getFacultyDetails
);

// faculty details update  by id
router.put(
    "update-details/:facultyId",
    validate(facultyValidation.updateDetails),
    facultyController.updateDetails
);

// delete faculty
router.delete(
    "/delete-faculty/:facultyId",
    validate(facultyValidation.getDetails),
    facultyController.deleteFaculty
);

module.exports = router;