const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const logger = require("heroku-logger");


const SALT_SIZE = 10;
const BAD_REQUEST = 400;
const NOT_FOUND = 404;

module.exports = {
    getUser(req, res){
        res.json({
            name: req.user.name,
            email: req.user.email,
            studentid: req.user.studentid,
            password: req.user.password
        })
    },
    signin(req, res){
        User.findOne({email: req.body.email}).then(user =>{
            if(user){
                return res
                .status(BAD_REQUEST)
                .json({"email error": "E-mail already exists"})
            } else {
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    studentid: req.body.studentid,
                    password: req.body.password
                })
                bcrypt.genSalt(SALT_SIZE, (err, salt)=>{
                    bcrypt.hash(newUser.password, salt, (err,hash)=>{
                        if(err) throw err;
                        newUser.password = hash;
                        newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                    })
                })

            }
        })
    },

    login(req, res){
        const email = req.body.name;
        const studentid = req.body.studentid;
        const password =  req.body.password;

        User.findOne({$or: [{email: email}, {matricula: matricula}]})
        .then(user =>{
            if(!user){
                return res
                .status(NOT_FOUND)
                .json({"email error": "User not found"});
            }

            bcrypt.compare(password, user.password).then(matched =>{
                if(matched){
                    const payload = {
                        name: user.name,
                        email: user.email,
                        studentid: user.studentid
                    }

                    jwt.sign(
                        payload,
                        keys.secretOrKey,
                        {expiresIn: 4000},
                        (err, token) => {
                            res.json({
                                success: true,
                                token: token
                            })
                        }
                    )
                } else {
                    return res
                    .status(BAD_REQUEST)
                    .json({"password error": "Password not correct"});
                }
            });
        })
        .catch(err => {
            return res.status(BAD_REQUEST).json(err);
        });
    }
};