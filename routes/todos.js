var express = require('express');
var router = express.Router();
var db = require("../models"); //Require Database
var bodyParser = require('body-parser');

router.get("/", function(request,resend)
{
    db.Todo.find()
    .then(function(todos)
    {
        resend.json(todos);
    })
    .catch(function(error)
    {
        resend.send(error);
    });


});

router.post('/', function (request, resend)
{
    resend.send('This is the post route');
});


module.exports = router;