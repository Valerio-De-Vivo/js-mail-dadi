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
    document.getElementById('risultato').className = 'black';

    if (dadi > banco) {
        risultato = 'HAI VINTO!';
        document.getElementById('risultato').className = 'green';
    } else if (banco > dadi) {
        risultato = 'HAI PERSO!';
        document.getElementById('risultato').className = 'red';
    } else {
        document.getElementById('risultato').className = 'black';
    }

    document.getElementById('risultato').innerHTML = risultato;
}
);