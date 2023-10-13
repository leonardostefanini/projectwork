let map = new L.Map('map');
let url = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
let attrib = 'Map data (c)OpenStreetMap contributors';
let osm = new L.TileLayer(url, {minZoom: 8, maxZoom: 16, attribution: attrib});
map.setView(new L.LatLng(41.88,12.47),16);
map.addLayer(osm);
L.marker([41.88,12.47]).addTo(map).bindPopup("ritirami").openPopup();


let cardContainer = document.getElementById("cardContainer");

function createCard(nome, immagine, tipo, descrizione, prezzo, id) {
    let card = document.createElement("div");
    card.classList.add("card", "mb-3");
  
    card.innerHTML = `
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${immagine}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h2 class="card-title">${nome}</h2>
            <h6 class="card-subtitle py-2">${tipo}</h6>
            <p class="card-text py-2">${descrizione}</p>
            <a href="${id}" class="btn btn-success">Dettagli</a>
          </div>
        </div>
        
      </div>
    `;

    cardContainer.appendChild(newCard);
}

  function auto() {

    let URLAuto="http://localhost:9020/api/veicolo";
  
    
    fetch(URLAuto)
        .then(data => {
            return data.json()
        })
        .then(response => {
  
            response.forEach(item => {
                
            
            let nome=item.nome;
            let immagine=item.immagine;
            let tipo=item.tipo;
            let descrizione=item.descrizione;
            let prezzo=item.prezzo;
            let id=item.id;
  
            
            createCard(nome, immagine, tipo, descrizione, prezzo, id)
            console.log(item.tipo);
        });
        })
    
  }