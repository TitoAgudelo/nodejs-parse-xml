const express = require('express');
const router = express.Router();
const fs           = require('fs');
const xml2js       = require('xml2js');
const parser       = new xml2js.Parser();

/* GET home page. */
router.get('/', function(req, res, next) {
  const xmlfile = __dirname + "/../public/xmlfiles/CodeTest-XML.xml";
  fs.readFile(xmlfile, "utf-8", function (error, text) {
    if (error) {
        throw error;
    } else {
      parser.parseString(text, function (err, result) {
        const avengers = result['superheroes']['items'];
        res.render('index', { avengers:  avengers });
      });
    }
 });
});

router.get('/books', function(req, res, next) {
  const xmlfile = __dirname + "/../public/xmlfiles/booksxml.xml";
  fs.readFile(xmlfile, "utf-8", function (error, text) {
    if (error) {
        throw error;
    } else {
      parser.parseString(text, function (err, result) {
        const books = result['bookstore']['book'];
        res.render('book', { books:  books });
      });
    }
 });
});

module.exports = router;
