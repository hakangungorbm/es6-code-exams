//DONGULER (WHILE - DO WHILE - FOR)


//WHILE DONGUSU

// let i = 0;

// while (i<10) {
//     console.log(i);
//     i++;  // sonsuz donguye girmemek icin arttirmamiz gerekecek (i += 1 seklindede yazilabilir)
// }

// let i = 10;

// while (i >0) {
//     console.log(i);
//     i -= 1 ; //(i = i - 1 seklinde de yazilabilir)

// }

// // Break ve Continue Kelimeleri

// //Break kosulda calistirildiginda dongumuz sonlanir

// let i = 0;

// while (i < 10) {
//     console.log(i);
//     if(i==5) break;
//     i++;
// }

// //Continue yazilan yerde dongu tekrar basa doner

// let i = 0;

// while( i < 10 ) {  
//     if ((i==3) || i == 5) {
//         i++;        // Sonsuz dongu olusmamasi icin buradada 1 arttirmaliyiz
//         continue;
//     }
    
//     console.log(i);
//     i++;
// }

// // DO-WHILE DONGUSU (En az 1 kez calisir)

// let i = 0;

// do {

//     console.log(i);
//     i++;

// }while(i < 10);

// FOR DONGUSU

const langs = ["Python", "Javascript", "Java"];

let i = 0;

// while (i < langs.length) {
//     console.log(langs[i]);
//     i++;
// }

// // ilk yontem
// for  ( let i = 0 ; i < langs.length ; i ++) {
//     console.log(langs[i]);
// }

//FOREACH FONKSIYONU

// //ikinci yontem (Callback function)

// langs.forEach(function(lang,i) {
//     console.log(i+". dil: "+lang);
// });

// //MAP FONSKIYONU

// //obje olusturuyoruz (1. Adim)
// const users = [
//     {name: "Mustafa", age: 25},
//     {name: "Hakan", age:32},
//     {name: "Mehmet", age: 6}
// ];

// //yukaridaki objenin name degerlerinden olusan bir array olusturuyoruz (2. Adim)
// const names = users.map(function(user) {
//     return user.name;
// });

// const ages = users.map(function(user) {
//     return user.age;
// });

// //Array imizi yazdiriyoruz
// console.log(names, ages);


//FOR IN FONKSIYONU


const user = {
    name: "Hakan",
    age: 25
};

for (let key in user) {
    console.log(key, user[key]);
}