//Promise Uygulamali Kullanimi
//Callback mi kullaniriz Promise mi kullaniriz bize kalmistir. Hangisi kolayimiza gelirse onu kullaniriz.

//REST API lere istekte bulunurken (get-put-post-delete) PROMISE yapisi oldukca avantajlidir.
//PROMISE yapisi vuejs, reactjs, emberjs, angular gibi yapilarda oldukca fazla kullanilir

// function getData(data) { // promise objesi donderen fonksiyon
    
//     //Donecek olan Promise objesi kendi icine 2 parametreli(resolve,reject) 1 tane callback fonksiyonu alir
//     return new Promise(function(resolve,reject) {
//         setTimeout(function(){
//             resolve("Olumlu sonuc");  // Burada kullandigimiz resolve() fonksiyonu js de tanimli
//         },10000);

//         setTimeout(function(){
//             reject("Olumsuz sonuc");  // Burada kullandigimiz reject() fonksiyonu js de tanimli
//         },5000);

//     });
// }

// console.log(getData("Merhaba"));   // Bu fonksiyonu cagiriyoruz.

/*CIKTISI:
10 saniye beklemeden hemen console acar ve bakarsak olumlu sonucumuz(resolve) henuz donmedigi icin:

Promise
__proto__: Promise
[[PromiseStatus]]: "pending"
[[PromiseValue]]: undefined

sonucunu aliriz.

10 saniye bekledikten sonra console acar ve promise objemize bakarsak sonuc:

Promise 
__proto__: Promise
[[PromiseStatus]]: "resolved"
[[PromiseValue]]: "Olumlu sonuc"

seklinde olur.

5 saniye bekledikten sonra console acar ve promise objemize bakarsak sonuc:

Promise 
__proto__: Promise
[[PromiseStatus]]: "rejected"
[[PromiseValue]]: "Olumsuz sonuc"

seklinde olur

*/

//OLUMLU DURUM ALMA (THEN ve CATCH yapisi)

function getData(data) { // promise objesi donderen fonksiyon
    
    //Donecek olan Promise objesi kendi icine 2 parametreli(resolve,reject) 1 tane callback fonksiyonu alir
    return new Promise(function(resolve,reject) {
        setTimeout(function(){
            resolve("Olumlu sonuc");  // Burada kullandigimiz resolve() fonksiyonu js de tanimli
        },5000);

    });
}

//resolve() fonksiyonu ile donderilen degeri THEN ile yakalariz
getData("Merhaba").then(function(response){  // response = Olumlu Sonuc      degeri gelecek
    console.log(response);
});


function getData2(data) { // promise objesi donderen fonksiyon
    
    //Donecek olan Promise objesi kendi icine 2 parametreli(resolve,reject) 1 tane callback fonksiyonu alir
    return new Promise(function(resolve,reject) {
        setTimeout(function(){
            reject("Olumsuz sonuc");  // Burada kullandigimiz resolve() fonksiyonu js de tanimli
        },6000);

    });
}

//reject() fonksiyonu ile donderilen degeri CATCH ile yakalariz
getData2("Merhaba").catch(function(err){  // response = Olumsuz Sonuc      degeri gelecek
    console.log(err);
});


//Cikti: Olumsuz sonuc



//THEN VE CATCH fonksiyonlarini birlikte kullanma

function getData3(data) { // promise objesi donderen fonksiyon
    
    //Donecek olan Promise objesi kendi icine 2 parametreli(resolve,reject) 1 tane callback fonksiyonu alir
    return new Promise(function(resolve,reject) {
        setTimeout(function(){
           if(typeof data === "string") {
               //olumlu
               resolve(data);
           }
           else {
               //Olumsuz
               reject("Lutfen String bir deger girin")
           }
        },5000);

    });
}

//THEN ve CATCH fonksiyonlarini birbirlerine baglayarak kullaniyoruz. (JQUERY de oldukca yaygindir)
getData3("Merhaba").then(function(respone){  // String deger gonderiyorum
    console.log(`Gelen Deger: ${respone}`);
}).catch(function(err){
    console.log(`Donen Hata: ${err}`);
});

//Cikti: Gelen Deger: Merhaba


getData3(12).then(function(respone){        // Int deger gonderiyorum
    console.log(`Gelen Deger: ${respone}`);
}).catch(function(err){
    console.log(`Donen Hata: ${err}`);
});

