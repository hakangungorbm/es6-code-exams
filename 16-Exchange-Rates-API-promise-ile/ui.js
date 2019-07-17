//(Adim 14)
class UI {
    constructor(firstSelect, secondSelect) {
        this.firstSelect = firstSelect;
        this.secondSelect = secondSelect;
        this.outputFirst = document.getElementById("outputFirst");
        this.outputSecond = document.getElementById("outputSecond");
        this.outputResult = document.getElementById("outputResult");
    }

    //Asagida bu sinifa ait 3 tane method tanimliyoruz. Bu methodlar sirasiyla su islemleri yaparlar.
    /*1.method: ekranda bulunan 1. parabirimi alaninda (select box da) herhangi bir event olustugu
    anda calisir ve secilen para birimi value sunu yine ekranin altinda bulunan 1. span in textcontent
    degerine yazar.
    */

   /*2.method: ekranda bulunan 2. parabirimi alaninda (select box da) herhangi bir onchange event i
   olustugu anda calisir ve secilen para birimi value sunu yine ekranin altinda bulunan
   2. span in textcontent  degerine yazar.
   */

  /*3.method: currency sinifinin exchange() methodu calisinca olusan result degerini parametre
  olarak alir ve bu degeri ekranda bulunan <input id = "outputResult"> alaninin value suna yazar.
  */

  //NOT: Bu methodlari burada tanimliyoruz ancak app.js de bulunan eventlistener lar icinde bulunan
  //onchange eventleri ve exchange() methodu icinden cagiriyoruz. UNUTMA

    //(Adim 15 ve 19)
    //Alttaki 2 methodu tanımlıyoruz.
    firstSpanChange() {
        this.outputFirst.textContent = this.firstSelect[this.firstSelect.selectedIndex].textContent;
    }

    secondSpanChange() {
        this.outputSecond.textContent = this.secondSelect[this.secondSelect.selectedIndex].textContent;
    }

    //(Adim 20)
    displayResult(result) {
        this.outputResult.value = result;
    }
}