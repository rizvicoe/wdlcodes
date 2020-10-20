/*let ele1 = document.getElementById("example");

ele1.innerHTML += " <b>Shibu</b>";

let fruits = document.getElementById("fruits");

fruits.innerHTML += "<li>Watermelon</li>";

let pears = document.createElement("li");

pears.innerHTML = "Pears";

fruits.appendChild(pears);*/


document.body.addEventListener('click',function(e){
    console.log(e.target.nodeName);
});
