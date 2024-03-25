const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use((req, res, next) => {
    const date = new Date().toLocaleString();
    console.log(`Request ${req.method} on path ${req.url} ${date}`);
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));

let students = [];

app.get('/', (req, res) => {
    res.send('<title>HOME</title><body><p>HOME</p>');
});

app.get('/add-student', (req, res) => {
    res.send(`
        <title>ADD-STUDENT</title>
        <body>
            <form action="/student" method="post">
                <label for="name">Imię:</label><br>
                <input type="text" id="name" name="name"><br>
                <label for="surname">Nazwisko:</label><br>
                <input type="text" id="surname" name="surname"><br>
                <label for="major">Kierunek:</label><br>
                <input type="text" id="major" name="major"><br>
                <button type="submit">Dodaj studenta</button>
            </form>
        </body>
    `);
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

app.listen(3000, () => {
    console.log('Aplikacja jest dostępna na http://localhost:3000/\nAplikacja jest dostępna na http://localhost:3000/student\nAplikacja jest dostępna na http://localhost:3000/add-student\nAplikacja jest dostępna na http://localhost:3000/users');
});