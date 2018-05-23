var express = require('express');
var router = express.Router();
var db = require("../models"); //Require Database
var helpers = require('../helpers/todos')

//References this routes helper functions
router.route('/')
.get(helpers.getTodos)
.post(helpers.createTodo);

//Reference the routes that pass an Id
router.route('/:todoId')
.get(helpers.getTodo)
.put(helpers.updateTodo)
.delete(helpers.deleteTodo);


module.exports = router;