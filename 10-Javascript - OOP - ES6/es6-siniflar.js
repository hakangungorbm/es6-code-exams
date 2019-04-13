//ES6 SINIFLAR VE SINIFLARDAN OBJE URETME

// ES6 sınıflarına SYNTACTIC SUGAR (yazım şekeri) denir ve sadece yazım değişir.

//ESKI YONTEMLE

//1. Fonksiyon olusturuyoruz

function Empolee(name,age,salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
}

//2. Fonksiyonumuza method ekliyoruz
Empolee.prototype.showInfos = function() {
    console.log(`Isim: ${this.name} Yas: ${this.age} Maas: ${this.salary}`);
}

//3. O fonksiyondan birtane OBJE olusturuyoruz
const emp = new Empolee("Hakan", 32,7000);

//4. Objemize bakiyoruz
console.log(emp);  // Ciktisi: Empolee {name: "Hakan", age: 32, salary: 7000}


//ES6 ILE YENI YONTEM

//1. Class i olusturuyoruz

class Empolee1 {
    constructor(name,age,salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    //2. Sinifimiza method ekliyoruz ama bu sefer sinifimizin icinde
    showInfos() {
        console.log(`Isim: ${this.name} Yas: ${this.age} Maas: ${this.salary}`); 
    }
}

//3. Sinifimizdan birtane OBJE olusturuyoruz
const emp1 = new Empolee1("Hakan", 32,7000);
console.log(emp1); // Ciktisi: Empolee1 {name: "Hakan", age: 32, salary: 7000}
emp.showInfos();   // Ciktisi: Isim: Hakan Yas: 32 Maas: 7000