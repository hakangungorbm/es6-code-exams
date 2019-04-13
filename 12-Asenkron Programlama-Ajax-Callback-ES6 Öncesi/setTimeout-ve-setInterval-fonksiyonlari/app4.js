//setTimeout() ve setInterval() bizim window objemizin metodlaridir.

console.log(this);

//setTimeout() fonksiyonu
//Bu fonksiyon sayesinde belli bir islemi belli bir saniye sonra baslatabiliriz.

//Ornek:

setTimeout(function(){
    console.log("Naber");   // 2 saniye sonra console a "Naber" yazacak
},2000);

//setInterval() fonksiyonu

//Ornek:
// let i = 0;
// setInterval(function(){  // 2 saniye araliklarla icerideki fonksiyonu tekrar tekrar calistirir
//     i++;
//     console.log(`Sayi: ${i}`);
// },2000);


//clearInterval() fonksiyonu ile setInterval fonksiyonunu durdurma

//Yukaridaki method her 2 saniyede bir calisacak. Peki biz bunu nasil durduracagiz.
//Durdurmak icin clearInterval() fonksiyonunu kullaniriz. Aksi halde yukaridaki islem browser kapanana kadar devam eder.

//Ornek:

let i = 0;
let value = setInterval(function(){  // 2 saniye araliklarla icerideki fonksiyonu tekrar tekrar calistirir
    i++;
    console.log(`Sayi: ${i}`);
},2000);

document.getElementById("btn").addEventListener("click",function(){ // Durdur butonuna bastigimizda setInterval fonksiyonunu durdurur.
    clearInterval(value);
});

