//Karsilastirma Operatorler, Kosullar ve Ternary Operator

//Karsilastirma Operatorleri (Iki degeri karsilastirdigimiz operatorler) sonucda boolean deger doner
// ==
// ===
// !=
// !==
// >
// <
// >=
// <=

// console.log( 2==2); // true
// console.log("js"=="java"); //false
// console.log(2=="2"); // true

// console.log (2 === "2"); // Degerleri tiplerine bakarak karsilastiriyor (false sonucu doner)

// console.log ( 4>2); // true

// console.log( 2 < 5); // true

// console.log ( 2 !=4);  // true (esit degilmidir diye soruyor. Evet esit olmadigi icin true sonucu donuyor)
// console.log ( 2 !=2);  // false (esit degilmidir diye soruyor. Hayir esit oldugu icin false sonucu donuyor)

//MANTIKSAL BAGLACLAR

//Not Operatoru (Bir degeri true ise false a , false ise true ya ceviriyor)

// console.log(2!=2); // false 
// console.log(!(2!=2)); // true

//And Operatoru (Butun kosullar true ise true cikar)

// console.log((2==2) && ("ahmet"=="ahmet"));

//OR Operatoru (Tek kosul bile true ise genel sonuc true cikar)

// console.log((4==2) || ("Ahmet"!="Ahmet"));

//KOSUL DURUMLARIMIZ

//if Operatoru

// if(kosul) {
//     // if block
// }

// const error = false;

// if(error == true) {   // Bu sart true donecek
//     console.log("Hata olustu");
// }else {
//     console.log("Hata olusmadi");
// }

// const user = "mmc";

// if(user === "mmc") {
//     console.log("Kullanici bulundu");
// }else {
//     console.log ("Kullanici YOK");
// }

// const process = "2";

// if(process === "1") {
//     console.log("Islem 1");
// }
// else if (process === "2") {
//     console.log("Islem 2");
// }
// else if (process === "3") {
//     console.log("Islem 3");
// }
// else {
//     console.log("Gecersiz islem");
// }

// const number = 106;

// if (number ==100 ) {
//     console.log("Sayi 100 e esit");
// }
// else {
//     console.log("ESIT DEGIL");
// }


// TERNARY OPERATOR (If Else kosulu icinde tek bir islem yapacaksak)

// const number = 100;
// console.log (number === 100 ? "Sayi 100" : "Sayi 100 Degil");

// if(number ===100) console.log("Sayi 100");
// else console.log("Sayi 100 Degil")

//SWITCH - CASE Yapısı

const process = 2;

switch(process) {
    case 1: 
        console.log("1. Islem Gerceklesti");
        break;
    case 2:
        console.log("2. Islem Gerceklesti");
        break;
    case 3:
        console.log("3. Islem Gerceklesti");
        break;
    default:
        console.log("Gecersiz Islem");

}
