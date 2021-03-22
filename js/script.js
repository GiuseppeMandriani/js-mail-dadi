// Esercizio 1, Richiesta e Verifica nome utente 

/**
 * 
 * Fase 1 Creazione array
 * 
 * Fase 1 Richiesta Nome utente
 * 
 * Fase 2 Verifica presenza nome utente
 * 
 * Fase 3 Stampare esito
 */

// Fase 1 Creazione Array

var accounts = ['giuseppe.mandriani@gmail.com', 'serafina90@live.it', 'beppe2008@hotmail.it'];
console.log(accounts);
console.table(accounts); //Sotto forma di table in console

// Fase 2 Richiesta email al'utente

var userName = prompt('Inserire indirizzo email').toLowerCase(); //Metodo 1 trasformo direttamente tutto in minuscolo
// userName = userName.toLowerCase();   // Metodo 2 Sovrascirvo variabile e Trasformo tutto in minuscolo
console.log('User inserito dall\'utente: ' + userName);

// Fase 3/4 Verifica e Stampa

var userFound = false; //Imposto condizione

for (var i = 0; i < accounts.length; i++){
    console.log(accounts[i]);

    if(accounts[i] === userName) {
        userFound = true;
        break;
    }
}

if (userFound === true){
    console.log('Utente trovato, accedi');
    document.getElementById('check').innerHTML = ('Benvenuto'+ userName);
} else {
    console.log('Errore di autenticazione');
    document.getElementById('check').innerHTML = ('Spiacente, indirizzo email errato');
    alert('Reinserire indirizzo email');

}
