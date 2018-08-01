let mongoose = require('mongoose');

<<<<<<< HEAD
// Article Schema
let articleSchema = mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  author:{
    type: String,
    required: true
  },
  body:{
    type: String,
    required: true
  }
});

let Article = module.exports = mongoose.model('Article', articleSchema);
=======
// article schema
let articleSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    }, author: {
        type: String,
        require: true
    }, date: {
        type: Date,
        required: true
    }, body: {
        type: String,
        required: true
    }
});

let Article = module.exports = mongoose.model('Article', articleSchema);
>>>>>>> 0f49b6b741d7ccdaba3978328fe07a9401b1b6cd
