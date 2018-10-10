const Student = require("../models/studentSchema");
const Course = require("../models/courseSchema");
const User = require("../models/userSchema");


module.exports={
    newStudent(req,res){
        const aboutStudent = {};
        aboutStudent.user = req.user.id;
        if(req.body.name) aboutStudent.name = req.body.name;        
        if(req.body.studentid) aboutStudent.studentid = req.body.studentid;
        if(req.body.class) aboutStudent.class = req.body.class;
        Student.findOne({user: req.user.id}).then(student =>{
            if(!student){
                Student.findOne({studentid: aboutStudent.name}).then(st =>{
                    if(st){
                        res
                        .status(BAD_REQUEST)
                        .json({"already student": "You aren't new here ;)"})
                    }
                    new Student(aboutStudent)
                    .save
                    .then(student=>res.json(student));
                });
            }
        });

    },
    updateStudent(req,res){
        const aboutStudent = {};
        aboutStudent.user = req.user.id;
        if(req.body.name) aboutStudent.name = req.body.name;        
        if(req.body.studentid) aboutStudent.studentid = req.body.studentid;
        if(req.body.class) aboutStudent.class = req.body.class;

        Student.findOne({user: req.user.id}).then(student =>{
            if(student){
                Student.findOneAndUpdate(
                    {user: req.user.id},
                    {$set: aboutStudent},
                    {new: true}
                ).then(student => res.json(student));
            }
        });
    },
    getStudent(req, res){
        Student.findOne({studentid: req.params.studentid})
        .populate("user", ["name", "studentid"])
        .then(student =>{
            if(!student){
                res
                .status(404)
                .json({"inexistent student": "We don't know who is :("})
            }
            res.json(student);
        }).catch(err => res.status(404).json(err));
    },
    removeStudent(req,res){
        Student.findOneAndRemove({user: req.user.id}).then(() =>{
            User.findOneAndRemove({_id: req.user.id}).then(() =>{
                res.json({success: true});
            });
        })
    },
    addClass(req,res){
        Student.findOne({user: req.user.id})
        .then(student =>{
            Course.findOne({name: req.body.name}).then(cl =>{
                student.class.unshift(cl.id);
                student.save()
                .then(student => res.json(student));
            });
        })
        .catch(err => {
            res.status(404).json(err);
          });
    }
};