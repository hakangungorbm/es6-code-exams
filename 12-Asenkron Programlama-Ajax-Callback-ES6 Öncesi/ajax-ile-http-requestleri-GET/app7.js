//Ajax ile HTTP Requestleri GET 
// 4 tane HTTP Requesti var: GET, POST, PUT, DELETE. Internette bulunan bir API yi kullanarak bu istekleri yapacagiz
// Kullanacagimiz REST API: JSONPlaceholder (Fake Online REST API for Testing and Prototyping)

//Bu ornekte THIS anahtar kelimesininin karışma sıkıntısını nasıl çözeceğimizi
//ve arrow function i kullanacagiz.

//Burada Ajax ve callback ile http requestleri yapacagiz

// class Request {                                 // Bu sinifin 4 tane methodu olacak 
//     constructor () {
//         this.xhr = new XMLHttpRequest();  //xhr objemizi olusturduk
//     }

//     //Get request (callback yontemini kullaniyoruz) [1. Method]
//     get(url) {   // aldigi url parametresiyle get requestini yapacak olan method
        
//         //1. Adim= Baglantimizi aciyoruz
//         this.xhr.open("GET",url); 

//         //2. Adim = response basarili donerse onload() fonksiyonu calisacak
//         this.xhr.onload = function() {  // xhr objemize onload isimli bir tane fonksiyon tanimliyoruz.

//             console.log(this);  // Bu this in XMLHttpRequest objemizi gosterdigini gorebiliriz. Yani xhr objemizi gosteriyor.

//             //Asagidaki 2 satirda soyle bir hata aliriz. this anahtar kelimesi XMLHttpRequest objesi olan
//             //xhr'i gosteriyor. Bu nun icinde tekrar xhr diye bir ozellik ve bunun icindede yine status 
//             //diye bir ozellik ariyoruz. Boyle birsey olmadigi icin 'status' ozelligi aranilan konumda
//             //tanimli degil diye hata aliriz.
//             if(this.xhr.status === 200) {  // donen response un statusu 200 ise(basarili ise)
//                 console.log(this.xhr.responseText);   // donen veriyi konsola yaziyorum
//             }
//         }


//         // 3. Adim= requestimizi gonderdik(get request yaptigimiz icin send() methodu herhangi bir parametre almadi)
//         this.xhr.send();


//     }
// }

// const request = new Request();       // Request sinifindan 1 tane obje olusturdum

// request.get("https://jsonplaceholder.typicode.com/posts/1");

//Yukaridaki istegi yaptigimizda soyle bir hata aliriz.
/*HATA: Uncaught TypeError: Cannot read property 'status' of undefined at XMLHttpRequest.xhr.onload
yani status diye birsey tanimsiz diyor. Normalde XMLHttpRequest ten olusturdugumuz xhr objemizin STATUS
diye bir ozelligi var. Ama biz yok diye hata aliyoruz. Sebebi yukarida kullandigimiz THIS anahtar kelimesi.
Kullanidigimiz bu this anahtari nereyi gosteriyor diye baktigimizda XMLHttpRequest i gosterdigini goruyoruz.
Yani xhr in kendisini gosteriyor. Request i yani Request sinifindan turettigimiz requst objesini gostermiyor.
O yuzden burada hata aliriz.
Request sinifi icinde tanimladigimiz get() methodu icinde islem yapmamiza ragmen this anahtar
kelimesini xhr objemize tanimladigimiz onload() methodunda kullandigimiz icin Request sinifina ait objeleri degil
xhr objesini gosterir. Biz get() methodunu Request sinifi uzerinden olusturdugumuz request objesi uzerinden
cagirdigimiz icin status tanimsiz hatasini aliyoruz.
Bu hatalari cozmenin bircok yontemi vardir. Biz 
*/

/*
En ilkel yontemle hatanin cozumu:

1) get() methodu icerisinde xhr objesine ait onload fonksiyonu icerisinde this i kullanmadan once 

const _this = this; yaparak _this isimli yeni bir degisken tanimlayip (this Request sinifindan
turetilen objeleri gosterirken) this i bu yeni olusturdugumuz _this isimli degiskene atariz ve
this kullanmamiz gereken yerde bu yeni tanimladigimiz ve bizim istedigimiz objeyi gosteren _this
degiskeni kullaniriz. Sonra soyle dedigimizde:

_this.xhr.status === 200       =>  Request'in icindeki xhr'in status u 200 e esitse demis oluyoruz

this.xhr.status === 200        =>  XMLHttpRequest'in icindeki xhr'in status u diyorduk ve hata aliyorduk. 

Yukaridaki duzenlemeye gore kodumuzu yeniden yazalim

İki objeyi iç içe kullanabiliyoruz. Bu örnekte XMLHttpRequest objeleri içinde Request objelerini kullanacağız.
1. objeyi this anahtar kelimesi gösterecek. 2. objeyi _this anahtar kelimesi gösterecek. Bu sayede 
cakisma olmayacak.

*/

//İLKEL YÖNTEMLE THIS anahtar kelimesinin çakışmasını engellemek

