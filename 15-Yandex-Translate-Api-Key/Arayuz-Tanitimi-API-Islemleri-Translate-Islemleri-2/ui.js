/*
ARAYUZ islemlerimizi ve arayüz fonksiyonlarımızı bu dosya içerisine yazacağız.
Buradada translate.js de oldugu gibi ozellikleri ve methodlari olan 1 tane constructor fonksiyonumuz
olacak.
*/

function UI () {
    //OZELLIKLERI
    this.outputImage = document.getElementById("outputImage");
    this.outputLanguage = document.getElementById("outputLanguage");
    this.outputWord = document.getElementById("outputWord");
    this.languageList = document.getElementById("language");
}
    //METHODLARI
//Selectlist te ONCHANGE event i oldugunda alttaki bayrak resmi ve dil ismini degistirecek olan
//bir tane method tanimliyoruz. Bu methodu app.js de tanimladigimiz "onchange" event i icerisinde cagiracagiz.
UI.prototype.changeUI = function() {
    //Arayuz degistir

    //RESMI DEGISTIR

    //1. <img src="images/en.png" id ="outputImage" height="50px" width="50px" > satirindaki img
    //nin src sini dinamik olarak  degistirecegiz. Almanca secilmisse "de.png" olarak degistirecegiz.
    //Bunu nasil yapacagiz. Sectigimiz "languageList" in value degerini alip img nin src sine ekleyecegiz

    this.outputImage.src = `images/${this.languageList.value}.png`;

    //TEXT I DEGISTIR (Secilen dile gore: Ingilizce - Almanca - Ispanyolca yazacak alt tarafta)

    //Bunun icinde secilen "languageList" in text degerini alip "outputWord" alanina yazacagiz

  //  console.log(this.languageList.options);
    //CIKTISI: HTMLOptionsCollection(3) [optıon, optıon, optıon, selectedIndex: 1]
    //Bu cikti objeyi inceledigimizde her bir option in "text" ozelligi icerisinde o option in
    //text lerinin yazili oldugunu goruruz. O halde biz bu ozellikler uzerinden secilen option
    //degerinin text metinlerini alabiliriz.

    //Bize donen objeden gordugumuz array seklindeki optionlardan hangisinin secildigini nasil anlariz?
   // console.log(this.languageList.selectedIndex);
    //CIKTISI: 1 (Almancayi sectigimiz zaman)

    //O zaman sadece secilen option i alalim.
   // console.log(this.languageList.options[this.languageList.selectedIndex]);
    //CIKTISI: <option value="de">Almanca</option>   (Almancayi sectigimiz zaman)

    //O zaman secilen option in text degerini alalim.
   // console.log(this.languageList.options[this.languageList.selectedIndex].text);
    //CIKTISI: Almanca   (Almancayi sectigimiz zaman)


    //YUKARIDA ANLATTIGIMIZ SEKILDE ALDIGIMIZ OPTION IN TEXT INI TASARIMDA DIL METNI YAZAN YERE YAZALIM

    this.outputLanguage.innerHTML = this.languageList.options[this.languageList.selectedIndex].text;

}

UI.prototype.displayTranslatedText = function(word) {
    this.outputWord.textContent = word;
}