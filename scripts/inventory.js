



let productArr = JSON.parse(localStorage.getItem("products"));


console.log(productArr);


productArr.forEach(function(el,ind){


    let card = document.createElement("div");
card.setAttribute("id","card");

    let img = document.createElement("img");

    img.setAttribute("src",el.image);

    let type = document.createElement("p");

    type.innerText= el.type;

    let price = document.createElement("h3");

    price.innerText = el.price;

    let desc = document.createElement("p");

    desc.innerText= el.desc;

    let dele = document.createElement("button");

    dele.innerText= "Remove";
    dele.setAttribute("id","remove_product");

    dele.addEventListener("click",function(){

        funDelete(el,ind);
    })



    card.append(img, type, price, desc, dele);

    document.getElementById("all_products").append(card);


});



function funDelete(el,ind){


    productArr.splice(ind,1);

    localStorage.setItem("products", JSON.stringify(productArr));


    window.location.reload();

}








let add_more_product = document.getElementById("add_more_product");


add_more_product.addEventListener("click", myDir);

function myDir(){

    window.location.href ="index.html"
}