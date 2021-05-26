require("dotenv").config()

const express = require("express");
const expressLayout = require("express-ejs-layouts");
const ejs = require("ejs");
const path =require("path")
const app = express();
const session = require("express-session")
const flash = require("express-flash")
const MongoDbStore = require("connect-mongo")(session)




//requring database
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/pizzas', {useNewUrlParser: true ,useUnifiedTopology:true});
const connection = mongoose.connection;
connection.once("open",function(){
  console.log("Database connected...");
}).catch( function(err){
  console.log("connection failed..");
});  //collections of database are created in models/menu.js


//session store

let mongoStore = new MongoDbStore({
  mongooseConnection: connection,
  collection: "sessions"
})

app.use(session({          //to set a cookie
  secret: process.env.cookieSecret, //.cookieSecret from .env file
  resave: false,
  store:mongoStore,
 saveUninitialized: false,
 cookie: {maxAge:1000*60*60*24}
}))

app.use(flash())
app.use(express.static("public")) //for using css in public folder

//all HTML are in views folder . so this helps to tell node evertime use this layouts
app.use(expressLayout);
app.set("views",path.join(__dirname,'/resourses/views'));
app.set("view engine","ejs");

require("./routes/web.js")(app) // importe contentt sent from web.js (APP) used cause its dunction we are importing.
// so we are calling that function










/////////////////////////////////////SERVER//////////////////////////////////////////
const PORT = process.env.PORT||3000;
app.listen(PORT,function(){
  console.log(`server is running on port ${PORT}`);
})
