// JAVASCRIPT deki SET veri tipi (Sets = Kumeler)
// Array lere oldukca benzerler.
// En onemli ozelligi 1 degeri sadece 1 defa tasir. Or: 2 tane "Mustafa" degeri kesinlikle olamaz


//SET OLUSTURMA ve DEGER EKLEME

const mySet = new Set();

mySet.add(100);
mySet.add(100);  // Ayni degerden oldugu icin bu satir calismaz
mySet.add(3.14);
mySet.add("Hakan");
mySet.add(true);
mySet.add([1,2,3]);
mySet.add({a:1, b:2});

// Toplu sekilde deger ekleme

const mySet2 = new Set([100, 3.14, "Mustafa"]);      // ARRAY DEN SET OLUSTURUYORUZ

console.log(mySet);

console.log(mySet2);

// SIZE

console.log(mySet.size);

//DELETE METHODU

mySet.delete("Hakan");

console.log(mySet);

//HAS METHODU (bir degerin bu kumede olup olmadigini sorgulayabiliriz)

console.log(mySet.has("Mustafa"));  // Cikti: false


//REFERANS VERI TIPINDE OLAN BIR DEGER VAR MI DIYE SORGULAYALIM

console.log(mySet.has([1,2,3])); // Cikti: false  (Sebebi: farkli referans noktalarini sorguladik)

//FOREACH METHODU ILE SET UZERINDE GEZINELIM

mySet.forEach(function(value) {
    console.log(value);         // Cikti: Set icerisindeki tum degerler geldi
});

//FOR..OF DONGUSU

for(let value of mySet) {
    console.log(value);          // Cikti: Set icerisindeki tum degerler geldi
}

// SET lerden ARRAY OLUSTURMA

const array = Array.from(mySet);
console.log(array);