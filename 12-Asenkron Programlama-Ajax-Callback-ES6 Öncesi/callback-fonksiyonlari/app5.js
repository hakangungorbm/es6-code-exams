
/**
callback fonksiyonlari
----------------------------
Asenkron programlamayla mucadele etmek icin kullandigimiz eski bir js yontemidir. Hala kullaniliyor.
setTimeout(), forEach() fonksiyonlari icinde veya bir event olustugunda onun icine gonderiyorduk
Bu alanlarda kullandik. Yani bir fonksiyonun icine baska bir fonksiyon gondermedir.
callback fonksiyonlar normal birer fonksiyondur. Ancak biz bu fonksiyonlari baska fonksiyonlara
parametre olarak gondeririz.

Ayrica callback fonksiyonlari ile asenkron islemlerimizi yonetebiliriz.
 */

 //Ornek:

//  const langs = ["python", "Java", "C++"];  // array olustuduk

 // langs arrayi icinde tek tek donmek icin kullandigimiz forEach() methodu icine function() olarak
 // 1 tane call back fonksiyonunu forEach() fonksiyonuna parametre olarak gonderiyoruz.
 //Bu gonderdigimiz callback fonksiyonunada "dil" isimli 1 tane parametre veriyoruz.
//  langs.forEach(function(dil){  
//      console.log(dil);
//  });

 /**
  Cikti:

  python
  Java
  C++

  */

//Ornek2
//Butonu seciyoruz. Bu butona tikladiginda (click event i oldugunda) 1 tane fonksiyon calistirmasini
//istiyoruz.

// document.getElementById("btn").addEventListener("click",function(){  // Buradaki function() CALLBACK fonksiyonu oldu
//     console.log("Tikladin");
// });


//Ornek3
//setTimeout() methodumuza callback fonksiyonu gonderiyoruz

// setTimeout(function(){
//     console.log("Naber");   // 2 saniye sonra console a "Naber" yazacak
// },2000);

//Ornek4
/*setInterval methodumuza callback fonsiyon gonderiyoruz
let i = 0;
setInterval(function(){  // 2 saniye araliklarla icerideki fonksiyonu tekrar tekrar calistirir
    i++;
    console.log(`Sayi: ${i}`);
},2000);
*/



//Kendi fonksiyonlarimizida callback fonksiyonlari parametre olarak alacak sekilde kullanabiliriz.
//Islemlerimiz bittikten sonra bu callback fonksiyonunu calistirabiliriz.
//Yani asenkron islemlerimizi callback sayesinde yonetebiliriz.

//Ornek: Asenkron islemleri CALLBACK fonksiyonu ile yonetme

//Adim1: 2 tane fonksiyon tanimliyorum
// function process1(){
//     console.log("process 1");
// }

// function process2() {
//     console.log("process 2");
// }

//Adim2: Bu 2 fonksiyonu ard arda (asenkron sekilde) cagiriyorum.

// process1();
// process2();

//Cikti: 

/**
process 1
process 2
 */

 //Ilk fonsiyonumuzu su sekilde degistiriyorum. Ikinci fonksiyonum aynen kaliyor

//  function process1(){
//    setTimeout(function(){
//     console.log("process 1");
//    },3000);
// }

// function process2() {
//     setTimeout(function(){
//         console.log("process 2");
//        },2000);
// }

// process1();                // 3 saniye sonra calisir
// process2();                // 2 saniye sonra calisir
// console.log("3. Islem");   // hemen calisir

//Yukarida cagirdigim fonksiyonlar asenkron olarak calisacagi icin (bir fonksiyonun calismasi baska
//bir fonksiyonun calismasini bitirmesini beklemeyecek) process2 fonksiyonu calismak icin 3 saniye
//sonra calisacak olan process1 fonksiyonunu beklemeyecektir. O yuzden process2 fonksiyonu process1
//fonksiyonundan once calisacaktir.
//Yani js in yapisi geregi (js asenkron calisir) fonksiyonlar birbirini bloklamayacaktir.
//Cikti: 

/**
3. Islem   // hemen calis
process 2
process 1
 */

 //Peki biz boyle bir durumda
 //[process1 = 3 saniye sonra calissin]
 //[process2 = 2 saniye sonra calissin]
 // ve process2, process1 den sonra baslamasini istiyorsam bu durumda process2 yi process 1 e 
 //callback seklinde gondeririz

//  function process1(callback){
//     setTimeout(function(){
//      console.log("process 1");
//     callback(); 
//     },3000);
//  }
 
//  function process2() {
//      setTimeout(function(){
//          console.log("process 2");
//         },2000);
//  }

//  process1(process2);       // process2 fonksiyonunu callback seklinde gonderdim  

 //Bu durumda ilkonce process1 in icindeki yazilir. Sonra callback fonksiyonu calisir (process2)

 /*
 Cikti:

 process1
 process2
 */

//Bu durum nerede isimize yarayacak:
//Ornegin ben 1 tane fonksiyonu bir yerden veri geldiginde calistirmak istiyorum. O zaman bu fonksiyonu
//callback olarak gondermem gerekir.




//Diger Ornek

const langs = ["python", "Java", "C++"];

// function addLang(lang){
//     setTimeout(function() {
//         langs.push(lang);           // Bu fonksiyon calistiginda gelecek olan parametre yukardaki array e eklenecek
//         console.log("Eklendi");
//     },2000);
// }

// function getAllLangs(){
//     setTimeout(function(){
//         langs.forEach(function(lang){
//             console.log(lang);
//         });
//     },1000);
// }


// //Asagida ekleme islemi yapmadan butun dilleri yazacak. Biz once eklesin sonra dilleri yazsin istiyoruz
// //Asenkron durumda bu mumkun degil
// addLang("Javascript");
// getAllLangs();

/* Cikti: Dikkat: Asagidaki yazdirdigimiz listede Javascript dili yok.
Cunku once getAllLangs() methodu calisti. Daha sonra addLang() methodu calisti

Python
Java
C++
Eklendi
*/

//Bu asenkron durumu yonetmemiz icin yine CALLBACK kullanmamiz gerekiyor

function addLang(lang,callback){
    setTimeout(function() {
        langs.push(lang);           // Bu fonksiyon calistiginda gelecek olan parametre yukardaki array e eklenecek
        console.log("Eklendi");
        callback();
    },2000);
}

function getAllLangs(){
    setTimeout(function(){
        langs.forEach(function(lang){
            console.log(lang);
        });
    },1000);
}


//Asagida ekleme islemi yapmadan butun dilleri yazacak. Biz once eklesin sonra dilleri yazsin istiyoruz
//Asenkron durumda bu mumkun degil
addLang("Javascript",getAllLangs);       //getAlllangs methodunu callback seklinde gonderdik.


/* Cikti: Dikkat: Asagidaki yazdirdigimiz listede Javascript dili de var.
Cunku once addLang() methodu calisti. getAllLangs() methodunu callback olarak gonderdigimiz icin sonra calisti.

Eklendi
Python
Java
C++
Javascript
*/