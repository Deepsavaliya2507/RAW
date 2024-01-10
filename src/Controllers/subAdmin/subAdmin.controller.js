const fs = require("fs");
const { subAdminService } = require("../../Services");

// create subAdmin data
const createsubAdmin = async (req, res) => {
  try {
    const reqBody = req.body;
    const subAdminExists = await subAdminService.getsubAdminByName(
      reqBody.subAdmin_name
    );
    if (subAdminExists) {
      throw new Error("subAdmin already create by this name!");
    }
    const subAdmin = await subAdminService.createsubAdmin(reqBody);
    if (!subAdmin) {
      throw new Error("Something went wrong, please try again or later!!");
    }
    res.status(200).json({
      success: true,
      message: "SubAdmin create successfully!",
      data: { subAdmin },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//  get subAdmin list
const getsubAdminList = async (req, res) => {
  try {
    const { search, ...option } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { subadmin_name: { $regex: search, $option: "i" } },
        { email: { $regex: search, $option: "i" } },
        { password: { $regex: search, $option: "i" } },
        { mobile_number: { $regex: search, $option: "i" } },
      ];
    }

    const getList = await subAdminService.getsubAdminList(filter, option);
    res.status(200).json({
      success: true,
      message: "Get subAdmin list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// get subAdmin details by id
const getsubAdminDetails = async (req, res) => {
  try {
    const getDetails = await subAdminService.getsubAdminById(
      req.params.subAdminId
    );
    if (!getDetails) {
      throw new Error("subAdmin not Found!");
    }
    res.status(200).json({
      success: true,
      message: "subAdmin details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// subAdmin details update by id
const updateDetails = async (req, res) => {
  try {
    const subAdminId = req.params.subAdminId;
    const subAdminExists = await subAdminService.getsubAdminById(subAdminId);
    if (!subAdminExists) {
      throw new Error("subAdmin not found!");
    }
    await subAdminService.updateDetails(subAdminId, req.body);
    res.status(200).json({
      success: false,
      message: "subAdmin details update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// delete sub Admin data
const deletesubAdmin = async (req, res) => {
  try {
    const subAdminId = req.params.subAdminId;
    const subAdminExists = await subAdminService.getsubAdminById(subAdminId);
    if (!subAdminExists) {
      throw new Error("subAdmin delete successfully!");
    }

    await subAdminService.deletesubAdmin(subAdminId);
    res
      .status(200)
      .json({ success: true, message: "subAdmin delete successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createsubAdmin,
  getsubAdminList,
  getsubAdminDetails,
  updateDetails,
  deletesubAdmin,
};
