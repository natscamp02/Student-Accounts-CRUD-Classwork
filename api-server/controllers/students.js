const Student = require("../models/student");
const { catchAsync } = require("../utils");

exports.getAllStudents = catchAsync(async (req, res, next) => {
    const students = await Student.find();

    res.status(200).json({
        status: "success",
        results:students.length,
        data: students,
    });
});

exports.getStudentByID = catchAsync(async (req, res, next) => {
    const student = await Student.findById(req.params.id);

    if (!student) throw new Error("No student found with id " + req.params.id);

    res.status(200).json({
        status: "success",
        data: student,
    });
});

exports.createStudent = catchAsync(async (req, res, next) => {
    // Get data from user
    const data = {
        name: req.body.name,
        email: req.body.email,
        cohort: req.body.cohort,
        phoneNumber: +req.body.phoneNumber,
    };

    // Create new student
    const newStudent = await Student.create(data);

    // Send response
    res.status(201).json({
        status: "success",
        data: newStudent,
    });
});

exports.updateStudent = catchAsync(async (req, res, next) => {
    // Get data from user
    const data = {
        name: req.body.name,
        email: req.body.email,
        cohort: req.body.cohort,
        phoneNumber: +req.body.phoneNumber,
    };

    // Get student and update student data
    const updatedStudent = await Student.findByIdAndUpdate(
        req.params.id,
        data,
        { new: true }
    );

    // Send response
    res.status(200).json({
        status: "success",
        data: updatedStudent,
    });
});

exports.deleteStudent = catchAsync(async (req, res, next) => {
    // Find student and delete data
    await Student.findByIdAndDelete(req.params.id);

    // Send response
    res.status(204).json({
        status: "success",
        data: null,
    });
});
