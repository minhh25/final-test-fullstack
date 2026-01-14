import mongoose from "mongoose";

const degreeSchema = new mongoose.Schema({
    type: { type: String, required: true },
    school: { type: String, required: true },
    major: { type: String, required: true },
    year: { type: Number, required: true },
    isGraduated: { type: Boolean, required: true }
})


const teacherSchema = new mongoose.Schema({
    userId : { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    isActive: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
    code: { type: String,  unique: true },
    startDate: { type: Date },
    endDate: { type: Date, required: false },
    teacherPositionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TeacherPosition',
        required: true
    },
    degrees: [degreeSchema]
})

const teacherModel = mongoose.model('Teacher', teacherSchema);

export default teacherModel;