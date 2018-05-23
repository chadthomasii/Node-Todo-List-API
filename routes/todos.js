var express = require('express');
var router = express.Router();
var db = require("../models"); //Require Database

//Default route send back a list of all the todos.
router.get("/", function(request,resend)
{
    db.Todo.find()
    .then(function(todos)
    {
        resend.json(todos);
    })
    .catch(function(error) //error if there is one
    {
        resend.send(error);
    });


});
//Add new Todo
router.post('/', function (request, resend)
{
    //Grab the new json object and stick it in the Database
    db.Todo.create(request.body)
    .then(function(newTodo)
    {   
        resend.status(201).json(newTodo); //Send the new Object back
        //Status 201 means something was created
    })
    .catch(function(error)
    {
        resend.send(error); //Send the error of there is one
    });
});

//Get Todo with ID
router.get('/:todoId', function(request,resend)
{
    //Sends back a todo object when given ID
    db.Todo.findById(request.params.todoId)
    .then(function(foundTodo)
    {
        resend.json(foundTodo);
    })
    .catch(function(error)
    {
        resend.send(error);
    });
});

//Updates the selected Task, pass an ID
router.put('/:todoId', function(request,response)
{
    //New keyword send back the updated string on request
    db.Todo.findOneAndUpdate({_id: request.params.todoId}, request.body, {new: true})
    .then(function(todo)
    {
        response.json(todo);
    })
    .catch(function(error)

    {
        response.send(error);
    });

});

//Delete the Selected Task, pass an ID
router.delete('/:todoId', function(request,response)
{
    db.Todo.remove({_id: request.params.todoId})
    .then(function()
    {
        response.json({message: "Task Deleted"});
    })
    .catch(function(error)
    {
        response.send(error);
    });
});




module.exports = router;