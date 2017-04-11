var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// routes will go here
// app.get('/', function (req, res) {
//     console.log("test...");
//    //res.send('Hello World');
//    res.sendFile( __dirname + "/" + "index.html" );
// });

app.get('/login', function(req, res) {
  console.log("in login method...");  
  var username = req.param('username');
  var password = req.param('password');
  res.send(username + ' ' + password);
});