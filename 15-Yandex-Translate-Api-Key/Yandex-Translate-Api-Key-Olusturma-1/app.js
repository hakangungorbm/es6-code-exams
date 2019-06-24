/*
Bu derste 3 tane ucretsiz API KULLANACAGIZ:
1) Yandex Translate API
2) Exchange Rates API (Kur bilgilerini alabiliriz)
3) Github API
4) Omdb API (Film verilerini alabililiriz)

3 API yi kullanirken 3 farkli yontemi kullanacagiz.

A) Translate API yi kullanirken: AJAX, PROTOTYPE, CALLBACK ile yapacagiz.

ILK OLARAK
-----------------------
Yandex API yi nasil kullanacagimizi anlayalim. Bu API yi kullanmak icin ilk olarak buraya kayit olmamiz
gerekiyor. Kayit olduktan sonra "GET A FREE API KEY" kismindan API KEY alacagiz. KEY olustuktan
sonra Yandex Translate Key in nasil kullanildigi ile ilgili dokumana(Documentation bolumunden) bakabiliriz.
OVERVIEW bolumunde SUPPORTED LANGUAGE kisminda hangi dilleri hangi dile cevirmek icin hangi kisa kodlari
kullanmamiz gerektigini gorebiliriz.

Ornegin Turkce bir metni Ingilzceye, Ruscaya, Almancaya nasil cevrilecegi ile ilgili bilgiye
(API mizin nasil kullanilacagi ile ilgili bilgiye) TRANSLATE TEXT kismindan ulasabiliriz.

Ornegin bir request yapacagimiz zaman: https://translate.yandex.net/api/v1.5/tr.json/translate  
seklinde bir endpoint kullanacagiz.

ORNEK:
------------------------------------
Request syntax
https://translate.yandex.net/api/v1.5/tr.json/translate
 ? key=<API key>
 & text=<text to translate>
 & lang=<translation direction>        ---- Cevrilecek dilin kisa kodu (en, es, de gibi)
 & [format=<text format>]
 & [options=<translation options>]
 & [callback=<name of the callback function>]

 Yaptigimiz requeste cevap olarak JSON OBJESI donecek. Biz ajax ve callback yaparak bunu almaya calisacagiz.

ORNEK REQUEST: (Turkce - Ingilizce)

https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190514T185037Z.dea5bfe13667498f.3ae0719ead30a01dae3ab27af0236c9b32967a7c&text=nasılsın&lang=en

DONEN RESPONSE: (JSON OBJESI)

{
  "code": 200,
  "lang": "tr-en",      // Hangi dilden hangi dile ceviriyoruz
  "text": [
    "how are you"       // nasılsın = how are you
  ]
}


ORNEK REQUEST (Turkce - Rusca)

// https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190514T185037Z.dea5bfe13667498f.3ae0719ead30a01dae3ab27af0236c9b32967a7c&text=nas%C4%B1ls%C4%B1n&lang=ru

{
  "code": 200,
  "lang": "tr-ru",
  "text": [
    "как ты"          // nasılsın = как ты
  ]
}

*/