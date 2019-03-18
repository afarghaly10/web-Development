/* 
* This file is used to prevent cluttering of the main index file
* Routes used in web application are defined here 
* Created by Ahmed Farghaly
*/

// Requiring necessarily files

var express = require("express");
var router = express.Router(); // to break the routes out into little modular chunks. we will require them back in the index.js (main file).
var db =  require("../models"); // This variable is used to send all of the Todos in the database
var helpers = require("../helpers/todos");

// Defining Routes

    // Get Route
router.get('/', function(req,res){
    db.Todo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    });
});

    // Post Route
router.post('/', function(req,res){
    db.Todo.create(req.body)
    .then(function(newTodo){
        res.status(201).json(newTodo);
    })
    .catch(function(err){
        res.send(err);
    });
});
    // Update and Delete Routes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
router.get('/:todoId',function(res,req){
    db.Todo.findById(req.params.todoId)
    .then(function(foundTodo){
        res.json(foundTodo);
    })
    .catch(function(err){
        res.send(err);
    });
});
    

module.exports = router;