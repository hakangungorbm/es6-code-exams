//ES6 Static Metodlar = Sınıf içerisinde tanımladığımız durağan methodlardır.
//Bu methodları obje oluşturmadan direkt sinif uzerinden ulasilabilen methodlardir.

class Matematik {
    cube(x) {
        console.log (x*x*x);
    }
}

const maht = new Matematik();
maht.cube(3);     // Normalde boyle ust satirdaki gibi siniftan 1 tane obje olusturur ve o obje ile methodlari cagiriririz.
console.log(maht);

//Ancak bazi durumlarda obje olusturmadan fonksiyonlari kullanmak isteyebiliriz
//Belli fonksiyonlari belli siniflar icerisine yazarsak, bu fonksiyonlari obje olusturmadan kullanabiliriz.

class Matematik2 {
    sqrt(x) {
        console.log(x*x);
    }
    static cube2(x) {
        console.log (x*x*x);
    }
}

Matematik2.cube2(3);  // Ciktisi: 27

const math2 = new Matematik2();
console.log(math2);
//math2.cube2(4); // Ciktisi: math2.cube2 is not a function (Sebebi cube2 methodunun static olmasi)
//NOT: STATIC METHODLAR siniflarin PROTO prototypelerine yazilmazlar. Yani obje uzerinden cagirilsalarda ulasilamazlar. 
//Cunku prototype e yazilmis boyle bir method yok. Sadece SINIF uzerinden erisebiliriz.

math2.sqrt(4);  // ciktisi: 16

//Matematik2.sqrt(4);  // ciktisi: Matematik2.sqrt is not a function (sqrt methodu static olmadigi icin sinif uzerinden erisemeyiz)
//SQRT metodu PROTO objesine yazildigi icin obje uzerinden ulasilabilir. Sinif uzerinden ulasilamaz. Mutlaka obje olusturup onun uzerinden ulasmamiz gerekir

//NOT: Daha once kullandigimiz: Object.create() methodu direkt OBJECT sinifi icerisinde static yazilmistir deriz.
//NOT2: Daha once kullandigimiz: Maht.sqrt() methodu direkt MATH sinifi icerisinde static yazilmistir deriz.