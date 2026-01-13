import Router from "express";
import { getListTeachers, getListTeachersBy10 } from "../controllers/teacher.js";
import { createTeacherPosition, getListTeacherPositions } from "../controllers/teacherPosition.js";

const RootRouter = Router();

RootRouter.get("/", (req, res) => {res.send("Hello World");});
RootRouter.get("/teachers",getListTeachers);
RootRouter.get("/teachers10",getListTeachersBy10);

RootRouter.get("/teacher-positions", getListTeacherPositions);
RootRouter.post("/teacher-positions", createTeacherPosition);


export default RootRouter;