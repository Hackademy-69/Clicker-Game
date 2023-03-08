let counter = document.querySelector('#counter');
let clickCounter = document.querySelector('#count')
let leaf = document.querySelector('#clickerLeaf')

let upgradeBtn = document.querySelector('#upgradeBtn')
let clickCost = document.querySelector('#clickCost')

let clickBtn = document.querySelector('#clickBtn')


// variabili di partenza
let coins = 0 
let upgradeCost = 10
let clickPower = 1


// click per incremento monete + aggiornamento testo
leaf.addEventListener('click', ()=>{
    
    clickCounter.innerHTML = coins += clickPower
    
})

// bottone per potenziare il click
upgradeBtn.addEventListener('click', ()=>{

    // se non hai monete abbastanza il codice non parte
    if(coins >= upgradeCost){

        // mi toglie monete in base al costo
        clickCounter.innerHTML = coins -= upgradeCost

        // formula per incrementare costo ogni livello
        upgradeCost = Math.round(upgradeCost * 1.73)

        // aggiornamento testo
        clickCost.innerHTML = "Cost: " +  upgradeCost
        
        // formula per incrementale il potere di click 
        clickPower = Math.ceil(clickPower * 1.4)

        // aggiornamento testo 
        clickBtn.innerHTML = 'Power : ' + clickPower
    }
    
    
    
    
})
