fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(res => clothes(res))

let img = document.querySelector(".img")
let dressbox = document.querySelector(".dress-box")

function clothes(res) {

    let dress = Object.entries(res)

    //console.log(dress);
    for (i = 0; i < dress.length; i++) {
       // console.log(Object.entries(res)[i][1].price);
        let dressimage = `<div class="img"><img class="img-fluid" src="${Object.entries(res)[i][1].image}" width="220px height="200px"><h5 class="title">${Object.entries(res)[i][1].title}</h5><h4 class="price">Price:Rs.${Object.entries(res)[i][1].price}</h4><div class="d-grid gap-2 d-md-block"><button onclick="addcount(event)" class="btn btn-primary add" type="button">ADD CART</button></div></div>`
        dressbox.innerHTML += dressimage
    }
}

let cart = document.getElementById("cart")
let btn = document.querySelectorAll("button")
let btn2 = document.getElementById("btn")
console.log(cart);

function addcount(event){
   let button = event.target.parentElement.parentElement
     cart.append(button)
  
}
function remove(event){
    event.target.parentElement.remove()
} 



