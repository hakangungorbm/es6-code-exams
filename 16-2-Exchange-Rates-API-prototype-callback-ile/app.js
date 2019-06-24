//Elementleri secme

const amountElement = document.querySelector("#amount");
const firstSelect = document.querySelector("#firstCurrency");
const secondSelect = document.querySelector("secondCurrency");




eventListeners();

function eventListeners() {

    //Miktar alanina yazilan rakam degisince otomatik olarak secili olan para birimlerinde 
    //hesaplama yapilacak. Buton yok. Bu miktar alanina yazilan rakam degistikce orada "INPUT" diye
    //bir event olusur.
    amountElement.addEventListener("input",exchangeCurrency);


    //Hangi para biriminden cevrilecek(select list degistiginde olusan event i yakaliyoruz)
    document.querySelector("#firstCurrency").onchange = function() {
        //Altta ilk para tipi degisecek
    }

    //Hangi para birimine cevrilecek(select list degistiginde olusan event i yakaliyoruz)
    document.querySelector("#secondCurrency").onchange = function() {
        //Altta ikinci para tipi degisecek
    }

}

const currencyObject = new Currency(document.querySelector("#amount").value , document.querySelector("#firstCurrency").value , document.querySelector("#secondCurrency").value);

function exchangeCurrency(e) {
    //Miktar alanina girilen deger degisince o degere gore yeniden yesaplama yapilacak.

    const miktar = document.querySelector("#amount").value;
    const firstCurrency = document.querySelector("#firstCurrency").value;
    const secondCurrency = document.querySelector("#secondCurrency").value;

    currencyObject.changeCurrency(miktar,firstCurrency,secondCurrency);

    currencyObject.getLatestCurrency(function(hata,response) {
        if(hata) {
            console.log("1 Burdayim");
            console.log(hata);
        }else {
            console.log("2 Burdayim");
            console.log(response);
        }
    });


    e.preventDefault();
}