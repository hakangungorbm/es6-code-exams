//JAVASCRIPT OOP
//Kendi nesnelerimiz olabilir ve bu nesnelerin özellikleri(property) veya methodları olabilir.

/* console.log(window);  // window objemiz karsimiza cikar. Bircok ozelligi ve methodlari vardir.
console.log(window);  // Uzerinde bulundugumuz objeyi gosterir. Global scope da en genis obje window objesidir.

// Asagidaki yapi javascript te OBJECT LITERAL olarak gecer. Basit objelerimizi bu sekilde olusturabiliriz.
const emp1 = {
    name: "hakan",
    age: 32,
    showInfos: function() { console.log("Bilgiler Gosteriliyor"); }
};

const emp2 = {
    name: "Gungor",
    age: 24
};

emp1.salary = 7000;

console.log(emp1);

console.log(this); */


//THIS anahtar kelimesi: uzerinde bulundugumuz (Scopeunda oldugumuz) objeyi verir

//CONSTRUCTOR OLUSTURMA

/* function Employee() {                // Constructor (yapici) fonksiyon
    this.name = "Mehmet";
} */

/* //OBJE URETME (constructor method dan)

const date = new Date();       // Date fonksiyonundan bir obje(nesne) urettik

const emp1 = new Employee();   // Employee fonksiyonunda bir obje(nesne) urettik

console.log(emp1);
 */

function Employee(name,age,sallary) {                // Constructor (yapici) fonksiyon
    this.name = name;
    this.age = age;
    this.sallary = sallary;

    this.showInfos = function() {
        console.log(this.name, this.age, this.sallary);
    }

    console.log(this);   // Cikti: Employee {name: "Hakan", age: 32, sallary: 7000}   // THIS, fonksiyonun icindeki scope da oldugu icin bu fonksiyondan turetilen obje yi verir
}

console.log(this);       // Cikti: Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}    // Global scope da oldugumuz icin window obje sini verdi bize THIS
//OBJE URETME (constructor method dan)

const emp1 = new Employee("Hakan",32,7000);   // Cikti: Employee {name: "Hakan", age: 32, sallary: 7000} ()
console.log(emp1);

emp1.showInfos();  // Cikti: Hakan 32 7000
