//EcmaScript 6 ile birlikte gelen TEMPLATE LITERAL 
//Stringlerimizi çok daha güzel biçimde biçimlendirmemizi sağlıyor

const name="Hakan Gungor";
const department = "Bilisim";
const salary=7000;

//const a = "Isim: " + name + "\n" + "Department: " + department + "\n" + "Maas: " + salary;  // Zor olan yontem

//Template Literal

//const a = `Isim: ${name}\nDepartment:${department}\nMaas:${salary}`;

//Liste halinde birseyler gostermek istersek

// const html="<ul> " + 
//             "<li>" + name + "</li>" +
//             "<li>" + department + "</li>" +
//             "<li>" + salary + "</li>" +
//             "</ul>";

//Template Literal ile yazmak icin

function a () {
    return "Merhaba";
}

const html = `
<ul>
<li>${name}</li>
<li>${department}</li>
<li>${salary}</li>
<li>${10/4}</li>
<li>${a()}</li>
</ul>`;

            
            
document.body.innerHTML = html;


console.log(a);