//FONSIYONLAR

//Fonksiyon tanimlama

function merhaba (name,age) {
    //varsayilan deger verme
    if(typeof name === "undefined") name = "Bilinmeyen Isim";
    if(typeof age === "undefined") age = "Yas Bilinmiyor";
    console.log(`Isim:  ${name} Yas: ${age}`);
}


//Varsayilan degerli  fonksiyon tanimlama

function merhaba (name="ISIMYOK",age=43) {
    //varsayilan deger verme
    if(typeof name === "undefined") name = "Bilinmeyen Isim";
    if(typeof age === "undefined") age = "Yas Bilinmiyor";
    console.log(`Isim:  ${name} Yas: ${age}`);
}

//fonksiyon cagrisi (function call)  ve fonksiyon icerisine parametre gonderme

merhaba("Murat",25);
merhaba("Hakan",32);

merhaba();  // Ciktimiz =   Isim:  undefined Yas: undefined


//Function Decleration (Fonksiyon tanimlama)
function merhaba () {
    console.log("Merhaba");
}

merhaba();

//Function Expression (Fonsiyon ifadeler)
const merhaba2 = function() {
    console.log("Merhaba2");
}

merhaba2();

//Immediately Invoked Function Expression (IIFE) Tanimlandigi yerde calisan fonksiyon demektir


(function(name) {
    console.log(`Merhaba ${name}`);
})("Murat");

//

const database = {
    host: "localhost",
    add: function() {
        console.log("Eklendi");
    },
    get: function() {
        console.log("Alindi");
    },
    update: function(id) {
        console.log(`Id:  ${id} guncellendi`);
    },
    delete: function(id) {
        console.log(`Id: ${id} silindi`)
    }
}

console.log(database.host);
database.add();
database.delete(10);
