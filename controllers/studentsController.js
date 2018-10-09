const Student = require("../models/studentSchema");

module.exports={
    newStudent(req,res){
        const aboutStudent = {}
        aboutStudent.id = req.user.id;
    },
    updateStudent(req,res){

    }
}