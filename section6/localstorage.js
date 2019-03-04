//LOCAL STORAGE (Window objesi icerisinde bir obje)
//console.log(window); yazinca console da gorulebilir
// Local storage da biz degerlerimizi depoladigimiz zaman bu degerlerimiz ozellikle silmedigimiz boyunca 
//browser i kapatsak bile kalir. Biz bunlari js ile silebiliriz veya gelistirici araci alanindan saga tiklayarak silebiliriz

//Local Storage a 1 tane deger atama. SetItem

// localStorage.setItem("hareket", "Silah Omuzda");
// localStorage.setItem("tekrar sayisi", 5);  // Local storage a butun degerler string olarak kaydedilir.

// // Get Item

// const value = localStorage.getItem("tekrar sayisi");  // "GETITEM" methodu ile storage deki bir key in degerini alabiliriz.
// console.log(value);
// console.log(typeof value);  // string olarak gelir. Hersey string olarak kaydedilir storage lara

// localStorage.clear();  // Local storage daki herseyi temizleyebiliriz.

// console.log(localStorage.getItem("hakan")); // boyle bir key olmadigi icin NULL doner

// if(localStorage.getItem("Hakan") === null) {
//     console.log("Aradiginiz veri bulunmuyor");
// }else
// {
//     console.log("Veri VAR");
// }

// //LOCAL STORAGE a ARRAY yazma

// //JSON STRINGFY VE JSON PARSE methodlari

// const todos = ["Todo1", "Todo2", "Todo3"];

// localStorage.setItem("todos",todos);  // Bu sekilde yazarsak ARRAY leri alir, her bir elemanin arasina virgul koyarak tek bir deger olarak kaydeder.

// // Simdi gercek bir array olarak yazalim ve alirkende array olarak alalim

// localStorage.setItem("todos",JSON.stringify(todos));  // array olarak yazma

// const value = JSON.parse(localStorage.getItem("todos"));  // array olarak aliyoruz
// console.log(value);

//ORNEK UYGULAMA

// todo ID li inputumuzdan aldigimiz degerleri bir tane array e atiyacagiz ve bu array i local storage a yazacagiz

const form = document.getElementById("todo-form"); // uzerinde calisacagimiz FORM u sectik
const todoInput = document.getElementById("todo"); // okuma yapacagimiz input

form.addEventListener("submit",addtodo);  // form submit oldugunda "addtodo" foksiyonu calissin diyoruz

function addtodo(e) {

    const value = todoInput.value; // inputtan degeri al
    let todos;                      // storage da todos isimli deger(key) var mi diye kontrol edecegiz. Bu todos da o storage a yazilacak olan key. Alttaki adimlarda bu kelimeyi kontrol ederek gidecegiz. "todos" isimli bir array var mi diye kontol etmis oluyoruz. Arrayler de storage a yazilirken key - value seklinde yazilirlar.

    if(localStorage.getItem("todos") === null ) {  // todos isimli bir array yoksa todos ARRAY ini olusturuyoruz
        todos = []; // Eger null gelmisse todos isimli bir array olusturuyoruz.
    }
    else {
        // todos isimli bir array (key) varsa o array i getItem methoduyla array formatinda almamiz gerekiyor
        todos = JSON.parse(localStorage.getItem("todos")); // var olan "todos" isimli array i ARRAY olarak aliyoruz
    }

    todos.push(value); // Inputtan okudugumuz degeri ARRAY in icine ekliyoruz(ARRAY e ekleme push ile yapiliyor)

    localStorage.setItem("todos",JSON.stringify(todos)); // Yeni deger eklenmis ARRAY i setItem ile LOCAL STORAGE a tekrardan ekliyoruz.

    e.preventDefault(); // submit olayi olunca sayfanin yenilenmesini engellemek icin preventDefault() methodunu kullaniyoruz
}
