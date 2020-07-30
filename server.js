const express = require("express");
const expressLayout = require("express-ejs-layouts");
const ejs = require("ejs");
const path =require("path")
const app = express();

app.use(express.static("public"))
app.get("/",function(req,res){
  res.render("home");
})




app.use(expressLayout);
app.set("views",path.join(__dirname,'/resourses/views'));
app.set("view engine","ejs");










const PORT = process.env.PORT||3000;
app.listen(PORT,function(){
  console.log(`server is running on port ${PORT}`);
})
