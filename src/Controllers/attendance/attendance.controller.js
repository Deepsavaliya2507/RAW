const fs = require("fs");
const { AttendanceService } = require("../../Services");

// create Attendance data
const createAttendance = async (req, res) => {
  try {
    const reqBody = req.body;
    const AttendanceExists = await AttendanceService.getAttendanceByName(
      reqBody.Attendance_name
    );
    if (AttendanceExists) {
      throw new Error("Attendance already create by this name!");
    }
    const Attendance = await AttendanceService.createAttendance(reqBody);
    if (!Attendance) {
      throw new Error("Something went wrong, please try again or later!!");
    }
    res.status(200).json({
      success: true,
      message: "Attendance create successfully!",
      data: { Attendance },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//  get Attendance list
const getAttendanceList = async (req, res) => {
  try {
    const { search, ...option } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { Attendance_name: { $regex: search, $option: "i" } },
        { email: { $regex: search, $option: "i" } },
        { password: { $regex: search, $option: "i" } },
        { mobile_number: { $regex: search, $option: "i" } },
      ];
    }

    const getList = await AttendanceService.getAttendanceList(filter, option);
    res.status(200).json({
      success: true,
      message: "Get Attendance list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// get Attendance details by id
const getAttendanceDetails = async (req, res) => {
  try {
    const getDetails = await AttendanceService.getAttendanceById(
      req.params.AttendanceId
    );
    if (!getDetails) {
      throw new Error("Attendance not Found!");
    }
    res.status(200).json({
      success: true,
      message: "Attendance details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Attendance details update by id
const updateDetails = async (req, res) => {
  try {
    const AttendanceId = req.params.AttendanceId;
    const AttendanceExists = await AttendanceService.getAttendanceById(
      AttendanceId
    );
    if (!AttendanceExists) {
      throw new Error("Attendance not found!");
    }
    await AttendanceService.updateDetails(AttendanceId, req.body);
    res.status(200).json({
      success: false,
      message: "Attendance details update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// delete sub Admin data
const deleteAttendance = async (req, res) => {
  try {
    const AttendanceId = req.params.AttendanceId;
    const AttendanceExists = await AttendanceService.getAttendanceById(
      AttendanceId
    );
    if (!AttendanceExists) {
      throw new Error("Attendance delete successfully!");
    }

    await AttendanceService.deleteAttendance(AttendanceId);
    res
      .status(200)
      .json({ success: true, message: "Attendance delete successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createAttendance,
  getAttendanceList,
  getAttendanceDetails,
  updateDetails,
  deleteAttendance,
};
