//require express
var express = require('express');
var path = require('path');
//create our route object
var router = express.Router();
// export our router
module.exports = router;
//route for home page
router.get('/', function (req, res) {
    //res.send('hello world!');
    //res.sendFile(path.join(__dirname, '../index.html'));
    res.render('pages/index');
});
// route for about page
router.get('/about', function (req, res) {
    //res.send('hello i am about page !');
    //res.sendFile(path.join(__dirname, '../about.html'));
	
	var users = [
		{ name : "Ilham", email : "ilhamdani@gmail.com"},
		{ name : "Dani", email : "dani@gmail.com"},
		{ name : "Firman", email : "firman@gmail.com"}
	];
    res.render('pages/about', {users: users});
});
//route for contact page
router.get('/contact', function (req, res) {
    res.render('pages/contact');
});
router.post('/contact', function (req, res) {
	res.send('Tank you for contacting us, ' + req.body.name + '! We will respond shortly');
});