document.getElementById("ajax").addEventListener("click",getAllEmployess);

//Ajax islemlerini yapacagiz
function getAllEmployess(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET","employees.json",true);


    xhr.onload = function() {
        let list = document.getElementById("employees");
        if(this.status == 200) {
            //console.log(this.responseText);
            /*
            Ciktisi: String olarak gelen sonuc
                [
                    {
                        "name": "Hakan",
                        "department": "BIGM",
                        "salary": 10000

                    },
                    {
                        "name": "Mehmet",
                        "department": "BHIM",
                        "salary": 3700
                    },
                    {
                        "name": "Yana",
                        "department": "Emniyet",
                        "salary": 7000
                    }
                ]
            */

            //String i bir JSON objesine veya JSON array ine cevirmek icin JSON.parse() methodunu kullaniyorduk
            console.log(JSON.parse(this.responseText));  // Json arrayi doner
            /*
            Ciktisi: Json array olarak donen icerik
                (3) [{…}, {…}, {…}]
                0: {name: "Hakan", department: "BIGM", salary: 10000}
                1: {name: "Mehmet", department: "BHIM", salary: 3700}
                2: {name: "Yana", department: "Emniyet", salary: 7000}
                length: 3
                __proto__: Array(0)
            */

            //Elemanlari array olarak aliyoruz
            const employees = JSON.parse(this.responseText);

            // Array uzerinde foreach ile geziniyoruz
            employees.forEach(function(personel) {
                list.innerHTML += `
                <tr>
                    <td>${personel.name}</td>
                    <td>${personel.department}</td>
                    <td>${personel.salary}</td>
                </tr>
                `;
            });

        }
    }

    xhr.send();

}