const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const studentsController = require('./controllers/students');
const errorController = require('./controllers/error');

const app = express();
const PORT = 3000;

// Ustaw silnik szablonów EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Ustaw parsowanie danych z formularza
app.use(bodyParser.urlencoded({ extended: false }));

// Routing
app.get('/', studentsController.getAddNewStudentPage);

// Obsługa nieznalezionej strony
app.use(errorController.getNotFoundPage);

// Serwer nasłuchuje na porcie 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});