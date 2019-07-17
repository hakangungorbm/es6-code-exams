//Burada GITHUB Api'ye GET Request işlemlerini yapacağız. Request sonucunda dönen JSON ı Promise olarak
// ASYNC yapisi ile donmeye çalışacağız.

//Adim 2
//GITHUB Api'ye GET Request işlemlerini yapacak sinifi, request yapilacak URL i (property olarak) ve request
//islemini yapacak olan fonksiyonu (async olacak) bu sinifa tanimliyoruz.


class Github {
    constructor() {
        this.url = "https://api.github.com/users/";   // Sinifin property si
    }

    //requestimizi "fetch" fonksiyonuyla yapacagiz. 
    async getGithubData (username) {
        
        //Burda "fetch(this.url + username)" satiri bize bir tane json objesi doner. Bu fetch islemi "resolve"
        //ettiginde bizim response objemiz "responseUser" degiskenimize atanir.

        //Biz "responseUser" a atadigimiz response objemizi responseUser.json() methodu yardimiyla json a cevirebiliriz. 
        //Bu responseUser.json() bize yine bir promise dondurecegi icin bi bu promise i bekleriz ve resolve
        //ettiginde bu verilerimizi bir tane degiskene atamamiz gerekir. Veriler artik json'a cevrilmistir.
        //Tum bu islemler "async ve await" yapisi sayesinde senkron olarak isler.

        // requestimizi "fetch" ile yapiyoruz. response obje doner. "responseUser" a bir obje atanir.
        const responseUser = await fetch(this.url + username); 

        const responseRepo = await fetch(this.url + username + "/repos"); // kullanicinin repolarini aliyoruz. JSON aray donecek.

        
        //responseUser.json() bize bir promise doner. Biz bu promise i "await" ile bekleriz. 
        //Bu islem resolve ettiginde biz json verimizi "userData" ya atamis olacagiz
        const userData = await responseUser.json();

        //ayni sekilde buradada responseRepo.json() bize bir promise doner. Biz bu promise i "await" ile
        //bekleriz. Bu islem resolve ettiginde biz json verimizi "repoData" ya atamis oluruz.
        const repoData = await responseRepo.json();

        //Biz kullanici bilgilerini ve o kullanicinin repo bilgilerini aldik. Bu bilgiler app.js de kullanilacak.
        //Burada bu verilerimizi donmemiz lazim. Biz burda farkli birsey yapip "obje" seklinde donelim.

        return {
            user: userData,
            repo: repoData

        }
    }
}