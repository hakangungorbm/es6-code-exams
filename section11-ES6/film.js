//OOP TABANLI FILM PROJESI
//İlk önce prototype tabanlı yapacağız. Sonra ES6 sınıflarına aktaracağız
//DOM Eventleri, DOM Manipulasyonları, OOP programlama konseptleri kullanılacak

//HTML tarafında film afişi - film yonetmeni - film ismini table da gosterilecek ve onlarla CRUD işlemi yapacağız
// Film afisleri intenetten alinacak (link olarak)
//Her bir film TBODY etiketi arasina TR olarak eklenecek
//Filmeleri temizle deyince tum filmler hem local storage dan hemde arayuzden temizlenecek

//BU JS dosyasinda FILM objemizi tanimlamak icin CLASS lar burada yazilacak

//FILM CONSTRUCTOR u

// function Film(title, director, url) {
//     this.title = title;
//     this.director = director;
//     this.url = url;
// }

// ES6 ya gore sınıfla yazıyoruz

class Film {
    constructor(title,director,url) {
        this.title = title;
        this.director = director;
        this.url = url;
    }
}