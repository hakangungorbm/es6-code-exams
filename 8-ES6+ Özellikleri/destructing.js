//DESTRUCTING = araylerin icinden veya oblejerin icinden nesneleri almanin kisa yolu;
//Degiskenlerimizin degerlerini  Arraylerden veya Objelerden atamak istiyorsak destructing kullanabiliriz

//let number1, number2;

arr = [100,200,300,400];

//Yukaridaki array in 1. indexini number1 degiskenine,  2. indexini de number2 degiskenimize atiyalim
//KLASIK YONTEM

// number1 = arr[0];
// number2 = arr[1];

// console.log(number1, number2);

//DESTRUCTIN YAPISI KULLANIMLARI

//let number1, number2;
//[number1,number2] = [100,200,300,400];   // CIKTI: 100, 200 (1. Yontem)
//[number1,number2] = arr;                 // CIKTI: 100, 200 (2. Yontem)

//const [number1, number2] = arr;            // CIKTI: 100, 200 (3. Yontem)

// console.log(number1, number2);

//OBJE DESTRUCTING

// const numbers = {  // obje olusturdum
//     a: 10,
//     b: 20,
//     c: 30,
//     d: 40,
//     e: 50
// };

// //objemin icerisindeki a, c, e degerlerinin baska degiskenlere atanmasi icin
// // asagida tanimadigimiz 3 degiskenin ismi OBJE de tanimli NESNE isimleri ile ayni olursa otomatik olarak eslesir

//NOT: Objeden aldigimiz icin degerlerimizi suslu parantezi kullanmak zorundayiz
// //const {a, c, e} = numbers; // objemiz icindeki degerler buradaki degiskenlerle eslesti ve degerlerini aldik
// //console.log(a, c, e);  // cikti: 10 , 30, 50 olur

// const {a:number1, c:number2, e:number3} = numbers; // objemiz icindeki degerler buradaki degiskenlerle eslesti ve degerlerini aldik
// console.log(number1, number2, number3);  // cikti: 10 , 30, 50 olur



//FUNCTION DESTRUCTING (Fonksiyonlarla birlikte kullanimi)

//Fonksiyon tanimlama
const getLangs = () => ["pyton","Java","C++"];

//Tanimlayacagimiz 3 degiskene (lang1, lang2, lang3) degerlerini fonksiyon icerisinden alalim ()
const [lang1,lang2,lang3] = getLangs();
console.log(lang1, lang2, lang3);



//ORNEK UYGULAMA

const person = {
    name: "Hakan Gungor",
    year: 1986,
    salary: 10000,
    showInfos: () => console.log("Bilgiler Gosteriliyor...")
}

//NOT: Objeden aldigimiz icin degerlerimizi suslu parantezi kullanmak zorundayiz

const {name:isim, year:yil, salary:maas, showInfos:bilgileriGoster} = person;

console.log(isim, yil, maas);
bilgileriGoster();