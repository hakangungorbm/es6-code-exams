//Callback Cehennemi ve Promise

/*
Bu bölümde ES6 ile birlikte gelen Promis yapısını inceleyeceğiz. Önceki bölümlerde yaptığımız işlemleri
yeni ES6 ile gelen yeni özelliklerle yapmaya çalışacağım.
*/

//CALLBACK FONKSİYONLAR (Hatırlama)
/*
Callback, en basit haliyle herhangi bir fonksiyona parametre olarak verdiğimiz ve sonra geri
çağıracağımız fonksiyonlara denir. İstenilen değere ulaştığında veya işlem sonlandığında görevini
yerine getirir. Callback ler asenkron işlemlerimizi yönetmemizi sağlar.
Asenkron işlemleri senkron hale çevirmemizi sağlar.

Örnek: Aşağıdaki gibi iç içe geçmiş fonksiyonları çalıştırdıığımızda A -> E - > C - > B ....
şeklinde asenkron şekilde(karışık bir şekilde) çalışabilir.

Ancak biz A -> B - > C - > D .... şeklinde sıralı bir şekilde çalışmasını istersek bu durumda bizim
CALLBACK leri kullanmamız gerekiyor.

a(function (resultsFromA)) {
    b(resultsFromA, function (resultsFromB)) {
        c(resultsFromB, function(resultsFromC) {
            ......
        })
    })
});

NOT: Yukarıdaki kod bloğuna baktığımızda kafamız karışıyor. Ard arda callback leri kullandığımız zaman
yukarıdakine benzer bir içinden çıkılamaz piramid yapısı oluşur.

Bu literaturde Callback Cehennemi (Callback Hell veya Callback Pyramid) diye geçen bir durumdur.

Bu yapı programlarımızın okunmasını ve callback leri yönetmeyi oldukça zorlaştırır.

Bu callback lerin en büyük dezavantajları:
1) Hata yönetiminin zor olması
2) Callback Cehennemine düşme durumu
3) Callback’in beklenenden erken çağırılması
4) Callback’in hiç çağırılmaması
5) Callback’in beklenilenden az veya çok çağırılması
6) Gerekli parametreleri doğru bir şekilde alamaması
7) Hataların yutulması


*/

//PROMISE ve YAPISI

/*
Js geliştiricileri yukarıda anlattığımız callback problemlerinden kurtulmak için ES6 ile birlikte
PROMISE yapısını getirdiler. Promise, callback’lerin sıkıntılı yönlerini düzeltmek amacıyla
önerilmiş bir yapıdır.

Dikkat: Promise bir objedir. Bu promise in kendi içinde özellikleri ve methodları bulunabilir.

Promise in 5 adımı vardır ve 3 tane durumu vardır.

1)vaatte bulunma (promise)
2)bekleme durumu(pending)[1.durum]
3)başarılı durum (resolved)[2.durum]
4)başarısız durum (rejected)[3.durum]
5)hatalı durumu yönetmemiz (error handling) 

Avantajları:

1) Promise istenilen görevi yerine getirdiğinde değeri değişmez (immutable)
2) Sadece bir kere başarıya (resolved) ulaşır, veya başarısız (rejected) olur.
3) Öngörülemeyen hatalar otomatik olarak Promise’i başarısız (rejected) sonuca götürür. Bu da hataları kontrol etme noktasında faydalıdır.
4) Yapısı gereği, gelecekteki bir değerin göstergesi olduğundan daha güvenilirdir.

Gerçek Hayattan Bir Örnek:

Biz (1. kişi) bilgisayarımız bozulduğunda bilgisayarcıya (2. kişi) tamir etmesi için veririz.
Aslında bilgisayarcıya 1 tane istekte bulunuruz.
Bilgisayarcı yapabileceğini vaat ederek bilgisayarını alır (promise)
Biz bilgisayarcı yapabilecek mi, yapamayacak mı diye beklemeye başlarız (pending)
Bilgisayarcı bize bir müddet sonra dönüş yapar. Bu dönüş 2 türlü olabilir.
1. Dönüş: Bilgisayarı yaparak olumlu bir dönüş yapar (resolved)
2. Dönüş: Bilgisayarı yapamayarak olumsuz bir dönüş yapar (rejected)

Programlamadan Bir Örnek:

Bir programımız var. Bu programdan bir Rest API ye GET isteğinde bulunuyoruz(getData() fonksiyonu)
ve pending durumuna geçiyoruz. Bu getData() fonksiyonu kendi içinde 1 tane PROMISE objesi oluşturur.
Bu promise objesi içerisindeki 2 değer çok önemlidir. 

- state: pending (Biz bekleme durumunda olduğumuz için değeri pending olur)
- value: undefined (Henüz bize herhangi bir değer dönmedi.)

Bu getData fonksiyonu sorunsuz şekilde veriyi aldı. Veriyi bize promise objesi üzerinden döner.
Veriyi js içerisinde bulunan RESOLVE(....) fonksiyonu taşır.

Dönen promise objesinin içeriği:

- state: resolved veya fullfilled değerlerini alır (olumlu)
- value: dönen veri (örnek: 24 sayısı dönüyor)

şeklinde olur.

Bir diğer durumda ise veri alırken herhangi bir sıkıntı omuş olabilir. (timeout olmuş olabilir vs.)
Bu durumda yine promise bize bir sonuç döner. Eğer durum böyle olumsuzsa bu sefer js içinde bulunan
REJECT(...) fonskiyonu ile döner. Reject fonksiyonu içinde error mesaj da bulunur.

Dönen promise objesinin değerleri:

- state: rejected (durumun olumsuz oldugunu gösteren değer)
- value: error   (reject fonksiyonu içindeki error mesaj)

Peki promise objesi döndüğünde bizim programımız bu dönenleri nasıl alacak. Örneğin resolve durumu
içindeki value değerini nasıl alacak.

Başarılı ise: value yu THEN fonksiyonuyla alırız.
Başarısız ise: hatayı CATCH fonksiyonuyla alırız
*/