//Cikti: Donen Hata: Lutfen String bir deger girin



//ERROR leri DAHA GUZEL YAZDIRMA

//Js de error şeklinde bir obje var. Ben reject in dondugu mesaji bu ERROR ile gonderirsem
//Js in olagan bir hatasiymis gibi ekrana yazilir.

function getData4(data) { // promise objesi donderen fonksiyon
    
    //Donecek olan Promise objesi kendi icine 2 parametreli(resolve,reject) 1 tane callback fonksiyonu alir
    return new Promise(function(resolve,reject) {
        setTimeout(function(){
           if(typeof data === "string") {
               //olumlu
               resolve(data);
           }
           else {
               //Olumsuz
               reject(new Error("Lutfen String bir deger girin"));
           }
        },5000);

    });
}

// getData4(12).then(function(respone){        // Int deger gonderiyorum
//     console.log(`Gelen Deger: ${respone}`);
// }).catch(function(err){
//     console.log(err);
//     console.error(err); // Hata mesajini kirmizi renkte yazar
// });

//Cikti: Error: Lutfen String bir deger girin at app.js:150 
// Bu tip bir error donmek error un nerede olduguyla ilgili daha fazla bilgide verir.

//FONKSIYONLARIMIZI ARROW FUNCTION SEKLINDE YAZMA

//Arrow Function yazim kurallari hatirlatma:
//1) Arrow function larda tek bir parametre varsa parametreleri kapsayan (...) parantezlere gerek yok
// 2)Arrow function lar icinde tek bir islem yapiliyorsa function govdesini cevreleryen suslu parantezlere ihtiyacimiz yok

getData4(12)
.then (respone => console.log(`Gelen Deger: ${respone}`))
.catch (err => console.error(err));

//PROMISE CHAIN (Promise Zincirleri)

/*
Biri diğerini bekleyen asenkron işlemlerin arka arkaya çalıştırılması.
Örneğin, cep telefonunda kullandığımız bir uygulamaya güncelleme geldiğinde,
önce güncellemenin tamamlanması bekleriz, ardından uygulamadan içerik talep edebiliriz.
Promise yapısı gereği asenkrondur ve uygulamadaki bekleyen diğer kodların çalışmasını bekletmez.
Bu yüzden sıralı asenkron işlemlerin birbirini beklemesi için promise zinciri diyebileceğimiz
yapılar oluşturmamız gerekir.
THEN ICINDEN RETURN ILE DEGER DONDUREREK ZINCIR OLUSTURURUZ
Bazen THEN icerisinden return ile deger dondeririz. Bu donen degerlerde yine promise olarak gelecektir.
Biz bu durumlarda pes pese then - then diyerek birbirlerine promise olarak donen degerleri yakalayabiliriz.
Bu isleme PROMISE CHAIN denir


UYGULANMASI:

--Birden fazla .then() arka arkaya eklenerek oluşturulur.
--Hataların yakalanması için tek bir .catch() yeterlidir. Zincir içerisinde ne zaman
başarısız (rejected) bir promise veya beklenmedik bir hata oluşursa, sonrasındaki
.then() halkaları atlanılarak .catch() içerisindeki fonksiyon çalışır.

UNUTMA: then() leri ard arda kullaniriz ama sadece 1 defa CATCH() kullaniriz.

Yeni bir fonksiyonda bunun uygulanmasini gorelim
*/

function addTwo(number) {

    //Promise objesinin callback fonksiyonunu da arrow function seklinde yaziyorum
    return new Promise((resolve,reject) => {
        setTimeout(function(){
            if(typeof number === "number") {
                resolve(number+2);
            }
            else {
                reject(new Error("Lutfen bir sayi girin"));
            }
        },1000);
    })

}

addTwo(10)
.then(response => {
    console.log(`Donen deger: ${response}`);  //response = 12
    return response + 2;                     // 12 + 2 = 14 degerini donduk
})
.then(response2 => console.log(`Ust satirdan donen deger: ${response2}`))  // response2 = 14
.catch(reason => console.error(reason));  // Yalnizca 1 tane catch() kullanabiliriz

/*
Cikti:
Donen deger: 12
Ust satirdan donen deger: 14
*/