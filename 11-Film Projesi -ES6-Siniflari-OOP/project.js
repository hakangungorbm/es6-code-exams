//PROJEMIZIN ANA JS dosyasi

// 1. ADIM (Form icinden bilgileri alacagiz. O yuzden formumuzu ve icerisindeki 3 INPUT u seciyoruz)

const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];  // Icerisinde filmlerin listelendigi card-body
const clearAll = document.getElementById("clear-films");  // Tum Filmeleri Temizle butonumuzu sectik


// // 2. ADIM (Objeler olusturuyoruz. Tanimladigimiz constructor object lerinden - hepsi kendi sayfasinda tanimli)
// //Aşağıdaki obje üretmemize gerek yok. Çünkü UI ve STORAGE içerisindeki methodları static yaptık.
// const ui = new UI();  // UI objesi olusturuyoruz.
// const storage = new Storage();  // Storage objesi olusturdum

//3. ADIM (Tum eventleri yukleme)

eventListeners();

function eventListeners() {   // tum event listenerleri bu method icerisine tanimlayacagiz
    form.addEventListener("submit",addFilm);  // formumuza submit event i ekliyoruz. Submit olunca addfilm methodu calisacak
    
    //Sayfa yuklendiginde localstorage daki filmerin ekrana gelmesi icin DOMContentLoaded event ini vericez
    document.addEventListener("DOMContentLoaded",function() {
        let films = Storage.getFilmsFromStorage();  // storage daki tum filmleri aldik
        UI.loadAllFilms(films);  // Aldigimiz filmleri ekrana basan methodu cagiriyoruz
    });

    //silme islemi gerceklesecek olan div e click event i atiyorum.
    cardBody.addEventListener("click",deleteFilm);

    //Tum Filmleri Temizle butonuna basinca gerceklesecek olan silme islemini yapmak icin bu butona click event i atiyorum.
    clearAll.addEventListener("click",clearAllFilms);

}

//Tum filmleri arayuzden ve localstorage dan silen method

function clearAllFilms(e) {
    if(confirm("Eminmisiniz?")) {
        UI.clearAllFilmsFromUI();  // UI dan kaldiran method (UI.js de tanimladim)
        Storage.clearAllFilmsFromStorage();  // Storage dan kaldiran method (storage.js de tanimladim)
    }
}

//Filmlerimizi arayuzden ve localstorage dan silen method
function deleteFilm(e) {
    //console.log(e.target);   // event in nerede olustugunu gorelim
    //FILM SIL butonuna bastigimizda bu butonunda icersinde bulundugu parent - > parent tr yi bulup silecegim
    if(e.target.id === "delete-film") {
        UI.deleteFilmFromUI(e.target);
        //Tikladigimiz butonun parent i (td) ve onun bir ust kardesi (yonetmen ismi olan td) ve onunda bir ust kardesi( film ismi olan td)
        //Seklinde ilerleyerek film ismini aliyoruz. Bu sayede localstorage da title=aldigimiz film ismine esit olan objeyi silecegiz
        //Buldugumuz ismi storage.js de tanimladigim methoda gonderecegim.
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

        //Silindi mesaji basiyoruz.
        UI.displayMessages("Storagedan silme islemi basarili...","success");
    }
}

function addFilm(e) {
    //Form icerisindeki 3 input elementinin degerlerini aliyoruz(title, Director ve url i)
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    //Aldigimiz 3 elementten 1 tanesi bile bos olsa hata mesaji yazdiracagiz
    if(title ==="" || director==="" || url ==="") {
        UI.displayMessages("Tüm Alanları Doldurun!", "danger"); // Alanlar bos olamaz mesaji yazdiriyorum.
    }
    else {
        const newFilm = new Film(title,director,url);  // Yeni bir FILM objesi olusturdum.
        UI.addFilmToUI(newFilm);   // Filmi arayuze ekliyoruz
        Storage.addFilmToStorage(newFilm);  // Filmi Local storage a ekliyoruz.
        UI.displayMessages("Film Basariyla eklendi", "success");  // Eklendi mesaji yazdiriyoruz
    }
    UI.clearFormInputs(titleElement,directorElement,urlElement); // Film arayuze eklendikten sonra INPUT degerleri temizleniyor



    e.preventDefault();
}