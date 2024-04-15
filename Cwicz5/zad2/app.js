const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

const homeRouter = require('./routes/home');
app.use('/', homeRouter);

const booksRouter = require('./routes/books');
app.use('/book', booksRouter);

const authorsRouter = require('./routes/authors');
app.use('/author', authorsRouter);

app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});