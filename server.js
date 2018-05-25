//REQUIRED

const express = require ('express');
bodyParser = require('body-parser');

const app = express();


//IMPORTING MODELS
const db = require('./models')

//IMPORTING CONTROLLERS
const controllers = require('./controllers');

//SERVE STATIC FILES IN PUBLIC
app.use(express.static('public'));

//ROUTES

app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
  // res.send("WAT");
});

//get route for controllers
app.get('/api', controllers.api.index);
app.get('/api/albums', controllers.albums.index);






//LISTENING PORT
app.listen(process.env.PORT || 3000, function () {
  console.log('Tunely listening at http://localhost:3000/');
});