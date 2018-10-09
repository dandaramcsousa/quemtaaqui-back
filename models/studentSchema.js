import mongoose, { mongo } from 'mongoose';

var studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id:{
        type: Number,
        required: true,
        max: 9
    },
    class:{
        type:[String],
        required: true
    }
});

module.exports = Student = mongoose.model('Student', studentSchema);