//ES6 SINIFLARI ILE KALITIM
//ES6 KALITIMI COK KOLAYLASTIRIR


//Asagida ES6 oncesi prototype tabanli kalitim ornegimiz vardi. Aynisini ES6 ile yapalim


class Person {               // Literaturde: SUPERCLASS veya BASECLASS olarak gecer
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    showInfos() {
        console.log(`Isim: ${this.name} Yas: ${this.age}`);
    }
}

//Literaturde alttaki tureyen sinif:  SUBCLASS, CHILDCLASS, DERIVEDCLASS olarak gecer
class Employee extends Person {  // Person sinifinin tum methodlarini miras almis oluyoruz
    constructor(name,age,salary) {
        /*this.name = name;
        this.age = age;*/
// Super anahtar kelimesi SUPERCLASS taki(Person sinifi) bir methodu kullanmak istedigimizi soyler
        //super.showInfos();  // Burada SUPER anahtar kelimesi PERSON sinif adina denk gelir.
        //sadece SUPER anahtar kelimesini tek kullanirsak PERSON sinifinin CONSTRUCTOR methodunu kullanmis oluruz
        super(name,age);
        this.salary = salary;
    }
    showInfos() {
        console.log(`Kendi Isim: ${this.name} Kendi Yas: ${this.age}`);
    }

    toString = function() {
     console.log("Employee sinifi icindeki method calisiyor");
    }
    
    raiseSalary(amount) {
        this.salary += amount;
    }
}

const emp = new Employee("Hakan",32,7000);
emp.raiseSalary(500); // Salary i 500 arttirdik
console.log(emp); // Ciktisi: Employee {name: "Hakan", age: 32, salary: 7000}
emp.showInfos(); // Ciktisi: Isim: Hakan Yas: 32  (Miras aldigimiz PERSON sinifinin methodu)

emp.showInfos();  //Ciktisi: Kendi Isim: Hakan Kendi Yas: 32 (Bu EMPLOYEE sinifinin kendi showInfos() methodu). Miras aldigimiz methodu override ettik
emp.toString();  // Ciktisi: Employee sinifi icindeki method calisiyor (Bu da OBJECT objesi icindeki degil sinifin icindeki). OBJECT icerisinde tanimli olan toString() methodunu override ettik.









// //PROTOTYPE tabanli KALITIM (ES6 dan once)

// //KALITIM(INHERITANCE) = Bir objenin baska objeden methodlarini veya ozelliklerini miras almasidir.

// function Person(name,age) {   // Her calisan kendi icinde name ve age ozelligine sahiptir.
//     this.name = name;
//     this.age = age;
// }

// // Person.prototype.showInfos = function() {
// //     console.log(`Isim: ${this.name} Yas: ${this.age}`);
// // }

// // const person = new Person("Hakan",32);
// // console.log(person);

// function Employee(name,age,salary) {
//     this.name = name;
//     this.age = age;

//     //Ustteki 2 satir yerine soylede yapabiliriz
//     Person.call(this, name,age);     // Buradaki THIS employee nin yerine geciyor. EMPLOYEE objesini PERSON fonksiyonuna gonderiyoruz.
//     this.salary = salary;
// }

// Employee.prototype = Object.create(Person.prototype); // Person'in tum methodlarini miras almis olduk

// // const emp = new Employee("Hakan", 32, 7000);
// //console.log(emp.showInfos());  // Cikti: Isim: Hakan Yas: 32      -- showInfos() methodunu miras olarak Person() objesinden aldik.

// //Asagidaki satirda ise PERSON objesinin methodu olan showInfos() u miras olarak almasina ragmen, biz onu degilde
// //kendi tanimladigimiz showInfos() methodunu calistirmak istiyoruz ve Employe() objesinin prototype ine 
// //bu showInfos() metdhodunu yaziyoruz (OVERRIDE ediyoruz)
// Employee.prototype.showInfos = function() {
//     console.log(`Employee fonksiyonunun prototype inde override ederek tanimladigimiz showInfos Methodu calisiyor Isim: ${this.name} Yas: ${this.age} Maas: ${this.salary}`);
// }

// const emp = new Employee("Hakan", 32, 7000);

// emp.showInfos();  //Ciktisi: Employee fonksiyonunun prototype inde override ederek tanimladigimiz showInfos Methodu calisiyor Isim: Hakan Yas: 32

// console.log(emp);  // Ciktisi: Employee {name: "Hakan", age: 32, salary: 7000}

// //console.log(emp.toString());   // OBJECT objesinden aldigi miras. bu toString() methodu OBJECT objesinde tanimli.

// // Employee.prototype.toString = function() {
// //     console.log("Employee nin prototype ine yazdigimiz fonsiyon calisiyor");
// // }

// // emp.toString();   // Employee nin prototype ine yazdigimiz fonsiyon calisiyor