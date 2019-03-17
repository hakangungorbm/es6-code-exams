//PROTOTYPE tabanli KALITIM (ES6 dan once)

//KALITIM(INHERITANCE) = Bir objenin baska objeden methodlarini veya ozelliklerini miras almasidir.

function Person(name,age) {   // Her calisan kendi icinde name ve age ozelligine sahiptir.
    this.name = name;
    this.age = age;
}

// Person.prototype.showInfos = function() {
//     console.log(`Isim: ${this.name} Yas: ${this.age}`);
// }

// const person = new Person("Hakan",32);
// console.log(person);

function Employee(name,age,salary) {
    this.name = name;
    this.age = age;

    //Ustteki 2 satir yerine soylede yapabiliriz
    Person.call(this, name,age);     // Buradaki THIS employee nin yerine geciyor. EMPLOYEE objesini PERSON fonksiyonuna gonderiyoruz.
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype); // Person'in tum methodlarini miras almis olduk

// const emp = new Employee("Hakan", 32, 7000);
//console.log(emp.showInfos());  // Cikti: Isim: Hakan Yas: 32      -- showInfos() methodunu miras olarak Person() objesinden aldik.

//Asagidaki satirda ise PERSON objesinin methodu olan showInfos() u miras olarak almasina ragmen, biz onu degilde
//kendi tanimladigimiz showInfos() methodunu calistirmak istiyoruz ve Employe() objesinin prototype ine 
//bu showInfos() metdhodunu yaziyoruz (OVERRIDE ediyoruz)
Employee.prototype.showInfos = function() {
    console.log(`Employee fonksiyonunun prototype inde override ederek tanimladigimiz showInfos Methodu calisiyor Isim: ${this.name} Yas: ${this.age} Maas: ${this.salary}`);
}

const emp = new Employee("Hakan", 32, 7000);

emp.showInfos();  //Ciktisi: Employee fonksiyonunun prototype inde override ederek tanimladigimiz showInfos Methodu calisiyor Isim: Hakan Yas: 32

console.log(emp);  // Ciktisi: Employee {name: "Hakan", age: 32, salary: 7000}

//console.log(emp.toString());   // OBJECT objesinden aldigi miras. bu toString() methodu OBJECT objesinde tanimli.

// Employee.prototype.toString = function() {
//     console.log("Employee nin prototype ine yazdigimiz fonsiyon calisiyor");
// }

// emp.toString();   // Employee nin prototype ine yazdigimiz fonsiyon calisiyor