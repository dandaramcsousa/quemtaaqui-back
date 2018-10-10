const mongoose = require('mongoose');

var teacherSchema = new mongoose.Schema({
    name:  {
        type: String,
        required: true
    },
    teacherid: {
        type: Number,
        required: true
    },
    class:{
        type:Schema.Types.ObjectId,
        ref: "course"
    }
});
module.exports = Teacher = mongoose.model('Teacher', teacherSchema);
