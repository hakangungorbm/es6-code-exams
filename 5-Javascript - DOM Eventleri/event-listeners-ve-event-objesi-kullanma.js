
// EVENT LISTENERS VE EVENT OBJESI
//Bir formu submit edince, bir buton tiklaninca veya bir input alanina odaklandigimizda js de eventler olusur
//Bu eventleri js de yakalayip bir takim islemler gerceklestirecegiz

//Evet Objesi bir event hakkinda bircok bilgi verir

const filterinput = document.getElementById("filter"); // id si filter olan input umuzu sectik

// //focus eventi (1. YONTEM)

// filterinput.onfocus = function() {
//     console.log("Naber");
// }

// //focus eventi (2. YONTEM)

// // e parametresi uzerinden event in nerede olustugu vs gibi bircok ozellige ulasabiliriz
// filterinput.addEventListener("focus",function(e) {  // js event hakkinda daha fazla bilgi alabilmemiz icin function(e) deki e paramtresini gonderir
//     //console.log(e); // FocusEvent {istruster: true....}  seklinde kullanabilecegimiz butun ozellikleri gorebiliriz
//     console.log(e.target);
//     console.log(e.type);
//     console.log(e.target.placeholder);
//     console.log(e.target.className);
//     //console.log("Naber2")
// });

const todoform = document.getElementById("todo-form");

todoform.addEventListener("submit", submitForm);

function submitForm(e) {
    console.log("Submit Eventi");
    e.preventDefault(); // submit eventinin default ozelliklerini yok say demis oluyoruz. 
    //Ornegin submit eventinin default ozelliklerinden birisi submit islemi gerceklesince sayfa yenilenmesidir
    //Bu preventDefault() sayesinde bu ozelligi de yok sayilacak ve sayfa yenilenmeyecektir
}

