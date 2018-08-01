const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// initialize app
const app = express();

app.set('views', __dirname + './../client/views');
app.set('view engine', 'ejs');

// set public folder
app.use(express.static(path.join(__dirname + '/public')));

// body parser middleware
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

// home route
app.get('/', (req, res) => {
    res.render('home');
});

// add post to DB
app.post('/submit/post', (req, res) => {
    // add to database
    console.log('added to db');
    res.redirect('/add/post');
});

// make post route
app.get('/add/post', (req, res) => {
    console.log('make post');
    res.render('add_post');
});

// start server
app.listen(3000);