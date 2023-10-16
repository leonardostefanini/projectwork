btnregistrami.addEventListener("click", function(){
    const URL1 = "http://localhost:9020/api/utente";


    let inputUser = document.querySelector("#user").value;
    let inputPassword = document.querySelector("#password").value;
    let inputFirma = document.querySelector("#firma").value;

    let inputNome = document.querySelector("#nome").value;
    let inputCognome = document.querySelector("#cognome").value;
    let inputNascita = document.querySelector("#nascita").value;
    let inputEmail = document.querySelector("#email").value;
   

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

    fetch(URL1, {
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
let registrami = document.querySelector("#registrami");

registrami.addEventListener("click",function(){

    let sfondo = document.querySelector("#sfondo");

    if(sfondo.classList.contains("d-none")){

        sfondo.classList.remove("d-none")
    }else{
        sfondo.classList.add("d-none")
    }

})