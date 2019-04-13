//JAVASCRIPT te CALL, APPLY, BIND fonsiyonlari
//Bu fonksiyonlar JS de FONKSIYON prototype i icerisinde bulunan 3 fonksiyondur.
//3 ununde mantigi birbirine cok benzer.

//TANIM: CALL, APPLY, BIND fonsiyonlari bir fonksiyonu farkli objelerle kullanmamizi saglar. (ONEMLI)

//THIS anahtar kelimesinin scope unu hatirlayalim.

// function test() {
//     console.log(this);  // global scope da tanimli this i cagirdik
// }
// test(); // Ciktisi: Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}


// function Person() {
//     this.showInfo = function() {
//         //Burada this anahtar kelimesi  Person constructorının içinde olduğumuz için 26. satirdaki 
//         //method u cağırdıgımızda "Person objesidir" sonucunu aldık.
//         //this anahtar kelimesi scope olarak PERSON constructor u icindedir.
//         console.log("Bu bir "+ this.constructor.name + " objesidir.");
//     }
// }

// const person = new Person();

// person.showInfo();  // Ciktisi: Bu bir Person objesidir.

/*Ancak daha önceden söylediğim gibi, this anahtar kelimesinin bazı durumlarda kullanımı ve hangi
objeyi gösterdiğini anlamak her zaman bu kadar kolay olmaz. Böyle durumlarda veya bir fonksiyonu farklı
objeler üzerinde kullanmak istediğimiz zamanlarda, Javascript prototype objesinin içinde bulunan
call,apply ve bind fonksiyonlarını kullanabiliriz.
*/

//Call ve Apply

/*
Call ve Apply fonksiyonları Function objemizin __proto__ objesinde bulunan iki adet fonksiyondur.
Bu fonksiyonların görevleri aynı olsa da kullanımları arasında ufak bir fark vardır.
*/

//Ornek (HATALI)

// const obj1 = {
//     number1: 10,
//     number2: 20,
// }
// const obj2 = {
//     number1: 30,
//     number2: 50,
// }
// function addNumbers(num){
// 		console.log(this.number1 + this.number2 + num );
// }
// addNumbers(100);  // Çıktı : NaN

//HATANIN SEBEBI:
/*Su anda global scope’ta bulunan objemiz window objesi olduğu için ve this anahtar kelimesi bu objeyi
gösterdiği için bu sonucu aldık. Window objesinin içinde number1 veya number2 şeklinde property bulunmuyor.
Bu nedenle aslında “undefined + undefined + 100” gibi bir toplama yapıyoruz ve bunun sonucunda “NaN” sonucunu
elde ediyoruz.*/


/*
Peki bu örnekte addNumbers fonksiyonunun hem obj1 hem de obj2 objesi için çalışmasını istersek ne
yapabiliriz ? İşte burada yardımımıza call ve apply fonksiyonları koşuyor. Buradacall veya apply
fonksiyonlarını kullanırsak this anahtar kelimesi, call fonksiyonuna
hangi objeyi argüman olarak gönderirsek onu gösterecektir.
*/

//Call methodu ile Argümanlar cagrilan fonksiyona tek tek gönderilir. (Örnek: test(obj,arg1,arg2,arg3))

//ORNEK(DOGRU CALISAN)

// const obj1 = {
//     number1:10,
//     number2:20
// }
// const obj2 = {
//     number1:30,
//     number2:50
// }

// function addNumbers(num) {
//     console.log(this.number1 + this.number2 + num);

// }
// //Örnek: test(obj,arg1,arg2,arg3))
// addNumbers.call(obj1,100);  // Çıktı: 130   // ilk once objemizi gonderiyoruz. Sonra addNumbers() fonksiyonunun diger argumanini gonderiyoruz
// addNumbers.call(obj2,100);  // Çıktı: 180

/*
Burada call metoduna birinci argüman olarak obj1'i gönderdiğimizde this anahtar kelimesi bu objeyi
gösterdiği için sonucumuz 130 çıktı. Aynı şekilde, obj2'i gönderdiğimizde de 180 sonucunu aldık.Yani,
bir fonksiyonu call fonksiyonuyla farklı objeler ile kullanabildik.
*/

