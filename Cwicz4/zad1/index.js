const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Ustaw silnik szablonów EJS
app.set('view engine', 'ejs');

// Ustaw katalog z widokami
app.set('views', path.join(__dirname, 'views'));

// Ustaw parsowanie danych z formularza
app.use(bodyParser.urlencoded({ extended: false }));

// Routing
app.get('/', (req, res) => {
    res.render('Home', { title: 'Home' });
});

app.get('/success', (req, res) => {
    res.render('Success', { title: 'Success' });
});

app.get('/students-list', (req, res) => {
    res.render('List', { title: 'List' });
});

app.post('/add-student', (req, res) => {
    // Przekierowanie na widok List
    res.redirect('/students-list');
});

// Serwer nasłuchuje na porcie 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});