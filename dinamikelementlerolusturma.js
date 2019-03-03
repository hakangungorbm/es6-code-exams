//DINAMIK ELEMENT EKLEME

//YENI ELEMENT OLUSTURMA
// Son butonun yanina bir tane daha buton ekleyecegiz

//<a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a> 

const newlink = document.createElement("a");

//CardBody nin icerisine ekleyecegimiz icin onu sececegiz

const cardbody = document.getElementsByClassName("card-body")[1];

newlink.id = "clear-todos";
newlink.className = "btn btn-danger";
newlink.href = "https://www.google.com.tr";
newlink.target = "_blank";

// //LINKIMIZE TEXT EKLEME

// //newlink.textContent = "Farkli sayfaya git";  //Guvenli bir yontem degildir. Mumkunse kullanmamaliyiz

// console.log(cardbody);

// // cardbody.textContent = "asdfasdf"; // cardbody nin icerisindeki herseyi silip yerine bu yaziyi yazdi

// // TEXT_NODE ayni elementmis gibi eklenebilir

// const text = document.createTextNode("Naber");
// cardbody.appendChild(text);
// console.log(cardbody);

newlink.appendChild(document.createTextNode("farkli bir dunyaya git"));

cardbody.appendChild(newlink);

console.log(newlink);