// class Request {                                 // Bu sinifin 4 tane methodu olacak 
//     constructor () {
//         this.xhr = new XMLHttpRequest();  //xhr objemizi olusturduk
//     }


//     //Get request (callback yontemini kullaniyoruz) [1. Method]
//     get(url) {   // aldigi url parametresiyle get requestini yapacak olan method
        
//         //1. Adim= Baglantimizi aciyoruz
//         this.xhr.open("GET",url); 

//         //EK ADIM(this in gosterdigi objeyi (request objesini) yeni tanımladigimiz değişkene atıyoruz)
//         const _this = this;   // _this anahtar kelimesi Request sinifina ait objeleri gosterecek

//         //2. Adim = response basarili donerse onload() fonksiyonu calisacak
//         //Bu adımdaki this kelimesi XMLHttpRequest objesini gösteriyor. Yani xhr ı
//         this.xhr.onload = function() {  // xhr objemize onload isimli bir tane fonksiyon tanimliyoruz.

//             console.log(_this);  // Artık bu _this Request sinifimiza ait objeleri gosterir.

//             if(_this.xhr.status === 200) {  // donen response un statusu 200 ise(basarili ise)
//                 console.log(_this.xhr.responseText);   // donen veriyi konsola yaziyorum
//             }
//         }


//         // 3. Adim= requestimizi gonderdik(get request yaptigimiz icin send() methodu herhangi bir parametre almadi)
//         this.xhr.send();


//     }
// }

// const request = new Request();       // Request sinifindan 1 tane obje olusturdum

// request.get("https://jsonplaceholder.typicode.com/posts/1"); 
// //Artık hatadan kurtuluruz ve 1 tane postumuz console a yazılır.


//GÜNCEL YÖNTEMLE THIS anahtar kelimesinin karışmasını engellemek

//Bu yontemde this.xhr.status yerine this.status  diyerek sorunu cozebiliriz. Cunku bu adimlarda this

// class Request {                                 // Bu sinifin 4 tane methodu olacak 
//     constructor () {
//         this.xhr = new XMLHttpRequest();  //xhr objemizi olusturduk
//     }

//     //Get request (callback yontemini kullaniyoruz) [1. Method]
//     get(url) {   // aldigi url parametresiyle get requestini yapacak olan method
        
//         //1. Adim= Baglantimizi aciyoruz
//         this.xhr.open("GET",url); 

//         //2. Adim = response basarili donerse onload() fonksiyonu calisacak
//         this.xhr.onload = function() {  // xhr objemize onload isimli bir tane fonksiyon tanimliyoruz.

//             console.log(this);  // Bu this in XMLHttpRequest objemizi (xhr'ı) gosteriri.

//             //Alttaki 2 this anahtar kelimesi de xhr i gosterir ve hata vermez.
//             if(this.status === 200) {  // donen response un statusu 200 ise(basarili ise)
//                 console.log(this.responseText);   // donen veriyi konsola yaziyorum
//             }
//         }


//         // 3. Adim= requestimizi gonderdik(get request yaptigimiz icin send() methodu herhangi bir parametre almadi)
//         this.xhr.send();


//     }
// }

// const request = new Request();       // Request sinifindan 1 tane obje olusturdum

// request.get("https://jsonplaceholder.typicode.com/posts/1");


//BIR BASKA YONTEMLE THIS anahtar kelimesi karmasasini cozmek
//bind(this)  yontemini kullanarak cozmek

// class Request {                                 // Bu sinifin 4 tane methodu olacak 
//     constructor () {
//         this.xhr = new XMLHttpRequest();  //xhr objemizi olusturduk
//     }

//     //Get request (callback yontemini kullaniyoruz) [1. Method]
//     get(url) {   // aldigi url parametresiyle get requestini yapacak olan method
        
//         //1. Adim= Baglantimizi aciyoruz
//         this.xhr.open("GET",url); 

//         //2. Adim = response basarili donerse onload() fonksiyonu calisacak
//         this.xhr.onload = function() {  // xhr objemize onload isimli bir tane fonksiyon tanimliyoruz.

//             console.log(this);  // Bu this in XMLHttpRequest objemizi (xhr'ı) gosteriri.

//             //Alttaki 2 this anahtar kelimesi de xhr i gosterir ve hata vermez.
//             if(this.xhr.status === 200) {  // donen response un statusu 200 ise(basarili ise)
//                 console.log(this.xhr.responseText);   // donen veriyi konsola yaziyorum
//             }
//         }.bind(this); // Bu satiri eklereyek ustteki this lerin Request sinifinin objelerini gostermesini saglariz
//         //bind(this) diyerek sunu diyoruz. Sen Request objesini goster demis oluyoruz.

//         // 3. Adim= requestimizi gonderdik(get request yaptigimiz icin send() methodu herhangi bir parametre almadi)
//         this.xhr.send();


//     }
// }

// const request = new Request();       // Request sinifindan 1 tane obje olusturdum

// request.get("https://jsonplaceholder.typicode.com/posts/1");

