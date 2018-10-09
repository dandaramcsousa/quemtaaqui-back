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

var Teacher = mongoose.model('Teacher', courseSchema);

var matheusG = new Teacher({name: "Matheus", SIAPE: 111111})
matheusG.save(function (err, matheusG) {
    if (err) return console.error(err);
    console.log("Objeto salvo: " + matheusG);
  });