var express = require("express"),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require("body-parser");
    
var todoRoutes = require("./routes/todos");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname +'/public'));
    
app.get('/',function(req,res){
    res.sendFile("index.html");
});

// Setting up the app to use The API Routes

app.use('/api/todos',todoRoutes); // The first is a prefix for all the routes
    
app.listen(port, function(){
    console.log("App is running on port... " + port);
})