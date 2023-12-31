/*
Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
pensiamo a queli strumenti ci servono, ad esempio: Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Eventuali validazioni e i controlli possiamo farli anche in un secondo momento.
*/


document.querySelector('.inizia').addEventListener('click', function () {
    let gameGrid = document.getElementById('gameGrid'); // seleziono la  grid
    gameGrid.innerHTML = ""; // svuoto il container
    let bombs = generaBombe();
    console.log(bombs);
    // scrivere per 100 volte un div.cella dentro al gameGrid
    for (let i = 0; i < 100; i++) {


        let cell = document.createElement('div'); // creo un div
        cell.className = 'cella'; // assegno a questo di la classe
        cell.innerText = i + 1;
        
        gameGrid.append(cell); // appendo al grid il div appena creato

        cell.addEventListener('click', function () {
            let trovata = false;
            for (let j = 0; j < 16; j++){
                console.log(bombs[j]);
               if(this.innerText == bombs[j]){
                trovata = true;
               } else {
                trovata = false;
               }
            }
            if(trovata){
                this.classList.toggle('bg-red');
               } else {
                this.classList.toggle('bg-green');
               }
            //console.log('ho cliccato sull elemento dom:', cellElement);
            console.log(this); // Dom element cellElement
            
            console.log(this.innerText);
        })

    }
});

function generaBombe(){
    let bombs = [];
    for (let i = 0; i < 16; i++) {
        let bomba = Math.random() *100;
        bombs[i] = parseInt(bomba);
        
    }
    return bombs;
}
