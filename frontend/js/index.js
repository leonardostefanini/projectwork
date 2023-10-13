/* var swiper = new Swiper(".mySwiper", {
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
    delay: 1500, // interval in milliseconds between slides
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

          swiper.appendSlide(`<div class="swiper-slide bg-danger">
          <img class="card-img-top" src="${immagine}" alt="Title">
          <div class="card-body">
              <h4 class="card-title">${tipologia}</h4>
              <p class="card-text">${descrizione}</p>
          </div>
          
          </div>`);

          console.log(td.tipologia);
      });
      })
  
}

//   function slide(immagine,tipologia,descrizione) {

//       swiper.appendSlide(`<div class="swiper-slide bg-danger">
//       <img class="card-img-top" src="${immagine}" alt="Title">
//       <div class="card-body">
//           <h4 class="card-title">${tipologia}</h4>
//           <p class="card-text">${descrizione}</p>
//       </div>
    
//       </div>`);
//     }


auto(); */