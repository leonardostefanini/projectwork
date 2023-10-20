var btnAlert = document.getElementById("btnAlert");


// btnAlert.addEventListener("click", function () {
  
  const URL = "http://localhost:9020/api/veicolo/1";
  fetch(URL)
  .then(data => {
    return data.json();
  })
  .then(response => {
    let spa = document.getElementById("spa")
    spa.innerHTML += `

<div class="card bg-light bg-opacity-50 d-block" id="bgAuto">
                        <img class="card-img-top ms-3" style="width: 18rem; height: 10rem;"
                            src="${response.immagine}""
                            alt="Title">
                        <div class="card-body text-center">
                            <h4 class="card-title">${response.descrizione}</h4>
                            <p class="card-text h-100">
                                <p class="">Noleggio: <br> 18/10/2023&nbsp;-&nbsp;24/10/2023</p>
                            </p>
                            <p>Totale: 300,00€</p>
                        </div>`

  btnAlert.addEventListener("click", function () {
                          
      let nuovoVeicoloM = {
        veicoloId : response.veicoloId,
        tipologia: response.tipologia,
        alimentazione: response.alimentazione,
        descrizione: response.descrizione,
        posizione: response.posizione,
        disponibilita: true,
        data_prenotazione: response.data_prenotazione,
        immagine: response.immagine,
        userid: "Amministratore"
      }

      
      const URLup = "http://localhost:9020/api/veicolo/1";
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
      let spa = document.getElementById("spa")
      spa.innerHTML="";
     
      
    
    });
  });
  
});





var btnMpro = document.getElementById("btnMpro");
var editProfileModal = document.getElementById("editProfileModal");
btnMpro.addEventListener("click", function () {
  editProfileModal.style.display = "block";
});
var saveChangesButton = document.getElementById("saveChanges");
saveChangesButton.addEventListener("click", function () {

  const confirmation = window.confirm("Sei sicuro di voler modificare la descrizione?");
  if (confirmation) {

  var description = document.getElementById("description").value;

  let descrizione = document.getElementById("descrizione")
  descrizione.innerHTML = description;
  editProfileModal.style.display = "none";
  }
});