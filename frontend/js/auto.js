let ul = document.querySelector("#navLinks");
let form = document.querySelector("#bookingForm");
if(localStorage.getItem("user")){
  let user = JSON.parse(localStorage.getItem("user"));
  if(user.tipo === "A") {
    ul.innerHTML += `<li class="nav-item">
    <a class="nav-link" href="amministratore.html">Pannello</a>
  </li>`;
  }
  ul.innerHTML += `<li class="nav-item">
  <div class="d-flex align-items-center gap-3">
    <i class="fa-solid fa-user" style="color: #4d87ea; font-size: 1.2rem;"></i>
    <div class="d-flex flex-column">
      <span class="fw-medium text-secondary" style="font-size: 0.7rem; margin-top: -0.5rem;">${user.titolo}</span>
      <span style="margin-top: -0.3rem">${user.user}</span>
    </div>
  </div>
</li>
<li class="nav-item">
  <a href="logout.html">
    <button type="button" class="btn btn-danger px-3">Logout</button>
  </a>
</li>`;
form.innerHTML += `<button type="submit" class="btn btn-success" id="invia">Invia richiesta</button>`;
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
form.innerHTML += `<div class="bg-warning d-inline-flex p-2 rounded-2">
<a href="login.html" style="text-decoration: none; color: black;">Fai il login per prenotare</a>
</div>`;
}


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
