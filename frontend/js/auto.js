let ul = document.querySelector("#navLinks");
if(localStorage.getItem("user")){
  let user = JSON.parse(localStorage.getItem("user"));
  if(user.tipo === "A") {
    ul.innerHTML += `<li class="nav-item">
    <a class="nav-link" href="amministratore.html">Pannello</a>
    </li>`;
    ul.innerHTML += `<li class="nav-item">
    <div class="d-flex align-items-center gap-3">
      <i class="fa-solid fa-circle-user" style="color: #4d87ea; font-size: 1.5rem;"></i>
      <div class="d-flex flex-column">
        <span class="fw-medium text-secondary" style="font-size: 0.7rem; margin-top: -0.5rem;">${user.titolo}</span>
        <span style="margin-top: -0.3rem">${user.user}</span>
      </div>
    </div>
    </li>`;
  }
  else if(user.tipo === "U") {
    ul.innerHTML += `<li class="nav-item">
    <div class="d-flex align-items-center gap-3">
      <a href="profilo.html" style="margin-bottom: -0.1rem;"><i class="fa-solid fa-circle-user" style="color: #4d87ea; font-size: 1.8rem;"></i></a>
      <div class="d-flex flex-column">
        <span class="fw-medium text-secondary" style="font-size: 0.7rem;">${user.titolo}</span>
        <a href="profilo.html" style="text-decoration: none; margin: 0; padding: 0; margin-top: -0.3rem; color: black!important;"><span>${user.user}</span></a>
      </div>
    </div>
    </li>`;
  }
  ul.innerHTML += `<li class="nav-item">
  <a href="logout.html">
    <button type="button" class="btn btn-danger px-3">Logout</button>
  </a>
</li>`;
}
else {
  ul.innerHTML += `<li class="nav-item">
  <a href="registrazione.html">
    <button type="button" class="btn btn-primary px-3">Registrati</button>
  </a>
</li>
<li class="nav-item">
  <a href="login.html">
    <button type="button" class="btn btn-success px-3">Login</button>
  </a>
</li>`
}


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
          <p class="card-text"><strong>Prezzo noleggio:</strong> ${numeroConDueDecimali} euro</p>
          <p class="card-text"><strong>Localizzazione:</strong> ${posizione}</p>

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
            iconUrl: './img/car.png', // Inserisci il percorso dell'icona personalizzata
            iconSize: [65, 65],
            iconAnchor: [20, 40],
        });

      
        marker=L.marker([lat, lon], { icon: customIcon }).addTo(map);
        

        }
      });
  });


    

    


  let btn = document.querySelector("#invia");
  document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    fetch(URLauto)
      .then(response => response.json())
      .then(data => {
        console.log(data);
     
        if (data.disponibilita == true) {
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
        }
        else {
          alert("Veicolo già occupato. Prenotazione non possibile.");
        }
      });
  });
  