//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
//creare una lista di email la quale una sarà del utente e chiedere tramite promp quale sia la sua email

let emailList = ['hashdah@gmail.com', 'redside@gmail.com','greenside@gmail.com','purpleside@gmail.com']
let usermail = prompt('inserisci la tua email')
console.log(emailList)
// autenticazione dobbiamo dargli una costante
let auth = false && true
// inizio calcolci se l'email è presente nel sistema, in caso ci sia comparira prosegui in verde in caso sia errata o non sia presente nel sistema si avra un messaggio di errore (controllo dati o errore di sistema)
for(let i = 0; i < emailList.length; i++){
    if(emailList[i] == usermail){
        auth = true
    }
}
if(auth == true){
    alert('accesso completato')
    document.getElementById('result').innerHTML = 'Prosegui'
}
else {
    alert('accesso negato')
    document.getElementById('results').innerHTML = 'La tua email non è presente nel sistema'
}               