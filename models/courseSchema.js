const mongoose = require('mongoose');


var courseSchema = new mongoose.Schema({
    name:  {
        type: String,
        required: true
    },
    teacher: {
        type: String,
        required: true
    }, //mudar
    students:  {
        type: [String],
        required: true
    },
});
module.exports = Course = mongoose.model('Course', courseSchema);
