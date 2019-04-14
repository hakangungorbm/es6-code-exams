//FETCH FONKSIYONU VE PROMISE YAPISI ILE HTTP  ISTEKLERI - POST 

//Post requestte gonderilecek veriler STRING olmali

class Request {

    post(url,data) { // post requesti yapacak olan method

        return new Promise((resolve, reject) => {

        // post isleminde fetch methoduna sadece url degil bir tane JSON OBJE gonderilir
        fetch(url, {
            method:'POST',
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

request.post("https://jsonplaceholder.typicode.com/albums",{title: 'Hakan', userId: 10})
.then(gelenveri => console.log(gelenveri))
.catch(gelenhata => console.error(gelenhata));
