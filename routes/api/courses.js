/**
 * @swagger
 * resourcePath: /api/student
 * description: Course API
 */
const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => res.json({ msg: "Courses Works" }));

module.exports = router;