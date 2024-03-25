const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Utwórz aplikację Express
const app = express();

// Middleware do logowania żądań
app.use((req, res, next) => {
    const date = new Date().toLocaleString();
    console.log(`Request ${req.method} on path ${req.url} ${date}`);
    next();
});

// Użyj body-parser do parsowania danych z formularza
app.use(bodyParser.urlencoded({ extended: true }));

// Ustaw katalog statyczny dla plików CSS
app.use(express.static(path.join(__dirname, 'public')));

// Zmienna przechowująca wpisy studentów
let students = [];

// Definiuj endpointy
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/add-student', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'add-student.html'));
});

app.post('/student', (req, res) => {
    const { name, surname, major } = req.body;
    students.push({ name, surname, major });
    res.send(`<title>Hello ${name} ${surname} on ${major} studies!</title><body><p>Hello ${name} ${surname} on ${major} studies!</p>`);
});

app.get('/users', (req, res) => {
    let userList = '<ul>';
    students.forEach(student => {
        userList += `<p>${student.name} ${student.surname} - ${student.major}</p>`;
    });
    userList += '</ul>';
    res.send(userList);
});

// Nasłuchuj na porcie 3000
app.listen(3000, () => {
    console.log('Aplikacja jest dostępna na http://localhost:3000/\nAplikacja jest dostępna na http://localhost:3000/student\nAplikacja jest dostępna na http://localhost:3000/add-student\nAplikacja jest dostępna na http://localhost:3000/users');
});