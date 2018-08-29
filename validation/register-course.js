const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateCourseRegisterInput(data) {
    let errors = {};
  
    data.name = !isEmpty(data.name) ? data.name : "";
    data.code = !isEmpty(data.code) ? data.code : "";
  
    if (Validator.isEmpty(data.name)) {
      errors.name = "Course name field is required";
    } else if (!Validator.isLength(data.name, { min: 2, max: 50 })) {
      errors.name = "Course name must be between 2 and 50 characters";
    }
  
    if (Validator.isEmpty(data.code)) {
      errors.code = "Course code field is required";
    }
  
    return { errors, isValid: isEmpty(errors) };
  };