var play = document.getElementById('play');
play.addEventListener( 'click' , function () {

    // VAR DADI CASUALE 
    var dadi = Math.floor(Math.random ()* 6) + 1;
    var banco = Math.floor(Math.random ()* 6) + 1;

    // INNER HTML RISULTATI DADI 

    document.getElementById('giocatore').innerHTML = dadi;
    document.getElementById('banco').innerHTML = banco;

    // DICHIARAZIONE VINCITORE 

    var risultato = 'PAREGGIO';

    if (dadi > banco) {
        risultato = 'HAI VINTO!'
    } else if (banco > dadi) {
        risultato = 'HAI PERSO! '
    }

    document.getElementById('risultato').innerHTML = risultato;
}
);