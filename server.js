const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const cors = require('cors');
const passaport = require('passport');

const courses = require('./routes/api/course');
const students = require('./routes/api/student');
const teachers = require('./routes/api/teacher');

mongoose.connect('mongodb://heroku_832fsrbb:kofhu9tu91bo94cb1s113g5o00@ds115753.mlab.com:15753/heroku_832fsrbb');
const app = express();


app.listen(3000, () => console.log('Quem tá aqui??'));
app.use(cors());
app.use("/api/course", courses);
app.use("/api/student", students);
app.use("/api/teacher", teachers);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/static', express.static('static'));


app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();
});

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    //res.send(JSON.stringify({ hello:" world" }))
    res.json({msg: 'This is CORS-enabled for all origins!'})
});

app.post('/', function (req, res) {
    res.end(JSON.stringify(req.body, null, 2))
});

module.exports = app;


/*

app.get('/login', function(req,res){
    res.send('Aqui será o login.')
})

app.get('/professor/:id', function(req,res){
    res.send('Pisa menos professor, ' + req.params.id)
})

app.get('/aluno/:id', function(req,res){
    res.send('USER')
})

app.get('/aluno/:id/turma/:id', function(req,res){
    res.send(JSON.stringify({aluno_id: 21, turma_id:31}))
})

app.post('/professor/:id/criar-turma', function(req,res){
    res.send('POST request')
})

app.delete('/professor/:id/deletar-turma/:id', function(req,res){
    res.send('Got a DELETE request at /user ')
})*/