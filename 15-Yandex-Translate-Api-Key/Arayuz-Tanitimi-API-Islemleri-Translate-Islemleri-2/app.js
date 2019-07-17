/*
Bu projenin arayüzünde bootstrap yerine materialize.css ve materialize.js i kullandık.

Uygulamamız şöyle çalışacak:
1) Bizim translate formumuz var (id="translate-form").
2) SUBMIT event ı ile metnimizi çevirmeye çalışacağız.
3) Dillerin listelendiği selectbox dan (<select id = "language">) almancayı veya ingilizceyi seçtiğimizde yani o selectbox da
bir event oluştuğunda alt kısım o dilin bayrağı ve o dilin adı ile güncellenecek. Yani biz bu event leri
kontrol etmeye çalışacağız. Burada select box dan seçim yapılınca seçilen OPTION ın text ini ve value
sunu (<option value="en">İngilizce</option>) alıp alttaki resim ve text in gösterildiği alan da güncelleyeceğiz.
4) SUBMIT butonuna basınca çeviri yapacağız.
5) Çeviri yapılan kısım bir tane card. (<div class="card">). Card ın header ında img  (id = "outputImage")
ve span text i (id ="outputLanguage") değiştireceğiz. Resimleri ve text alanını js tarafında
değiştireceğiz.

BASLAYALIM
-------------------------------------------------
Bu app.js dosyası projenin genel js dosyasıdır. Diğer js dosyalarımızı bunun içinde kullanacağız.

NOT: Translate API mizi PROTOTYPE, AJAX ve CALLBACK ile kullanacağız.
NOT: ARROW FUNCTION ve PROTOTYPE ile ilgili bir tane detay özelliği göreceğiz.

*/
//1.ADIM:
/*
İlk önce Yandex API yi kullanmak için yandex e kayıt olup bir tane API KEY alırız. 
*/

//2. ADIM: 
/*Eventlistener ları atayalım
Bu form arayüzüne baktığımızda 2 tane event oluşur. Bizde bu 2 durumu kontrol ederiz.
1) Çevir butonuna basınca formun SUBMIT olma durumu. 
2) Select box'tan dil seçilince altta seçilen dilin adını yazma ve bayrağını gösterme durumu.
*/
//-------------------------------------

eventListeners();  //Javascript hoisting yaptık.

//2 event listener ı kapsayan, kapsayıcı bir fonksiyon tanımlıyoruz. Kodumuzun daha düzenli olması için
function eventListeners() {
    //Formumuzu seçelim ve submit olmasi durumunu yakalayalim(1.Event Listener)
    document.getElementById("translate-form").addEventListener("submit",translateWord);

    //Cevrilecek dili sectigimiz select listimizde select durumunu yakalayan(2. Event Listener)
    //Select listlerde degerleri sectigimizde CHANGE eventi olusur. (Ezbere bil) Ama biz bu change eventini
    //addEventListener ile yaptığımız zaman butun browserlar bu change eventini desteklemez. Hata çıkar
    //O yuzden secme isleminin eventini farkli bir yolla ekleriz. Ornek:
    //Alttaki satırda şunu diyoruz: ID si language olan element üzerinde ONCHANGE event i oluştuğunda
    //FUNCTİON isimli fonksiyonu çalıştır diyoruz.
    document.getElementById("language").onchange = function () {
        //Dil secildikce arayuz islemlerini yapacagiz. selectlist imiz Onchange olusunca calisacak
        //olan ui.js icerisindeki UI constructor fonksiyonunun "changeUI" methodunu cagiracagiz.
        ui.changeUI();
    }
}

//ON HAZIRLIK

// 1 tane UI objesi olusturduk. Bu obje uzerinden ui.js deki UI fonksiyonunun
//methodlarini cagiracagiz. Parametresi yoksa "first initialize" yapmayiz.

const ui = new UI();


//Adim 6
// 1 tane Translate objesi olusturduk. Bu obje uzerinden translate.js deki TRANSLATE fonksiyonunun
//methodlarini cagiracagiz.DIKKAT:translate.js de tanımladımız "Translate" fonksiyonu
//constructor fonksiyon oldugu icin ve constructor fonskiyonlardan obje turetirken parametresi varsa
//o parametrelere karsilik gelecek ilk degerleri vererek obje olusturuyoruz. (first initialize) UNUTMAAA
const translateObjesi = new Translate(document.getElementById("word").value,document.getElementById("language").value);


//SUBMIT OLURKEN CALISACAK OLAN FONKSIYON 1. event a atadigimiz fonksiyon (Tercumeyi yapacak olan fonksiyon)
function translateWord(e) {  //Parametre olarak event i gonderiyoruz

    //CEVIR butonuna basilip formumuz submit olmaya baslayinca ilk once CEVRILECEK KELIME ve DIL
    //alanlarindaki secilmis olan value ve yazili olan kelime value degerlerini alip
    //translate.js de tanimladigimiz tercume yapacak constructor fonksiyonun methodu olan
    //changeParameters() methodunu calistiriyoruz. Bu sayede CEVIR butonuna her basildiginda
    //2 parametreyi alip tercume yapacak olan Translate constructorumuza gondericez. Bu methodu yazmazsak
    //ve bu islemi yapmazsak yukarida obje olustururken kullandigimiz firs initialize degerlerimiz
    //const translateObjesi = new Translate(kelime,cevrilecekdil);     bir sefere mahsus atanacak
    //tercume edilecek olan kelimeyi ve cevrilecek dili degistirsekte bu degisim tercumeyi yapan methoda
    //gitmeyecektir. O yuzden bu adim ONEMLI

    //translate.js dosyasinda tanimladigimiz TRANSLATE fonksiyonu 2 parametre aliyordu.
    //1)word 2)translate  biz bu parametreleri alalim.
    const kelime = document.getElementById("word").value;

    //Select listi secip secilen degerin value sunu alalim.
    const cevrilecekdil = document.getElementById("language").value;

    //Adim 9 - tercume edilecek olan kelimeyi ve cevrilecek dili degistiriyoruz.O anki inputun ve selectlist in degerlerini gonderiyoruz.
    translateObjesi.changeParameters(kelime, cevrilecekdil);


    //Adim 7
    //Objemiz uzerinden translate.js de tanimladigimiz constructor fonksiyonunda tercume icin ajax
    //islemini yapan translateKelime() methodunu calistiralim.
    // translateObjesi.translateKelime();

    //translateKelime() methodumuz callback aldigi icin (translate.js dosyasindan gorebiliriz)
    //biz artik bu methodu cagirirken bir ust satirdaki gibi degilde callback alacak sekilde cagiriyoruz.

    translateObjesi.translateKelime(function(hata,response) {  // Bu function() bizim callback imiz
        if(hata) {  // hata gelmisse
            console.error(hata);
        }else {
            ui.displayTranslatedText(response);
        }
    });

    e.preventDefault();  // Event gerceklestiginde sayfanin yenilenmesini (Default durumu) engelliyoruz.
}

//2.ADIM: translate.js de 1 tane translate objesi olusturacagiz. (translate.js dosyasi icinde)