const fs = require("fs");
const { facultyService } = require("../../Services");

// create faculty data
const createFaculty = async (req, res) => {
  try {
    const reqBody = req.body;
    const facultyExists = await facultyService.getFacultyByName(
      reqBody.faculty_name
    );
    if (facultyExists) {
      throw new Error("Faculty already created by this name");
    }

    const faculty = await facultyService.createFaculty(reqBody);
    if (!faculty) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Faculty Create Successfully!",
      data: { faculty },
    });
  } catch (error) {
    res.status(400).json({ success: false, massage: error.message });
  }
};

// get faculty list
const getFacultyList = async (req, res) => {
  try {
    const { search, ...option } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { faculty_name: { $regex: search, $option: "i" } },
        { which_subject: { $regex: search, $option: "i" } },
        { total_class_number: { $regex: search, $option: "i" } },
        { total_student_in_their_class: { $regex: search, $option: "i" } },
      ];
    }

    const getList = await facultyService.getFacultyList(filter, option);
    res.status(200).json({
      success: true,
      message: "Get Faculty List Successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ Success: false, message: error.message });
  }
};

// get faculty details by id
const getFacultyDetails = async (req, res) => {
  try {
    const getDetails = await facultyService.getFacultyById(req.params.facultyId);
    if (!getDetails) {
      throw new Error("Faculty not found!!");
    }
    res.status(200).json({
      success: true,
      message: "Faculty details get Successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// faculty details update by id
const updateDetails = async (req, res) => {
  try {
    const facultyId = req.params.facultyId;
    const facultyExists = await facultyService.getFacultyById(facultyId);
    if (!facultyExists) {
      throw new Error("Faculty not found!!");
    }
    await facultyService.updateDetails(facultyId, req.body);

    res
      .status(200)
      .json({ success: true, message: "Faculty details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete Faculty Data
const deleteFaculty = async (req, res) => {
  try {
    const facultyId = req.params.studentId;
    const facultyExists = await facultyService.getFacultyById(facultyId);
    if (!facultyExists) {
      throw new Error("Faculty not found!!");
    }

    await facultyService.deleteFaculty(facultyId);

    res.status(200).json({
      success: true,
      message: "Faculty delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createFaculty,
  getFacultyList,
  getFacultyDetails,
  updateDetails,
  deleteFaculty,
};
