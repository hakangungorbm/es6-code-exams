// ul, li, p gibi bir elementi secmenin bircok yontemi vardir. 

let element;

// Elementi ID ye gore secme

element = document.getElementById("todo-form");
element = document.getElementById("tasks-title");

// Elementi CLASS a gore secme

element = document.getElementsByClassName("list-group-item")[1];  // ikinci li elementini aliyoruz

element = document.getElementsByClassName("card-header");

// Elementi TAG e gore secme

element = document.getElementsByTagName("div");

// EN POPULER YONTEM = QUERY SELECTOR (css selector) . Sayfadaki ilk buldugu elementi secer

element = document.querySelector("#todo-form");

element = document.querySelector("#tasks-title");

element = document.querySelector(".list-group-item");  // Sayfadaki ilk li yi alir

element = document.querySelector("li");  // Sayfadaki ilk li

element = document.querySelector("div");  // Sayfadaki ilk div

// TUM LISTE LI LERINI ALMAK ISTERSEK = QUERY SELECTOR ALL kullanabiliriz

element = document.querySelectorAll(".list-group-item");  // tum listeyi getirdi

element.forEach(function(el) {  //  tum listeyi donme
    console.log(el);
});

console.log(element);