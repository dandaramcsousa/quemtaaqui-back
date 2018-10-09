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

var Student = mongoose.model('Student', studentSchema);

var dands = new Student({name: "Dands", id: 114110434, class:["Projeto 2", "Programacao 3", "MSN"]})
dands.save(function (err, dands) {
    if (err) return console.error(err);
    console.log("Objeto salvo: " + dands);
  });

module.exports = Student = mongoose.model('Student', studentSchema);