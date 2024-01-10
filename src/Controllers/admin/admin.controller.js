const fs = require("fs");
const { adminService } = require("../../Services");

// create admin data
const createAdmin = async (req, res) => {
  try {
    const reqBody = req.body;
    const adminExists = await adminService.getAdminByName(reqBody.admin_name);
    if (adminExists) {
      throw new Error("Admin already create by this name");
    }

    const admin = await adminService.createAdmin(reqBody);
    if (!admin) {
      throw new Error("Something want wrong, please try again or later!!");
    }
    res.status(200).json({
      success: true,
      message: "Admin create successfully!!",
      data: { admin },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// get admin list
const getAdminList = async (req, res) => {
  try {
    const { search, ...option } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { admin_name: { $regex: search, $option: "i" } },
        { email: { $regex: search, $option: "i" } },
        { password: { $regex: search, $option: "i" } },
        { mobile_number: { $regex: search, $option: "i" } },
      ];
    }

    const getList = await adminService.getAdminList(filter, option);
    res.status(200).json({
      success: true,
      message: "Get admin list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// get admin details by id
const getAdminDetails = async (req, res) => {
  try {
    const getDetails = await adminService.getAdminById(req.params.adminId);
    if (!getDetails) {
      throw new Error("Admin not Found!");
    }
    res.status(200).json({
      success: true,
      message: "Admin details get successfully!!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// admin details update by id
const updateDetails = async (req, res) => {
  try {
    const adminId = req.params.adminId;
    const adminExists = await adminService.getAdminById(adminId);
    if (!adminExists) {
      throw new Error("Admin not found!");
    }
    await adminService.updateDetails(adminId, req.body);
    res
      .status(200)
      .json({ success: false, message: "Admin details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// delete admin
const deleteAdmin = async (req, res) => {
  try {
    const adminId = req.params.adminId;
    const adminExists = await adminService.getAdminById(adminId);
    if (!adminExists) {
      throw new Error("Admin delete successfully!");
    }

    await adminService.deleteAdmin(adminId);
    res.status(200).json({
      success: true,
      message: "Admin delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createAdmin,
  getAdminList,
  getAdminDetails,
  updateDetails,
  deleteAdmin,
};
