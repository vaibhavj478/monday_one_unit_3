//store the products array in localstorage as "products"


console.log("hello");




// let add_product = document.getElementById("add_product");
let form = document.getElementById("products");

form.addEventListener("submit", myFunction);

let productArr = JSON.parse(localStorage.getItem("products")) || [];


function myFunction(){

    event.preventDefault();

    let form = document.getElementById("products");

    let obj = {
        type: form.type.value ,
        desc: form.desc.value ,
        price: form.price.value ,
        image: form.image.value

    }


    productArr.push(obj);


    localStorage.setItem("products",JSON.stringify(productArr) );



   form.type.value =""
       form.desc.value =""
     form.price.value=""
       form.image.value=""
   
}



let show_products = document.getElementById("show_products");


show_products.addEventListener("click", myDir);

function myDir(){

    window.location.href ="inventory.html"
}