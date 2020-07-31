const express = require("express");
const expressLayout = require("express-ejs-layouts");
const ejs = require("ejs");
const path =require("path")
const app = express();

app.use(express.static("public"))


app.use(expressLayout);
app.set("views",path.join(__dirname,'/resourses/views'));
app.set("view engine","ejs");


app.get("/",function(req,res){
  res.render("home");
})

app.get("/cart",function(req,res){
  res.render("customers/cart")
})


app.get("/login",function(req,res){
  res.render("auth/login");
})


app.get("/register",function(req,res){
  res.render("auth/register");
})



const PORT = process.env.PORT||3000;
app.listen(PORT,function(){
  console.log(`server is running on port ${PORT}`);
})
