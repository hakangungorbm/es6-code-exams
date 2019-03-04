// SESSION STORAGE (Window objesi icerisinde bir obje)
//console.log(window); yazinca console da gorulebilir
//Biz uygulamamizda veri tabani kullanmiyorsak veri islemlerini tarayicilarin session storage ve local storage alanlarindan faydalanabiliriz.
//Tarayicimizin web gelistirici alaninda (F12 ile acilan) bulunan "Application" sekmesi altinda bulunurlar

//Oturumumuz acik kaldigi muddetce veriler session storage da sakli kalir. Sekmeyi veya browser i kapatinca veriler silinir.

//Session storage verileri KEY - VALUE şeklinde tutar

//Local storage ile Session storage in fonksiyonlari dahil aynidir. Sadece verileri saklama suresi ve sarti degisir

// console.log(this);

// console.log(window.sessionStorage);  // session storage e ulaşıyoruz

// Projemizi yapıyoruz

//BUTONLARI SECIYORUZ

const addbutton = document.querySelector("#add");
const delbutton = document.querySelector("#delete");
const clearbutton = document.querySelector("#clear");

//INPUTLARI SECIYORUZ

const addkey = document.querySelector("#addkey");
const addvalue = document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");

//BUTONLARIMIN EVENTLERINI YAKALIYORUM

addbutton.addEventListener("click",addItem);
delbutton.addEventListener("click",deleteItem);
clearbutton.addEventListener("click",clearItems);

function addItem(e) {
//addkey ve addvalue inputlarindaki degerleri alicaz ve session storage a ekleyecegiz
sessionStorage.setItem(addkey.value, addvalue.value);  // session storage in SETITEM metodunu kullaniyoruz
}

function deleteItem(e) {
//deletekey input alanimiza yazdigimiz degeri gidip session storage dan silecek
sessionStorage.removeItem(deletekey.value); // session storage in REMOVEITEM methodunu kullaniyoruz
}

function clearItems(e) {
sessionStorage.clear();  // tum verileri siliyoruz. Session storage in CLEAR() methodunu kullaniyoruz.
}
