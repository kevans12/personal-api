var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

app.use(middleware.addHeaders);

app.listen(8000, function(){
  console.log('Listening on the port 8000');
});

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/latestOccupation', mainCtrl.getLatestOccupation);
app.get('/hobbies/:type', mainCtrl.getFilteredHobbies);
