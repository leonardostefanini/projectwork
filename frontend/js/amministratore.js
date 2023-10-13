function changeButtonName(option, buttonId) {
    document.getElementById(buttonId).textContent = option;
}

let container = document.getElementById("container");


//---------------------------------------------------------------------------------------------------------------------------------------------
let VUtenti = document.getElementById("VUtenti");
VUtenti.addEventListener("click", function () {

    const URL = "http://localhost:9020/api/utente";
    fetch(URL)
        .then(data => {
            return data.json()
        })
        .then(response => {
            lista.innerHTML = "";
            response.forEach(element => {

                let lista = document.getElementById("lista")

                lista.innerHTML += `<li> ${element.userid} - ${element.firma} - ${element.nome} - ${element.cognome} - ${element.nascita} - ${element.email}`;
            });

        })

}) //chiusura VUtenti

//-------------------------------------------------------------------------------------------------------------------------------------
let VOrdini = document.getElementById("VOrdini");
VOrdini.addEventListener("click", function () {

    const URL = "http://localhost:9020/api/ordine";
    fetch(URL)
        .then(data => {
            return data.json()
        })
        .then(response => {
           
           lista.innerHTML = "";
            response.forEach(element=> {

                let lista = document.getElementById("lista")

                lista.innerHTML += `<li> ${element.id} - ${element.utente.userid} - ${element.veicolo.id} - ${element.descrizione}`;

            });
           

           // console.log(response.utente.userid);

        })

}) //chiusura VOrdini


//------------------------------------------------------------------------------------------------------------------------------------
// let autoV = document.getElementById("autoV");
// autoV.addEventListener("click", function () {

//     let lista = document.getElementById("lista")
//     const URL = "http://localhost:9020/api/veicolo";
//     fetch(URL)
//         .then(data => {
//             return data.json()
//         })
//         .then(response => {
//             lista.innerHTML = "";
//             response.forEach(element => {


//                 lista.innerHTML += `<li> ${element.id} - ${element.tipologia} - ${element.alimentazione} - ${element.descrizione} - ${element.posizione} - ${element.disponibilità} - ${element.data_prenotazione} - ${element.immagine} - ${element.utente.userid}`;
                
//                 let btn = document.createElement("button");
//                 btn.setAttribute("class", "btn btn-secondary w-100");
//                 btn.setAttribute("type", "button");
//                 btn.textContent = "X";
    
    

//     btn.addEventListener("click", function () {
//         let id=element.id;
//     console.log(id);
//     })
    
    
//     lista.appendChild(btn);
    
// });



//         })

// }) //chiusura autoV

// ...
autoV.addEventListener("click", function () {
    const URL = "http://localhost:9020/api/veicolo";
    fetch(URL)
    .then(data => { return data.json()})
        .then(response => {
            
            response.forEach(element => {
                let listItem = document.createElement("li");
                listItem.innerHTML = `${element.id} - ${element.tipologia} - ${element.alimentazione} - ${element.descrizione} - ${element.posizione} - ${element.disponibilità} - ${element.data_prenotazione} - ${element.immagine} - ${element.utente.userid}`;
                
                let deleteButton = document.createElement("button");
                deleteButton.setAttribute("class", "btn btn-secondary w-100");
                deleteButton.setAttribute("type", "button");
                deleteButton.textContent = "X";
    
                deleteButton.addEventListener("click", function () {
                    const vehicleId = element.id;
                    console.log(`Delete vehicle with ID: ${vehicleId}`);
                    const deleteURL = `http://localhost:9020/api/veicolo/${vehicleId}`;
                    
                    fetch(deleteURL,{
                        method: "DELETE",
                    headers: {
                        "Content-Tipe":"application/json" //che oggetto sto manipolando pero puo contenere altri dati
                    }
                })
                    .then(response => {
                        if (response.status === 204) {
                            console.log('Vehicle deleted successfully.');
                            // Optionally, you can refresh the vehicle list or update the UI here.
                            listItem.remove(); // Remove the list item from the UI
                        } else {
                            console.error('Failed to delete the vehicle.');
                        }
                    })
                });
    
                listItem.appendChild(deleteButton);
                lista.appendChild(listItem);
            });
        
     
});
});



//------------------------------------------------------------------------------------------------------------------------------------
let autoE = document.getElementById("autoE");

//---------------------------------------------------------------------------
let autoA = document.getElementById("autoA");
autoA.addEventListener("click", function () {
    let form = document.getElementById("form");
    if (form.classList.contains("d-none")) {
        form.classList.remove("d-none")
    } else {
        form.classList.add("d-none")
    }
})


let btnInvia = document.getElementById("btnInvia")
btnInvia.addEventListener("click", function () {
    const URL1 = "http://localhost:9020/api/veicolo";

    let triggerId = document.getElementById("triggerId").textContent;
    let triggerId1 = document.getElementById("triggerId1").textContent;
    let input1 = document.querySelector("#input1").value;
    let input2 = document.querySelector("#input2").value;
    let input3 = document.querySelector("#input3").value;
    let input4 = document.querySelector("#input3").value;
    let input5 = document.querySelector("#input5").value;

    let nuovoVeicolo = {
        tipologia: triggerId,
        alimentazione: triggerId1,
        descrizione: input1,
        posizione: input2,
        disponibilita: input3,
        data_prenotazione: input4,
        immagine: input5,
        userid: "utente2"
    }

    //CRUD --- > Create
    //metodo POST ---> Create del dato
    fetch(URL1, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(nuovoVeicolo)
        })
        .then(
            data => {
                return data.json()
            })
        .then(response => {})
})





let autoM = document.getElementById("autoM");
autoM.addEventListener("click", function () {

    let form = document.getElementById("form");
    if (form.classList.contains("d-none")) {
        form.classList.remove("d-none")
    } else {
        form.classList.add("d-none")
    }
    const URL2 = "http://localhost:9020/api/veicolo";

    fetch(URL2)
        .then(data => {
            return data.json()
        })
        .then(response => {
response.forEach(element => {
    
    
    
            console.log(element);

            let idVeicolo = 1;

            if (idVeicolo === element.id) {
                let triggerId = document.getElementById("triggerId");
                let triggerId1 = document.getElementById("triggerId1");
                let input1 = document.querySelector("#input1");
                let input2 = document.querySelector("#input2");
                let input3 = document.querySelector("#input3");
                let input4 = document.querySelector("#input3");
                let input5 = document.querySelector("#input5");
                triggerId.textContent = element.tipologia;
                triggerId1.textContent = element.alimentazione;
                input1.value = element.descrizione;
                input2.value = element.posizione;
                input3.value = element.disponibilità;
               // input4.value = element.data_prenotazione;
                input5.value = element.immagine;
            }
            
        });
        })

})