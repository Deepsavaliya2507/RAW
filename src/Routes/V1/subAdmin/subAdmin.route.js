const express = require("express");
const { subAdminValidation } = require("../../../Validations");
const { subAdminController } = require("../../../Controllers");
const validate = require("../../../Middlewares/validate");

const router = express.Router();

// create subAdmin
router.post(
  "/create-subAdmin",
  validate(subAdminValidation.createsubAdmin),
  subAdminController.createsubAdmin
);

// get subAdmin list
router.get(
  "/list",
  validate(subAdminValidation.getsubAdminList),
  subAdminController.getsubAdminList
);

// get subAdmin details by id
router.get(
  "/get-details/:subAdminId",
  validate(subAdminValidation.getDetails),
  subAdminController.getsubAdminDetails
);

// subAdmin details update by id
router.put(
  "/update-details/:subAdminId",
  validate(subAdminValidation.updateDetails),
  subAdminController.updateDetails
);

// delete subAdmin
router.delete(
  "/delete-subAdmin/:subAdminId",
  validate(subAdminValidation.getDetails),
  subAdminController.deletesubAdmin
);

module.exports = router;