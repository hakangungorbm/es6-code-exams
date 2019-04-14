//FETCH FONKSIYONU VE PROMISE YAPISI ILE HTTP  ISTEKLERI - PUT ve DELETE

//PUT requestte gonderilecek veriler STRING olmali

class Request {

    put(url,data) { // post requesti yapacak olan method

        return new Promise((resolve, reject) => {

        // post isleminde fetch methoduna sadece url degil bir tane JSON OBJE gonderilir
        fetch(url, {
            method:'PUT',
            body: JSON.stringify(data), //body kisminda gonderdigimiz DATA'yi STRING'e ceviriyoruz       
            headers: {
                "Content-type":"application/json ; charset-UTF-8"   // Ajax islemi gibi header tanimliyoruz
            }
            })
            .then(response => response.json())
            .then(veri => resolve(veri))
            .catch(err => reject(err));

        })

        
        
    }

}

const request = new Request();

request.put("https://jsonplaceholder.typicode.com/posts/1",{id:2, title: 'Hakan', body:'Gungor', userId: 2})
.then(gelenveri => console.log(gelenveri))
.catch(gelenhata => console.error(gelenhata));