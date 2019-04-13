//INPUT EVENTLERI

const filter = document.querySelector("#filter");

//EK BILGI
// //DOM CONTENT LOADER = Dokumentimizin tamami yuklendikten sonra olusur

// document.addEventListener("DOMContentLoader", load);

// function load(e) {
//     console.log("Sayfa Yuklemesi Tamamlandi");
// }

//focus

filter.addEventListener("focus",run);

function run(e) {
    console.log(e.type);
}

//blur = focus tan cikinca olusan event
filter.addEventListener("blur",run);

function run(e) {
    console.log(e.type);
}

//paste = Input a bir yazi yapistirilirsa
filter.addEventListener("paste",run);

function run(e) {
    //e.preventDefault();       // Bir input alanina kopyala yapisti ile metin kopyalamasini engelliyoruz
    console.log(e.type);
}


//copy = Input dan bir yazi kopyalanirsa olusan event (CTRL + C yi de yakalar)
filter.addEventListener("copy",run);

function run(e) {
    //e.preventDefault();       // Bir input alanina kopyala islemini engelliyoruz engelliyoruz
    console.log(e.type);
}


//cut = Input dan bir yazi kesilirse olusan event (CTRL + X yi de yakalar)
filter.addEventListener("cut",run);

function run(e) {
    //e.preventDefault();       // Bir input alanindan kesme islemini engelliyoruz engelliyoruz
    console.log(e.type);
}

//select = Input icerisindeki bir yazi secilirse olusan event

filter.addEventListener("select",run);

function run(e) {
    console.log(e.type);
}



console.log(filter);