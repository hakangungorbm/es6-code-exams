// JS'in java,C#,pyton gibi dillerden soyle bir farki bulunuyor: Bu diller CLASS tabanli diller. Yani bir class olusturur sonra
//o classtan objeler uretiriz. JS ise prototype tabanli bir programlama dilidir. JS de class lar bulunmaz. ES6 ile birlikte class yazariz ama bunlar yine
//arka tarafta prototype lara donusturulur.

//Bir onceki calismada 1 tane yapici fonksiyon olusturduk ve NEW anahtar kelimesini kullanarak obje(nesne) uretebildik.
//JS deki her bir objenin kendi icinde 1 tane prototype ozelligi bulunuyor. 
//JS deki en temel objemiz OBJECT objesidir. NEW diyerek bu OBJE'den yeni OBJE ler uretebiliriz. (OBJECT constructor fonksiyonudur)
//ORNEK:

/* //Asagida 2 tane obje miz var. 2 side prototype ozelligindeki methodlara ortak olarak sahiptirler. Boyle olmasaydi her bir OBJE icin methodlar tekrar tekrar
//yazilimis olacaktir. 
const object = new Object();
const object2 = new Object();
object.name = "Hakan";
console.log(object);         // Cikti: {name: "Hakan"}  (   proto__: Object )  == her objectin bir tane prototype ozelligi bulunur.
 */

 //JAVASCRIPT PROTOTYPE CHAIN

//JavaScript içerisinde primitif tipler dışında hemen hemen her şey nesnedir ve her nesnenin bir constructur fonksiyonu vardır.
//Projemize özel nesneler üretmek için biz de constructor fonksiyonlar yapabiliriz. 

function Employee(name,age) {                         // constructor fonksiyonun isminin ilk harfi buyuk yazilir (DIKKAT)
    this.name = name;
    this.age = age;
    this.showInfos = function() {
        console.log("Bilgiler Gosteriliyor");
    }
}

// Herbir objemizin kendi icinde prototype i var. ve o prototype icinde 1 tane prototype var. Asagıdaki [object Object] çıktısının sebebide budur.
// Yani aslinda zincirleme seklinde objeler olusmus oluyor ve buna javascript te PROTOTYPE CHAIN denir.
// Bu sayede en temel prototype de yazilan methodlari miras almis oluyoruz.

//PROTOTYPE: Javascript te Prototype; objeler arasi Inheritance(Kalitim) yapmamizi sagliyor. Bu sayede ozellikleri(properties) veya method lari miras aliriz.
// Yani projemizde olusturdugumuz her bir OBJE miz Javascriptin OBJECT prototype inden miras aliyor


const emp1 = new Employee("Hakan",32);
console.log(emp1.toString());                // Cikti: [object Object]  ---- Buradaki toString() methodu OBJECT PROTOTYPE inden geldi.
//console.log(emp1.deneme());                  // deneme() methodu olmadigi icin hata verecektir. Cikti:  TypeError: emp1.deneme is not a function at...
console.log(emp1);                           // Cikti: Employee {name: "Hakan", age: 32, showInfos: ƒ}

// Javascript yukarida kullandigimiz TOSTRING() methodunu gorunce soyle yapiyor:
//Bakiyor olusturdugumuz Employee constructor u icinde boyle bir method var mi? Yok
// Bu fonksiyonun prototype ine gidiyor. Burda var mi_ Yok
// OBJECT prototype ine gidiyor. Bakiyor ki burada var. O methodu calistiriyor.