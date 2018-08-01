const express = require('express');
const router = express.Router();

// Article Model
let Article = require('../models/article');
// User Model
let User = require('../models/user');

// add submit post route
router.post('/articles/add', (req, res) => {
    let article = new Article();

    article.title = req.body.title;
    article.author = req.body.author;
    article.date = req.body.date;
    article.body = req.body.body;

    console.log(req.body.title);

    article.save(err => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
});

// update submit post route
router.post('/articles/edit/:id', (req, res) => {
    let article = {};

    article.title = req.body.title;
    article.author = req.body.author;
    article.date = req.body.date;
    article.body = req.body.body;

    let query = { _id: req.params.id }

    Article.update(query, article, err => {
        if(err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
});

// delete article
router.delete('/article/:id', (req, res) => {
    let query = {_id:req.params.id}

    Article.remove(query, (err) => {
        if(err) {
            console.log(err);
        }
        res.send('success');
    });
});

// load edit form
router.get('/article/edit/:id', (req, res) => {
    Article.findById(req.params.id, (err, article) => {
        res.render('edit_article', {
            title: 'Edit article',
            article: article
        });
    });
});

// get article
router.get('/article/:id', (req, res) => {
    Article.findById(req.params.id, (err, article) => {
        res.render('article', {
            article: article
        })
    });
});

// Access Control
function ensureAuthenticated(req, res, next){
  if(req.isAuthenticated()){
    return next();
  } else {
    req.flash('danger', 'Please login');
    res.redirect('/users/login');
  }
}

module.exports = router;