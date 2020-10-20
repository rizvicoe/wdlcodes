let products = [
    {
        name: "Apples",
        amount: 200,
        weight: "1 KG",
        image: "https://via.placeholder.com/100"
    },
    {
        name: "Oranges",
        amount: 80,
        weight: "1 KG",
        image: "https://via.placeholder.com/100"
    },
    {
        name: "Pears",
        amount: 240,
        weight: "1 KG",
        image: "https://via.placeholder.com/100"
    },
    {
        name: "Watermelon",
        amount: 50,
        weight: "1.5 KG",
        image: "https://via.placeholder.com/100"
    }
];

let productsDom = document.querySelector(".products"); 

productsDom.addEventListener('click',function(e){
    if(e.target.nodeName=='BUTTON'){
        console.log("Hi");
    }
});





function renderProducts(){
   products.forEach(function(product){
        productsDom.innerHTML += `<div class="pcard">
                                    <img src="${product.image}" alt="">
                                    <h2>${product.name}</h2>
                                    <h3>Rs. ${product.amount}</h3>
                                    <p>Quantity : ${product.weight}</p>
                                    <button>+ Add to Cart</button>
                                </div>`;
   });
}




renderProducts();