//BIR BASKA YONTEMLE THIS anahtar kelimesi karmasasini cozmek
//Karmasanin yasandigi callback fonksiyonunu arrow function olarak yazarak sorunu cozebiliriz.
//Cunku arrow function bind(this) islemini kendisi otomatik olarak yapar.

// class Request {                                 // Bu sinifin 4 tane methodu olacak 
//     constructor () {
//         this.xhr = new XMLHttpRequest();  //xhr objemizi olusturduk
//     }

//     //Get request (callback yontemini kullaniyoruz) [1. Method]
//     get(url) {   // aldigi url parametresiyle get requestini yapacak olan method
        
//         //1. Adim= Baglantimizi aciyoruz
//         this.xhr.open("GET",url); 

//         //2. Adim = arrow function olarak tanimliyoruz. Bu arrow fonction bind(this) islemini
//         //otomatik olarak gerceklestirir ve hatayi giderir
//         this.xhr.onload = () => {  // xhr objemize onload isimli bir tane fonksiyon tanimliyoruz.

//             console.log(this);  // Bu this in XMLHttpRequest objemizi (xhr'ı) gosteriri.

//             //Alttaki 2 this anahtar kelimesi de xhr i gosterir ve hata vermez.
//             if(this.xhr.status === 200) {  // donen response un statusu 200 ise(basarili ise)
//                 console.log(this.xhr.responseText);   // donen veriyi konsola yaziyorum
//             }
//         }; 


//         // 3. Adim= requestimizi gonderdik(get request yaptigimiz icin send() methodu herhangi bir parametre almadi)
//         this.xhr.send();


//     }
// }

// const request = new Request();       // Request sinifindan 1 tane obje olusturdum

// request.get("https://jsonplaceholder.typicode.com/posts/1");

//KONUYA DEVAM EDIIYORUZ

class Request {                                 // Bu sinifin 4 tane methodu olacak 
    constructor () {
        this.xhr = new XMLHttpRequest();  //(AJAX ISLEMINI BASLATMAK ICIN XHR xhr objemizi olusturduk
    }

    //Get request (callback yontemini kullaniyoruz) [1. Method]
    get(url,callback) {   // aldigi url parametresiyle get requestini yapacak olan method
        
        //1. Adim= Baglantimizi aciyoruz (AJAX ISLEMI BASLATIYORUM)
        this.xhr.open("GET",url); 

        //2. Adim = arrow function olarak tanimliyoruz. Bu arrow fonction bind(this) islemini
        //otomatik olarak gerceklestirir ve hatayi giderir
        //Bu onload fonksiyonu sadece response hazir oldugunda  otomatik olarak calisir
        this.xhr.onload = () => {  // xhr objemize onload isimli bir tane fonksiyon tanimliyoruz.

            if(this.xhr.status === 200) {  // donen response un statusu 200 ise(basarili ise)
                //console.log(this.xhr.responseText);   // donen JSON veriyi konsola yaziyorum
                //callback(hatamesaji,responseSonucu) - Bu 200 durumunda hata olmadigi icin hatamesaji parametresini NULL gonderiyoruz
                callback(null, this.xhr.responseText);   // istegimiz bittigi zaman this.xhr.responseText degerini callback() fonksiyonuna gonderiyoruz
            }
            else { // 200 un haricinde baska bir hata durumu olusursa

                //Hata durumunda callback() in hatamesaji parametresini dolu gondeririz
                //Donen herhangi bir deger olmadigi icin donen responseText i NULL gondeririz
                const hatakodu = this.xhr.status;
                callback(`Sunucudan donen hata kodu: ${hatakodu}`,null);

            }
        }; 


        // 3. Adim= requestimizi gonderdik(get request yaptigimiz icin send() methodu herhangi bir parametre almadi)
        this.xhr.send();


    }
}

const request = new Request();       // Request sinifindan 1 tane obje olusturdum

//Islemimizi senkron bir hale ceviriyoruz (callback() fonksiyonu sayesinde)
request.get("https://jsonplaceholder.typicode.com/albums",function(err, response){ //response = this.xhr.responseText
    if(err === null) {
        console.log(response); //Basarili ise response u yazdiriyoruz
    }
    else {
        console.log(err);  // Hata  aldigimiza dair mesaji yazdiriyoruz.
    }
});

//HATALI YONTEM
//Alttaki satirda albums asenkron islemler sebebiyle undefined hatasi verecek. 
// Yukaridaki callback() fonksiyon sayesinde bu hatayi gideriyoruz.
// const albums = get("https://jsonplaceholder.typicode.com/albums");
// console.log(albums);
// Ciktisi: undefined (Sebebi: asenkron islemler oldugu icin ilk once bu satir calisti ve verileri
//henuz almadigimiz icin undefined aldik. yani albumleri alamadik. Biz burada albumleri almak icin
//CALLBACK kullanmamiz gerekir. Yani 1 tane fonksiyon kullanmamiz gerekiyor.
//Bunun icin biraz ek ozellik katariz. Yukaridaki verileri aldigimiz get fonksiyonuna bir tane callback
//fonksiyonu gondeririz. Sonra ajax request i bittigi zaman artik gelen verileri consola yazmayiz ad
//callback fonksiyonuna gondeririz.
