
 var swiper = new Swiper(".mySwiper", {

  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000, // interval in milliseconds between slides
    disableOnInteraction: false,
  },
});

function auto() {

  let URLAuto="http://localhost:9020/api/veicolo";

  
  fetch(URLAuto)
      .then(data => {
          return data.json()
      })
      .then(response => {

          response.forEach(td => {
              
          
          let immagine=td.immagine;
          let tipologia=td.tipologia;
          let descrizione=td.descrizione;
          let alimentazione=td.alimentazione;

          swiper.appendSlide(`<div class="swiper-slide ">
          <img class="card-img-top" src="${immagine}" alt="Title">
          <div class="card-body">
              <h3 class="card-title"><strong>Tipologia:</strong> ${tipologia}</h3>
              <p class="card-text"><strong>Alimentazione:</strong> ${alimentazione}</p>
              <p class="card-text"><strong>Caratteristiche:</strong> ${descrizione}</p>
          </div>
          
          </div>`);

          
      });
      })
  
}
auto(); 

  //  function slide(immagine,tipologia,descrizione) {

  //      swiper.appendSlide(`<div class="swiper-slide bg-danger">
  //     <div class="card-body">
  //          <h4 class="card-title">${tipologia}</h4>
  //          <p class="card-text">${descrizione}</p>
  //      </div>
    
  //     </div>`);
  //    }



  // function slide(immagine,tipologia,descrizione) {

  //     swiper.appendSlide(`<div class="swiper-slide bg-danger">
  //     <img class="card-img-top" src="${immagine}" alt="Title">
  //     <div class="card-body">
  //         <h4 class="card-title">${tipologia}</h4>
  //         <p class="card-text">${descrizione}</p>
  //     </div>
    
  //     </div>`);
  //   }

let ul = document.querySelector("#navLinks");
if(localStorage.getItem("user")){
  let user = JSON.parse(localStorage.getItem("user"));
  if(user.tipo === "A") {
    ul.innerHTML += `<li class="nav-item">
    <a class="nav-link" href="amministratore.html">Pannello</a>
  </li>`;
  }else if(user.tipo === "U"){
   ul.innerHTML += `<li class="nav-item">
   <a class="nav-link" href="profilo.html" id="profilo"><i class="bi bi-person-bounding-box" style="font-size: 1.5rem;"></i></a>
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


function tornaAllInizio() {
  document.body.scrollTop = 0; // Per Safari
  document.documentElement.scrollTop = 0; // Per altri browser
}

// Mostra/nascondi il pulsante in base alla posizione dello schermo
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("torna-all-inizio").style.display = "block";
  } else {
      document.getElementById("torna-all-inizio").style.display = "none";
  }
};

