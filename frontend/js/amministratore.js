let navLinks = document.querySelector("#navLinks");
let user = JSON.parse(localStorage.getItem("user"));
navLinks.innerHTML += `<li class="nav-item ms-5">
<div class="d-flex align-items-center gap-3">
  <i class="fa-solid fa-user" style="color: #4d87ea; font-size: 1.2rem;"></i>
  <div class="d-flex flex-column">
    <span class="fw-medium text-secondary" style="font-size: 0.7rem; margin-top: -0.5rem;">${user.titolo}</span>
    <span style="margin-top: -0.3rem">${user.user}</span>
  </div>
</div>
</li>
<li class="nav-item ms-5">
<a href="logout.html">
  <button type="button" class="btn btn-danger px-3">Logout</button>
</a>
</li>`;
//---------------------------------------------------------------------------------------------------------------------------------------------

function changeButtonName(option, buttonId) {
    document.getElementById(buttonId).textContent = option;
}

let container = document.getElementById("container");
let form = document.getElementById("form");

let home=document.getElementById("home");
home.addEventListener("click",function () {
    location.href="index.html"
    
})

//---------------------------------------------------------------------------------------------------------------------------------------------




//------------------------------------------------------------------------------------------------------------------------------------
function homePage() {
    

const autoV = document.getElementById("autoV");
const lista = document.getElementById("lista");
let listaVisibile = false;

let titolo=document.getElementById("titolo");
titolo.innerHTML="";
titolo.innerHTML+="Gestione Veicoli"


// autoV.addEventListener("click", function () {
    const URL = "http://localhost:9020/api/veicolo";

    
    if (listaVisibile) {
       
        lista.innerHTML = "";
        
        listaVisibile = false;
    } else {
        
        fetch(URL)
            .then(data => {
                return data.json();
            })
            .then(response => {
                lista.innerHTML = "";
                response.forEach(element => {
                    let listItem = document.createElement("li");
                    let disponibilita="";
                    if(element.disponibilita==1){
                        disponibilita=true;

                    }else{
                      disponibilita=false;
                    }
                    // listItem.innerHTML = `<li class="list-group-item w-100 border-light">${element.id} - ${element.tipologia} - ${element.alimentazione} - ${element.descrizione} - ${element.posizione} - ${disponibilita} - ${element.data_prenotazione}  - ${element.utente.userid}</li>`;
                     listItem.innerHTML = `<li class="list-group-item border-light">${element.descrizione} - ${element.tipologia} - ${element.alimentazione} - ${element.posizione} - ${disponibilita}</li>`;
                    let vehicleId = element.id;
                    del(vehicleId,listItem)
                    mod1(vehicleId, listItem, btnModifica)
            
               
                    //  listItem.appendChild(deleteButton);
                    //  listItem.appendChild(btnM);
                    
                    lista.appendChild(listItem);
                });
                listaVisibile = true; 
            });
    }
// });

function modInv() {
    let btnModifica=document.getElementById("btnModifica")
    btnModifica.addEventListener("click",function () {
        //const URLup = `http://localhost:9020/api/veicolo/${vehicleId}`;
        const URLup = `http://localhost:9020/api/veicolo`;
        let vehicleId = JSON.parse(localStorage.getItem(`idAuto`))
        console.log(vehicleId);

        let triggerId = document.getElementById("triggerId").textContent;
        let triggerId1 = document.getElementById("triggerId1").textContent;
        let input1 = document.querySelector("#input1").value;
        let input2 = document.querySelector("#input2").value;
    
        let input3True = document.querySelector("#disponibileTrue");
    let input3False = document.querySelector("#disponibileFalse");
    let input3 = input3True.checked ? input3True.value : input3False.value;
    
    
        let input4 = document.querySelector("#input4").value;
        let input5 = document.querySelector("#input5").value;
    
        let nuovoVeicoloM = {
            veicoloId : vehicleId,
            tipologia: triggerId,
            alimentazione: triggerId1,
            descrizione: input1,
            posizione: input2,
            disponibilita: input3,
            data_prenotazione: input4,
            immagine: input5,
            userid: "Amministratore"
        }
    
        
    
        fetch(URLup, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(nuovoVeicoloM)
        })
        .then(data => {
            return data.json()
        })
        .then(response => {
            location.href = "amministratore.html";
        });
    });
}
modInv();

