//ELEMENT LERIMIZE DINAMIK OZELLIKLER EKLEMEK

// const element = document.querySelector("#clear-todos");

// console.log(element.id);
// console.log(element.className);
// console.log(element.classList[0]);
// console.log(element.textContent);  // Sadece yazilari alir
// console.log(element.classList);  // DOMTokenList şeklinde getirir
// console.log(element.innerHTML);  // Yine sadece yazilari alir
// console.log(element.href);    // href degerini getirir
// console.log(element.style); // Bu sectigimiz element icin kullanabilecegimiz butun style ozelliklerini listeler

// ELEMENT ve STYLE ozelliklerini degistirme

// element.className = "btn btn-primary";
// element.style.color = "#000";
// element.style.marginLeft = "5px";
// element.href = "https://www.google.com";
// element.target = "_blank";

// element.textContent = "Silin";

// element.innerHTML = "<span style='color:green'>Silin</span>" // YAZISINI DEGISTIKDIK


// const elements = document.querySelectorAll(".list-group-item"); // node list doner

// elements.forEach(function(el) {
//     el.style.color = "red";
// });

let element2 = document.querySelector("li:last-child");
element2 = document.querySelector("li:nth-child(2)");
element2 = document.querySelector("li:first-child");
element2 = document.querySelectorAll("li:nth-child(odd)"); // 1  - 3- 5 . cocuklari secmis olduk
element2 = document.querySelectorAll("li:nth-child(even)"); // 2  - 4- 6 . cocuklari secmis olduk
//console.log(element2);

let element3 = Array.from(element2);


element3.forEach(function(el) {
    el.style.color = "red";
});

 
console.log(element3);


