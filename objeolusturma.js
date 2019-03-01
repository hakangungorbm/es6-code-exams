
let value;

// Gercek hayattaki bir objeyi burada olusturacagiz . Programci objesini tanimlayip onun uzerinden gidelim.

const programmer = {
    name: "Hakan Gungor",
    age: 32,
    email: "engineer6619@gmail.com",
    langs:["Python","Java","Javascript"],
    address: {
        city: "Ankara",
        street: "Bahcelievler"
    },

    work: function() {
        console.log("Programci Calisiyor");
    }
}

//Objemizi goruntuleme
value = programmer;

//Objemizin ozelliklerine veya methodlarina nasil erisecegiz

value = programmer.email; // Ozelligine erisiyoruz

value= programmer["email"]; // email ozelligini almanin diger yolu

value = programmer.langs;

value = programmer.address.city;

value = programmer.work(); // methoduna erisiyoruz

// Objelerden olusan arrayler (Ilerde JSON objesi ile ugrasacagiz)

const programmers = [
    {name: "Hakan Gungor", age: 32},
    {name: "Mehmet Gungor", age: 5},
    {name: "Yana Gungor", age: 30}
];

value = programmers;

value = programmers[0].name;

console.log (value);