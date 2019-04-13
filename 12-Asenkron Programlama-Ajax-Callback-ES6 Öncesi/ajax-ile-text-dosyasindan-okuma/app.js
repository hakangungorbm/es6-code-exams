// HTTP status
// 200: OK 
// 403: Forbidden
// 404: Not Found
// 505: Internal Server Error

// XMLHttpRequest objesi icindeki readystate kodlari
/*
1  = server ile baglanti saglandi
2  = istegimiz isleme alindi
3  = istegimiz islenmeye basladi
4  = istegimiz bitti ve response geldi
*/

document.getElementById("btn").addEventListener("click",function(){
    
    //Bunun için ilk önce XMLHttpRequest objesi oluşturacağız ve bu obje üzerinden Ajax işlemi yapacağız.
    const xhr = new XMLHttpRequest();

    //xhr objesi icerisindeki onreadystatechange ozelligi readystate durumunu kontrol eder.
    //Biz buna bir fonksiyon atarsak readystate degistiginde bu fonksiyon calisir.
  //  xhr.onreadystatechange = function(){
        
        //console.log(this.readyState);   // Biz xhr objesi icinde oldugumuz icin buradaki THIS window objesini degil XMLHttpRequest objesini gosterir. 
        //Ciktilar: Fonksiyonumuz 4 defa calisti
        /*
        1  = server ile baglanti saglandi
        2  = istegimiz isleme alindi
        3  = istegimiz islenmeye basladi
        4  = istegimiz bitti ve response geldi
        */

        //Status leri gorelim
        //console.log(this.status);
        //Ciktisi: 
        /*
        0    = henuz baglanti yapilmamisti. 0 sonucunu aldik.
        200  = istegimiz gerceklesti
        200  = islendi
        200  = response dondu. OK sonucunu dondu. example.txt de yazan metin bana geldi.
        */

        //Gelen string degeri (Bu bir text dosyasıdır.) alalim
      //  if(this.status == 200 && this.readyState == 4) {   // response hazirsa sarti
      //      console.log(this.responseText);
            // Cikti: Bu bir text dosyasıdır.
    //    }

    //}

        //NOT: onreadystatechange e fonksiyon atamak eski bir yontemdir. Response hazir oldugunda calisacak
        // 1 tane fonksiyonumuz var aslinda. 

        //readystate:4  oldugunda calisir sadece
        xhr.onload = function() {     // Bu onload fonksiyonu sadece response hazir oldugunda calisir otomatik olarak
            if(this.status === 200) {
                console.log(this.responseText);  // Cikti: Bu bir text dosyasıdır.
                document.getElementById("ajax").textContent = this.responseText;   // text i html deki alana yazdiracagiz.
            }
        }

        //readystate:3 oldugunda bu fonksiyon calisir
        xhr.onprogress = function() {
            console.log("Process isleniyor....", this.readyState);  // Cikti: Process isleniyor.... 3
        }


    //Baglanti aciyoruz. Bunun icinde xhr objesi uzerindeki open() fonksiyonunu kullaniyoruz.
    //Open methodu 3 parametre alir: request methodu, dosya url si, islem tipi(asenkron mu, senkron mu)
    xhr.open("GET","example.txt",true);   // true yaparak islemin asenkron olmasini istedik.

    //requesti gonderiyoruz. GET yaptimiz icin herhangi bir veri vermedik. Post olasaydi string gonderirdik
    xhr.send();


//console.log(xhr);
//Ciktisi
// XMLHttpRequest {onreadystatechange: null, readyState: 0, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
// onabort: null
// onerror: null
// onload: null
// onloadend: null
// onloadstart: null
// onprogress: null
// onreadystatechange: null  -- readystate degeri degistiginde direkt olarak calisir. Bu sayede takip yapabiliriz.
// ontimeout: null
// readyState: 0 -- Herhangi bir server a baglanmadigimiz gosteriyor 0 degeri
// response: ""
// responseText: ""  -- Bize herhangi bir text verisi geldiginde bu degiskenden alabiliriz o text i. Veri string olacagi icin JSON.parse() ile json a cevirebiliyoruz.
// responseType: ""
// responseURL: ""
// responseXML: null   -- gelen veri XML se buraya gelir.
// status: 0      -- HTTP Status kodlari. Sikinti yoksa 200 olur.
// statusText: ""
// timeout: 0
// upload: XMLHttpRequestUpload {onloadstart: null, onprogress: null, onabort: null, onerror: null, onload: null, …}
// withCredentials: false
// __proto__: XMLHttpRequest
});