
const Menu = require("../../models/menu.js"); //imported collection


//these are called factory controllers
// we are expoting them to web.js to use it under app.get

function homeController(){
  return{
    index(req,res){
      Menu.find().then(function(pizzas){

          res.render("home" , {pizzass:pizzas}) // pizzass reflectded in frontend page
      })

    }
  }
}

module.exports = homeController
