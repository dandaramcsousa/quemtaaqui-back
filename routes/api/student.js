/**
 * @swagger
 * resourcePath: /api/student
 * description: Student API
 */
 
const express = require("express");

const router = express.Router();

router.get('/test', (req, res) => res.send('Hello World!'));


module.exports = router;