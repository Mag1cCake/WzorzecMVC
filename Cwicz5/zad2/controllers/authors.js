const Author = require('../models/author');

exports.listAuthors = (req, res) => {
    const authors = [];
    res.render('authors', { authors });
};