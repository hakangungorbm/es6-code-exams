//ARAYUZ ISLMELERI GERCEKLESTIRILECEK

//Biz arayuz islemlerimizi UI OBJESININ PROTOTYPE inde yapmaya calisacagiz

function UI () {
    
}

//Filmi Arayuze ekleyen method (UI Objesinin Prototype ine ekliyoruz)
UI.prototype.addFilmToUI = function (newFilm) {
    //console.log(newFilm); // Ciktisi: Film {title: "Cennetin Kiralligi", director: "Jhon Smith", url: "htt//9-1.jpg"}

    //ARAYUZ e ekliyoruz

    /*
    <td><img src="" class="img-fluid img-thumbnail"></td>
    <td></td>
    <td></td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr> 
    */

    const filmListArea = document.getElementById("films");  // Alani sectim
    //TemplateLiteral kullanarak (` `) ve += diyerek (daha once var olanlarin uzerine yaz. Sadece = dersek var olani silip yeni geleni yazar )
    filmListArea.innerHTML += `
    <tr>
    <td><img src="${newFilm.url}" class="img-fluid img-thumbnail" style="max-width: 100px"></td>
    <td>${newFilm.title}</td>
    <td>${newFilm.director}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>
    `;
}

// Film arayuze eklendikten sonra form inputlarini temizleyen method
UI.prototype.clearFormInputs = function(element1, element2, element3) {
    element1.value = "";
    element2.value = "";
    element3.value = "";
}

// Input ların bos gelmesi halinde HATA mesajı yazdırıcaz

UI.prototype.displayMessages = function(message,type) {   // Hangi mesaji yazdiracagimiz(message) ve tipi(type)
    //card-body nin altindaki id="film-form" id li formun altindaki hr taginin altina CHILD olarak ekleyecegiz
    //class="card-body" mizi seciyoruz
    const cardBody = document.querySelector(".card-body");  // HTML dokumanimiz icinde sinif adi .card-body olan 1 tane tag imizi oldugu icin querySellector() ile seciyorum. Birden cok olsaydi querySellectorAll()[0] ile sira indexine gore secerdim
    //Alert div ini olusturuyoruz
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;
    // sectigimiz card-body nin en sonuna(icine) child olarak olusturdugumuz ALERT divini ekliyoruz.
    cardBody.appendChild(div);
    
    // Eklenen alert belli bir sure sonra tekrardan silinsin bu ALERT divi
    setTimeout(function() {
        div.remove();
    },3000);  // 3 saniye icinde silinecek

}

// Storage daki tum filmleri ekrana basan method

UI.prototype.loadAllFilms = function (films) {
    const filmListArea = document.getElementById("films");  // Filmlerin eklenecegi DIV i yakaladik
    films.forEach(function(film) { // gelen film listesini teker teker donerek html olarak ekliyoruz
        filmListArea.innerHTML +=`
            <tr>
            <td><img src="${film.url}" class="img-fluid img-thumbnail" style="max-width: 100px"></td>
            <td>${film.title}</td>
            <td>${film.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
            </tr>
            `;
    });
}

//Filmlerimizi arayuzden silmek icin EventDelegation veya EventCapturing ozelligini kullanacagiz (Javascript in ozelligi)
// Methodumuzla birlikte tikladigimiz buton (target ile yakaladigimiz buton element olarak gelecek. Bunun parent ini alip (tr) silecegiz
UI.prototype.deleteFilmFromUI = function(element) {
    element.parentElement.parentElement.remove();  // buton - > td -> tr  seklinde TR yi yakaliyoruz.
}

//Tum filmleri UI dan kaldiran method

UI.prototype.clearAllFilmsFromUI = function() {
    //Film listesini seciyoruz
    const filmList = document.getElementById("films");
    //filmList.innerHTML = "";  // Boyle yapabiliriz ama bu yavas calisan bir yontem.
    //2. Yontem. id="films" icerisinde tr kalmayana kadar hep ilk cocugu siliyoruz.
    while(filmList.firstChild !== null) {  // child oldugu surece (film varsa)
        filmList.firstElementChild.remove();  // cocuk oldugu muddetce temizleme islemi devam edecek
    }
}