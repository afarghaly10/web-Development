/* 

* Setting up the Todo Schema for our MongoDB
* Created by Ahmed Farghaly

*/

// logic to do Todo schema

var mongoose = require("mongoose");

var todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: " Name cannot be Empty"
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_date: {
        type:Date,
        default: Date.now()
    }
});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;