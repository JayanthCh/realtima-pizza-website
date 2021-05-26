
 const homeController = require("../app/http/controllers/homeController")
 const authController = require("../app/http/controllers/authController")
 const cartController = require("../app/http/controllers/customers/cartController")

//res.render which should be under app.get are in  http/controllers
// we are exporting that functions and importing here


function initRoutes(app){


  app.get("/",homeController().index); // here after , this comes from homeController.js
      app.get("/login",authController().login); // here after , this comes from AuthController.js
        app.get("/register",authController().register);
        app.get("/cart",cartController().index); // here after , this comes from  customers/cartController

          app.post("/update-cart",cartController().update)

}

module.exports = initRoutes  // This helps to export this file to sever.js where we imported there
