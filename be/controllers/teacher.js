import teacherModel from "../models/teacher.js";
import userModel from "../models/user.js";

export const getListTeachers = async (req, res) => {
  try {
    const listTeachers = await teacherModel
      .find()
      .populate('teacherPositionId', 'name') // Populate only the 'name' field of TeacherPosition
      .populate('userId', 'name email phoneNumber address'); // Populate fields from User
    res.send({
      message: "Get list teachers successfully",
      data: listTeachers,
    });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export const getListTeachersBy10 = async (req, res) => {
  try {
    const { page, limit = 10 } = req.query;
    const skip = (page - 1) * limit;
    const listTeachers = await teacherModel
      .find()
      .skip(Number(skip))
      .limit(Number(limit))
      .populate('teacherPositionId', 'name') // Populate only the 'name' field of TeacherPosition
      .populate('userId', 'name email phoneNumber address'); // Populate fields from User
    res.send({
      message: "Get list teachers by 10 successfully",
      data: listTeachers,
    });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export const createTeacher = async (req, res) => {
  try {
    const { name, email, phone, address, identity, dob, role, ...teacherData } = req.body;
    const code = crypto.randomUUID();
    
    const newUser = await userModel.create({
      name,
      email,
      phoneNumber: phone,
      address,
      code,
      identity,
      dob,
      role: "teacher",
    });

    
    const newTeacher = await teacherModel.create({
      ...teacherData,
      userId: newUser._id,
    });

    res.send({
      message: "Create teacher successfully",
      data: newTeacher,
    });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};