//FETCH FONKSIYONU VE PROMISE YAPISI ILE HTTP  ISTEKLERI - GET

//Not: Bu sinifta ajax ile request yaparken kullandigimiz xhr objesi gibi bir obje ye ihtiyacimiz
//olmadigi icin constructor methodumuz olmayacak
//Fetch fonksiyonunu(window objesine ait) dogrudan kullanabiliyoruz
class Request {
    get(url) { // get requestini yapacak olan fonksiyon
        
        fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
    }
}

//const request = new Request();
// request le verimizi aliyoruz.
//request.get("https://jsonplaceholder.typicode.com/albums"); 

//Sorun veriyi get fonksiyonu icinde kullanabiliyoruz. Ama bu fonksiyon disinda kullanamayiz.
//Veriyi istedigimiz yerde kullanmak icin: albums isminde bir degisken tanimlayacagiz ve
//promise yapisi sayesinde veriyi elde ettigimiz get() fonksiyonu icinden bu albums'e aktaracagiz

class Request2 {
    get(url) { // get requestini yapacak olan fonksiyon

        return new Promise((resolve,reject) => {

        fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err));

        })
        
    }
}

const request2 = new Request2();

var albums;

// request2.get("https://jsonplaceholder.typicode.com/albums")
// .then(data => albums = data)
// .catch(err => console.error(err));

// console.log(albums);  // Cikti: undefined Sebebi: Asenkron olmasi

//Sebebi: Ciktimizin undefined olmasinin sebebi biz bir ust satirdaki islem verilerin alinmasini
//beklemeden yazdirilmaya calisilacaktir. Bu js in asenkron calismasindan kaynaklanir. Bu islemi 
//then in disinda degilde then in icinde yaparsak sorun ortadan kalkar. Yukaridaki kodu duzeltelim

request2.get("https://jsonplaceholder.typicode.com/albums")
.then(data => {
    albums = data;
    console.log(albums); // Cikti: 100 objeli bir json array i
})
.catch(err => console.error(err));

