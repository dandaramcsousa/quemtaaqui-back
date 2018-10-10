const mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    id:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

module.exports = User = mongoose.model("User", userSchema);
