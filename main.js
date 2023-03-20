let counter = document.querySelector('#counter');
let clickCounter = document.querySelector('#count')
let leaf = document.querySelector('#clickerLeaf')

let upgradeBtn = document.querySelector('#upgradeBtn')
let clickCost = document.querySelector('#clickCost')

let clickBtn = document.querySelector('#clickBtn')



// coin data 
let coins;

localStorage.setItem('Coins', coins)
if (localStorage.getItem('Coins')) {
    coins = 0;
    localStorage.getItem('Coins', coins) 
   
  }else {
    localStorage.setItem('Coins', 0);
    coins = paresInt(localStorage.getItem('Coins'));
  }
// click power data
let clickPower;
localStorage.setItem('clickPower', clickPower) 
if (localStorage.getItem('clickPower')) {
    clickPower = 1;
    localStorage.getItem('clickPower', clickPower) 
   
  }else {
    localStorage.setItem('clickPower', 1);
    clickPower = paresInt(localStorage.getItem('clickPower'));
  }


let upgradeCost;
localStorage.setItem('upgradeCost', upgradeCost) 
if (localStorage.getItem('upgradeCost')) {
    upgradeCost = 10;
    localStorage.getItem('upgradeCost', upgradeCost) 
    
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



