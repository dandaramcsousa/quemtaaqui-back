/**
 * @swagger
 * resourcePath: /api/student
 * description: Teacher API
 */

const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => res.json({ msg: "Teacher Works" }));

module.exports = router;