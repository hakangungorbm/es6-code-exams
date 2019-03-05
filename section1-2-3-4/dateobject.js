//Zamanlarla ilgili kullanıdığımız obje

let value;

const now = new Date();  // Su anki zamani almamizi sagliyor

const date1 = new Date("9-19-1993 06:15:02");  // Dogum gunumuzu olusturuyoruz

const date2 = new Date("September 19 1993");  // Dogum gunumuzu olusturuyoruz

const date3 = new Date("9/19/1993");  // Dogum gunumuzu olusturuyoruz

value = date1;

value = date1.getMonth();
value = date1.getDate();

value = date1.getHours();

value = date1.getMinutes();

value = date1.getSeconds();

value = date1.getMilliseconds();

date1.setMonth(7);
date1.setDate(15);
date1.setFullYear(1986);


value = date1;

console.log(value);