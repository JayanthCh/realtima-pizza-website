import axios from "axios"


let addToCart = document.querySelectorAll(".add-to-cart");



function updateCart(pizza){
  axios.post("/update-cart",pizza).then(function(res){
    console.log(res);
  })
}
addToCart.forEach(function(btn){
  btn.addEventListener("click",function(e){

    let pizza = JSON.parse(btn.dataset.pizza); //if we click add btn then we will get the data in it..cause data-pizza is used on button
    //we used stringy there and we should reverse it to get objects
   updateCart(pizza);

  })
})
