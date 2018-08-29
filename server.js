const express = require('express');
//const mongoose = require("mongoose");

const courses = require('./routes/api/course');
const students = require('./routes/api/student');
const teachers = require('./routes/api/teacher');

const app = express();

app.listen(3000, () => console.log('Quem tá aqui??'))

app.use("/api/course", courses);
app.use("/api/student", students);
app.use("/api/teacher", teachers)

/*
app.get('/', function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ a: 1 }))
});


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