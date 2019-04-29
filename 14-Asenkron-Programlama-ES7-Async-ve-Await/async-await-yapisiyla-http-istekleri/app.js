//HTTP Requestlerini (get, post, delete, put) ASYNC ve AWAIT kullanarak yapmaya calisacagiz
//Biz burada FETCH i kullanacagiz. fetch fonksiyonu PROMISE doner. Bunu async ve await lerle gerceklestirmeye calisalim.

class Request {
    
    //GET REQUESTI

    //ESKISI
    // return new Promise((resolve,reject) => {

    //     fetch(url)
    //     .then(response => response.json())
    //     .then(data => resolve(data))
    //     .catch(err => reject(err));

    // })

    
    //YENISI

    async get(url) {

        //Buradaki fetch fonksiyonu 1 tane promise dondurecek.Biz bu promise in resolve etmesini
        //AWAIT ile bekleyecegiz. Burada bir sikinti olursa fonksiyon burada duracak ve reject ile
        //geriye bir tane error donderecek.
        const response = await fetch(url);  // 10. satirdaki response un benzeri bir response objesi elde ettik

        //Bu response uzerinden json ile yine 1 tane promise donderiyoruz.Bu promise ide yine await ile bekliyorum.

        var data = await response.json(); // Buradaki data json objesi oldu artik.

        //Artik biz elde ettigimiz json i istersek burada kullanabiliriz, istersek de methodu
        //cagirdigimiz yerde kullanabiliriz. 

        //Fonksiyonu cagirdigimiz yerde kullanmak istiyorsak "return data" deriz

        return data;
    }



    //POST REQUESTI

    //ESKISI
    // return new Promise((resolve, reject) => {

    // fetch(url, {
        // method:'POST',
        // body: JSON.stringify(data), //body kisminda gonderdigimiz DATA'yi STRING'e ceviriyoruz       
        // headers: {
        //     "Content-type":"application/json ; charset-UTF-8"   // Ajax islemi gibi header tanimliyoruz
        // }
        // })
        // .then(response => response.json())
        // .then(veri => resolve(veri))
        // .catch(err => reject(err));
    // })

    //YENISI

    async post(url,data) {

        const response = await fetch(url, {  // Response objesi gelecek.
            mehtod: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type" : "application/json; charset=UTF-8"
            }
        });

        var data = await response.json();  // json objesi

        return data;
    
    }

    //PUT REQUESTI

    //ESKISI
    // return new Promise((resolve,reject) => {

    //     fetch(url, {
    //         method: 'PUT',
    //         body: JSON.stringify(data),
    //         headers: {
    //             "Content-type":"application/json; charset=UTF-8"
    //         }
    //     })
    //     .then(response => response.json()) // gelen response u json a ceviriyoruz
    //     .then(data => resolve(data))  // resolve ile PUT methodunun cagirildigi yere data mizi return ediyoruz
    //     .then(err => reject(err));  // reject ile PUT methodunun cagirildigi yere error umuzu return ediyoruz

    // })    

    //YENISI
    async put(url, data) {

        const response = await fetch(url, { // response objesi doner
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-type" : "application/json; charset=UTF-8"
            }
        });

        var data = response.json();  // json objesine donusturuyoruz ve data ya atiyoruz

        return data;  // veriyi json olarak donuyoruz
        
    }

    //DELETE REQUESTI

    //ESKISI

    // return new Promise((resolve,reject) => {
            
    //     fetch(url,{method: 'DELETE'})
    //     .then(response => resolve("Veri silme islemi basarili") )  // donen veriyi gondermedik. Cunku DELETE requestine bos bir obje doner
    //     .catch(hata => reject(hata)); 

    // });

    //YENISI
    async delete(url) {

        const response = await fetch(url, {  //response objesi doner
            method: "DELETE"
        });

        // const data = await response.json();  // DELETE requesti bos bir json objesi doner
        // return data; // Bos json objesi doneriz

        //Yukaridaki islemi bostan yere yapmaktansa dogrudan

        return "Veri silme islemi basarili";  // Bu islemi yapabiliriz        
    
    }
}

//YUKARIDA METHODLARDAN DONDUGUMUZ DATA lari kullanma

//1.ADIM: Siniftan 1 tane obje turetelim

const requestobjesi = new Request();

//2. ADIM: GET requesti yapalim

// requestobjesi.get("https://jsonplaceholder.typicode.com/albums")
// .then (gelenveri => console.log(gelenveri))
// .catch(gelenhata => console.error(gelenhata));

//3. ADIM: POST requesti yapalim

requestobjesi.post("https://jsonplaceholder.typicode.com/albums",{title: 'Hakan', userId: 10})
.then (gelenveri => console.log(gelenveri))
.catch(gelenhata => console.error(gelenhata));