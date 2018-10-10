/**
 * @swagger
 * resourcePath: /api/teachers
 * description: Teacher API
 */

const express = require("express");
const passport = require("passport");

const router = express.Router();

const {
    newTeacher,
    updateTeacher,
    getTeacher,
    removeTeacher,
    addClass
} = require("../../controllers/studentsController");

/**
 * @swagger
 * path: api/teachers
 * operations:
 *  - httpMethod: POST
 *    summary: add a teacher
 *    responseClass: Teacher
 *    nickname: newTeacher
 */
router.post("/add", passport.authenticate("jwt", {session:false}), newTeacher);

/**
 * @swagger
 * path: api/teachers
 * operations:
 *  - httpMethod: POST
 *    summary: update a teacher
 *    responseClass: Teacher
 *    nickname: updateTeacher
 */
router.post("/update", passport.authenticate("jwt", {session:false}), updateTeacher);

/**
 * @swagger
 * path: api/teachers
 * operations:
 *  - httpMethod: GET
 *    summary: get a teacher
 *    responseClass: Teacher
 *    nickname: getTeacher
 */
router.get("/:teacherid", getTeacher);

/**
 * @swagger
 * path: api/teachers
 * operations:
 *  - httpMethod: DELETE
 *    summary: remove a teacher
 *    responseClass: Teacher
 *    nickname: removeTeacher
 */
router.delete("/", passport.authenticate("jwt", {session:false}), removeTeacher);

/**
 * @swagger
 * path: api/teachers
 * operations:
 *  - httpMethod: POST
 *    summary: add an class to a Teacher
 *    responseClass: Teacher
 *    nickname: addClass
 */
router.post("/", passport.authenticate("jwt", {session:false}), addClass);


module.exports = router;