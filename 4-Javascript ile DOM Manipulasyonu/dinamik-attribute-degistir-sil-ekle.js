//ELEMENTIN OZELLIKLERI DINAMIK OLARAK EKLE - CIKAR - DEGISTIR

const todoinput = document.getElementById("todo");

let element;

element = todoinput.classList; // 1 tane sinifi var

// todoinput.className = "form-control newClass"; // yeni class eklemenin 1. yontemi
// todoinput.classList.add("newClass"); // yeni class eklemenin 2. yontemi
// todoinput.classList.add("newClass2");

// todoinput.classList.remove("form-control");  // form-control ismini cikardik

element = todoinput;
element = todoinput.getAttribute("placeholder");

todoinput.setAttribute("placeholder", "Yeni Deger");  // placeholder attribute unun degerini degistirme

todoinput.setAttribute("title","Input");

todoinput.removeAttribute("name");  // name attribute u siliyoruz

element = todoinput;
element = todoinput.hasAttribute("required");  // required attribute i varsa true yoksa false donecek

console.log(element);