//Her projede olduğu gibi bu projedede app.js içerisinde formumuzu seçip üzerindeki eventları yöneteceğiz.

// Adim 1
//Formumuzu ve formdaki elemenleri secelim

const githubForm = document.getElementById("github-form");  // form
const nameInput = document.getElementById("githubname");  // input
const clearLastUsers = document.getElementById("clear-last-users");  // Son Arananları Temizle butonu
const lastUsers = document.getElementById("last-users");  // Son arananlarin listelendigi <ul> alani

const github = new Github(); // github.js de tanimladigimiz fonksiyonlari cagirabilmek icin obje olusturuyoruz.

//Event listenerlari tanimliyoruz ve tum event listenerlari kapsayan bir fonksiyon tanimliyoruz. Bu fonksiyonu
//tanimladigimiz yerin uzerinde ayni zamanda cagiriyoruz. Javascript hoisting yapiyoruz.

eventListeners();   // js hoisting yapiyoruz

function eventListeners() {    // tum event listenerlari kapsayan 1 tane ana fonksiyon tanimnliyoruz.

    githubForm.addEventListener("submit", getData);  // Form submit oldugunda "getData()" methodu calisacak

    clearLastUsers.addEventListener("click", clearAllSearched); // "Son Arananları Temizle" butonuna basinca "clearAllSearched()" methodu calisacak.

    //ONEMLI BIR EVENT LISTENER. Sayfanin yenilenmesini veya yuklenmesini kontrol ediyoruz.
    document.addEventListener("DOMContentLoaded", getAllSearched); // Sayfa her yenilendiginde (yuklendiginde) "getAllSearched()" methodu calisacak ve son aranan kullanicilari storage dan alip arayuze yazacak.

}


//Yukaridaki fonksiyon icinde ekledigimiz eventlistener lar gercelesmesi halinde calisacak olan methodlari yazalim.

//Bu fonksiyon formun post olma durumu oldugu icin "e" parametresini verip preventDefault() yaparak post esnasinda sayfamizin tekrardan yuklenmesini engelliyoruz.
//"input" alanimiza girilecek olan kullanici adi alinip GITHUB API ye request atilacak. Bu islem "github.js" de
//yapilacak. Sonra yapilan GET Requestten donen sonuclar "async" ile bu "getData()" fonksiyonuna dondurulecek.
function getData(e) {

    //Adim 3
    //github.js de requesti yapan fonksiyonu cagiracagiz. Tabi bundan once input alanimizdaki username i alip
    //cagiracagimiz fonksiyona parametre olarak verecegiz. 
    //Aldigimiz kullanici adinin bos olmasini kontrol edecegiz
    //Kullanici adinin saginda ve solunda bosluk birakilmissa bu bosluklari "trim()" methoduyla temizleyecegiz.

    let username = nameInput.value.trim();
    if(username === "") {
        alert("Kullanici Adi yaziniz!")
    }else {
        github.getGithubData(username)
    }


    e.preventDefault();
}

function clearAllSearched() {
    //Tum arananlari temizle
}

function getAllSearched() {
    //Arananlari storage dan al ve UI a ekle
}