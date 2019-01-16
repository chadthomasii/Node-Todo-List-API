var mongoose = require('mongoose'); //Get mongoose driver


///Schema includes a Name, Completed, and time created
var todoSchema = new mongoose.Schema
({
    name:
    {
        type : String,
        required: 'Name cannot be blank!'
    },

    completed:
    {
        type: Boolean,
        default: false
    },

    created_date: 
    {
        type: Date,
        default: Date.now
    }
});

//Initialize the Model
var Todo = mongoose.model('Todo',todoSchema);

//Export the model for use with other files.
module.exports = Todo;



