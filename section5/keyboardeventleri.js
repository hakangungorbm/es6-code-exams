//KLAVYE EVENTLERI = Ana olarak 3 event i vardir.

//KEYPRESS = Klavyede herhangi bir tusa bastigimizda calisan event. Sadece harfler ve sayilar kabul edilir.

// document.addEventListener("keypress",run);

// function run(e) {
//     // console.log("Naber");
//     console.log(e.which); // hangi tusa basildigini ASCII tablosundaki degerini verir    
//     console.log(e.key); // hangi tusa bastigimizi karakter olarak goruruz
// }




//KEYDOWN = Sadece harf ve sayilar degil klavyedeki herhangi bir tusa basinca calisan event tir.

// document.addEventListener("keydown",run);

// function run(e) {
//     // console.log("Naber");
//     console.log(e.which); // hangi tusa basildigini ASCII tablosundaki degerini verir    
//     console.log(e.key); // hangi tusa bastigimizi karakter olarak goruruz
// }




//KEYUP = bir tusa basmayi birakinca olusan event tir. Butun tuslar icin calisir

// document.addEventListener("keyup",run);

// function run(e) {
//     // console.log("Naber");
//     console.log(e.which); // hangi tusa basildigini ASCII tablosundaki degerini verir    
//     console.log(e.key); // hangi tusa bastigimizi karakter olarak goruruz
// }

//ORNEK UYGULAMA (Her keyup event i olusunca belirledigimiz text content otomatik olarak guncelleme)

const header = document.querySelector(".card-header");
const todoinput = document.querySelector("#todo");

todoinput.addEventListener("keyup",changetext);

function changetext(e) {
   header.textContent =  e.target.value;
}