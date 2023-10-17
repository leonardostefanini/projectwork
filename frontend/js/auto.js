const id = localStorage.getItem('autoId');

let user = JSON.parse(localStorage.getItem(`user1`));

console.log('ID:', id);


let map = new L.Map('map');
let url = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var attrib = 'Map data (c)OpenStreetMap contributors';
let osm = new L.TileLayer(url, {minZoom: 8, maxZoom: 16, attribution: attrib});
map.setView(new L.LatLng(41.88,12.47),16);
map.addLayer(osm);







const URLauto = `http://localhost:9020/api/veicolo/${id}`;
let demo = document.querySelector("#demo");
const numeroCasuale = Math.random() * (150 - 40 + 1) + 40;

const numeroConDueDecimali = numeroCasuale.toFixed(2);






fetch(URLauto)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let posizione = data.posizione;
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
          <p class="card-text"><strong>Localizzazione:</strong> ${posizione}</p>

          <p class="card-text"><strong>Prezzo noleggio:</strong> ${numeroConDueDecimali} euro</p>

        </div>
      </div>
    </div>`;
    veicolo.innerHTML = contenuto;  
    let urlPosizione= `https://nominatim.openstreetmap.org/search?format=json&q=${posizione}`;
    fetch(urlPosizione)
      .then(response => response.json())
      .then(data => {
        
        
        if (data && data.length > 0) {
          
          const lat = parseFloat(data[0].lat);
          const lon = parseFloat(data[0].lon);
          map.setView([lat, lon], 16);
          //L.marker([lat, lon]).addTo(map).bindPopup("Il veicolo è qui").openPopup();
          var customIcon = L.icon({
            iconUrl: './img/auto.png', // Inserisci il percorso dell'icona personalizzata
            iconSize: [60, 45],
            iconAnchor: [20, 40],
        });

      
        marker=L.marker([lat, lon], { icon: customIcon }).addTo(map);
        

        }
      });
  });


    

    


  let btn = document.querySelector("#invia");
  document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    let URL1 = `http://localhost:9020/api/ordine`;
  
    let nuovoOrdine = {
      userid: user,
      veicoloId: id,   
      descrizione: `L'${user} ha scelto l'auto con ID: ${id}` 
    }
  
    fetch(URL1, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(nuovoOrdine)
    })
    .then(data => {
      return data.json();
    })
    .then(data => {
      alert('Form inviato');
      
      document.getElementById('nome').value = '';
      document.getElementById('cognome').value = '';
      document.getElementById('startDate').value = '';
      document.getElementById('endDate').value = '';
    });
  });
  