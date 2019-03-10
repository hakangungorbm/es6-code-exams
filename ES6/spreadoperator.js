//SPREAD Operatoru (Islemleri biraz daha kisaltmak icin kullandigimiz bir operator)

//SOZ DIZIMI: ...degiskenAdi;


//1. KULLANIM: Bir array in icerisideki elemanlari ayri ayri doner(DIKKAT: AYRI AYRI ELEMANLAR)
//const langs = ["Python","C++","Java","PHP"];

//console.log(langs);  // Array seklinde yazdik
//console.log(langs[0],langs[1],langs[2],langs[3]); // Arrayin her bir elmanini ayri ayri yazdik

//console.log(...langs); // Yukaridaki satirla ayni isi yapar (Array icindeki tum elemanlari tek tek doner)

//2. KULLANIM: Başka arraylari de dahil ederek yeni array oluşturur (DIKKAT: ARRAY OLARAK)

//const langs2 = ["JavaScript","C#",langs[0],langs[1],langs[2],langs[3]];  // 2 Arrayi birlestirdik (Eski Yontem)
//console.log(langs2);  // 6 deger dondu


//const langs2 = ["JavaScript","C#",...langs]; // 2 array birlesti tek array oldu
//console.log(langs2);  // 6 elamanli bir array basar ekrana


// //3. KULLANIM: Bir arrayden kopya array oluşturmak

// const numbers = [1,2,3,4,5,6,7,8,9];
// //const[a,b] = numbers;  // a ve b degiskenlerine numbers arrayinin 1. ve 2. elementleri atanir
// //console.log(a,b); // Cikti: 1 2


// var arr2 = [...numbers]; 
// console.log(arr2); // Cikti: [1, 2, 3, 4, 5, 6, 7, 8, 9]  tamamini atadi

// const hakan = numbers;
// console.log(hakan); // Cikti: [1, 2, 3, 4, 5, 6, 7, 8, 9]  tamamini atadi

// const [...newarray] = numbers
// console.log(newarray); // Cikti: [1, 2, 3, 4, 5, 6, 7, 8, 9] tamamimi atadi

// const[a,b,...numbers2] = numbers; // a ve b degiskenlerine ilk 2 tanesini geri kalanlari da numbers2 arrayi ine atama yapar
// console.log(numbers2);  // Cikti: [3, 4, 5, 6, 7, 8, 9] numbers arrayinin geri kalan 7 elementini NUMBERS2 arrayine atadi


// 4. KULLANIM: Fonksiyonlara parametre olarak Array geçmek gereken durumlarda kullanabiliriz
const addNumbers = (a,b,c) => console.log(a + b+ c);
const numbers = [100,200,300];

//addNumbers(numbers[0], numbers[1], numbers[2]); // Cikti: 600 (Eski Yontem)

addNumbers(...numbers); // Cikti: 600 (Yeni Yontem)

//5. KULLANIM: Math fonksiyonunda kullanmak

let numbers3 = [9, 4, 7, 1];
console.log(Math.min(...numbers3)); // Cikti: 1

//6. KULLANIM: NodeList’ten dönen değeri diziye çevirmek
//ayni sinif ismine sahip 10 tane div var. Biz "querySelectorAll("div")" operatoru ile butun divleri alabiliriz
//Ornek: const listItems = document.querySelectorAll(".list-group-item"); bu sekilde aldigimizda NODE LIST seklinde getirir butun bu sinif ismine sahip elementler

[...document.querySelectorAll('div')]; // seklinde kullandigimizda NODELIST degil DIZI seklinde donecektir elemanlari


//7. KULLANIM: Array içerisindeki duplicate değerleri temizlememize yarar (OZEL KULLANIM)
const arr = [1,2,4,4,5,5,6];
console.log([...new Set(arr)]); //Cikti: [1, 2, 4, 5, 6]
