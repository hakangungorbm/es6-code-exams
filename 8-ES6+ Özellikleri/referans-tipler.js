//REFERANS TIPLER
//Referans tipler bellekte belli bir yeri gosteren degerlerdir
//Primitive veri tipleri deger tasirlar.

// Primitive Veri tipi

let a = "Mustafa";
let b = "Mustafa";

if(a === b) {          // a ve b primitive veri tipi oldugu icin sadece bu tiplerin tasidigi degerler uzerinden gidilir
    console.log("a ve b birbirine esit");  // Burada (Mustafa = Mustafa) seklinde degerler kiyaslanir ve ekrana ESIT yazar.
}

//Referans Tipler = Date Object, Array, Objeler (Bellekte bir yeri gosteren)

let array1 = [1,2,3,4,5];
let array2 = [1,2,3,4,5];

if (array1 === array2) {    // Burasi false cikar. Icindeki degerler karsilastirilmaz. Bellekte ayni yeri gosteriyor mu ona bakar
    console.log("Esit");    // Burasi ekrana birsey basmaz
}else {
    console.log("array1 ve array2 birbirine esit degil");
}

//NOT: Referans veri tiplerinde bellekte ayni yeri gosteriyor mu ona bakilir. Yani bellekte referans oldugu alanlar kiyaslanir.

// //Asagida 2 tane obje (referans tip tanimliyoruz)
// const person1 = {
//     name: "hakan",
//     age: 25
// }
// const person2 = {
//     name: "hakan",
//     age: 35
// }

// if (array1 === array2) {   
//     console.log("Esit");   
// }else {
//     console.log("person1 ve person2 birbirine esit degil");
// }

const cities = new Map();

cities.set("Ankara",5);
cities.set("Istanbul",15);
cities.set([1,2,3], "Array");

// Burada get icerisine string (primitive veri tipi) verdik. Bu method gidiyor MAP in icinde bu degeri ariyor
// Bu degere esit bir deger bulursa value sunu aliyoruz. Asagidaki 5 sonucunu arama yaptigimiz veri tipi
//Primitive oldugu icin buluyoruz. 
console.log(cities.get("Ankara"));   // Cikti: 5


//Asagidaki satirda ise get methodu icine ARRAY(referans veri tipi) verdik. Dolayisiyla
console.log(cities.get([1,2,3]));    // Cikti: undefined (Sebebi: Bu [1,2,3] arrayinin bellekteki yeri ile yukarida tanimli olan [1,2,3] arrayinin bellekte referans ettigi yerler farklidir)