//Document Object Model (DOM) dilleri barındıran bir standart olarak tanımlanmaktadır.
//DOM, HTML ile programlama dilleri arasında bir standart oluşturarak bu dillerin HTML den bilgi alıp, bilgi vermesine yardımcı olur.
//DOM, Nesneler ve özelliklerden oluşur. DOM da nesnelerin birer öğe (element) olarak kullanılabilmesi için hiyerarşik bir düzen izlenerek çağrılmaları gerekir.
// Sayfalara interaktiflik katma olayına DOM MANIPULASYONU denir.

// Biz bu document üzerindeki elementlerimizi Javascript kullanarak manipule edebiliriz.

//WINDOW objesi

// console.log(this.document); // aşağıdakiyle aynı (Butun html i verir)
//console.log(document);

let value;

//value = document.all; // Tüm HTML elementlerimiz bize HTML collection olarak gelecek. Bu collection uzerinde array lerde gezinir gibi gezinebiliriz

value = document.all.length;  // HTML içerisinde bulunan element sayısını verir.

value = document.all[2]; // HTML içerisindeki 3. elementimiz gelir

value = document.all[document.all.length-1];

const elements = document.all;  // Bize HTML Collection doner 

// // tum elementleri donmenin 1. yolu
// for (let i = 0; i < elements.length ; i++) {
//     console.log(elements[i]);
// }

// // 2. yolu fakat HTML Collection lar uzerinde foreach i kullanamayiz.
// //Foreach kullanmak icin "document.all" u arraylere cevirmemiz lazim (3. adimda bu islem yapiliyor)
// elements.foreach(function(element) {
//     console.log(element);
// });

// // HMTL Collection u ARRAY e donusturuyoruz
// const collections = Array.from(document.all);

// collections.forEach(function(element) {
//     console.log(element);
// });


// console.log(value);

// //HERHANGI BIR ELEMENTE ULASMAK (ornek: body elementine)
// value = document.all[8];  // 1. yontem

// value = document.body;  // 2. yontem


// console.log(value);

value = document;

//Scriptler, links, forms secme

value = document.scripts;

value = document.links[document.links.length - 1].getAttribute("class");
value = document.links[document.links.length - 1].getAttribute("href");
value = document.links[document.links.length - 1].className;
value = document.links[document.links.length - 1].classList;

value = document.forms[document.forms.length - 1];
value = document.forms["form"];

value = document.forms[0].id;

value = document.forms[0].getAttribute("id");

value = document.forms[0].method;

console.log(value);
