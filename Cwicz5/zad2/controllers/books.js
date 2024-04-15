const Book = require('../models/book');

exports.listBooks = (req, res) => {
    const books = [];
    res.render('books', { books });
};