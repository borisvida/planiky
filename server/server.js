var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var getCounts = require('./planiky');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8081;

var router = express.Router();

router.get('/', function(req, res) {
    res.json({message: "Hello world"});
});

router.get('/counts/', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");    
    getCounts.then((data) => res.json(JSON.stringify(data)))
});

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);
