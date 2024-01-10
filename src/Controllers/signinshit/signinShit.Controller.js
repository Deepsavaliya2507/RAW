const fs = require("fs");
const { SignInShitService } = require("../../Services");

// create SignInShit data
const createSignInShit = async (req, res) => {
  try {
    const reqBody = req.body;
    const SignInShitExists = await SignInShitService.getSignInShitByName(
      reqBody.SignInShit_name
    );
    if (SignInShitExists) {
      throw new Error("SignInShit already create by this name!");
    }
    const SignInShit = await SignInShitService.createSignInShit(reqBody);
    if (!SignInShit) {
      throw new Error("Something went wrong, please try again or later!!");
    }
    res.status(200).json({
      success: true,
      message: "SignInShit create successfully!",
      data: { SignInShit },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//  get SignInShit list
const getSignInShitList = async (req, res) => {
  try {
    const { search, ...option } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { SignInShit_name: { $regex: search, $option: "i" } },
        { email: { $regex: search, $option: "i" } },
        { password: { $regex: search, $option: "i" } },
        { mobile_number: { $regex: search, $option: "i" } },
      ];
    }

    const getList = await SignInShitService.getSignInShitList(filter, option);
    res.status(200).json({
      success: true,
      message: "Get SignInShit list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// get SignInShit details by id
const getSignInShitDetails = async (req, res) => {
  try {
    const getDetails = await SignInShitService.getSignInShitById(
      req.params.SignInShitId
    );
    if (!getDetails) {
      throw new Error("SignInShit not Found!");
    }
    res.status(200).json({
      success: true,
      message: "SignInShit details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// SignInShit details update by id
const updateDetails = async (req, res) => {
  try {
    const SignInShitId = req.params.SignInShitId;
    const SignInShitExists = await SignInShitService.getSignInShitById(
      SignInShitId
    );
    if (!SignInShitExists) {
      throw new Error("SignInShit not found!");
    }
    await SignInShitService.updateDetails(SignInShitId, req.body);
    res.status(200).json({
      success: false,
      message: "SignInShit details update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// delete sub Admin data
const deleteSignInShit = async (req, res) => {
  try {
    const SignInShitId = req.params.SignInShitId;
    const SignInShitExists = await SignInShitService.getSignInShitById(
      SignInShitId
    );
    if (!SignInShitExists) {
      throw new Error("SignInShit delete successfully!");
    }

    await SignInShitService.deleteSignInShit(SignInShitId);
    res
      .status(200)
      .json({ success: true, message: "SignInShit delete successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createSignInShit,
  getSignInShitList,
  getSignInShitDetails,
  updateDetails,
  deleteSignInShit,
};
