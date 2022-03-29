//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
//creare una lista di email la quale una sarà del utente e chiedere tramite promp quale sia la sua email

let emailList = ['hashdah@gmail.com', 'redside@gmail.com','greenside@gmail.com','purpleside@gmail.com']
console.log(emailList)
let email = document.getElementById('email')
// autenticazione dobbiamo dargli una costante
let auth = false && true

// funzione tasto 
// inizio calcolci se l'email è presente nel sistema, in caso ci sia comparira prosegui in verde in caso sia errata o non sia presente nel sistema si avra un messaggio di errore (controllo dati o errore di sistema)

clicca.addEventListener('click', function(){
    let email = document.getElementById('email').value
    for(let i = 0; i < emailList.length; i++){
        if(emailList[i] == email){
            auth = true
        }
    }
    if(auth == true){
        alert('accesso completato')
        document.getElementById('result').innerHTML = ('ACCESSO EFFETTUATO')
        
    }
    else {
        alert('accesso negato')
        document.getElementById('result').innerHTML = ('ACCESSO NEGATO')
       
    }               
})






function input () { 
    
}

