const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<title>HOME</title><body><p>HOME</p>');
});

app.get('/student', (req, res) => {
    res.send('<title>STUDENT</title><body><p>STUDENT</p>');
});

app.get('/add-student', (req, res) => {
    res.send('<title>ADD-STUDENT</title><body><p>ADD-STUDENT</p>');
});

app.listen(3000, () => {
    console.log('Aplikacja jest dostępna na http://localhost:3000/\nAplikacja jest dostępna na http://localhost:3000/student\nAplikacja jest dostępna na http://localhost:3000/add-student');
});