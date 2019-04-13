// Array ozellikleri

let value;

//Not: Bir array icerisinde sayi,string ve null degerler birlikte bulunabilir.

const numbers = [43,56,33,23,44,35,6];  // Array tanimlarken birinci yontem
//const numbers2 = new Array(1,2,3,4,5,6,7);  // Array tanimlamanin bir diger yolu
const langs = ["Python","Java","C++","Javascript"];
const a = ["Merhaba",22,null,undefined,3.14];

value = numbers.length;
value = numbers[0];
value= numbers[2];

value=numbers[numbers.length-1];

numbers[2] = 1000; // array in bir dizinine deger atama

value=numbers;  // degiskene array atama

value = numbers.indexOf(1000);  // numbers arrayindeki dizinlerden 1000 sayisinin dizinini bulduk

//Arrayin sonuna deger ekleme -push()

numbers.push(2000);

value=numbers;

//Arrayin basina deger ekleme - unshift()

numbers.unshift(3000);

value = numbers;

//Arrayin sonundan deger atma - pop() (Son elemani siler)

numbers.pop();

value = numbers;

//Arrayin basindan deger atma - shift ()(Ilk elemani siler)

numbers.shift();

value = numbers;

//Arrayin belirli bir indexinden baska bir indexine kadar olan degerleri atma - splice() (0-2 inci degerleri siler)

numbers.splice(0,3);

value = numbers;

//Arrayin tersine cevirme - reverse() 

numbers.reverse();

value = numbers;

//Arrayin tersine cevirme - sort() 

numbers.sort(); // sort methodu sadece ilk rakama(karakterlere) bakarak siralar. O yuzden kucukten buyuge veya buyukten kucuge dogru siralamaz

//kucukten buyuge siralama yapmak icin 
value = numbers.sort(function(x,y) {
    return x - y;
});

value = numbers;

//buyukten kucuge siralama yapmak icin 
value = numbers.sort(function(x,y) {
    return y - x;
});


value = numbers;

console.log(value);

// // Bir DOM objesini veya HTML Collection i array e cevirme.

// const elements = document.all;  // Bize HTML Collection doner  ve foreach gibi methodlar kullanilamaz

// const collections = Array.from(document.all); // Collection array e donusturuldu.

// console.log(collections);  // Collection dan gelen tum icerigi array olarak console a yazar