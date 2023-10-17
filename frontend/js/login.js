let occhio = document.querySelector("#occhio");
let username = document.querySelector("#userLogin");
let password = document.querySelector("#passwordLogin");
let msgErr = document.querySelector("#msgErr");

occhio.addEventListener("click", function() {
    if(occhio.classList.contains("fa-eye-slash")){
        occhio.classList.remove("fa-eye-slash");
        occhio.classList.add("fa-eye");
        password.setAttribute("type", "text");
    }
    else {
        occhio.classList.remove("fa-eye");
        occhio.classList.add("fa-eye-slash");
        password.setAttribute("type", "password");
    }
})

document.querySelector("button").addEventListener("click", function() {
    let user = username.value.trim();
    let pass = password.value.trim();

    if(user != "" && pass != "") {
        let url = "http://localhost:9020/api/utente";
        fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            let utenteTrovato = false;
            data.forEach(utente => {
                if(utente.userid === user && utente.password === pass) {
                    if(utente.tipo === "A") {
                        let userLoggato = {
                            user: utente.userid,
                            tipo: utente.tipo,
                            titolo: "Amministratore"
                        };
                        localStorage.setItem("user", JSON.stringify(userLoggato));
                        localStorage.setItem("user1", JSON.stringify(user));

                        utenteTrovato = true;
                        location.href = "amministratore.html";
                    }
                    else {
                        let userLoggato = {
                            user: utente.userid,
                            tipo: utente.tipo,
                            titolo: "Utente"
                        };
                        localStorage.setItem("user", JSON.stringify(userLoggato));
                        localStorage.setItem("user1", JSON.stringify(user));
                        utenteTrovato = true;
                        location.href = "index.html";
                    }
                }
            });
            if(!utenteTrovato) {
                msgErr.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Utente non trovato</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`; 
            }
        })
    }
    else {
        msgErr.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
        Uno o più campi <strong>vuoti</strong>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`
    }

})

/* document.querySelector("button").addEventListener("click", function() {
    let user = username.value.trim();
    let pass = password.value.trim();

    if (user !== "" && pass !== "") {
        if (user === "Amministratore" && pass === "Amministratore") {
            // Accesso come amministratore
            location.href = "amministratore.html";
        } else {
            let url = "http://localhost:9020/api/utente";
            fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                let foundUser = data.find(utente => utente.userid === user && utente.password === pass);

                if (foundUser) {
                    // Utente trovato nel database, reindirizza a "home.html"
                    location.href = "index.html";
                    let username = JSON.stringify(user);
                    localStorage.setItem("user", username);

                    let 
                } else {
                    // Nessuna corrispondenza trovata
                    msgErr.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Utente non trovato</strong>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>`;
                }
            })
            .catch(error => {
                // Gestione degli errori nella richiesta fetch
                console.error("Errore nella richiesta fetch:", error);
            });
        }
    } else {
        // Campi vuoti
        msgErr.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
            Uno o più campi <strong>vuoti</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
    }
});
 */