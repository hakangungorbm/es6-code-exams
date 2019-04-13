/*Get request le bir web adresine erişiriz ve bize html,js,css dosyalarımız doner.
Eğer REST API ye ulaşıyorsak JSON objesi doner. Bizde bunu programlarımızda kullanırız. 

POST request tede bir API ye verimizi gonderebiliriz. Ajax yardımıyla bir endpoint e bir json verisi
gonderebiliriz. Veya bir form veriside gonderebiliriz. API ler bu verileri alarak belirlenen işlemleri
gerçekleştirir.
*/

class Request {                                 // Bu sinifin 4 tane methodu olacak
    constructor () {
        this.xhr = new XMLHttpRequest();  //(AJAX ISLEMINI BASLATMAK ICIN XHR xhr objemizi olusturduk
    }

    //POST REQUEST (Request sinifinin 1. fonksiyonu)
    post(url,data,callback) {  // Bu fonksiyon post edileck url - gonderilecek data- sonucu donen callback den olusur
        this.xhr.open("POST",url); // Baglantimizi actik

        //Gonderecegimiz verileri (json verisi veya form verisi) header olarak belirtiyoruz
        //Google dan setrequestheader ajax yazarak bu islemleri nasil yapacagimiza bakabiliriz
        this.xhr.setRequestHeader("Content-type","application/json"); // Json verisi gonderecegimizi soyluyoruz

        this.xhr.onload = () => {
            if(this.xhr.status === 201) {  // 201 kodu yeni bir kaynak olustugunda olusan kaynakla birlikte doner
                //Basarili durumu sorguladik
                callback(null,this.xhr.responseText);  // hata olmadigi icin hata parametresini null donuyoruz
            }
            else {
                callback(`Olusan hata kodu: ${this.xhr.status}`, null); // response olmadigi icin null donuyoruz
            }
        }
        //Get requestten farkli olarak POST request te verimizi send() methodu icinde string olarak gondeririz
        this.xhr.send(JSON.stringify(data));  // json verisini string e cevirerek gonderiyoruz

    }

    //Get REQUEST (Request sinifinin 2. fonksiyonu)
    get(url,callback) {   // aldigi url parametresiyle get requestini yapacak ve sonucu donecek
        
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

    //PUT REQUEST (Request sinifinin 3. fonksiyonu)
    //PUT request bir veriyi guncellememizi saglar

    put(url,data,callback) {
        this.xhr.open("PUT",url);
        this.xhr.setRequestHeader("Content-type","application/json");
        this.xhr.onload = () => {
            if(this.xhr.status === 200) {
                //Basarili
                callback(null,this.xhr.responseText);
            }
            else {
                //Hata almisizdir
                callback(`Hata kodu: ${this.xhr.status}`,null);
            }
        }
        this.xhr.send(JSON.stringify(data));

    }


    //DELETE REQUEST (Request sinifinin 3. fonksiyonu)
    //DELETE request bir veriyi silmemizi saglar. Herhangi bir veri gondermeyiz
    //Sadece requestimizin delete oldugunu belirtiriz. Response olarak bos bir obje doner.
    delete(url,callback) {

        this.xhr.open("DELETE",url);

        this.xhr.onload = () => {
            if(this.xhr.status === 200) {
                //Silme islemi basarili
                callback(null,this.xhr.statusText)  // response basarili ise bize bos bir obje doner
            }
            else {
                //Silme islemi basarisiz olmussa
                callback(`Hata Kodu: ${this.xhr.status}`,null);
            }
        }

        this.xhr.send();
    }

}

const request = new Request();       // Request sinifindan 1 tane obje olusturdum

//DELETE REQUEST ISLEMINI YAPIYORUZ

request.delete("https://jsonplaceholder.typicode.com/posts/1",function(err,deleteresponse){
    if(err === null) {
        console.log(`Silme islemi basarili ${'\n'} ${deleteresponse}`);
    }
    else {
        console.log(`Silme islemi sirasinda hata olustu. ${'\n'} ${err}`);
    }
});

//PUT REQUEST ISLEMINI YAPIYORUZ

// request.put("https://jsonplaceholder.typicode.com/posts/1",{userId: 66, title: "Hakan Gungor"},function(err,putresponsu) {
//     if(err === null) {
//         console.log(`Put islemi basarili. Guncellenen veri ${'\n'} ${putresponsu}`);
//     }
//     else {
//         console.log(`Put islemi sirasinda hata olustu ${'\n'} ${err}`);
//     }
// });

/*
https://jsonplaceholder.typicode.com/posts/1     adresine put islemi yaptigimiz zaman gonderdigimiz
veri ID si 1 olan verinin yerine gececek.

Cikti: 

Put islemi basarili. Guncellenen veri 
{
  "userId": 66,
  "title": "Hakan Gungor",
  "id": 1
}

Hata ciktisi:

Put islemi sirasinda hata olustu 
Hata kodu: 500
*/


//POST REQUEST ISLEMINI YAPIYORUZ

/*
Post edecegimiz veri formati:
        {
            userId: 10,
            id: 96,  // Id gondermiyoruz. Api Id yi otomatik olarak arttirarak olusturuyor
            title: "unde et ut molestiae est molestias voluptatem sint"
        }
Biz userId ve title verilerini post edecegiz
*/



//post methodunu: post(url,data,callback) formatinda calistiriyoruz
// request.post("https://jsonplaceholder.typicode.com/albums",{userId:2, title:"Hakan Gungor"},function(err,albumresponsu){
//         if (err === null) {
//             console.log(`Veri eklendi. Eklenen veri: ${'\n'} ${albumresponsu}`); // olusan veriyi console a yazdiracagiz
//         }
//         else {
//             console.log(`Post Requestte bir hata olustu: ${'\n'} ${err}`);
//         }
// });

/*
Cikti: 

Veri eklendi. Eklenen veri: 
 {
  "userId": 2,
  "title": "Hakan Gungor",
  "id": 101
}
*/



//GET REQUEST ISLEMINI YAPIYORUZ


// //Islemimizi senkron bir hale ceviriyoruz (callback() fonksiyonu sayesinde)
// request.get("https://jsonplaceholder.typicode.com/albums",function(err, response){ //response = this.xhr.responseText
//     if(err === null) {
//         console.log(response); //Basarili ise response u yazdiriyoruz
//     }
//     else {
//         console.log(err);  // Hata  aldigimiza dair mesaji yazdiriyoruz.
//     }
// });