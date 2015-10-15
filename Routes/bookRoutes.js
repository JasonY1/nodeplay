var express = require('express');

var routes = function(){
  var bookRouter = express.Router();

  bookRouter.route('/')
    .post(function(req, res){
      // requires body-parser
      var book = new Book(req.body);
  
      book.save();
      res.status(201).send(book);
    })
    .get(function(req, res){
      var query = {};
  
      if(req.query.genre)
      {
        query.genre = req.query.genre;
      }
      Book.find(query, function(err, books){
        if(err)
          res.status(500).send(err)
        else
          res.json(books);
      });
    });
  
  bookRouter.route('/:bookId')
    .get(function(req, res){
      Book.findById(req.params.bookId, function(err, books){
        if(err)
          res.status(500).send(err);
        else
        res.json(book);
      });
    });
    .put(function(req, res){
      Book.findById(req.params.bookId, function(err, books){
        if(err)
          res.status(500).send(err);
        else
          book.title = req.body.title;
          book.author = req.body.author;
          book.genre = req.body.genre;
          book.read = re;q.body.read;
          book.save();
          res.json(book);
      });
    });
  return bookRouter;

};


module.exports = routes;