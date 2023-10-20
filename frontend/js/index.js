
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
          
          if(td.id != 5 && td.id != 12){
            swiper.appendSlide(`<div class="swiper-slide">
          <div class="d-flex flex-column flex-lg-row align-items-lg-center gap-lg-4">
            <div class="d-lg-flex justify-content-center" style="width: 30rem"><img src="${immagine}" alt="Title" class="img-fluid h-auto w-75"></div>
            <div class="card-body" style="color: black">
            <h3 class="card-title"><strong>Tipologia:</strong> ${tipologia}</h3>
            <p class="card-text my-2"><strong>Alimentazione:</strong> ${alimentazione}</p>
            <p class="card-text"><strong>Caratteristiche:</strong> ${descrizione}</p>
            </div>
          </div>
          </div>`);
          } 
    
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
    ul.innerHTML += `<li class="nav-item">
    <div class="d-flex align-items-center gap-3">
      <i class="fa-solid fa-circle-user" style="color: #4d87ea; font-size: 1.5rem;"></i>
      <div class="d-flex flex-column">
        <span id="profTitolo" class="fw-medium text-secondary" style="font-size: 0.7rem; margin-top: -0.5rem;">${user.titolo}</span>
        <span id="profNome" style="margin-top: -0.3rem">${user.user}</span>
      </div>
    </div>
    </li>`;
  }
  else if(user.tipo === "U") {
    ul.innerHTML += `<li class="nav-item">
    <div class="d-flex align-items-center gap-3">
      <a href="profilo.html" style="margin-bottom: -0.1rem;"><i class="fa-solid fa-circle-user" style="color: #4d87ea; font-size: 1.8rem;"></i></a>
      <div class="d-flex flex-column">
        <span id="profTitolo" class="fw-medium text-secondary" style="font-size: 0.7rem;">${user.titolo}</span>
        <a href="profilo.html" style="text-decoration: none; margin: 0; padding: 0; margin-top: -0.3rem; color: black!important;"><span id="profNome">${user.user}</span></a>
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

/* dark mode */

let checkbox = document.querySelector("#checkbox");
let body = document.querySelector("body");
let nav = document.querySelector("nav");
let luna = document.querySelector(".fa-moon");
let sfondo = document.querySelector(".checkbox-label");
let palla = document.querySelector(".checkbox-label .ball");
let linkNav = document.querySelectorAll(".nav-link");
let profTitolo = document.querySelector("#profTitolo");
let profNome = document.querySelector("#profNome");
let desc = document.querySelectorAll("#desc");
let footer = document.querySelector("footer");

checkbox.addEventListener("change", function() {
  if(!body.hasAttribute("data-bs-theme")) {
    body.setAttribute("data-bs-theme", "dark");
    nav.classList.add("dark");
    luna.classList.add("dark");
    sfondo.classList.add("dark");
    palla.classList.add("dark");
    linkNav.forEach(link => {
      link.classList.add("dark");
    })
    profTitolo.classList.add("dark");
    profNome.classList.add("dark");
    desc.forEach(d => {
      d.classList.add("dark");
    })
    footer.classList.add("dark");
  }
  else {
    body.removeAttribute("data-bs-theme");
    nav.classList.remove("dark");
    luna.classList.remove("dark");
    sfondo.classList.remove("dark");
    palla.classList.remove("dark");
    linkNav.forEach(link => {
      link.classList.remove("dark");
    })
    profTitolo.classList.remove("dark");
    profNome.classList.remove("dark");
    desc.forEach(d => {
      d.classList.remove("dark");
    })
    footer.classList.remove("dark");
  }
})