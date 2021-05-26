const mongoose = require("mongoose");

const Schema = mongoose.Schema


 const menuSchema = new Schema({
  name:{ type:String , requires:true},

    image:{ type:String , requires:true},
      price:{ type:Number , requires:true},
        size:{ type:String , requires:true}

})


module.exports =  mongoose.model("Menu",menuSchema);

//it is exported to homeController
