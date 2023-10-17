const id = localStorage.getItem('autoId');

let user = JSON.parse(localStorage.getItem(`user`));

console.log('ID:', id);



const URLauto = `http://localhost:9020/api/veicolo/${id}`;
let demo = document.querySelector("#demo");
const numeroCasuale = Math.random() * (150 - 40 + 1) + 40;

const numeroConDueDecimali = numeroCasuale.toFixed(2);




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
          <p class="card-text"><strong>Disponibilità:</strong> ${data.disponibilita}</p>
          <p class="card-text"><strong>Prezzo noleggio:</strong> ${numeroConDueDecimali} euro</p>


        </div>
      </div>
    </div>`;
      veicolo.innerHTML = contenuto;  

    });


    let map = new L.Map('map');
let url = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
let attrib = 'Map data (c)OpenStreetMap contributors';
let osm = new L.TileLayer(url, {minZoom: 8, maxZoom: 16, attribution: attrib});
map.setView(new L.LatLng(41.88,12.47),16);
map.addLayer(osm);
// L.marker([41.88,12.47]).addTo(map).bindPopup("ritirami").openPopup();
let marker; 

function auto() {

  let URLAuto=` http://localhost:9020/api/veicolo/${id}`  ;

  
  fetch(URLAuto)
      .then(data => {
          return data.json()
      })
      .then(response => {

          response.forEach(item => {
            console.log(item.posizione);
              
          
         

       

      });
      })
  
}

let btn=document.querySelector("#invia");
document.getElementById('moduloPreventivo').addEventListener('submit', function(event) {
  event.preventDefault(); 

  let URL1=`http://localhost:9020/api/ordine`

  let nuovoOrdine= {
    userid: user,
    veicoloId: id,   
    descrizione: "bmw"
  }

  
  fetch(URL1, {
    method: "POST",
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(nuovoOrdine)
})
.then(data => {
    return data.json()
})
.then(response => {
    location.href = "auto.html";
    
    alert('Form inviato');
    
    document.getElementById('nome').value = '';
    document.getElementById('cognome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('indirizzo').value = '';
    document.getElementById('telefono').value = '';
    
   
    
  });
  });
