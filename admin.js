let nameInput = document.querySelector("#name_input");
let priceInput = document.querySelector("#price_input");
let addButton = document.querySelector("#add_btn");

addButton.addEventListener("click", () => {
    let name = nameInput.value;
    let price = priceInput.value;

    let newProduct = {
        name,
        price
    }

    let productsArray = JSON.parse(localStorage.getItem("productsArray"));
    if(productsArray === null){
        productsArray = [];
    }

    productsArray.push(newProduct);
    localStorage.setItem("productsArray", JSON.stringify(productsArray));
})