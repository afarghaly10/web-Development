/* 
* This file is used to prevent cluttering of the main index file
* Routes used in web application are defined here 
* Created by Ahmed Farghaly
*/

// Requiring necessarily files
var express = require("express");
var router = express.Router(); // to break the routes out into little modular chunks. we will require them back in the index.js (main file).
var db =  require("../models");
var helpers = require("../helpers/todos");

// Defining Routes
    // GET and POST routes
router.route('/')
    .get(helpers.getTodos)
    .post(helpers.createTodos);

    // Show, Update, and Delete Routes 
router.route('/:todoId')
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo);

module.exports = router;