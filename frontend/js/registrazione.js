let occhio = document.querySelector("#occhio");
let password = document.querySelector("#password");

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
});

document.querySelector("button").addEventListener("click", function() {
    
    const URL = "http://localhost:9020/api/utente";

    let inputUser = document.querySelector("#user").value.trim();
    let inputPassword = document.querySelector("#password").value.trim();
    let inputFirma = document.querySelector("#firma").value.trim();
    let inputNome = document.querySelector("#nome").value.trim();
    let inputCognome = document.querySelector("#cognome").value.trim();
    let inputNascita = document.querySelector("#nascita").value.trim();
    let inputEmail = document.querySelector("#email").value.trim();
   

    let nuovoUser = {
        userid: inputUser,
        password: inputPassword,
        firma: inputFirma,
        tipo: "U",
        nome: inputNome,
        cognome: inputCognome,
        nascita: inputNascita,
        email: inputEmail,
    }

    fetch(URL, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(nuovoUser)
    })
    .then(
        data =>{ return data.json() }
    )
    .then(response=>{
        location.href="index.html";
    })
})
