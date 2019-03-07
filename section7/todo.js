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

   form.addEventListener("submit", addTodo); // form submit olunca calisacak event
   document.addEventListener("DomContentLoaded", loadAllTodosToUI);  // Sayfa yuklenince olusan event

}




//sayfa yüklendiğinde localstorage dan todo ları alıp ekrana ekleyen method

function loadAllTodosToUI() {
    let todos = getTodosFromStorage();  // localstorage dan todo lari aldik
    console.log("Hakan");
    console.log(todos);
    
    todos.forEach(function(e) {   // Aldigimiz TODO larin herbirini donuyoruz. Alt alta yazdiriyoruz.
        addTodoToUI(e);
    });
}


function addTodo(e) {

    const newvalue = todoinput.value.trim();   // TRIM fonksiyonu String in basindaki ve sonundaki bosluklari siler

    if(newvalue === "") {
//        showAlert(type,message);
          showAlert("danger","Lutfen bir todo giriniz....");
    } else {
        addTodoToUI(newvalue);  // inputtan okudugumuz todo yu ekrana basicak olan method
        addTodoToStorage(newvalue); // // inputtan okudugumuz todo yu local storage a yazacak olan method
        showAlert("success","TODO EKLENDI");
        todoinput.value = "";
    }

    e.preventDefault();
}


//TODO lari LOCAL STORAGE a  ekleme
function getTodosFromStorage() {  // localstorage dan TODO lari alan method
    let todos;

    if(localStorage.getItem("todos") === null) {
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));  // localstorage da string olarak yazan todos u array olarak aliyoruz
    }
    return todos;
}



// ara fonksiyon (ekleme islemi yapıyor)
function addTodoToStorage(newValue) { 
    let todos = getTodosFromStorage();
    todos.push(newValue);  // gelen veriyi aldigimiz array e ekledik.
    localStorage.setItem("todos",JSON.stringify(todos)); // yeni veri eklenmis array i tekrardan string olarak localstorage a gonderiyoruz.
}


//ara fonksiyon (alertleri ekrana basıyor)
function showAlert(type,message) {
    //alerti olusturuyouz
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;

    firstCardBody.appendChild(alert);  // Sectigimiz firstCardBody div inden sonra alert mesaji eklenir. (appendChild) Bu method uygulandigi elementten sonrasina ekleme yapar

    //setTimeout() methodu ise bir işlemin veya fonksiyonun belli bir süre sonunda çalışmasını sağlar.
    // Kullanimi: setTimeout(fonksiyonAdi, msturundenSure); NOT: 1 saniye = 1000ms’dir.
    //Bu methodu kullanarak verdigimiz alert in belirli bir sure sonra ortadan kalkmasini sagliyouz
    setTimeout(function() {
        alert.remove();
    },2000);

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

}