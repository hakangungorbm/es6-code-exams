//Object.create methodu = Bir objemizi olustururken prototype ini baska bir objeden olusturmamizi sagliyor.
// Olusturdugumuz obje nin prototype i olusturuldugu obje oluyor. Bu sayede kalitim yapiyoruz.

//Bir Object tanimlayalim
const obj = {
    test1: function() {
        console.log("Test 1");
    },

    test2: function() {
        console.log("Test 2");
    }
}

//console.log(obj);

// Ciktisi

/*
{test1: ƒ, test2: ƒ}
test1: ƒ ()
test2: ƒ ()
__proto__: Object



*/

const emp = Object.create(obj);  // obj objesi artik emp objesinin PROTOTYPE i oldu. Bu sayede emp objesi obj objesinin methodlarina ulasabilir.

//console.log(emp);

// Ciktisi
/*

{}
__proto__: 
test1: ƒ ()
test2: ƒ ()
__proto__: Object

*/

//NOT: Yukaridan goruldugu gibi OBJ objesini bastigimizda methodlari geldi. Ama emp objesini bastigimizda OBJ objesinin butun ozellikleri prototype icinde geldi.
//Bu sayese kalitim sagladik.

// Durum Soyle oldu.    emp  ---- >  obj  ----- > prototype ---- > Object


//emp objesi; herhangi bir ozelligi ve methodu olmayan bir obje oldu. Sadece prototype i belli.
//Biz bu emp objesine ozellik ve method ekleyebiliriz.

emp.name = "Hakan";
emp.age = 32;
emp.showInfos = function() {
    console.log("Mehmet Gungor");
}

//console.log(emp);

// Simdi Ciktisi: 
/*
{name: "Hakan", showInfos: ƒ}
name: "Hakan"
showInfos: ƒ ()
__proto__: Object  // Bu OBJECT PROTOTYPE i OBJ objesi oluyor. 

*/

//console.log(emp.test1());

//BIR BASKA ORNEK

function Person() {   // Constructor

}

//Yukarida tanimladigimiz obje mize 2 tane fonksiyon tanimladik
Person.prototype.test1 = function () {
    console.log("Test 1");
}
Person.prototype.test2 = function () {
    console.log("Test 2 Fonksiyonu calisiyor");
}
const person = new Person();
//console.log(person);

//Person objesininin miras haritasi:  person(obje)  --- > prototype(2 tane methodu olan Person'in prototype'i) --- > Object() Prototype'i



/* Cikti:   // Prototype ine tanimladigimiz 2 tane fonsiyon gorunuyor
Person {}
__proto__:
test1: ƒ ()
test2: ƒ ()
constructor: ƒ Person()
__proto__: Object
*/

function Employee(name, age) {
    this.name = name;
    this.age = age;
}

//Employee objesinin miras haritasi:  empl(obje = 2 tane ozelligi var)  --- > prototype(empl objesinin prototype  )  --- > Object() Prototype'i
// Biz istiyoruzki Employee fonsiyonunundan turettigimiz obje olan empl objesi prototype olarak kendi prototype'ini degilde
//yukarida Person constructurundan olusturdugumuz person objesinin prototype ini gostersin ve orada tanimladigimiz test1() ve test2() methodlarini
//miras alsin. Miras almasi icin empl objesinin prototype inin PROTO gostergesinin gosterdigi yerin OBJECT olmamasi, onun yerine 
//person objesinin prototype i olmasi lazim. Bu durumda OBJECT.CREATE i kullanabiliriz.

//person objesinin bir ustte gosterdigi prototype inin PROTO özelliği OBJECT yerine person nesnesinin prototype ini gösterecek

//Uygulamasi

Employee.prototype = Object.create(Person.prototype); // Employe prototype inin PROTO ozelligi PERSON objesinin Prototype ini gostersin dedik (Normalde object prototype ini gosterirdi)

Employee.prototype.myTest = function() {
    console.log("MyTest Fonksiyonu Calisiyor");   // Employe prototype ine de 1 tane fonksiyon ekledik.
}

//Bu sayede test1() ve test2() yi Employee objesinden olusturacagimiz bir objede kullanabiliriz.

const emp1 = new Employee("Hakan",35);

console.log(emp1);
console.log(emp1.test2());

////Employee objesinin yeni miras haritasi:  emp1 --- > prototype(emp1 objesinin prototype  )  --- > prototype(person objesinin prototype'i  )   --- > Object() Prototype'i
