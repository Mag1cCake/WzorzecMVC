const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use((req, res, next) => {
    const date = new Date().toLocaleString();
    console.log(`Request ${req.method} on path ${req.url} ${date}`);
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

let students = [];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/students', (req, res) => {
    let userList = '<ul>';
    students.forEach((student, index) => {
        userList += `<li>${index}: ${student.name} ${student.surname} - ${student.major} <a href="/delete/${index}">Delete</a></li>`;
    });
    userList += '</ul>';
    res.send(userList);
});

app.post('/students', (req, res) => {
    const { name, surname, major } = req.body;
    students.push({ name, surname, major });
    res.redirect('/students');
});

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    if (id && id < students.length) {
        students.splice(id, 1);
        res.send(`Student with ID ${id} deleted successfully.`);
    } else {
        res.status(404).send('Student not found.');
    }
});

app.listen(3000, () => {
    console.log('Aplikacja jest dostępna na http://localhost:3000/\nAplikacja jest dostępna na http://localhost:3000/student\nAplikacja jest dostępna na http://localhost:3000/add-student\nAplikacja jest dostępna na http://localhost:3000/users');
});