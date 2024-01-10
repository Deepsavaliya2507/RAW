const express = require("express");
const { imageValidation } = require("../../../validations");
const { imageController } = require("../../../Controllers");
const validate = require("../../../Middlewares/validate");
const { upload } = require("../../../Middlewares/upload");

const router = express.Router();

/** create image */
router.post(
  "/create-image",
  upload.single("image_image"),
  validate(imageValidation.createImage),
  imageController.createImage
);

/** Get image list */
router.get(
  "/list",
  validate(imageValidation.getImageList),
  imageController.getImageList
);

/** Get image details by id */
router.get(
  "/get-details/:imageId",
  validate(imageValidation.getDetails),
  imageController.getImageDetails
);

/** image details update by id */
router.put(
  "/update-details/:imageId",
  validate(imageValidation.updateDetails),
  imageController.updateDetails
);

/** Delete image */
router.delete(
  "/delete-image/:imageId",
  validate(imageValidation.getDetails),
  imageController.deleteImage
);

module.exports = router;
