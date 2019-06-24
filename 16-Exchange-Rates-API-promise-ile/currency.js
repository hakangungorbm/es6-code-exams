//ES6 ile yazacagiz. Promise kullanarak veri alisverisi yapmaya calisacagiz.

//Adim 5

//Bu Currency objesine app.js den 2 tane deger gonderecegiz. (Ornek: USD - TRY gibi iki para birimi)
//Kullanacagimiz url i bu sinifa property olarak ekliyoruz.
//Surekli degisecek olan miktar (amount) degerini de ilk degeri null olacak sekilde buraya ekliyorum.
//Biz her event olustugunda amount, firstCurrency, secondCurrency degerlerini degistirecegiz ve request yapacagiz.
class Currency {

    constructor(firstCurrency, secondCurrency) {
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "https://api.exchangeratesapi.io/latest?base=";
        this.amount = null;
    }




    

    //Adim 6

    //Bu sinifa gelen verilerle (app.js den) ajax request islemini yapan methodumuzu yazalim.
    //Sinifimiza method ekliyoruz. Biz bu method umuzda request işlemini ajax yerine fetch api
    //ve promise yapisini kullanarak yapacağız.
    exchange () {

        //Adim 12

        //fetch ile yaptigimiz requestlerden donen sonuclari (json veri veya hatayi) exchange() methodunu
        //cagirdigimiz yerde kullanmak istiyorsak alttaki satirdaki gibi Promise donmemiz gerekir. fetch
        //islemini promise icerisinde yapariz. then ler icerisindede resolve(veri) ve reject(hata) seklinde
        //yazariz. Bu sayede verimiz veya olusan hatamiz exchange methodunun cagrildigi yere gider.
        //Bu exchange() methodu artik bir promise doner.
        return new Promise((resolve,reject) => {


            //Adim 6 icin yazdigimiz exchange() methodunun icerigi buradan basliyor
            //fetch sinifi bize bir response obje donecek ve biz then diyerek o response objeyi yakalayacagiz.
            fetch(this.url + this.firstCurrency)  // https://api.exchangeratesapi.io/latest?base=USD gibi bir URL olusacak ve fetch() methodu get request yapıcak ve json verisi donecek.
            .then(response => response.json())  // response.json() ifadesi bize bir promise doner

            //Adim 11
            
            //Gelen json veriden rates -> secilenikinciparabirimi (OR: TRY) degerini alacagim.
            //"rates" degeride bir json objedir. Bu rates objesi icinden "TRY" degerini almak icin
            //yani json içinden bir anahtar kelime sorgulamak için koseli parantez kullaniriz [].
            //Gelen json içinden bir anahtar kelimeye örnek: veri["rates"][TRY] seklinde de erisebiliriz.
            //Sonuc olarak bu eristigimiz key e karsilik gelen value degerini almis oluruz.
            .then(veri => {
                const degerKarsiligi = veri.rates[this.secondCurrency];  // Json objesinden para karsiligi degerini aldik
                const miktar = Number(this.amount);  // amount degeri string gelir. Onu integer a ceviririz.

                let total = degerKarsiligi * miktar;

                //console.log(total); total degerini burada kullanirsak boyle.
                //total degerini exchange() methodunu cagirdigimiz yerde kullanmak istersek resolve kullaniriz.
                resolve(total);

            })  // Burada promise objesinden donen json veriyi aliriz.
            .catch(hata => reject(hata));
            //ayni sekilde hata degerini de exchange() methodunu cagirdigimiz yerde kullanmak istersek reject kullaniriz.


        });

        
    }










    //Adim 9
    //Asagida 3 tane method daha tanimliyoruz. Bu methodlar arayuzde bulunan 3 alanda herhangi bir
    //degisiklik oldugunda sinifimizin amount, firstCurrency, secondCurrency propertilerine yeni
    //degerleri atayacak. Bu fonksiyonlari da yine app.js de ilgili yerlerden cagiracagiz.
    //Sinifimizin "exchange()" methodu bu degerleri kullanarak request yaptigi icin degisiklikleri
    //aninda sinifimizin propertilerine yansitmamiz gerekiyor. O yuzden bu 3 method u tanimliyoruz.
    changeAmount(miktar) {
        this.amount = miktar;
    }
    changeFirstCurrency(birinciParaBirimi) {
        this.firstCurrency = birinciParaBirimi;
    }
    changeSecondCurrency(ikinciParaBirimi) {
        this.secondCurrency = ikinciParaBirimi;
    }


}