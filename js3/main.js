/*let ele1 = document.getElementById("example");

ele1.innerHTML += " <b>Shibu</b>";

let fruits = document.getElementById("fruits");

fruits.innerHTML += "<li>Watermelon</li>";

let pears = document.createElement("li");

pears.innerHTML = "Pears";

fruits.appendChild(pears);*/


let ele1 = document.querySelectorAll("#fruits li");

for(let ele of ele1){
    ele.innerHTML += " is a fruit";
}