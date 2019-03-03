// //Degisken Olusturma
// // var a=20;
// // var b=10;
// // var c=30;

// // console.log(a,b,c);

// //JS veri turleri

// //A) Primitive Veri Tipleri

// var a=10;

// console.log("a sayimizin veri tipi: "+typeof a);


// var b=3.14;
// console.log(b+" sayimizin tipi: " + typeof b);

// //Boolean Veri Tipi

// var a = true;

// console.log(typeof a);

// //NULL veri tipleri
// //a degiskeni tanimladik ama icerisinde herhangi bir deger tasimiyor.

// var a=null;

// var numbers = [1,2,3,4];
// console.log(numbers);

// console.log(typeof numbers);

// console.log(numbers[1]);


// var person = {
//     name: "Hakan Gungor",
//     age: 32
// }

// console.log(person);
// console.log(typeof person);

// var date = new Date();

// console.log(date);


// var deneme = function() {
//     console.log("Deneme Yazisi");
// }


// console.log(deneme);

// console.log(typeof deneme);


// var a = [1,2,3];

// a.push(6,7,8);

// console.log ("Dizinin Icerikleri: " + a + " Dizide Kac Icerik Var: " + a.length);

//VAR DEGISKENLERIM

// var foo = 10 + '20';
// console.log(foo);

// var name = "Hakan Gungor";
// console.log(name);

// var name= "Hakan";
// console.log(name);


// LET DEGISKENLERIM

// let names = "Hakan Gungor";

// console.log(names);

// names = "Mehmet Gungor";

// console.log(names);

//VERI TIPLERINI STRINGE CEVIRME

// let value;
// let value2;

// value = 123;


// value2=String(value);


// value2=parseInt("3.4123");


// console.log("Sayimiz: " + value);
// console.log("Tipi: " + typeof value);
// console.log(value2);
// console.log(typeof value2);


//OPERATORLER VE MATH OBJESI

let value;

// const value1 = 105;
// const value2 = 20;

// value = value1 % value2;

value = Math.PI;
value = Math.E;

value = Math.round(3.6);
value = Math.ceil(7.2);  // Yukari yuvarlama
value = Math.floor(5.2); // Asagi yuvarlama

value = Math.sqrt(16); // Karakok alma

value = Math.abs(-10); // Mutlak Deger Alma

value = Math.pow(2,3); // 2 nin 3 uncu kuvvetini alma

value = Math.max(10,-5,20,30);
value = Math.min (10,-52,34,67);

value = Math.random(); // 0 ile 1 arasi degerler

value = Math.random() * 20; // 0 ile 20 arasinda

value = Math.random() * 20 +1; // 1 ile 21 arasi degerler uretiyoruz

value = Math.floor(Math.random() * 20);  // 0 ile 20 arasinda tam sayi degerler uretiyoruz

console.log(value)



