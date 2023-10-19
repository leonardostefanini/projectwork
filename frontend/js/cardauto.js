const URL = "http://localhost:9020/api/veicolo";
let disp = document.querySelector("#VeicDisp");
let indisp = document.querySelector("#VeicNonDisp");

fetch(URL)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    data.forEach(veicolo => {

      const disponibilita = veicolo.disponibilita;
      console.log("Disponibilità:", disponibilita);

      if (disponibilita === true) {
        disp.innerHTML += creaCardDisp(veicolo);
      } else {
        indisp.innerHTML += creaCardIndisp(veicolo);
      }
    });
  })
  .catch(error => console.error("Errore durante la richiesta:", error));

function creaCardDisp(veicolo) {
    return `<div class="card border-success border-3 mt-3">
    <div class="card-body d-flex align-items-center">
      <div class="w-50">
        <img src="${veicolo.immagine}" class="img-fluid w-75 h-75">
      </div>
      <div class="w-50 ms-4">
        <h5 class="card-title"><strong>Tipologia:</strong> ${veicolo.tipologia}</h5>
        <p class="card-text"><strong>Alimentazione:</strong> ${veicolo.alimentazione}</p>
        <p class="card-text">${veicolo.descrizione}</p>
        <button class="btn btn-primary" onclick="reindirizzo('${veicolo.id}')">Visualizza</button>
      </div>
    </div>
  </div>`;
}

function creaCardIndisp(veicolo) {
  return `<div class="card border-danger border-3 mt-3">
  <div class="card-body d-flex align-items-center">
    <div class="w-50">
      <img src="${veicolo.immagine}" class="img-fluid w-75 h-75">
    </div>
    <div class="w-50 ms-4">
      <h5 class="card-title"><strong>Tipologia:</strong> ${veicolo.tipologia}</h5>
      <p class="card-text"><strong>Alimentazione:</strong> ${veicolo.alimentazione}</p>
      <p class="card-text">${veicolo.descrizione}</p>
      <button class="btn btn-primary" onclick="reindirizzo('${veicolo.id}')">Visualizza</button>
    </div>
  </div>
</div>`;
}

function reindirizzo(id) 
{
  localStorage.setItem('autoId', id);
  window.location.href = "auto.html";
}
//////////////////////////////////////////////////// aggiunta leooooo///////////////////////////////////////////////////////////
 


//  fetch(URL)
//    .then(response => response.json())
//    .then(data => {
//      data.forEach(veicolo => {
//        const disponibilita = veicolo.disponibilita;
//        if (disponibilita === true) {
//          disp.innerHTML += creaCardDisp(veicolo);
//        } else {
//          indisp.innerHTML += creaCardIndisp(veicolo);
//        }
//      });
//      // Iniziale visualizzazione dei veicoli e dei pulsanti di paginazione
//      displayVehicles();
//      generatePaginationButtons();
//    })
//    .catch(error => console.error("Errore durante la richiesta:", error));

//  // Numero di veicoli da visualizzare per pagina
//  const vehiclesPerPage = 10;
//  let currentPage = 1;

//  // Funzione per mostrare i veicoli nella pagina corrente
//  function displayVehicles() {
//    const startIndex = (currentPage - 1) * vehiclesPerPage;
//    const endIndex = startIndex + vehiclesPerPage;
//    const vehiclesToShow = Array.from(document.querySelectorAll(".card")).slice(startIndex, endIndex);

//    // Nascondi tutti i veicoli
//    Array.from(document.querySelectorAll(".card")).forEach(vehicle => {
//      vehicle.style.display = "none";
//    });

//    // Mostra solo i veicoli nella pagina corrente
//    vehiclesToShow.forEach(vehicle => {
//      vehicle.style.display = "block";
//    });
//  }

//  // Funzione per generare i pulsanti di paginazione
//  function generatePaginationButtons() {
//   const totalPages = Math.ceil(document.querySelectorAll(".card").length / vehiclesPerPage);
//   const paginationElement = document.getElementById("pagination");
//   paginationElement.innerHTML = "";

//   for (let i = 1; i <= totalPages; i++) {
//     const pageLink = document.createElement("a");
//     pageLink.className = "page-link";
//     pageLink.textContent = i;
//     pageLink.href = "#";
//     pageLink.addEventListener("click", () => {
//       currentPage = i;
//       displayVehicles();
//       // Aggiungi il codice per tornare al div con ID "veicoli"
//       document.getElementById('veicoli').scrollIntoView({ behavior: 'smooth' });
//     });

//     paginationElement.appendChild(pageLink);
//   }
// }

