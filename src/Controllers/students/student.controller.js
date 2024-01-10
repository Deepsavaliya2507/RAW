const fs = require("fs");
const { studentService } = require("../../Services");

// create student data
const createStudent = async (req, res) => {
  try {
    const reqBody = req.body;
    const studentExists = await studentService.getStudentByName(
      reqBody.middle_name
    );
    if (studentExists) {
      throw new Error("Student already created by this name");
    }

    const student = await studentService.createStudent(reqBody);
    if (!student) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Student create successfully!",
      data: { student },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// get student list
const getStudentList = async (req, res) => {
  try {
    const { search, ...option } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { sur_name: { $regex: search, $options: "i" } },
        { middle_name: { $regex: search, $options: "i" } },
        { father_name: { $regex: search, $option: "i" } },
        { father_mobile_number: { $regex: search, $option: "i" } },
      ];
    }

    const getList = await studentService.getStudentList(filter, option);
    res.status(200).json({
      success: true,
      message: "Get student list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// get student details by id
const getStudentDetails = async (req, res) => {
  try {
    const getDetails = await userService.getStudentById(req.params.studentId);
    if (!getDetails) {
      throw new Error("Student not found!");
    }
    res.status(200).json({
      success: true,
      message: "Student details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//  student details update by id
const updateDetails = async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const studentExists = await studentService.getStudentById(studentId);
    if (!studentExists) {
      throw new Error("Student not found!");
    }
    await studentService.updateDetails(studentId, req.body);

    res
      .status(200)
      .json({ success: true, message: "Student details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete Student
const deleteStudent = async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const studentExists = await studentService.getStudentById(studentId);
    if (!studentExists) {
      throw new Error("Student not found!");
    }

    await studentService.deleteStudent(studentId);

    res.status(200).json({
      success: true,
      message: "Student delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createStudent,
  getStudentList,
  getStudentDetails,
  updateDetails,
  deleteStudent,
}