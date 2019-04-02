// arayuzumuze girdigimiz EURO degerini internetten ucretsiz hizmet veren EXCHANGE RATES API den gelen verilerle
// hesaplayarak ekrana TL karsiligini yazacagiz

document.getElementById("change").addEventListener("click",exchangeToTRY);

function exchangeToTRY(euro) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://api.exchangeratesapi.io/latest",true);
    
    xhr.onload = function() {
        if(this.status == 200) {
            let response = JSON.parse(xhr.responseText);
            console.log(response.rates.TRY);  // response objesi icinden -> rates -> TRY key ine ulasiyorum.
        }
    }

    xhr.send();
}