// function del(vehicleId,listItem) {
//     let deleteButton = document.createElement("button");
//     deleteButton.setAttribute("class", "btn btn-light rounded-0");
//     deleteButton.setAttribute("style", "border:none;");
//     deleteButton.setAttribute("type", "button");
//     deleteButton.setAttribute("id", "btndelete");
//     deleteButton.innerHTML = `<i class="ri-delete-bin-5-fill" style="color:red;" id="del"></i>`;

    

//     deleteButton.addEventListener("click", function () {
      

//         console.log(`Delete vehicle with ID: ${vehicleId}`);
//         const deleteURL = `http://localhost:9020/api/veicolo/${vehicleId}`;
        
//         fetch(deleteURL,{
//             method: "DELETE",
//         headers: {
//             "Content-Tipe":"application/json" 
//         }
//     })
//         .then(response => {
//          location.href="amministratore.html"
           
//         })
    
//     });

//     listItem.appendChild(deleteButton);
// }

function del(vehicleId, listItem) {
    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "btn btn-light rounded-0");
    deleteButton.setAttribute("style", "border:none;");
    deleteButton.setAttribute("type", "button");
    deleteButton.setAttribute("id", "btndelete");
    deleteButton.innerHTML = `<i class="ri-delete-bin-5-fill" style="color:red;" id="del"></i>`;

    deleteButton.addEventListener("click", function () {
        const confirmation = window.confirm("Sei sicuro di voler eliminare questo veicolo?");
        if (confirmation) {
            const deleteURL = `http://localhost:9020/api/veicolo/${vehicleId}`;

            fetch(deleteURL, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => {
                location.href = "amministratore.html";
            });
        }
    });

    listItem.appendChild(deleteButton);
}






function mod1(vehicleId, listItem,  btnModifica) {
    let btnM = document.createElement("button");
    btnM.setAttribute("class", "btn btn-light  rounded-0");
    btnM.setAttribute("type", "button");
    btnM.setAttribute("data-bs-toggle", "offcanvas");
    btnM.setAttribute("data-bs-target", "#offcanvasRight");
    btnM.setAttribute("aria-controls", "offcanvasRight");
     btnM.setAttribute("id", "btndelete");
    btnM.innerHTML = `<i class="ri-edit-2-fill" style="color:green;" id="cha"></i>`;

   

    btnM.addEventListener("click", function () {
        let idAuto=vehicleId;
        localStorage.setItem("idAuto", JSON.stringify(idAuto));
        let btnInvia = document.getElementById("btnInvia");
        btnModifica.classList.remove("d-none");
        btnInvia.classList.add("d-none");

        const URL2 = `http://localhost:9020/api/veicolo/${vehicleId}`;
       
        let titleFM=document.getElementById("offcanvasRightLabel")
        titleFM.innerHTML="";
        titleFM.innerHTML+="Modifica Veicolo";

        fetch(URL2)
            .then(data => {
                return data.json();
            })
            .then(response => {
                console.log(response.disponibilita);

            
                let triggerId = document.getElementById("triggerId");
                let triggerId1 = document.getElementById("triggerId1");
                let input1 = document.querySelector("#input1");
                let input2 = document.querySelector("#input2");
                // let input3 = document.querySelector("#input3");
                // let input3True = document.querySelector("#disponibileTrue");
                // let input3False = document.querySelector("#disponibileFalse");
                // let input3 = input3True.checked ? input3True.value : input3False.value;
                let input5 = document.querySelector("#input5");
                triggerId.textContent = response.tipologia;
                triggerId1.textContent = response.alimentazione;
                input1.value = response.descrizione;
                input2.value = response.posizione;
                // input3.checked = response.disponibilita == 1 ? true : false;
                // input3.checked = response.disponibilita;
                input5.value = response.immagine;
            })
    })

    listItem.appendChild(btnM);
}
};



//---------------------------------------------------------------------------
let autoA = document.getElementById("autoA");
autoA.addEventListener("click", function () {

    let titleFM=document.getElementById("offcanvasRightLabel")
    titleFM.innerHTML="";
    titleFM.innerHTML+="Aggiungi Veicolo";

    btnModifica.classList.add("d-none");
    btnInvia.classList.remove("d-none");
    document.getElementById('triggerId').value = '';
    document.getElementById('triggerId1').value = '';
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    document.getElementById('input3').value = '';
    document.getElementById('input4').value = '';
    document.getElementById('input5').value = '';
  

 
})



