const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const passport = require("passport");
const logger = require("heroku-logger");
const swagger = require("swagger-express");

//Import de routes
const courses = require('./routes/api/courses');
const students = require('./routes/api/students');
const teachers = require('./routes/api/teachers');
const users = require('./routes/api/users');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => logger.info("Banco de dados conectado!"))
  .catch(err => logger.error(err));
//Models
require("./models/courseSchema");
require("./models/studentSchema");
require("./models/teacherSchema");
require("./models/userSchema");



// Passport middleware
app.use(passport.initialize());
require("./config/passport")(passport);

// API documentation UI
app.use(
    swagger.init(app, {
      apiVersion: "1.0",
      swaggerVersion: "1.0",
      basePath: "http://localhost:3000",
      swaggerURL: "/docs/api",
      swaggerJSON: "/api-docs.json",
      swaggerUI: "./docs-ui/swagger/",
      apis: [
        "./routes/api/courses.js",
        "./routes/api/students.js",
        "./routes/api/teachers.js"
      ]
    })
  );

// Usa as rotas
app.use("/api/courses", courses);
app.use("/api/students", students);
app.use("/api/teachers", teachers);
app.use("/api/users", users);

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ hello:" world" }))
});

app.post('/', function (req, res) {
    res.end(JSON.stringify(req.body, null, 2))
});

const port = process.env.PORT || 3000;
app.listen(port, () => logger.info(`Servidor em ${port}`));

module.exports = app;