//Şimdi de bu kullanımı apply metoduyla yapmaya çalışalım. 
//Bind methodunda Argümanlar cagirdigi fonksiyona argüman listesi(array) şeklinde gönderilir.
//Örnek: test(obj,[arg1,arg2,arg3])
// const obj1 = {
//     number1:10,
//     number2:20
// }
// const obj2 = {
//     number1:30,
//     number2:50
// }

// function addNumbers(number3,number4) {
//     console.log("Apply methodunu kullanarak cagiriyoruz: "+ (this.number1 + this.number2 + number3 + number4));

// }
// //Örnek: test(obj,[arg1,arg2,arg3])
// addNumbers.apply(obj1,[100,200]);  // Çıktı: 130  //Once obje mizi, sonra 
// addNumbers.apply(obj2,[300,400]);  // Çıktı: 180

//Prototype tabanlı kalıtım yaparken bu fonksiyonlar oldukça yararlı olacaktır.

// function Person(name){
//     this.name = name;
// }

// function Employee(name,age){
//     // This Employee'yi Gösteriyor 
//     // ES6 sınıflarında kullandığımız super() gibi Person yapıcı metodunu kullanıyoruz.
//     Person.call(this,name); 
//     this.age = age;

// }
// const emp1 = new Employee("Mustafa",25);

// console.log(emp1.name);
// console.log(emp1.age);

// Çıktı : Mustafa 25

//Burada ES6 sınıflarında kullandığımız super() gibi, Person yapıcı metodunu call fonksiyonu sayesinde
//kendi objemizin yapıcı metodu içinde çağırabiliriz.

//BIND FONKSIYONU

//Bind fonksiyonu da mantık olarak call ve apply fonksiyonlarına oldukça benzer.
//Ancak kullanım olarak bu fonksiyonlardan farklıdır.

//Bind() fonksiyonu, içine verilen objeye göre yeni bir fonksiyon kopyası yaratır.
//Oluşan bu kopya fonksiyonu daha sonradan argüman listesi ile beraber gönderilen objeye kullanabiliriz.

const obj1 = {
    number1:10,
    number2:20
};

const obj2 = {
    number1:30,
    number2:40
};

function getNumbersTotal(number3,number4) {
    return this.number1 + this.number2 + number3 + number4;
}
// obj1'i this parametresinin göstereceği şekilde bağlayarak yeni bir fonksiyon oluşturuyoruz.

//CALL ve APPLY bize ekstra bir fonksiyon uretmez. Direkt fonksiyonu cagiririz.
//BIND fonskiyonu getNumbersTotal() fonksiyonundan kopya fonksiyon uretir.
//Urettigimiz fonksiyona hangi OBJE yi verirsek o obje ye gore calisir. Altta olusan koypa fonksiyona
//obj1 objesi veriliyor.


const copyFunc = getNumbersTotal.bind(obj1);  
console.dir(copyFunc);

//Ciktisi:  ƒ bound getNumbersTotal()   // Bize bu fonksiyonun bir kopya (bound) fonksiyon oldugunu soyluyor

const copyFunc2 = getNumbersTotal.bind(obj2);
console.log(copyFunc2(30,40));

Çıktı : 140

//Aslında mantık olarak call ve apply’a benzese de yapı olarak epey farklı.
//Call ve Apply fonksiyonları bir fonksiyonu hemen çalıştırırken, bind fonksiyonu bize yeni bir kopya
//üretmektedir. Oluşturulan bu kopyayı ise istediğimiz herhangi bir bağlamda(context) kullanabiliriz.

//“Bind, Call ve Apply mantık olarak aynıysa hangisini nerelerde kullanacağım ?”

/*
Bind fonksiyonundan, fonksiyonumuzu başka bir bağlamda daha sonradan kullanabilmek adına yararlanabiliriz
(örnek,Javascript Olayları — JS Events). Call ve Apply Fonksiyonlarını ise bir fonksiyonu hemen bir obje
ile çağırmak için kullanabiliriz.
*/