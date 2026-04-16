// https://www.amazon.com/profile/about/picture
// routing => / , /about , /home , /profile/bio 
const express = require('express');
const app = express();
app.set("view engine","ejs")
app.use(function(req,res,next){
    //res.send("Hello From Middleware");
    console.log("Hello From Middleware");
    next();
})
app.use(express.static('./public'));
app.use(function(req,res,next){
    console.log("Hello From Middleware 2");
    next();
})

app.get("/",function(req,res){
    res.render("Menu.ejs",{name:"Nothing kumar Doller Resturant",type:"Starter",sweets:"Avinash"});
})

app.get("/about",function(req,res){
    res.send("Server is running");
})

app.get("/contact",function(req,res){
    res.send("Contact Page");
})
app.get("/profile/image",function(req,res){
    res.send("Image page for your Profile");
})
app.listen(1200)