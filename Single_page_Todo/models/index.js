/* 

* The purpose of this file is to connect mongoose package and not jam the main index.js file
* Created by Ahmed Farghaly

*/


var mongoose = require("mongoose");

mongoose.set('debug', true); // setting the debugg mode to true to allow us to see what is happening at any given point

mongoose.connect("mongodb://localhost:27017/todo-api",{useNewUrlParser: true}); //connecting db

mongoose.Promise = Promise; // this allows us to use the promise syntax; rather than doing a callback function e.g db.Todo.find(function(){}), we use ".then" or ".catch" e.g db.Todo.find().then

module.exports.Todo = require("./todo");