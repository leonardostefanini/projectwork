let map = new L.Map('map');
let url = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
let attrib = 'Map data (c)OpenStreetMap contributors';
let osm = new L.TileLayer(url, {minZoom: 8, maxZoom: 16, attribution: attrib});
map.setView(new L.LatLng(41.88,12.47),16);
map.addLayer(osm);
// L.marker([41.88,12.47]).addTo(map).bindPopup("ritirami").openPopup();
let marker; 

let cardContainer = document.getElementById("cardContainer");

function createCard(nome, immagine, tipo, descrizione) {
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
          </div>
        </div>
        
      </div>
    `;

    cardContainer.appendChild(card);
}

  function auto() {

    let URLAuto="http://localhost:9020/api/veicolo";
  
    
    fetch(URLAuto)
        .then(data => {
            return data.json()
        })
        .then(response => {
  
            response.forEach(item => {
                
            
            let nome=item.tipologia;
            let immagine=item.immagine;
            let tipo=item.alimentazione;
            let descrizione=item.descrizione;
  
            
            createCard(nome, immagine, tipo, descrizione)
            console.log(item.posizione);

            let nomeCitta ="Milano";
            cercaCitta(nomeCitta);

        });
        })
    
  }
  
  function cercaCitta(nomeCitta) {

    if(nomeCitta!=null){


        //map.classList.remove("d-none")

    var url = 'https://nominatim.openstreetmap.org/search?format=json&q=' + nomeCitta;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                //if (data.length > 0) {
                    let lat = parseFloat(data[0].lat);
                    let lon = parseFloat(data[0].lon);
                    map.setView([lat, lon], 13);
                   // console.log(lat+" /"+lon);


                    if (marker) {
        map.removeLayer(marker);
    }

                    var customIcon = L.icon({
                    iconUrl: './img/auto.png', // Inserisci il percorso dell'icona personalizzata
                    iconSize: [60, 45],
                    iconAnchor: [20, 40],
                });

              
                marker=L.marker([lat, lon], { icon: customIcon }).addTo(map);

                map.setView([lat, lon], 13);

                let citta=nomeCitta;

               
                 meteo(lat,lon,citta);
                

                })
                
           
        } else {
            alert('Città non trovata');

            map.setView([0, 0], 13);

            let dati = document.getElementById("dati");

            let img = document.getElementById("img");

            dati="";
            img="";
            let linkMeteo=document.getElementById("linkMeteo")

            linkMeteo.classList.add("d-none")
           }
    }
  auto();

