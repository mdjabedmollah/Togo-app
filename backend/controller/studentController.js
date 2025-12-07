import { StudentInfo } from "../models/studentModels.js";

export const Create_student = async (req, res) => {
  try {
    const { name, age, department, cgpa } = req.body;
    if (!name || !age || !department || !cgpa) {
      return res.status(400).json({
        success: false,
        message: "All field are required",
      });
    }

    const newStudent = new StudentInfo({
      name,
      age,
      department,
      cgpa,
    });
    await newStudent.save();
    return res.status(201).json({
      success: true,
      newStudent,
    });
  } catch (error) {
    console.log("create student info", ErrorEvent);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const GetAllStudents = async (req, res) => {
  try {
    const studest = await StudentInfo.find();
    if (!studest) {
      return res.status(400).json({
        success: false,
        message: "Studnet not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "All student data",
      studest,
    });
  } catch (error) {
    console.log("all studend data error ", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const singleStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await StudentInfo.findById(id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Single student data",
      data: student,
    });
  } catch (error) {
    console.log("Single student error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const upDateStudent = async (req, res) => {
  try {
    const student = await StudentInfo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Update successfully",
      student,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const DeleteStudent = async (req, res) => {
  try {
    const student = await StudentInfo.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Student deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const filterByDepartment = async (req, res) => {
  try {
    const { department } = req.params;

    const students = await StudentInfo.find({
      department: { $regex: new RegExp(`^${department}$`, "i") },
    });

    if (students.length === 0) {
      return res.status(200).json({
        success: true,
        message: "No students found for this department",
        students: [],
      });
    }

    res.status(200).json({
      success: true,
      message: "Filtered students",
      students,
    });
  } catch (error) {
    console.log("Error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
export  const sortCGPA =async(req,res)=>{
  try {
    const student = await StudentInfo.find().sort({cgpa:-1})
    if(!student){
       return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    return res.status(200).json({
      success:true,
      student
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
}