document.addEventListener("DOMContentLoaded", function () {
let btnInvia = document.getElementById("btnInvia");
btnInvia.addEventListener("click", function () {
    const URL1 = "http://localhost:9020/api/veicolo";

    let triggerId = document.getElementById("triggerId").textContent;
    let triggerId1 = document.getElementById("triggerId1").textContent;
    let input1 = document.querySelector("#input1").value;
    let input2 = document.querySelector("#input2").value;

    let input3True = document.querySelector("#disponibileTrue");
let input3False = document.querySelector("#disponibileFalse");
let input3 = input3True.checked ? input3True.value : input3False.value;


    let input4 = document.querySelector("#input4").value;
    let input5 = document.querySelector("#input5").value;

    let nuovoVeicolo = {
        tipologia: triggerId,
        alimentazione: triggerId1,
        descrizione: input1,
        posizione: input2,
        disponibilita: input3,
        data_prenotazione: input4,
        immagine: input5,
        userid: "Amministratore"
    }

    

    fetch(URL1, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(nuovoVeicolo)
    })
    .then(data => {
        return data.json()
    })
    .then(response => {
        location.href = "amministratore.html";

        document.getElementById('triggerId').value = '';
        document.getElementById('triggerId1').value = '';
        document.getElementById('input1').value = '';
        document.getElementById('input2').value = '';
        document.getElementById('input3').value = '';
        document.getElementById('input4').value = '';
        document.getElementById('input5').value = '';
    });
});
});

//---------------------------------------------------------------------------------------------------------------------------


let autoAVisible1 = true; // Variabile per tenere traccia dello stato di autoA

const VUtenti = document.getElementById("VUtenti");
const lista1 = document.getElementById("lista");
let listaVisibile1 = false; 

VUtenti.addEventListener("click", function () {
    const URL = "http://localhost:9020/api/utente";
    let titolo=document.getElementById("titolo");
titolo.innerHTML="";
titolo.innerHTML+="Gestione Utenti"

    if (autoAVisible1) {
        autoA.classList.add("d-none");
    } else {
        autoA.classList.remove("d-none");
    }
    autoAVisible1 = !autoAVisible1; // Inverti lo stato

    if (listaVisibile1) {
        lista1.innerHTML = "";
        homePage();
        listaVisibile1 = false;
    } else {
        fetch(URL)
            .then(data => {
                return data.json();
            })
            .then(response => {
                lista1.innerHTML = "";
                response.forEach(element => {
                  //  lista1.innerHTML += `<li class="list-group-item">${element.userid} - ${element.firma} - ${element.nome} - ${element.cognome} - ${element.nascita} - ${element.email}</li>`;
                    lista1.innerHTML += `<li class="list-group-item">${element.userid} - ${element.nome} - ${element.cognome} - ${element.nascita} </li>`;
                });
                listaVisibile1 = true; 
            });
    }
});


//-------------------------------------------------------------------------------------------------------------------------------------


let autoAVisible = true; // Variabile per tenere traccia dello stato di autoA

const VOrdini = document.getElementById("VOrdini");
const lista2 = document.getElementById("lista");
let listaVisibile2 = false; 

VOrdini.addEventListener("click", function () {
    const URL = "http://localhost:9020/api/ordine";
    let titolo=document.getElementById("titolo");
titolo.innerHTML="";
titolo.innerHTML+="Gestione Ordini"

    if (autoAVisible) {
        autoA.classList.add("d-none");
    } else {
        autoA.classList.remove("d-none");
    }
    autoAVisible = !autoAVisible; // Inverti lo stato

    if (listaVisibile2) {
        lista2.innerHTML = "";
        homePage();
        listaVisibile2 = false;
    } else {
        fetch(URL)
            .then(data => {
                return data.json();
            })
            .then(response => {
                lista2.innerHTML = "";
                response.forEach(element => {
                    lista2.innerHTML += `<li class="list-group-item">${element.id} - ${element.utente.userid} - ${element.veicolo.id} - ${element.descrizione}</li>`;
                });
                listaVisibile2 = true; 
            });
    }
});

homePage();
