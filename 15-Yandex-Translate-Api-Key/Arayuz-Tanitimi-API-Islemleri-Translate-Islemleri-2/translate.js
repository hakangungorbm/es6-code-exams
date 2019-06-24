/*
YANDEX TRANSLATE API kullanımını burada yapacağız.
*/

//2.ADIM: 1 tane translate objesi olusturacagiz. (prototype larla yapacagiz.)

//1 tane CONSTRUCTOR olusturuyoz. Bu fonksiyona cevirmek istedigimiz kelimeyi ve cevrilecek dili
//gonderecegiz. Bu translate objesinin icinde bizim 4 tane ozelligimiz olacak
//1) Apikey   2) tercume edilecek kelime(word) 3) Hangi dile cevrilecegi 4) XHR objemiz

function Translate(word,language) {

// 1) Translate constrcutor FONSKIYONUN OZELLIKLERI
    this.apikey = "trnsl.1.1.20190514T185037Z.dea5bfe13667498f.3ae0719ead30a01dae3ab27af0236c9b32967a7c";
    this.word = word;
    this.language = language;
    this.xhr = new XMLHttpRequest();
}

// 2) Translate constructor FONKSIYONUN METHODLARI
     

//DIKKAT: constructor fonksiyonlara method eklerken bu fonksiyonlarin Prototype ina yazdigimiz icin
//method tanimlama islemini constructor fonksiyonlarin scopu disinda {} prantezlerin disina yaziyoruz.

    /*

    Biz bu fonksiyonu app.js dosyamizda cagiracagiz ve bu fonksiyona parametre olarak verdigimiz
    CALLBACK sayesinde fonksiyonu cagirdigimiz yerde bu fonksiyondan donen degeri yakalayacagiz(app.js de)
    NOT: Aşağıdaki fonksiyonu arrow function olarak yazamayız. Yazarsak hataya düşeriz. Sebebi:
    Arrow function lar normal function lar üzerinde .bind(this) yaparak yeni bir forma çeviriyordu.
    Arrow functionlarla yaparsak fonksiyon içinde kullandığımız this ler prototype ına fonksiyon
    yazdığımız constructor fonksiyonu değil global skopta (window objesi) bulunan this i gösterecek
    ve hataya sebep olacaktır. O yüzden bir fonksiyonun protoype ına fonksiyon  ekliyorsak
    this anahtar kelimesinin doğru yeri göstermesi için eski yöntemle function tanımlamalıyız.
    (DİKKAT UNUTMA)
    
    AŞAĞIDAKİ ŞEKİLDEKİ BİR TANIMLAMA HATAYA SEBEP OLUR.

    Translate.prototype.translateKelime = () => {
      // Burada kullanacağımız bir this anahtar kelimesi Translate fonksiyonunu değil bir ustundeki obje
      // olan window objesini (global skopu) gösterir. Buda hata almamıza sebep olur.
    }.bind(this)

    */

    //1-ILK METHODUMUZ AJAX ISLEMINI YAPACAK
    Translate.prototype.translateKelime = function (callbackParametresi) {
        //Ajax ile kelimeyi tercüme ettirip sonucu döndereceğiz
        //Yandex Translate Api ye 1 tane GET REQUEST atacagiz.

        //Aşağıdaki endpoint string i içerisine birkaç tane parametre ekleyeceğiz. O yüzden burada
        //TEMPLATE LITERAL i kullanacağız.

        //Asağıdaki "this.apikey" ifadesindeki THIS anahtar kelimesi prototype ına yazdığımız TRANSLATE fonksiyonunu gösteriyor.

        const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;

        //Ajax ile 1 tane baglanti acalim. (true yazarak islemin asenkron olmasini soyleriz)
        this.xhr.open("GET",endpoint,true);
        
        //Requestimizden gelen response u yakalayalim.
        this.xhr.onload = () => {

            //Arrow function olarak tanimladigimiz icin kullanacagimiz this xhr objesini degil bir ust
            //objeyi yani "Translate" fonksiyonunu gosterecek.
            if(this.xhr.status === 200) {  // response basarili donmus se
                
                // responseText i JSON.parse ile json objesine parse ettik.

                //console.log(JSON.parse(this.xhr.responseText));
                //CIKTI: {code: 200, lang: "tr-en", text: ["How are you"]}

                const jsonObjesi = JSON.parse(this.xhr.responseText);

                //Gordukki; gelen objenin icinde text isimli array var ve bizim istedigimiz tercume
                //edilmis metin o arrayin 0. indexi olarak yazilmis.
                //CIKTI: How are you
                
                const cevrilmisText = jsonObjesi.text[0];
                //O yuzden objenin icerisindeki text keyli arrayin [0] . indexini alarak istedigimiz metne ulasiyoruz.

                //Biz bunu elde edebildigimize gore aldigimiz tercume edilmis text degerini callback ile
                //app.js de cagirdigimiz yere gonderebiliriz.

                callbackParametresi(null,cevrilmisText);     // Bu sayede asenkron islemi senkron hale getirmiste oluruz.
                //Ilk null parametresi hata olmadigini varsaydigimiz hata parametresi. null gonderiyoruz.
                //Ikinci paramatre response umuz.

            }else {
                callbackParametresi("Ajax isleminde HATA olustu",null);
                //1. parametre hatamiz. Ikinci parametremiz response umuz (olmadigi icin null olarak donderdik).
            }

        }

        //Requestimizi gonderelim.
        this.xhr.send();
    }


    //2-IKINCI METHODUMUZ formumuzda bulunan CEVRILECEK KELIME ve DIL alanlari degistigi zaman bu
    //degerleri alip TRANSLATE fonksiyonumuzun iki ozelligine (word,translate) atama yapacak olan method.

    Translate.prototype.changeParameters = function (newWord, newLanguage) {
        this.word = newWord;
        this.language = newLanguage;
    }