//MOUSE EVENTLERI

const cardbody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");

console.log(title);
console.log(cardbody);

// //CLICK EVENT

// title.addEventListener("click",run);

// function run(e) {
//     console.log(e.type);
// }

// //DOUBLE CLICK EVENT  

// title.addEventListener("dblclick",run);

// function run(e) {
//     console.log(e.type);
// }

// //MOUSE DOWN EVENT  = Tiklamaya baslayinca olusan event

// title.addEventListener("mousedown",run);

// function run(e) {
//     console.log(e.type);
// }

// //MOUSE UP EVENT  = Tiklamayi bitirdigimiz anda olusan event

// title.addEventListener("mouseup",run);

// function run(e) {
//     console.log(e.type);
// }


// //MOUSE OVER EVENT  = Sectigimiz elementin uzerine mouse ile geldigimizde olusan event

// title.addEventListener("mouseover", run);

// function run(e) {
//     console.log(e.type);
// }

// //MOUSE OUT EVENT  = Sectigimiz elementin uzerinden mouse u cektigimiz anda olusan event

// title.addEventListener("mouseout", run);

// function run(e) {
//     console.log(e.type);
// }


// //MOUSE OVER ve MOUSE OUT U BIRDEN COK ELEMENT ICEREN BIR DIV UZERINDE UYGULARSAK
// //her bir alt child uzerine geldigimizde mouse over olusur. Aynisi mouse out icinde gecerlidir
// //Burada cardbody elementi birden cok child a sahip bir element. Altinda bulunan butun elementlerin uzerine gelindiginde veya uzerinden cekildiginde mouse over ve mouse out event i olusur

// cardbody.addEventListener("mouseover", run);

// function run(e) {
//     console.log(e.type);
// }

// MOUSE ENTER ve MOUSE LEAVE
// Bu 2 event sadece ana element uzerine gelindiginde veya o elementten uzaklasildiginda olusur. Alt child larin uzerine gelindiginde olusmazlar

cardbody.addEventListener("mouseenter", run);

function run(e) {
    console.log(e.type);
}