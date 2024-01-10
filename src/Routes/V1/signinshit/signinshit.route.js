const express = require("express");
const { SignInShitValidation } = require("../../../Validations");
const { SignInShitController } = require("../../../Controllers");
const validate = require("../../../Middlewares/validate");
// const auth = require("../../../middlewares/auth");

const router = express.Router();

/** create SignInShit */
router.post(
  "/create-SignInShit",
  validate(SignInShitValidation.createSignInShit),
  SignInShitController.createSignInShit
);

/** Get SignInShit list */
router.get(
  "/list",
  validate(SignInShitValidation.getSignInShitList),
  SignInShitController.getSignInShitList
);

/** Get SignInShit details by id */
router.get(
  "/get-details/:SignInShitId",
  validate(SignInShitValidation.getDetails),
  SignInShitController.getSignInShitDetails
);

/** SignInShit details update by id */
router.put(
  "/update-details/:SignInShitId",
  validate(SignInShitValidation.updateDetails),
  SignInShitController.updateDetails
);

/** Delete SignInShit */
router.delete(
  "/delete-SignInShit/:SignInShitId",
  validate(SignInShitValidation.getDetails),
  SignInShitController.deleteSignInShit
);

module.exports = router;
