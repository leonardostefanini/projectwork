// btnregistrami.addEventListener("click", function(){
//     const URL1 = "http://localhost:9006/api/utente";


//     let inputUser = document.querySelector("#user").value;
//     let inputPassword = document.querySelector("#password").value;
//     let inputFirma = document.querySelector("#firma").value;

//     let inputNome = document.querySelector("#nome").value;
//     let inputCognome = document.querySelector("#cognome").value;
//     let inputNascita = document.querySelector("#nascita").value;
//     let inputEmail = document.querySelector("#email").value;
   

//     let nuovoUser = {
//         user: inputUser,
//         password: inputPassword,
//         firma: inputFirma,
//         tipo: "U",
//         nome: inputNome,
//         cognome: inputCognome,
//         nascita: inputNascita,
//         email: inputEmail,
       
//     }

//     fetch(URL1, {
//         method: "POST",
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify(nuovoUser)
//     })
//     .then(
//         data =>{ return data.json() }
//     )
//     .then(response=>{
//         location.href="index.html";
        
                        
//                     })
// })

let login = document.querySelector("#login");
// let registrami = document.querySelector("#registrami");

// registrami.addEventListener("click",function(){

//     let sfondo = document.querySelector("#sfondo");

//     if(sfondo.classList.contains("d-none")){

//         sfondo.classList.remove("d-none")
//     }else{
//         sfondo.classList.add("d-none")
//     }

// })

let btnLogin = document.querySelector("#btnLogin")
btnLogin.addEventListener("click",function(){

    const URL2 = "http://localhost:9006/api/utente";
    
    fetch(URL2)
    .then(
        data =>{ return data.json() }
    )
    .then(response=>{
        let inputUserL = document.querySelector("#userLogin").value;
        let inputPasswordL = document.querySelector("#passwordLogin").value;
        
        response.forEach(element => {
            
            if (inputUserL != "" && inputPasswordL != "" ) {
                
                if(inputUserL === element.userid && inputPasswordL === element.userpassword ){
                    
                    let username = JSON.stringify(inputUserL);
                    localStorage.setItem("user", username); 
                }
            } else {
                
                event.preventDefault();
            }
            
        });
            
        })

})




login.addEventListener("click",function(){
    let sfondo2 = document.querySelector("#sfondo2");

    if(sfondo2.classList.contains("d-none")){

        sfondo2.classList.remove("d-none")
    }else{
        sfondo2.classList.add("d-none")
    }

})












