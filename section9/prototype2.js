//Prototype ler sayesinde baska objelerden miras alabiliyoruz. 
// Her bir objemizin 1 tane PROTO özelliği vardı ve bunun içindede 1 tane prototype özelliği bulunuyor.
//Buda Javascript'in en temel obje si olan: OBJECT constructor u.
// Bu sayede OBJECT teki methodlari miras olarak alabiliyorduk.


// function Employee(name,age) {
//     this.name = name;
//     this.age = age;

//     this.showInfos = function() {
//         console.log("Isim: " + this.name + " Yas: " + this.age);
//     }
// }

// Asagida fonksiyonumuzdan 2 tane OBJE olusturduk. Dolayisiyla Employee() methodu icerisindeki showInfos methodu
//2 kez tanimlandi. Birbirinin kopyasi olan methodlar bellekte gereksiz yere isgal edecek. 
//Bu methodu Employee() constructor fonksiyonundan cikartip PROTOTYPE in icerisine yazarsak her obje bellekte 
//ayri ayri yer kaplamasina ragmen ortak bir PROTOTYPE i kulanacaklari icin tek bir showInfos() methodu
//tanimlamis oluruz. Employee() constructorundan turetilen tum OBJE ler ayni showInfos() methoduna erisebilirler.
//100 tane, 1000 tanede OBJE tanimlasak, tum objeler tek bir prototype e sahip olduklari icin
//tum objeler bu methoda da sahip olmus olacaklar ve bellegimizde sadece 1 tane showInfos() methodu olacak.

//PROTOTYPE lerin en onemli ozelligi ve faydalarindan biriside budur. Gereksiz bellek isgalinden kurtarir bizi


// const emp1 = new Employee("Mustafa", 25);
// const emp2 = new Employee("Hakan",32);

// console.log(emp1);  
// console.log(emp2);

//PROTOTYPE e method yazma, ekleme


function Employee(name,age) {
    this.name = name;
    this.age = age;
}

Employee.prototype.showInfos = function() {
    console.log("Isim: " + this.name + " Yas: " + this.age);
}

const emp1 = new Employee("Mustafa", 25);
const emp2 = new Employee("Hakan",32);

console.log(emp1);  
console.log(emp2);

//Asagidaki satiri gorunce ilk once gidip emp1 in bellekte tutuldugu alana bakacak. O alanda tanimli bir 
//showInfos() methodu var mi ona bakacak. Yok sa gidip OBJE lerin ust atasi olan PROTOTYPE lerine bakacak. 
//Orada var oldugu icin orada tanimli olan showInfos() methodunu calistiracak. Burada da bulamasa idi gidip 
//En ust constructor olan OBJECT obje sine bakacakti.
emp1.showInfos();  // Cikti:Isim: Mustafa Yas: 25