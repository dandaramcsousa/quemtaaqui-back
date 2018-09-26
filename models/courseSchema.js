import mongoose, { mongo } from 'mongoose';

var classSchema = new mongoose.Schema({
    name: String,
    teacher: String, //mudar
    students: Array
});

var Course = mongoose.model('Course', courseSchema);