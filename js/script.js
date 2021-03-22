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

// Fase 1 

var accounts = ['giuseppe.mandriani@gmail.com', 'serafina90@live.it', 'beppe2008@hotmail.it'];
console.log(accounts);
console.table(accounts); //Sotto forma di table in console

// Fase 2 Richiesta email al'utente

var userName = prompt('Inserire indirizzo email').toLowerCase(); //Metodo 1 trasformo direttamente tutto in minuscolo
// userName = userName.toLowerCase();   // Metodo 2 Sovrascirvo variabile e Trasformo tutto in minuscolo
console.log(userName);

// Fase 3 

var userFound = false; //Imposto 

for (var i = 0; i < accounts.length; i++){
    if(accounts[i] === userName) {
        userFound = true;

    }
}