var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');


// mongoose for mongodb ORM Will create if doesn't exist
var db = mongoose.connect('mongodb://localhost/bookAPI');

var Book = require('./models/bookModel');

// create instance of express
var app = express();

// creat port
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// passing book model to file
bookRouter = require('./Routes/bookRoutes')(Book);


app.use('/api', bookRouter);

app.get('/', function(req, res){
  res.send('welcome to my API');
});

app.listen(port, function(){
  console.log('Gulp is running on PORT: ' + port);
});
