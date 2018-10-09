import mongoose, { mongo } from 'mongoose';

var teacherSchema = new mongoose.Schema({
    name:  {
        type: String,
        required: true
    },
    SIAPE: {
        type: Number,
        required: true
    }
});
module.exports = Teacher = mongoose.model('Teacher', teacherSchema);
