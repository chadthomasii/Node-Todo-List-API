//Imported routes
var express = require('express');
app = express();
var port = 3000;
var bodyParser = require('body-parser');

var todoRoutes = require('./routes/todos')

//Used to access the body of the request. Added now to the App object
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/todos', todoRoutes); //Setup routes in routes folder




app.listen(port); //Accept traffic on stated port