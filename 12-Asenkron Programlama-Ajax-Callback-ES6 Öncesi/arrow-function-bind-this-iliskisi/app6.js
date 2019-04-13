//Arrow Fuction , Normal Function, this ve bind 

const person = {
    age:25,
    tellAge: function() {   // tellAge() fonksiyonu PERSON objesinin bir fonksiyonu
        console.log(this);  // this anahtar kelimesi person i gosteriyor su anda
        console.log(this.age);  // O yuzden bu this person nesnesini gosterdi ve asagida 25 ciktisini verdi
    }
    // this yukardaki fonksiyon disinda yani bu alanda artik window objesini gosterir
}

person.tellAge();
/*
Ciktisi:
{age: 25, tellAge: ƒ}   // this bu PERSON objesini gosterdigi icin objede olanlari cikti olarak verdi.
25                      // person objesinin age ozelligi ni ekrana basti.
*/

console.log(this);   // this window objesini gosteriyor. Ciktisi: Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}


const person2 = {
    age:25,
    tellAge: function() {   
        console.log(this); 
        console.log(this.age);  // O yuzden bu this person nesnesini gosterdi ve asagida 25 ciktisini verdi
    }.bind(this)   // window objesini gosteren this i fonksiyona bind ettik. Artik bu fonksiyondaki this ler window objesini gostermeye baslar.
}

person2.tellAge();
/*
Ciktisi:
Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}  // Yukarida obje icerisinde kullanilan this ler window objesini gosteriyor artik. Cunku bind ile window objesini gosteren this i verdik o fonksiyona.
undefined  // person2 objesi icersinde bulunan telAge() methodunda kullanilan 2. console.log icerisindeki this.age artik tanimsiz oldu. Cunku this window objesini gosteriyor ve window objesinin age ozelligi yok.
*/

//ONEMLI

/*
Peki biz bu BIND i neden kullaniyoruz. 

Bazı durumlarda bu this oldukça kafa karıştırabilir ve önceki kısımlardaki objeleri biz kaybedebiliriz.
Biz bu durumlarda bind() ı kullanabiliriz. Veya daha kısa bir yontem olan ARROW function ları kullanabiliz.
*/

//ARROW FUNCTION

//Yani soyle oluyor. Biz bir obje icerisinde this anahtar kelimesini kullaniyorsak o this anahtar
//kelimesi o objeyi gosterir. Bu durumu istemiyorsak arrow function tanimlariz ve o arrow function
//icerisinde kullaniriz. Bu sefer kullandigimiz bu this objeyi degil window objesini gosterecektir.

const person3 = {
    age: 25,

    tellAge: () => {
        console.log(this);  // buradaki this person3 objesini gostermez. Yine window objesini gosterir
        console.log(this.age); // this window objesini gosterdigi icin this.age undefined olur.
    }
}

person3.tellAge();

/*
Ciktisi:
Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}  // Yukarida obje icerisinde kullanilan this ler window objesini gosteriyor artik. Cunku bind ile window objesini gosteren this i verdik o fonksiyona.
undefined  // person2 objesi icersinde bulunan telAge() methodunda kullanilan 2. console.log icerisindeki this.age artik tanimsiz oldu. Cunku this window objesini gosteriyor ve window objesinin age ozelligi yok.
*/