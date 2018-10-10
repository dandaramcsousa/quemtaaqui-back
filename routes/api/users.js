/**
 * @swagger
 * resourcePath: /api/users
 * description: User API
 */
const express = require("express");
const passport = require("passport");
const router = express.Router();

const{
    getUser,
    signIn,
    login
} = require("../../controllers/usersController");

/**
 * @swagger
 * path: api/users
 * operations:
 *  - httpMethod: POST
 *    summary: add an user
 *    responseClass: User
 *    nickname: signIn
 */
router.post("/", signIn);

/**
 * @swagger
 * path: api/users/login
 * operations:
 *  - httpMethod: POST
 *    summary: log as a user
 *    responseClass: User
 *    nickname: login
 */
router.post("/login", login);

/**
 * @swagger
 * path: api/users/user
 * operations:
 *  - httpMethod: GET
 *    summary: get an user
 *    responseClass: User
 *    nickname: getUser
 */
router.get("/user", passport.authenticate("jwt", {session: false}), getUser);


module.exports = router;