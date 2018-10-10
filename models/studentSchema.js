const mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    studentid:{
        type: Number,
        required: true,
        max: 9
    },
    class:{
        type:Schema.Types.ObjectId,
        ref: "course"
    }
});

module.exports = Student = mongoose.model('Student', studentSchema);