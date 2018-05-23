var db = require('../models');

//Gets list of all of the Todos
exports.getTodos = function(request,resend)
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
}

//Post Request that adds a new todo
exports.createTodo = function(request, resend)
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
}

//Gets Todo with passed Id
exports.getTodo = function(request,resend)
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
}
//Updates todo with passed ID
exports.updateTodo = function(request,response)
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

}
//Deletes todo with passed ID
exports.deleteTodo = function(request,response)
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
}

module.exports = exports; //Export all functions