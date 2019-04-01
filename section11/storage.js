//LOCAL STORAGE islemleri burada gerceklesecek
//Eklenen her film local storage ada eklenecek

//1.Adim (Object olusturuyoruz)
// Bu objenin hicbir ozelligi yok. Sadece prototype i olussun diye create ettik.
// Sonra bu prototype uzerinden Localstorage a ekleme yapacagiz
function Storage() {  

}

//Yontem: Gelen filmi bir array a yazicaz ve o array i localstorage a ekleyecegiz
Storage.prototype.addFilmToStorage = function(newFilm) {
    //console.log(newFilm);
    let films = this.getFilmsFromStorage();   // Filmlerin oldugu array i aldik.
    films.push(newFilm);                      // Array e obje ekliyoruz. Her bir array icerigi birer obje olacak
    /* ORNEK:
    [
        {title: "asdf", director: "asdf", url: "adsfasdfasdf"},
        {title: "asdf", director: "asdf", url: "adsfasdfasdf"}   seklinde olacak
    ]
    */

    //Yeni bir OBJE eklenmis arrayimizi tekrar string haline cevirerek localstorage a ekleyecegiz

    localStorage.setItem("films",JSON.stringify(films));



}



//Her seferinde localstorage icerisinde filmler bulunan bir array var mi diye kontrol edecegiz
//Varsa o localstorage da STRING seklinde yazili olani alip array e ceviricez.
//Yoksa yeni bir tane array olusturucaz.
//Yukarida anlatilan islem herseferinde gerceklesecegi icin bir fonksiyon haline getirdim.
Storage.prototype.getFilmsFromStorage = function() {
    let films;

    if(localStorage.getItem("films") === null) {
        films = [];   // FILMS isimli array yoksa olustur.
    } else {
        films = JSON.parse(localStorage.getItem("films"));  // var olan FILMS isimli ARRAY i aldik. Bunun icerisine yazacagiz.
    }
    return films;
}

//Filmleri storage dan silen method

Storage.prototype.deleteFilmFromStorage = function(filmTitle) {
    let films = this.getFilmsFromStorage();  // Storage daki tum filmleri aldik

    //Aldigimiz filmler uzerinde gezecegiz

    films.forEach(function(film,index) {
        if(film.title === filmTitle) {
            films.splice(index,1);  // Objemizin bulundugu indis ten baslayip 1 tane silecegiz. yani o objemizi silecegiz
        }
    });

    //Silinmis(guncellenmis) localstorage films degerimizi tekrardan localstorage a yazacagiz
    localStorage.setItem("films",JSON.stringify(films));
}

//Tum filmleri storage dan silen method

Storage.prototype.clearAllFilmsFromStorage = function() {
    localStorage.removeItem("films");  // films key ine sahip butun degerleri siliyoruz.
}