const id = localStorage.getItem('autoId');
console.log('ID:', id);

const URLauto = `http://localhost:9020/api/veicolo/${id}`;
let demo = document.querySelector("#demo");

fetch(URLauto)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let contenuto = '';  
      contenuto = `<div class="card border-success mt-5">
      <div class="card-body d-flex align-items-center">
        <div class="w-50">
          <img src="${data.immagine}" class="img-fluid w-75 h-75">
        </div>
        <div class="w-50 ms-4">
          <h5 class="card-title "><strong>Tipologia:</strong> ${data.descrizione}</h5>
          <p class="card-text mt-5"><strong>Alimentazione:</strong> ${data.alimentazione}</p>
          <p class="card-text"><strong>Descrizione:</strong> ${data.tipologia}</p>
          <p class="card-text"><strong>Disponibilità:</strong> ${data.disponibilità}</p>
        </div>
      </div>
    </div>`;
      veicolo.innerHTML = contenuto;  

    });


let btn=document.querySelector("#invia");

btn.addEventListener('click', function()
{
    alert("Form inviato");
})