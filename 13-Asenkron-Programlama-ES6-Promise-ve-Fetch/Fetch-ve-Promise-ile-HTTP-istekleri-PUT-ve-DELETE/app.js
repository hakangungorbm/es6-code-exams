//FETCH FONKSIYONU VE PROMISE YAPISI ILE HTTP  ISTEKLERI - PUT ve DELETE

//PUT requestte gonderilecek veriler STRING olmali
// DİKKAT: AŞAĞIDAKİ ÖRNEKTE gelen request sonuçları PUT() methodu içinde kaldı. Dışarıya çıkaramadık henüz.
// Alttaki 2. ornekte PUT() methodunun disina cikarip disaridada response ve reject verilerini kullanabilecegiz
// class Request {

//     put(url, data) {
//         fetch(url, {
//             method: 'PUT',
//             body: JSON.stringify(data),
//             headers: {
//                 "Content-type":"application/json; charset=UTF-8"
//             }
//         })
//         .then(response => response.json()) // gelen response u json a ceviriyoruz
//         .then(data => console.log(data))
//         .then(err => console.log(err));
//     }

// }

// const request = new Request();

// request.put("https://jsonplaceholder.typicode.com/albums/1",{userId:10, title: 'Hakan'});

//Bu örnekte PROMİSE yardımıyla FETCH methodunun response ve reject durumlarını PUT fonksıyonu dışına dönderiyoruz
//ve bu sayede PUT methodu dışında bu verileri kullanabiliyoruz.
// class Request {

//     put(url, data) {
//         //Alttaki satırda promise döndürerek FETCH methodunun response değerini dışarı atacağız
//         //Fetch methodu icinde console.log yazmak yerine return ediyoruz.
//         return new Promise((resolve,reject) => {

//             fetch(url, {
//                 method: 'PUT',
//                 body: JSON.stringify(data),
//                 headers: {
//                     "Content-type":"application/json; charset=UTF-8"
//                 }
//             })
//             .then(response => response.json()) // gelen response u json a ceviriyoruz
//             .then(data => resolve(data))  // resolve ile PUT methodunun cagirildigi yere data mizi return ediyoruz
//             .then(err => reject(err));  // reject ile PUT methodunun cagirildigi yere error umuzu return ediyoruz

//         })
        
//     }

// }

// const request = new Request();

// request.put("https://jsonplaceholder.typicode.com/albums/1",{userId:10, title: 'Hakan'})
// .then(album => console.log(album)) // yukaridaki resolve parametresi ile gelen veri
// .catch(hata => console.error(hata)); // yukaridaki reject parametresi ile gelen hata

//DELETE REQUESTI

class Request {

    delete(url) {

    return new Promise((resolve,reject) => {
        
            fetch(url,{method: 'DELETE'})
            .then(response => resolve("Veri silme islemi basarili") )  // donen veriyi gondermedik. Cunku DELETE requestine bos bir obje doner
            .catch(hata => reject(hata)); 
        
    });

    }
}

const request = new Request();

request.delete("https://jsonplaceholder.typicode.com/albums/1")
.then(sonuc => console.log(sonuc))
.catch(hata => console.log(hata));