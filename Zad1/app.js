const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/student', (req, res) => {
    res.sendFile(__dirname + '/views/student.html');
});