const express = require('express');
const mongoose = require('mongoose');
const web3 = require('web3');
const bodyParser = require('body-parser');

var router = express.Router();
var app = express();

app.set('view engine', 'ejs');


connectDb = function (username = 'rajiv', password = 'rajiv') {
    mongoose.connect(`mongodb://${username}:${password}@ds133630.mlab.com:33630/vfc`, (error) => {
        if (!error) {
            console.log("connected to Database: VFC");
        } else {
            console.log("Error: ", error);
        }
    });
}
app.use(express.static(__dirname + '/public/'))          // For serving static
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/', function(req, res) {
    res.render('register');
});

app.get('/voting', function(req, res){
    res.render('fptp_voting_paper');
});

app.get('/voting/pr', function(req, res){
    res.render('pr_voting_paper');
});

app.listen(4500, function(err) {
    if(!err) {
        console.log("Listening at PORT: ", 4500);
    } else {
        throw err;
    }
});