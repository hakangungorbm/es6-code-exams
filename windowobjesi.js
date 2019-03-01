// //WINDOW OBJESI

// //alert("hakan"); yazinca calisir. Hicbir yerde tanimlamamiza ragmen calismasinin sebebi bu objenin pencere uzerinde tanimli olmasi
// // Window objesi pencere uzerinde yapmak istedigimiz ozellikleri ve methodlari barindiran objedir. Javascriptte en genel obje window objesidir.

// console.log(this);  // Window objesini basar consola. Bu consolda bu obje icerisindeki birçok ozellik ve method u gorebiliriz.

// //console.log(window); bu da aynı şekilde window objesini verir bize.
// //CONSOLE ÇIKTISI

// /*Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
// alert: ƒ alert()
// applicationCache: ApplicationCache {status: 0, oncached: null, onchecking: null, ondownloading: null, onerror: null, …}
// atob: ƒ atob()
// blur: ƒ ()
// btoa: ƒ btoa()
// caches: CacheStorage {}
// cancelAnimationFrame: ƒ cancelAnimationFrame()
// cancelIdleCallback: ƒ cancelIdleCallback()
// captureEvents: ƒ captureEvents()
// chrome: {loadTimes: ƒ, csi: ƒ}
// clearInterval: ƒ clearInterval()
// clearTimeout: ƒ clearTimeout()
// clientInformation: Navigator {vendorSub: "", productSub: "20030107", vendor: "Google Inc.", maxTouchPoints: 0, hardwareConcurrency: 8, …}
// close: ƒ ()
// closed: false
// confirm: ƒ confirm()
// createImageBitmap: ƒ createImageBitmap()
// crypto: Crypto {subtle: SubtleCrypto}
// .... şeklinde devam ediyor
// */

// //this = this uzerinde bulundugumuz obje demektir. Burada da window objesi üzerinde bulunduğumuz için THIS dediğimizde bu obje içerisindeki bütün özellik ve methodları console a basar.

// //ALERT

// alert("Merhaba");  // Diger bir kullanimi: window.alert("Merhaba");

// //CONFIRM (Evet tiklanirsa true, hayir tiklanirsa false deger doner)

// const cevap = confirm("Emin misiniz?");
// console.log(cevap);

// if(cevap) {
//     alert("Tesekkurler");
// }

// //PROMPT (Kullanicidan bilgi almak icin INPUT olusturmamizi saglar)

// const cevap = prompt("2 + 2 = ?");

// if(cevap == 4) alert ("Cevap Dogru");
// else alert ("Cevap Yanlis");

// WINDOW OBJESININ DIGER METHODLARI

// let value;

// value = window.location.hostname;

// if(confirm("Sayfa Yenilensin mi?")) {
//     window.location.reload();
// }
// else {
//     console.log("Sayfa yenilenmedi");
// }

// console.log(value);


// let value;

// value = window.outerWidth;  // Tarayisinin tum parcalariyla genisligi
// value = window.outerHeight; // Tarayisinin tum parcalariyla yuksekligi
// value = window.innerHeight; // Tarayisinin icerik gosteriminde kullandigi alanin yuksekligi
// value = window.innerWidth; // Tarayisinin icerik gosteriminde kullandigi alanin genisligi

let value;

value = window.scrollX;
value = window.scrollY;

console.log(value);