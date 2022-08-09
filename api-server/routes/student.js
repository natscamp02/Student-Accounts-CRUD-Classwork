const express = require("express");
const {getAllStudents,createStudent,getStudentByID,updateStudent,deleteStudent,} = require("../controllers/students");

const router = express.Router();

router.route('/:id').get(getStudentByID).put(updateStudent).delete(deleteStudent);
router.route('/').get(getAllStudents).post(createStudent);

module.exports = router;
