function cartController(){
  return{
    index(req,res){
      res.render("customers/cart")
    },
    update(req,res){
      return res.json({data:"all ok"});
    }

  }
}

module.exports = cartController
