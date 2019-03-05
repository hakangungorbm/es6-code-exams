// SCOPE (KAPSAM) KAVRAMI = Değişkenlerimiz nerelerde var olur. Nerelerde geçerli olur. Bunları kapsar

//GLOBAL SCOPE: Genel olarak tanımlanmış degişkenler bellekte global scope ta yer alırlar.

var value1 = 10;
let value2 = 20;
const value3 = 30;  // Const ile tanımlanmış bir değişkene tanimlandigi scope icerisinde tekrardan atama yapamayız.

//Yukaridaki degiskenler global scope da tanimlanmistir. Asagidaki degiskenler ise function scope unda tanimlanmistir.

//var , let ve const un scope olarak farkliliklari: 
//Bellekte 3 tane degisken olusur. Fonksiyon icerisinde tanimlanan degiskenler (var,let veya const) bu fonksiyona özeldir. Bellekte sadece bu fonksiyonun
// kapladığı alanda yer alırlar.

// console.log(value1, value2, value3);

//FUNCTION SCOPE: Fonksiyon icerisinde geçerli olan kapsam

// function Func () {
//     var value1 = 40;
//     let value2 = 50;
//     const value3 = 60;

//     console.log(value1, value2, value3);  //Bu degiskeler yukaridakilerle karismaz. Yukardakilerle ismi ayni ancak scope u farkli.
// }

// Func();




//BLOCK SCOPE

if(true) {
    //Block scope
    // var a = 10;
    // let b = 20;
    // const c = 30;

    var value1 = 40;
    let value2 = 50;
    const value3 = 60;

    console.log(value1, value2, value3);
}

console.log(value1, value2, value3);

console.log(a);
console.log(b);  // b block içinde tanımlandığı için burada çalışmaz.
console.log(c);  // c de aynı şekilde tanımlandığı block içerisinde geçerli olur.

