import teacherModel from "../models/teacher.js";

export const getListTeachers = async (req,res) => {
    try {
        const listTeachers = await teacherModel.find();
        res.send({
            message: "Get list teachers successfully",
            data: listTeachers
        })
    } catch (error) {
        res.status(401).json({message: error.message});
    }
}

export const getListTeachersBy10 = async (req,res) => {
    try {
        const {page , limit = 10} = req.query;
        const skip = (page - 1) * limit;
        const listTeachers = await teacherModel.find()
        .skip(Number(skip))
        .limit(Number(limit));
        res.send({
            message: "Get list teachers by 10 successfully",
            data: listTeachers
        })
    } catch (error) {
        res.status(401).json({message: error.message});
    }
}

export const createTeacher = async (req,res) => {
    try {
        
    } catch (error) {
        res.status(401).json({message: error.message});
    }
}