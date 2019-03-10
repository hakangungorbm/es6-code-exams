// FOR...IN ve FOR...OF donguleri
/*
for...in döngüsü, bir objenin sayılabilir (enumerable) özelliklerinin üzerinde dolaşılmasını sağlar.
Her bir özellik için JavaScript, belirlenen ifadeleri çalıştırır.
Bir for...in döngüsü aşağıdaki şekilde oluşturulur:

for (degisken in obje) {
  çalıştırılacak_ifadeler
}
*/


const person = {      // Obje tanimliyoruz
    name: "Hakan",
    age: "32",
    salary: "10000"
};

const langs = ["Python", "Java", "C++", "Php"];  // Array tanimliyoruz

const name = "Hakan";    // String bir degisken tanimladik


//1. KULLANIM: OBJECT uzerinde gezinme
for(let prop in person) {
    console.log(prop);
}
/*Çıktı:            // prop her bir dongude object imizdeki OZELLIKLERE (property) tek tek sahip oldu. Degerleri Alamadık
name
age
salary
*/

for(let prop in person) {
    console.log(prop, person[prop]);
}

/*
Çıktı:               // Burada ise property ve değerlerini aldık
name Hakan
age 32
salary 10000
*/


//2. KULLANIM: ARRAY uzerinde gezinme





//FOR..OF Dongusu
/*
for...of ifadesi bir döngü oluşturur ve gezilebilir (iterable) objeler
(Array, Map, Set, arguments nesnesi vb.) üzerinde gezer.
Bir for...of döngüsü aşağıdaki şekilde oluşturulur:

for (değişken of nesne) {
  çalıştırılacak_ifadeler
}
*/