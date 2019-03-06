//TODO PROJESI

//1. Elementlerimiz secilecek
//2 eventlisternets() methodu calisacak

//1. ADIM

//EKLEME ISLEMINDE KULLANACAGIMIZ ALANLAR
// Todo eklemede kullanacagimiz elementleri seciyoruz (input ve button)
const form = document.querySelector("#todo-form");
const todoinput = document.querySelector("#todo");
const todolist = document.querySelector(".list-group"); // ul elementini seciyorum. Cunku onun icine li seklinde ekleyecegim her bir todo yu

// bu form ve icindekileri kapsayan card div ini secmemiz gerekiyor. Bu div in icerisine "Basariyla eklendi" seklinde bir alert ekleyecegiz. O yuzden bu div i parent olarak seciyoruz.

const firstCardBody = document.querySelectorAll(".card-body")[0];  // 1. card-body div ini seciyoruz
const secondCardBody = document.querySelectorAll(".card-body")[1]  // 2. card-body div ini seciyoruz

//FILTRELEME ISLEMINDE KULLANACAGIMIZ INPUT ALANINI SECIYORUZ
const filter = document.querySelector("#filter");

// TUM KAYITLARI SILEN BUTON U SECIYORUZ
const clearButton = document.querySelector("#clear-todos");


//2. ADIM
// Ekleme de kullandigimiz forma bir SUBMIT ozelligi kazandirmak lazim.
// Form submit olunca todo muz todo larin listelendigi alana eklenmeli

//JavaScript'te addEventListener = HTML dokumani uzerinde belirtilen elementi dinleyip, istenilen olay gerceklestiginde calisan method dur (yani; DOM nesnelerine olay atamak icin kullanilir)
// YAPISI SOYLEDIR: element.addEventListener(olay, fonksiyon);
// Buradaki Olay: dinlenecek etikete ait olan hareketlilik. örn: click,mouseover,keypress, cut,scroll,dragenter vs.

eventListeners();

//Tum Event Listener methodlari bu fonksiyonun icinde calisacak
function eventListeners() {

    form.addEventListener("submit", addTodo);

}




    var todoArray;

    function addTodo(e) {

        const newvalue = todoinput.value.trim();   // TRIM fonksiyonu String in basindaki ve sonundaki bosluklari siler
        
        addTodoToUI(newvalue);  // inputtan okudugumuz todo yu ekrana basicak olan method

        if(localStorage.getItem("todoArray") === null) {
            todoArray = [];
        }
        else {
            todoArray = JSON.parse(localStorage.getItem("todoArray"));
        }
        todoArray.push(newvalue);
        e.preventDefault();
    }

    // inputtan okudugumuz sting degerini list item olarak ekran icin ayarladigimiz alana ekleyecek olan method
    function addTodoToUI(newTodo) {

        // Asagidaki örnek list-item i olusturuyoruz
        /* <li class="list-group-item d-flex justify-content-between">Todo 1<a href = "#" class ="delete-item"><i class = "fa fa-remove"></i></a></li> */

        //list Item olusturma
        const listItem = document.createElement("li");
        listItem.className = "list-group-item d-flex justify-content-between";

        //list Item icerisindeki linki olusturma
        const link = document.createElement("a");
        link.href = "#";
        link.className = "delete-item";
        link.innerHTML = "<i class = 'fa fa-remove'></i>";

        // gelen todo lari TEXT NODE olarak ekleme yapiyoruz

        listItem.appendChild(document.createTextNode(newTodo)); // Yukarıda ınputtan okudugumuz degeri text node olarak ekliyoruz
        listItem.appendChild(link); // <a> linkini ekliyoruz

        // <ul> içerisine olusan listItem i <li> yi ekliyoruz
        todolist.appendChild(listItem);

        //Ekleme yapildiktan sonra input un degerini siliyoruz
        todoInput.value = "";



    }