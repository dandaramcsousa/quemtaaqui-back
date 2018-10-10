const Teacher = require("../models/teacherSchema");
const Course = require("../models/courseSchema");
const User = require("../models/userSchema");


module.exports={
    newTeacher(req,res){
        const aboutTeacher = {};
        aboutTeacher.user = req.user.id;
        if(req.body.name) aboutTeacher.name = req.body.name;        
        if(req.body.teacherid) aboutTeacher.teacherid = req.body.teacherid;
        if(req.body.class) aboutTeacher.class = req.body.class;
        Teacher.findOne({user: req.user.id}).then(teacher =>{
            if(!teacher){
                Teacher.findOne({teacherid: aboutTeacher.teacherid}).then(teacher =>{
                    if(teacher){
                        res
                        .status(BAD_REQUEST)
                        .json({"already teacher": "You aren't new here ;)"})
                    }
                    new Teacher(aboutTeacher)
                    .save
                    .then(teacher=>res.json(teacher));
                });
            }
        });

    },
    updateTeacher(req,res){
        const aboutTeacher = {};
        aboutTeacher.user = req.user.id;
        if(req.body.name) aboutTeacher.name = req.body.name;        
        if(req.body.teacherid) aboutTeacher.teacherid = req.body.teacherid;
        if(req.body.class) aboutTeacher.class = req.body.class;

        Teacher.findOne({user: req.user.id}).then(teacher =>{
            if(teacher){
                Teacher.findOneAndUpdate(
                    {user: req.user.id},
                    {$set: aboutTeacher},
                    {new: true}
                ).then(teacher => res.json(teacher));
            }
        });
    },
    getTeacher(req, res){
        Teacher.findOne({teacherid: req.params.teacherid})
        .populate("user", ["name", "teacherid"])
        .then(teacher =>{
            if(!teacher){
                res
                .status(404)
                .json({"inexistent Teacher": "We don't know who is :("})
            }
            res.json(teacher);
        }).catch(err => res.status(404).json(err));
    },
    removeTeacher(req,res){
        Teacher.findOneAndRemove({user: req.user.id}).then(() =>{
            User.findOneAndRemove({_id: req.user.id}).then(() =>{
                res.json({success: true});
            });
        })
    },
    addClass(req,res){
        Teacher.findOne({user: req.user.id})
        .then(teacher =>{
            Course.findOne({name: req.body.name}).then(cl =>{
                teacher.class.unshift(cl.id);
                teacher.save()
                .then(teacher => res.json(teacher));
            });
        })
        .catch(err => {
            res.status(404).json(err);
          });
    }
};