// arayuzumuze girdigimiz EURO degerini internetten ucretsiz hizmet veren EXCHANGE RATES API den gelen verilerle
// hesaplayarak ekrana TL karsiligini yazacagiz

document.getElementById("change").addEventListener("click",exchangeToTRY);

function exchangeToTRY(euro) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://api.exchangeratesapi.io/latest",true);
    
    xhr.onload = function() {
        if(this.status == 200) {
            let response = JSON.parse(xhr.responseText);
            //console.log(response.rates.TRY);  // response objesi icinden -> rates -> TRY key ine ulasiyorum.
            const rate = response.rates.TRY;  // Guncel kur (Rest apiden aldik)
            //console.log(typeof response.rates.TRY);  // Cikti: number   (tipi number imis)

            const amount = Number(document.getElementById("amount").value);  // string gelen degeri number a ceviriyoruz
            //console.log(typeof amount); // Cikti: String (tipi string imis)

            //Hem rate hemde amount number tipinde oldu
            //console.log("Rate: " + rate + " Euro Degeri: " + amount);
            console.log(`Kur: ${rate} ve girilen ${amount} euronun TL karsiligi: ${rate*amount}`);

            //Girilen Euro miktarinin TL karsiligini TL input alanina girelim.
            //toFixed(2) methodu ile çıkan ondalık sayı değerimizin virgülden sonraki kısmını 2 hane ile kısıtlıyoruz.
            document.getElementById("tl").value = (rate * amount).toFixed(2) ;

        }
    }

    xhr.send();
}