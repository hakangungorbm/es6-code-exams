//ELEMENTLERI DEGISTIRME

// Card-Body i alacagiz onun <h5> child ini baska bir icerikle degistirecegiz

//card-body (2. siradaki) i seceriz

let cardbody = document.querySelectorAll(".card-body")[1];  // Bu sekilde ana cerceveyi aldik



//Yeni Element

const newelement = document.createElement("h3");

newelement.className = "card-title";
newelement.id = "tasks-title";
newelement.textContent = "Yeni Todolar";

//Eski Element

const oldElement = document.querySelector("#tasks-title");

//REPLACE METHODU ILE DEGISTIRMEK

cardbody.replaceChild(newelement,oldElement);

console.log(newelement);