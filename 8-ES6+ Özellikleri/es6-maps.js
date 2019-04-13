// JAVASCRIPT deki MAP veri tipi (Maps)

//Maps = key (anahtar) - value (deger) seklinde calisir
//KEY ve VALUE  herhangi bir veri tipi olabilir (primitive tipler - obje - fonksiyon vs gibi referans tipler de olabilir)

//MAP OLUSTURMAK

// let myMap = new Map();

// console.log(typeof myMap);  // Cikti: object    (Bu map bir referans tip tir)
// console.log(myMap);         // Cikti: Map(0) {}  (Bos Mapimizi goruntuleyebiliriz)


// const key1 = "Hakan Gungor";  // String veri tipi
// const key2 = {a:10, b:20}     //Obje veri tipi
// const key3 = () => 2;         // Sadece 2 yi donen bir fonksiyon

// //MAP'e ekleme (SET)

// myMap.set(key1,"String Deger");
// myMap.set(key2,"Object Literal Deger");
// myMap.set(key3,"Function Deger");

// //MAP'den bir key e karsilik gelen degeri alma (GET)

// console.log(myMap.get(key1));  // Cikti: String Deger  
// console.log(myMap.get(key2));  // Cikti: Object Literal Deger
// console.log(myMap.get(key3));  // Cikti: Function Deger

// console.log(myMap);  // Cikti: Map(3) {"Hakan Gungor" => "String Deger", {…} => "Object Literal Deger", ƒ => "Function Deger"}

// //KAC TANE ELEMAN OLDUGUNU BULMA

// console.log(myMap.size);  // Cikti: 3

const cities = new Map();

cities.set("Ankara",5);
cities.set("Istanbul",15);
cities.set("Izmir",4);


// forEach() ile Iterating(gezinme)

cities.forEach(function(value,key){
    console.log(key,value);         // Cikti: Ankara 5   Istanbul 15   Izmir 4
});

//for..of ile Iterating(gezinme)

for(let value of cities) {
    console.log(value);                         // Cikti:   ["Ankara", 5] ["Istanbul", 15] ["Izmir", 4]   -- Array seklinde geldi
}

for(let [key,value] of cities) {               //Destructing yapisi var burada
    console.log(key,value);                    // Cikti: Ankara 5   Istanbul 15   Izmir 4
}

for(let key of cities.keys()) {
    console.log(key);                         // Cikti: Ankara  Istanbul  Izmir 
}

for(let value of cities.values()) {
    console.log(value);                        // Cikti: 5  15  4
}

for (var [key, value] of cities.entries()) {
    console.log(key + ' = ' + value);          // Cikti: Ankara 5   Istanbul 15   Izmir 4
}

//BIR ARRAY DEN MAP OLUSTURMA

// const array = [["key1","value1"],["key2","value2"]];   // Ic ice array olusturduk

// const lastMap = new Map(array);     // Array den map olusturuyoruz

// console.log(lastMap);  // Cikti:  Map(2) {"key1" => "value1", "key2" => "value2"}

// BIR MAP DEN ARRAY OLUSTURMA

const citieses = new Map();

citieses.set("Ankara",5);
citieses.set("Istanbul",15);
citieses.set("Izmir",4);

const arraya = Array.from(citieses);

console.log(arraya);         // Cikti:  [["Ankara",5],["Istanbul",15],["Izmir",4]]