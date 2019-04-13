//EVENT CAPTURING VE BUBBLING OLAYLARI

//Bu ozellik HTML dokumanina ozel bir ozellik. Js e ozel bir ozellik degil

//Event Bubbling (Olay kabarciklanmasi)
//Ornegin <h5> elementine tiklayinca DOM uzerinde bir click event i olusuyor. Bu event ayni denizdeki kabarciklar gibi
// event bubbling sayesinde bunun parent inada gecer. Daha sonra o parent a gecen click event i onunda parent ina geciyor
//Bu sekilde bir event  kabarciklanma islemine tabi olur. Bu DOM un bir ozelligi.
//Biz bir elemente tiklarsak bu tiklama islemi kabarciklanarak en ustteki parent a kadar gider. Orneklersek:

//Asagidaki ornekte .container sinifi cercevesindeki hangi noktaya tiklarsak tiklayalim olusan click event i 
//kabarciklanarak .container  parent ina kadar gider.

// document.querySelector(".container").addEventListener("click",function(e) {
//     console.log("Div containera tiklandi");
// });

// document.querySelector(".card.row").addEventListener("click",function(e) {
//     console.log("card row tiklandi");
// });

// document.querySelectorAll(".card-body")[1].addEventListener("click",function(e) {
//     console.log("Card Body tiklandi");
// });


//Event Capturing veya Delegation ozelligi = Bu yine DOM un bir ozelligidir.
// Event bubbling in tam tersidir.
// .card-body elementi icerisindeki hangi elemente tiklarsak tiklayalim .card-body elementine tiklamis olacagiz.

// Event Delagation sayesinde dinamik olarak ekledigimiz bir elementler uzerinde bile dinamik yonetme yapabiliriz

// DOM a dinamik olarak yeni birseyler ekleniyorsa oldukca onemli bir ozelliktir. DIKKAT ET UNUTMA

const cardbody = document.querySelectorAll(".card-body")[1];

cardbody.addEventListener("click",run);

function run(e) {
    //console.log("Card Body elementine tiklandi");
    if (e.target.className == "fa fa-remove") {
        console.log("Silme Islemi");
    }
    if (e.target.id == "filter") {
        console.log("Filtreleme Islemi");
    }
    if(e.target.id == "clear-todos") {
        console.log("Tum Taskleri Silme Islemi");
    }
    // console.log(e.target);
}

//HATIRLATMA: "target" ozelligi nereye basildiysa bize o degeri verir.

