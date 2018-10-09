import mongoose, { mongo } from 'mongoose';

var classSchema = new mongoose.Schema({
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

var Course = mongoose.model('Course', courseSchema);

var prog3 = new Course({name: "Programacao 3", teacher: "Matheus", students: ["Dandara", "Vinicius", "Hugo"]})
prog3.save(function (err, prog3) {
    if (err) return console.error(err);
    console.log("Objeto salvo: " + prog3);
  });