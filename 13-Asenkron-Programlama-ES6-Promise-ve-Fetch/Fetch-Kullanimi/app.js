//FETCH API si
/*
FETCH API, AJAX a alternatif kullanilan Promise tabanlı asenkron bir veri alma ve veri gonderme API sidir.
Ajax'dan daha kolay bir kullanima sahiptir.
Fetch Api'nin bir ozelligi: Olumlu donuslerimizi RESOLVE islemiyle kendi icinde doner. Yani bize promise doner.
Bizde bunu cagirdigimiz zaman THEN ile yakalayabiliriz. Ayni sekilde hata durumunuda REJECT ile doner
ve bizde bunu CATCH ile yakalariz. fetch özelliği bütün tarayıcılar tarafından desteklenmemektedir

Bu fetch() fonksiyonu window objesinin bir fonksiyonudur. Bu bize bir arayuz sunar ve bu arayuz bize 
bir tane response doner.

Fetch() methodunu this.fetch() diyerek veya direkt kendi ismiyle kullanabiliri(window objesinin methodlarini kendi ismiyle kullanibiliyoruz)



Text dosyasindan, Rest Api den verilerimizi almaya calisacagiz.
*/

//TEXT DOSYASINDAN VERIMIZI ASENKRON BIR SEKILDE ALALIM

function getTextFile() {
    //console.log(this); // Bu fetch() fonksiyonu window objesinin bir fonksiyonudur.

    fetch("example.txt")   //fetch() fonksiyonunu direkt ismiyle kullaniyorum
    //Hatirlatma: Arrow function larda tek bir return yapiyorsak "return" kelimesini yazmamiza gerek yok
    .then(response => response.text())   // Response objesinin text() fonksiyonunu kullanarak response u text olarak aliyorum
    .then(response2 => console.log(response2))    //promise chain yapiyorum
    .catch(err => console.log(err));
/*
Ciktisi: fetch api bize Response objesi dondu

Response {type: "basic", url: "...example.txt", redirected: false, status: 200, ok: true, …}

Response objesinin PROTO kisminda isimize yarayacak 2 tane fonksiyonu gorebiliriz. Bunlar:

-text()  = response larin icerigini text formatinda alir.
-json()  = response larin icerigini json formatinda alir.

fonksiyonlaridir.

*/
}

//getTextFile();


//JSON VERIMIZI ASENKRON BIR SEKILDE ALALIM

function getJsonFile() {
    

    fetch("example.json")   //fetch() fonksiyonunu direkt ismiyle kullaniyorum
    
    .then(response => response.json())   // Response objesinin json() fonksiyonunu kullanarak response u json olarak aliyorum
    .then(response2 => console.log(response2))    //promise chain yapiyorum ve promise olarak donen json veriyi console a yaziyorum
    .catch(err => console.log(err));
/*
Ciktisi: fetch api bize Response objesi dondu

(3) [{…}, {…}, {…}]

*/
}

getJsonFile();


//DISARIDAKI REST API DEN VERIMIZI ASENKRON BIR SEKILDE ALALIM
//Not: fetch() fonksiyonuna request tipi belirtilmezse default GET request atar

function getExternalAPI() {
    
    //fetch() fonksiyonunu direkt ismiyle kullaniyor ve belirttigim endpoint e request atiyorum
    fetch("https://api.exchangeratesapi.io/latest")   // Bize bu api json donuyor
    
    .then(response => response.json())   // Response objesinin json() fonksiyonunu kullanarak API den u text olarak aliyorum
    .then(data => {   //promise chain yapiyorum ve promise olarak donen json veriyi tekrar then() icinde yakaliyorum console a yaziyorum
        
        console.log(data)   
        //Gelen json objedeki TRY degerini alalim
        console.log(`TRY degeri: ${data.rates.TRY}`)
    })
    .catch(err => console.log(err));
/*
Ciktisi: fetch api bize Response objesi dondu

{base: "EUR", rates: {…}, date: "2019-04-12"}
TRY degeri 6.535
*/
}

getExternalAPI();