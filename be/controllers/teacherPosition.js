import teacherPositionModel from "../models/teacherPosition.js";
import crypto from "crypto";

export const getListTeacherPositions = async (req,res) => {
    try {
        const listTeacherPositions = await teacherPositionModel.find();
        res.send({
            message: "Get list teacher positions successfully",
            data: listTeacherPositions
        })
    } catch (error) {
        res.status(401).json({message: error.message});
    }
}

export const createTeacherPosition = async (req, res) => {
    try {
        const { name, code, des } = req.body;
        
        const newTeacherPosition = await teacherPositionModel.create({
            name,
            code,
            des
        });
        res.send({
            message: "Create teacher position successfully",
            data: newTeacherPosition
        });

    } catch (error) {
        res.status(401).json({message: error.message});
    }
}