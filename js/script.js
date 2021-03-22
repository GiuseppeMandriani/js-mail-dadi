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

// Esercizio 2 Gioco dei Dadi

/**
 * Fase 1 Generare Numero Random per Giocatore e Computer
 * 
 * Fase 2 Stampare numerico
 * 
 * Fase 3 Stampare vincitore
 * 
 */



function myFunction(){

    var message;

    // Fase 1 Numero Random da 1 a 6 per Giocatore
    var numero = Math.random();
    var numeroGiocatore = Math.floor(Math.random() * 6 + 1);
    console.log('Numero Giocatore è: ' + numeroGiocatore);
    message = 'il numero del player è ' + numeroGiocatore;
    document.getElementById('player').innerHTML = message;


    // Fase 2 numero Random da 1 a 6 per Computer
    var numeroBot = Math.floor(Math.random() * 6 + 1);
    console.log('Numero Bot è: ' + numeroBot);
    message = 'il numero del Bot è ' + numeroBot;
    document.getElementById('bot').innerHTML = message;

    // Fase 3 Scelta vincitore in base al numero maggiore

    if(numeroGiocatore < numeroBot){
        console.log('Spiacente, hai perso, ritenta sarai più fortunato')
        message = 'Spiacente hai perso, ritenta sarai più fortunato.';

    } else if (numeroGiocatore > numeroBot) {
        console.log('Hai vinto!!!');
        message = 'Hai vinto!!!!!';

    } else {
        console.log('Pareggio, ritenta')
        message = 'Pareggio, ritenta';

    }
    // Fase 4 Stampa vincitore in base al numero maggiore

    document.getElementById('winner').innerHTML = message;




}