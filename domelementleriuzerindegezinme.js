//DOM ELEMENTLERI UZERINDE GEZINME

let value;

const todolist = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)")
const cardrow = document.querySelector(".card.row");

value = todolist;
value = todo;
value = cardrow;

// childNodes methodunu kullanarak todolist in child larini alacagiz (Text dahil alir. Sayi fazla cikar)

value = todolist.childNodes;  // 9 tane child dondu - Text leride saydi.
value = todolist.childNodes[0];

// Children = Sadece element olanlari alir. Text leri almaz. Tam child sayisini verir

value = todolist.children; // 4 tane child dondu
value = todolist.children[1]; // 2. child i aldik

value = todolist.children[1].textContent = "Degisti"; // 2. child in textini degistiriyoruz

value = cardrow;
value = cardrow.children; // cardrow un child larini getirir

value = cardrow.children[2].children[1].textContent = "Burasida Degisti";

value = todolist;
value = todolist.children[0];
value = todolist.firstElementChild;
value = todolist.lastElementChild;
value = todolist.children.length;
value = todolist.childElementCount;

value = cardrow;
value = cardrow.parentElement; // ebeveynini alir

value = cardrow.parentElement.parentElement; // body i alir

// Element Kardesleri bulma = Ebeveyni ayni olan kardesler

value = todo;

value = todo.previousElementSibling;  // Bir onceki element kardese gider
value = todo.nextElementSibling; // Bir sonraki element kardese gider
value = todo.nextElementSibling.nextElementSibling; // 2 alt kardese gittik




console.log(value);