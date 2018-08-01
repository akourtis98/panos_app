let mongoose = require('mongoose');

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