const express = require("express");
const { adminValidation } = require("../../../Validations");
const { adminController } = require("../../../Controllers");
const validate = require("../../../Middlewares/validate");

const router = express.Router();

// create admin
router.post(
  "/create-admin",
  validate(adminValidation.createAdmin),
  adminController.createAdmin
);

// get admin list
router.get(
  "/list",
  validate(adminValidation.getAdminList),
  adminController.getAdminList
);

// get admin details by id
router.get(
  "/get-details/:adminId",
  validate(adminValidation.getDetails),
  adminController.getAdminDetails
);

// admin details update by id
router.put(
  "/update-details/:adminId",
  validate(adminValidation.updateDetails),
  adminController.updateDetails
);

// delete admin
router.delete(
  "/delete-admin/:adminId",
  validate(adminValidation.getDetails),
  adminController.deleteAdmin
);

module.exports = router;