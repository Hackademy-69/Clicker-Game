let counter = document.querySelector('#counter');
let clickCounter = document.querySelector('#count')
let leaf = document.querySelector('#clickerLeaf')

let upgradeBtn = document.querySelector('#upgradeBtn')
let clickCost = document.querySelector('#clickCost')

let clickBtn = document.querySelector('#clickBtn')

// Come prima cosa, aprire l'ispeziona elemento ed andare su Application e Localstorage, facendo doppio click sull'http che sta subito sotto

// Un po' di teoria
// localStorage.getItem(): permette di catturare il valore associato al parametro in localStorage
// localStorage.setItem(): permette di associare un valore ad un parametro in localStorage. Prima si passa il nome del parametro e poi il valore da associare


// coin data 
let coins;

localStorage.setItem('Coins', coins) //facendo questo al caricamento della pagina stai settando a priori coins = undefined in localStorage

// Secondo me questa if non deve avvenire al caricamento della pagina altrimenti ti settera' sempre coins = 0


if (localStorage.getItem('Coins')) {
    coins = 0;
    // Qui non devi usare getItem bensi' setItem, altrimenti non stai settando il valore = 0 ma gli stai chiedendo semplicemente se lo cattura e te lo lascia undefined.
    localStorage.setItem('Coins', coins) 

  }else {
    localStorage.setItem('Coins', 0);
    coins = paresInt(localStorage.getItem('Coins'));

  }
// click power data
let clickPower;
localStorage.setItem('clickPower', clickPower) //facendo questo al caricamento della pagina stai settando a priori clickPower = undefined in localStorage

// Secondo me questa if non deve avvenire al caricamento della pagina altrimenti ti settera' sempre clickPower = 1

if (localStorage.getItem('clickPower')) {
    clickPower = 1;
    // Anche qui utilizzare setItem e non getItem altrimenti non lo stai settando ma lo stai semplicemente cercando ma lo lascia undefined
    localStorage.setItem('clickPower', clickPower) 
   
  }else {
    localStorage.setItem('clickPower', 1);
    clickPower = paresInt(localStorage.getItem('clickPower'));
  }


let upgradeCost;
localStorage.setItem('upgradeCost', upgradeCost) //facendo questo al caricamento della pagina stai settando a priori upgradeCost = undefined in localStorage

// Secondo me questa if non deve avvenire al caricamento della pagina altrimenti ti settera' sempre upgradeCost = 10

if (localStorage.getItem('upgradeCost')) {
    upgradeCost = 10;
    localStorage.setItem('upgradeCost', upgradeCost) 
    
  }else {
    localStorage.setItem('upgradeCost', 10);
    upgradeCost = paresInt(localStorage.getItem('upgradeCost'));
  }


// click per incremento monete + aggiornamento testo
leaf.addEventListener('click', ()=>{
    

    
    clickCounter.innerHTML = coins += clickPower;

    localStorage.setItem("Coins", coins);
    localStorage.setItem('ClickPower', clickPower);
})

upgradeBtn.addEventListener('click', ()=>{
    localStorage.getItem('Coins', coins);
    if(coins >= upgradeCost){

        clickCounter.innerHTML = coins -= upgradeCost;
        upgradeCost = Math.round(upgradeCost * 1.73);
        clickCost.innerHTML = "Cost: " +  upgradeCost;
        clickPower = Math.ceil(clickPower * 1.4);
        clickBtn.innerHTML = 'Power : ' + clickPower;

        localStorage.setItem('upgradeCost', upgradeCost);
        localStorage.setItem('clickPower', clickPower);
    }
    
    
    
    
})



