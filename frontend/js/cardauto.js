const URL = "http://localhost:9020/api/veicolo";
let disp = document.querySelector("#VeicDisp");
let indisp = document.querySelector("#VeicNonDisp");

fetch(URL)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    data.forEach(veicolo => {

      const disponibilita = veicolo.disponibilità;
      console.log("Disponibilità:", disponibilita);

      if (disponibilita === true) {
        disp.innerHTML += creaCard(veicolo);
      } else {
        indisp.innerHTML += creaCard(veicolo);
      }
    });
  })
  .catch(error => console.error("Errore durante la richiesta:", error));

function creaCard(veicolo) {
    return `<div class="card border-success mt-3">
    <div class="card-body d-flex align-items-center">
      <div class="w-50">
        <img src="${veicolo.immagine}" class="img-fluid w-75 h-75">
      </div>
      <div class="w-50 ms-4">
        <h5 class="card-title"><strong>Tipologia:</strong> ${veicolo.tipologia}</h5>
        <p class="card-text"><strong>Alimentazione:</strong> ${veicolo.alimentazione}</p>
        <p class="card-text"><strong>Disponibilità:</strong> ${veicolo.disponibilità}</p>
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
