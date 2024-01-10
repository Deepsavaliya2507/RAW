const fs = require("fs");
const { courseService } = require("../../Services");

// create course data
const createCourse = async (req, res) => {
  try {
    const reqBody = req.body;
    const courseExists = await courseService.getCourseByName(
      reqBody.sur_name
    );
    if (courseExists) {
      throw new Error("course already created by this name");
    }

    const course = await courseService.createCourse(reqBody);
    if (!course) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "course create successfully!",
      data: { course },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// get course list
const getCourseList = async (req, res) => {
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

    const getList = await courseService.getCourseList(filter, option);
    res.status(200).json({
      success: true,
      message: "Get course list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// get course details by id
const getCourseDetails = async (req, res) => {
  try {
    const getDetails = await userService.getCourseById(req.params.courseId);
    if (!getDetails) {
      throw new Error("course not found!");
    }
    res.status(200).json({
      success: true,
      message: "course details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//  course details update by id
const updateDetails = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const courseExists = await courseService.getCourseById(courseId);
    if (!courseExists) {
      throw new Error("course not found!");
    }
    await courseService.updateDetails(courseId, req.body);

    res
      .status(200)
      .json({ success: true, message: "course details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete course
const deleteCourse = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const courseExists = await courseService.getCourseById(courseId);
    if (!courseExists) {
      throw new Error("course not found!");
    }

    await courseService.deleteCourse(courseId);

    res.status(200).json({
      success: true,
      message: "course delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createCourse,
  getCourseList,
  getCourseDetails,
  updateDetails,
  deleteCourse,
}