//Configuarition File, 

//Get mongoose, and setup debugging, then point to database
var mongoose = require("mongoose");
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/todo-api');

mongoose.Promise = Promise; //This is added to use promise syntax, like the .then keyword

//Get referenece to created model
module.exports.Todo = require("./todo");