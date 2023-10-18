

  var btnAlert = document.getElementById("btnAlert");

  // Aggiungi un gestore di eventi per il clic sul pulsante
  btnAlert.addEventListener("click", function () {
      // Mostra un messaggio di avviso
      alert("L'ordine è stato rimosso.");

      let spa =document.getElementById("spa");
      // if (spa.classList.contains("d-block")) {
        spa.classList.add("d-none")
    // } else {
    //     spa.classList.remove("d-none")
    // }

  });




  var btnMpro = document.getElementById("btnMpro");
  var editProfileModal = document.getElementById("editProfileModal");
  btnMpro.addEventListener("click", function () {
      editProfileModal.style.display = "block";
  });
  var saveChangesButton = document.getElementById("saveChanges");
  saveChangesButton.addEventListener("click", function () {
      var name = document.getElementById("name").value;
      var password = document.getElementById("password").value;
      var description = document.getElementById("description").value;

      let descrizione=document.getElementById("descrizione")
      descrizione.innerHTML=description;
      let N1=document.getElementById("N1")
      N1.innerHTML=name;
      editProfileModal.style.display = "none";
  });


