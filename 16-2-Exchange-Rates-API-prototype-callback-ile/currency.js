function Currency(miktar,ilkParaBirimi,ikinciParaBirimi) {
    this.miktar = miktar;
    this.ilkParaBirimi = ilkParaBirimi;
    this.ikinciParaBirimi = ikinciParaBirimi;
    this.xhr = new XMLHttpRequest();
}

Currency.prototype.getLatestCurrency = function(callbackParametresi) {

    const endpoint = `https://api.exchangeratesapi.io/latest`;

    this.xhr.open("GET",endpoint,true);

    this.xhr.onload = () => {


        if(this.xhr.status === 200) {
            const jsonObjesi = JSON.parse(this.xhr.responseText);
            const cevrilmisText = jsonObjesi.rates;
            callbackParametresi(null,cevrilmisText);
        }else {
            callbackParametresi("Kur Bilgilerini alirken bir hata olustu",null);

        }

        this.xhr.send();
    }

}

Currency.prototype.changeCurrency = function(newmiktar, newFirstCurrency, newSecondCurrency) {
    this.miktar = newmiktar;
    console.log(this.miktar);
    this.ilkParaBirimi = newFirstCurrency;
    console.log(this.ilkParaBirimi);
    this.ikinciParaBirimi = newSecondCurrency;
    console.log(this.ikinciParaBirimi);
}




