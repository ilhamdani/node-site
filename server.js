// require dependecies
var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var app = express();
var port = 8080;

//use ejs and express layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(bodyParser.urlencoded({ extended: true }));

//router our app
var router = require('./app/routes');
app.use('/', router);

//set static files (css and images, etc)
app.use(express.static(__dirname + '/public'));

// start server
app.listen(port, function() {
	console.log('app started');
});


