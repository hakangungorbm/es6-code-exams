//ES6 ile birlikte Js de bir değişkeni hem LET hem de CONST anahtar kelimesiyle tanımlayabiliyoruz.
//Önceden sadece VAR anahtar kelimesiyle tanımlardık.

//Genelde ana fark SCOPE larıdır.

//VAR (1 den çok kez tanimlanabilir. Hata vermez)

/* var a = 20;a
var a ="Hakan";


//LET (Birden cok kez tanimlandiginda "Identifier 'name' has already been declared" hatasi [zaten tanimlanmis] verir.)

let name = "Hakan";
//let name = "Gungor";
console.log(name);


// tek anahtar kelimeyle birden cok degisken tanimlayabiliriz.
let a,b;

a = 10;
b = 20;

 */

 //CONST
 //Bir degiskenin degerini basta verince baska herhangi bir yerde degitiremiyoruz. "Assignment to constant variable." degiskeni tekrar tanimlayamazsin hatasi veriyor)

 const name = "Hakan";
 console.log(name);

 //name = "Gungor";  ---- Hata verir. Yukarida tanimladik ve deger atadik. Tekrar deger atayamayiz.

 // Basta degiskeni tanimlarken degeri verilir. Daha sonradan deger atayamayiz.
 //"Missing initializer in const declaration" const degisken tanimlanirken ilk deger atamasi gerekiyor hatasi veriyor.

//  const a;
//  a=10;
//  console.log(a);


// CONST anahtar kelimesi ile tanımlanan bir değişkene ilk deger ataması yapılmıs bir değişkene sonradan başka bir değer atayamayız

const a = [1,2,3,4,5];

//const a = [1,2,3,4,5,6];   hata verir.

a.push(6,7);  // tekrardan deger atayamayiz ama push() methodu ile mevcut verilerin uzerine yeni veri ekleyebiliriz.
// yeni deger ekledigimizde hata vermez cunku a 'nin bellekteki yeri degismez (JS mulakatlarinda sikca sorulur)

console.log(a);
