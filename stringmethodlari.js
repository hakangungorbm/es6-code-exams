//string METHODLARI 
let value;


const firstName = "Hakan";
const lastName = "Gungor";

const langs = "Java,Python,C++";

value = firstName +" " + lastName;

value = "Mehmet Gungor ";

value = value + "Kemal";  // Çıktısı: Mehmet Gungor Kemal (1. Kullanim)
value += "Kemal";         // Çıktısı: Mehmet Gungor Kemal (2. Kullanim)  [value = value + "Kemal";]   kullanımının kısa hali

//String Methodlari

value = firstName.length;  // String icerisinde kac karakter var onun degerini verir

value = firstName.concat(" ", lastName, " ", "Caz")  // String  Birlestirme Methodu (Ciktisi: Hakan Gungor Caz)

value = firstName.toLowerCase(); // Butun karakterler kucuk harfe donusuyor;
value = firstName.toUpperCase(); // Butun karakterler buyuk harfe donusuyor;

value = firstName[0];  // sıfırıncı indexte hangi karakter varsa onu alıyoruz

value = firstName[firstName.length - 1];  // Son karakter i aldik


//IndexOf Methodu

value = firstName.indexOf("H");  // Icerisine verilen karakterin hangi indexte oldugunu verir bize

//CharAt Methodu

value = firstName.charAt(0);  // Verilen index numarasina denk gelen karakter i gosterir bize
value = firstName.charAt(firstName.length - 1); // Son elemanimizi aldik

//Split Methodu (String parcalama methodu)

value = langs.split(",");  // Virgule gore uygulandigi degiskeni parcalar ve her bir elemani bir array e yerlestirir

//Replace methodu

value = langs.replace("Python" , "CSS")   // Python kelimesi yerine CSS yazdik

//Includes Methodu

value = langs.includes("Java");  // String icerisinde Java kelimesinin var olup olmadigini kontrol eder


console.log(value);
