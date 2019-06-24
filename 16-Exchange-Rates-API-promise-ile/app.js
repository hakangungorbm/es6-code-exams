//Elementleri secme (Adim 1)

const amountElement = document.querySelector("#amount");
const firstSelect = document.querySelector("#firstCurrency");
const secondSelect = document.querySelector("#secondCurrency");

//(Adim 7)
//Currency.js de bulunan sinifin methodlarini cagirabilmek icin 1 tane obje olusturuyorum.
//Bu Currency sinifinin constructor methodu 2 tane parametre aliyor. O yuzden bu siniftan bir obje
//olustururken ilk degerlerini vererek olusturuyoruz (first initialize)
const currency = new Currency("USD","TRY");

//(Adim 16)
//ui.js de bulunan UI sinifinin methodlarini cagirabilmek icin 1 tane o siniftan nesne turetiyoruz.
//Bu UI sinifinin constructor methodu 2 parametre aldigi icin nesnemizi olustururken ilk degerlerini
//vererek nesnemizi olusturuz. (firs initialize yapiyoruz)
const ui = new UI(firstSelect,secondSelect);

//(Adim 3)
//JS housting yaparak 2. adimda tanimladigimiz fonksiyonu calistiriyoruz.
eventListeners();

//(Adim 2)
//Event Listener fonksiyonu tanimliyoruz. Bu fonksiyon icinde yukarida sectigimiz 3 element uzerinde
//olusacak olan event lari tanimliyoruz. Bu event lar gerceklesince şu fonksiyon çalışsın diyeceğiz.
function eventListeners() {

    //Miktar alanina yazilan rakam degisince otomatik olarak secili olan para birimlerinde 
    //hesaplama yapilacak. Buton yok. Bu miktar alanina yazilan rakam degistikce orada "INPUT" diye
    //bir event olusur. (EZBERE BIL)
    amountElement.addEventListener("input",exchangeCurrency);


    //Hangi para biriminden cevrilecek(select list degistiginde olusan event i yakaliyoruz)
    //Select list lerde addEventListener diyemeyiz. Bazı tarayıcılar tanımaz. Onun için ONCHANGE diyoruz.
    firstSelect.onchange = function () {
        //Altta ilk para tipi degisecek. Para birimi degistiginde currency.js de tanimladigimiz
        //CURRENCY sinifimizin changeFirstCurrency() methodunu kullanarak yeni degeri 
        //Currency sinifimizin propertisi olan firstCurrency ye atayacagiz. Anlik. Degisme olur olmaz 
        //atamayi yapiyoruz. Asagida ikinci select listtede yaptigimiz sey ayni.
        
        //(Adim 10) -first  select degisirse yeni degeri Currency sinifina gonderiyoruz.
        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent);

        //(Adim 17) - first  select degisirse yeni degeri "outputFirst" spani icine yazacak
        ui.firstSpanChange();
    }

    //Hangi para birimine cevrilecek(select list degistiginde olusan event i yakaliyoruz)
    //NOT: firstSelect.options[firstSelect.selectedIndex].textContent   seklinde deger alma ile secondSelect.value ayni seylerdir.
    secondSelect.onchange = function () {

        //(Adim 10) - second select degisirse yeni degeri Currency sinifina gonderiyoruz.
        currency.changeSecondCurrency(secondSelect.value);

        //(Adim 18) - second  select degisirse yeni degeri "outputSecond" spani icine yazacak
        ui.secondSpanChange();
    }

}


//(Adim 4)
//Amount alanımıza değer girildiğinde oluşacak olan event  gerçekleştiğinde yapılacak olan işlemleri burada tanımlıyoruz.
function exchangeCurrency(e) {

    //(Adim 10) - miktar degisirse yeni miktar degerini Currency sinifina gonderiyoruz.
    currency.changeAmount(amountElement.value);

    //(Adim 8)
    //currency.js icinde tanimladigimiz ve requestimizi yapan "Currency" sinifinin exchange methdounu
    //cagiriyoruz. Bu method bize ya hata yada json objesi donecek.
    //NOT: Alttaki kullanim 12. adimdan once boyleydi. Yani promise donmeden once bu sekilde sadece cagiriyorduk.
    //ve requestten gelen veri veya hatayi exchange() methodunu tanimladigimiz yerde kullanabiliyorduk.
    //currency.exchange();

    //(Adim 13)
    //Artik exchange() methodu return new Promise() seklinde yazildi ve bir promise donuyor. 
    //Bu return new Promise() sayesinde exchange() methodu icinde fetch() ile yaptigimiz request ten
    //donen veri veya hatalari artik burada exchange() methodunun cagirildigi yerde yakalayip kullaniyoruz.
    currency.exchange()
    .then(result => {
        ui.displayResult(result);  // (Adim 20)
    })
    .catch(err => console.log(err));






    e.preventDefault();
}