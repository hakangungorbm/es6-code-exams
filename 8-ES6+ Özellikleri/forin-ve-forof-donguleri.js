// FOR...IN ve FOR...OF donguleri
/*
for...in döngüsü, bir objenin sayılabilir (enumerable) özelliklerinin üzerinde dolaşılmasını sağlar.
Her bir özellik için JavaScript, belirlenen ifadeleri çalıştırır.
Bir for...in döngüsü aşağıdaki şekilde oluşturulur:

for (degisken in obje) {
  çalıştırılacak_ifadeler
}
*/


const person = {      // 1) Obje tanimliyoruz
    name: "Hakan",
    age: "32",
    salary: "10000"
};

const langs = ["Python", "Java", "C++", "Php"];  // 2) Array tanimliyoruz

const name = "Hakan";    // 3) String bir degisken tanimladik


//1. KULLANIM: OBJECT uzerinde gezinme (Object in key ve value su uzerinde gezinilir)
for(let prop in person) {
    console.log(prop);
}
/*Çıktı:            // prop her bir dongude object imizdeki OZELLIKLERE (property) tek tek sahip oldu. Degerleri Alamadık
name
age
salary
*/

// for(let prop in person) {
//     console.log(prop, person[prop]);
// }

/*
Çıktı:               // Burada ise property ve değerlerini aldık
name Hakan
age 32
salary 10000
*/


//2. KULLANIM: ARRAY uzerinde gezinme (Array de ise array in index leri uzerinde gezinilir)
// for (let index in langs) {
//   //console.log(index);   // Cikti: 0, 1, 2, 3 (Indexleri aldik)
//   console.log(index, langs[index]);   // Cikti: 0 Python , 1 Java, 2 C++, 3 Php (indexleri ve degerleri aldik)
// }

//3. KULLANIM: STRING uzerinde gezinme (Array le ayni mantiktadi)

// for (let index in name) {
//   console.log(index, name[index]);  // Cikti: 0 H, 1 a, 2 k, 3 a, 4 n
// }





//FOR..OF Dongusu
/*
for...of ifadesi bir döngü oluşturur ve gezilebilir (iterable) seyler
(Array, Map, Set, arguments nesnesi vb.) üzerinde gezer. OBJE UZERINDE GEZINEMEZ
Bir for...of döngüsü aşağıdaki şekilde oluşturulur:

for (değişken of nesne) {
  çalıştırılacak_ifadeler
}
*/

/*
for(let value of person) {   // Obje uzerinde gezinmeye calisirsak tip hatasi aliriz
  console.log(value);        // HATA: TypeError: person is not iterable
}
*/

// //ARRAY UZERINDE GEZINME
// for(let value of langs) {
//   console.log(value);   // Cikti: Python , Java, C++, Php  (Direkt degerleri verir bize)
// }

// // STRING UZERINDE GEZINME

// for (let caracter of name) {
//   console.log(caracter);      // Cikti: H, a, k, a, n
// }

