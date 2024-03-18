const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(home.renderPage());
});

app.get('/student', (req, res) => {
    res.send(student.renderPage());
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

app.use((req, res, next) => {
    res.status(404).send('<h1>404 Not Found</h1>');
});

module.exports = app;