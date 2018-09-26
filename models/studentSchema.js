import mongoose, { mongo } from 'mongoose';

var studentSchema = new mongoose.Schema({
    name: String,
    id: Number,
    class: Array
});

var Student = mongoose.model('Student', courseSchema);