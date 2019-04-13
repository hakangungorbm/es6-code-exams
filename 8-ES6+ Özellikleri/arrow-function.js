//ARROW FUNCTION lar ES6 ile gelen ve function yazmamızı biraz daha kısaltan güzel bir söz dizimidir

//Eski kullanim
/*
const merhaba =  function() {
    console.log("Merhaba");
}

merhaba();
*/

//ARROW FUNCTIN ILE YENI YAZIM SEKLI

//SOZ DIZIMI
//const fonksiyonadi = (parametreler) => { ......}

//BIRINCI KULLANIM (PARAMETRE ALMAYAN)
// const merhaba = () => {
//     console.log("merhaba");
// }
// merhaba();



//IKINCI KULLANIM
// const merhaba = (firstname) => {
//     console.log("Merhaba", firstname);
// }
// merhaba("Hakan");



//UCUNCU KULLANIM (DAHA OZET KULLANIM)
// TEK PARAMETRELI BIR FONKSIYON ISE parametre LERI CERELEYEN PARANTEZLERI DE YAZMASAK OLUR
// const merhaba = firstname => {
//     console.log("Merhaba",firstname);
// }
// merhaba("Hakan");


//DORDUNCU KULLANIM (TEK BIR ISLEM YAPAN METHODLAR ICIN SUSLU PARANTEZLERDE KALDIRILABILIR)

const merhaba = firstname => console.log("Merhaba",firstname);

merhaba("Hakan");





//ORNEK UYGULAMA

//ESKI METHODLARLA KUP BULMA

// const cube = function(x) {
//     return x * x * x;
// }
// console.log(cube(4));

//ussteki ornegin YENI METHOD larla kullanimi (ARROW FUNCTION) ile kullanimi
// fonksiyonumuz tek bir islem yapiyorsa ve bu return ise burada return e de ihtiyac yok. Kullanmayabiliriz.

const cube = x =>  x * x * x;

console.log(cube(4));