var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine","ejs"); // A template.
app.set("views", "./views");
app.use("/scripts", express.static(__dirname + "/node_modules/web3.js-browser/build"));

var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));

// Connection string.
const mongoose = require('mongoose');
const { ifError } = require("assert");
mongoose.connect('mongodb+srv://anhBH04:saxJY5carL5TudDG@cluster0.pte9uva.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
    if(err){
        console.log("Mongo connection error " + err);
    }else{
        console.log("Mongo connection successfully.");
    }
});

// Create a route for testing purposes.
// app.get("/", function(req, res){
//     res.send("200 - Oke");
// });

require("./controllers/game")(app);