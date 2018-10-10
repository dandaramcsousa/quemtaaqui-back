/**
 * @swagger
 * resourcePath: /api/students
 * description: Student API
 */
 
const express = require("express");
const passport = require("passport");

const router = express.Router();
const {
    newStudent,
    updateStudent,
    getStudent,
    removeStudent,
    addClass
} = require("../../controllers/studentsController");

/**
 * @swagger
 * path: api/students
 * operations:
 *  - httpMethod: POST
 *    summary: add a student
 *    responseClass: Student
 *    nickname: newStudent
 */
router.post("/add", passport.authenticate("jwt", {session:false}), newStudent);

/**
 * @swagger
 * path: api/students
 * operations:
 *  - httpMethod: POST
 *    summary: update a student
 *    responseClass: Student
 *    nickname: updateStudent
 */
router.post("/update", passport.authenticate("jwt", {session:false}), updateStudent);

/**
 * @swagger
 * path: api/students
 * operations:
 *  - httpMethod: GET
 *    summary: get a student
 *    responseClass: Student
 *    nickname: getStudent
 */
router.get("/:studentid", getStudent);

/**
 * @swagger
 * path: api/students
 * operations:
 *  - httpMethod: DELETE
 *    summary: remove a student
 *    responseClass: Student
 *    nickname: removeStudent
 */
router.delete("/", passport.authenticate("jwt", {session:false}), removeStudent);

/**
 * @swagger
 * path: api/students
 * operations:
 *  - httpMethod: POST
 *    summary: add an class to a student
 *    responseClass: Student
 *    nickname: addClass
 */
router.post("/", passport.authenticate("jwt", {session:false}), addClass);


module.exports = router;