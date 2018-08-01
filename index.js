const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const pug = require('pug');

mongoose.connect('mongodb://localhost/nodekb');
let db = mongoose.connection;

// check connection
db.once('open', () => {
    console.log('connected to mongodb');
});

// check for DB errors
db.on('error', err => {
    console.log(err);
});

// initialize app
const app = express();

// bring in model
let Article = require('./models/article');


app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'pug');

// body parser middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// set public folder
app.use(express.static(path.join(__dirname + '/public')));

// submit post route
app.post('/articles/add', (req, res) => {
    let article = new Article();

    article.title = req.body.title;
    article.author = req.body.author;
    article.date = req.body.date;
    article.body = req.body.body;

    console.log(req.body.title);

    article.save( err => {
        if(err){
            console.log(err);
        }else{
            res.redirect('/');
        }
    });
});

// home route
app.get('/', (req, res) => {
    Article.find({}, (err, articles) => {
        if(err){
            console.log(err);
        }else{
            res.render('index', {
                title: 'Articles',
                articles: articles
            });
        }
    });
});

// start server
app.listen(3000, () => {
    console.log("server started");
});