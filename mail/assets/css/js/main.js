let emailList = ['hashdah@gmail.com', 'redside@gmail.com','greenside@gmail.com','purpleside@gmail.com']
let usermail = prompt('inserisci la tua email')
console.log(emailList)

let auth = false && true

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
    document.getElementById('results').innerHTML = 'controlla i dati forniti'
}