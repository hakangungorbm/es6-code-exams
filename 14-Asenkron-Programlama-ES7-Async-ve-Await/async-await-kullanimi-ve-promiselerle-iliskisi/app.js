//Async, Await Kullanımı ve Promiselerle İlişkisi
/*Burada ES7 ile birlikte gelen ASYNC ve AWAIT anahtar kelimelerini anlamaya çalışacağız.

Bu 2 yapı ES6 daki promise leri daha effective kullanmak için gelen yapılardır.

Promisleri çok daha kolay yönetebiliyoruz.

Async ve await i kaynak olarak: https://javascript.info/   adresinden takip edebiliriz.

Async ve await lerden önce normal bir fonksiyon yazalım:
*/

var test = function(data) {
    return data;
}

console.log(test("Merhaba")); // Cikti: Merhaba

var test2 = async function(data) {
    return data;
}

console.log(test2("Merhaba"));  

//Cikti: 
/*
Promise {<resolved>: "Merhaba"}
[[PromiseStatus]]: "resolved"
[[PromiseValue]]: "Merhaba"
*/

//Async anahtar kelimesi bir fonksiyonun mutlaka ama mutlaka bir PROMISE donecegini soyler.
//Yani bir fonksiyonu ASYNC  yapmak "return new Promise" yazmak gibidir.
//Javascript test2 fonksiyonundaki "data" parametremizi promise deki RESOLVE a koyar

/*
Yani return data;  satiri = 

return new Promise((resolve,reject) => {
    resolve(data)
})

ya donusur. Hatayi su sekilde yakalayabiliriz.
*/

var test3 = async function(data) {
    return data;
}

test3("Deneme Texti")
.then(response => console.log("Bu Satir Calisiyor: " + response) )
.catch(err => console.log(err));

//Cikti: Bu Satir Calisiyor: Deneme Texti

//AWAIT anahtar kelimesi

/*
Await anahtar kelimesi de bir promise in resolve etmesini (olumlu donus yapmasini) bekleyen bir 
anahtar kelimedir. Ornekle inceleyelim.
*/

// Alttaki kod satirinda tanimladigimiz promise 3 sn sonra resolve edecek.
//Await bu 3 saniye sureyi bekleyecek ve alt satirlari calistirmayacak

var test4 = async function(data) {
    let promiseHakan = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Bu promisein dondugu response dur");  
        },3000)
    });

    let response = await promiseHakan;  // Bu satir 3 sn ye bekleyecek ve 3 sn sonra yukaridaki text response a gelecek
    console.log(response);
    console.log("naber");  
}

test4(); //DIKKAT: fonksiyonumuzu parametreli sekilde tanimlamamiza ragmen parametresiz cagirdik. Bu js de mumkun.

//Cikti: 
/*
Bu promisein dondugu response dur (3 sn sonra yazdi)
naber (ustteki satir ekrana yazildiktan sonra bu satir yazildi)
*/

//DIKKAT: AWAIT sadece ASYNC fonksiyonlar icerisinde calisir.

//Response u fonksiyonun disina gonderelim. Disarida kullanabilelim dersek

var test5 = async function(data) {
    let promiseHakan = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Bu resolve ile promisein dondugu degerdir");  
        },3000)
    });

    let responseasdf = await promiseHakan;  // Bu satir 3 sn ye bekleyecek ve 3 sn sonra yukaridaki text response a gelecek
    return responseasdf;
}

test5().then(responsedegeri => console.log(responsedegeri));// Ciktisi:  Bu resolve ile promisein dondugu degerdir


// YENI BIR ORNEKLE PEKISTIRELIM

var testData = async function(data) {
    let promiseobjesi = new Promise((resolve,reject) => {
        setTimeout(() => {
            if(typeof data === "string") {
                resolve(data);
            }else {
                reject(new Error("Lutfen String bir deger girin"));
            }
        },5000);
    });

    const responseDegiskeni = await promiseobjesi;  // 5 sn bloklanacak ve alt satirlara gecmeyecek

    //Eger yukaridaki islem gerceklesmisse "responseDegiskeni" degerimizi donecegiz.

    return responseDegiskeni;
}

testData(1213)
.then(gelenveri => console.log(gelenveri))
.catch(err => console.error(err));

// Cikti: String Degisken

//Hata aldigimizdaki cikti:  Error: Lutfen String bir deger girin at app.js:112 // Bu durumdada yine promise dondu ama bu sefer reject olarak dondu

//ASYNC ve AWAIT lerin en guzel kullanimi FETCH fonksiyonu iledir. Simdi bunu gorelim

var getCurrency = async function(url) {
    const responseObjemiz = await fetch(url);  // Burada response object donecek
    console.log(responseObjemiz); // ciktisi bir response objesi: Response {type: "cors", url: "https://api.exchangeratesapi.io/latest", redirected: false, status: 200, ok: true, …}

    const veri = await responseObjemiz.json();  // Gelen objemizi json objesine cevirdik
    console.log(veri);  // Ciktisi bir json objesi

    // Yazdirmak yerine return de edip, fonksiyonu cagirdigimiz yerde  bu veriyi kullanabiliriz.
    return veri;
}

getCurrency("https://api.exchangeratesapi.io/latest"); // Cikti: {base: "EUR", rates: {…}, date: "2019-04-18"}