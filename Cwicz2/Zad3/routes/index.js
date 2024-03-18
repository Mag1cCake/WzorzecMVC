const homePage = require('../views/home');
const studentPage = require('../views/student');

exports.handleHome = (req, res) => {
  homePage.renderPage(req, res);
};

exports.handleStudent = (req, res) => {
  studentPage.renderPage(req, res);
};