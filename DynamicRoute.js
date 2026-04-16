const express = require('express');
const CreateServer = express();
CreateServer.set("view engine","ejs")
CreateServer.get("/profile/:username",function(req,res){
    res.send(`Hello ${req.params.username}`);
})
CreateServer.get("/",function(req,res){
    res.render("index.ejs");
})
CreateServer.get("/profile",function(req,res){
    res.send("This is profile");
})
CreateServer.get("/:user",function(req,res){
    res.send(req.params.user);
})
CreateServer.listen(1920);