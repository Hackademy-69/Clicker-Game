let clickCounter = document.querySelector('#count');
let leaf = document.querySelector('#Leaf');

let upgradeBtn = document.querySelector('#upgradeBtn');
let clickCost = document.querySelector('#clickCost');

let clickBtn = document.querySelector('#clickBtn');

let resetBtn = document.querySelector('#resetBtn');


// coin data 
let coins;
+localStorage.getItem('Coins') > 0 ? coins = +localStorage.getItem('Coins') : coins = 0 ;

console.log(+localStorage.getItem('Coins'));

clickCounter.innerHTML = coins;

// click power data
let clickPower;
+localStorage.getItem('clickPower') > 0 ? clickPower = +localStorage.getItem('clickPower') : clickPower = 1 ;

// upgrade cost data
let upgradeCost;
+localStorage.getItem('upgradeCost') > 0 ? upgradeCost = +localStorage.getItem('upgradeCost') : upgradeCost = 10;
clickCost.innerHTML = "Cost: " +  upgradeCost;
clickBtn.innerHTML = 'Power : ' + clickPower;





// functions

// reset button
resetBtn.addEventListener('click', ()=>{

    localStorage.clear();
    location.reload();

})

// clicker
leaf.addEventListener('click', ()=>{
    coins += clickPower;
    clickCounter.innerHTML = coins;



    localStorage.setItem("Coins", coins);
    localStorage.setItem('ClickPower', clickPower);
})

// upgrade clicker
upgradeBtn.addEventListener('click', ()=>{
   
    if(coins >= upgradeCost){

        clickCounter.innerHTML = coins -= upgradeCost;
        upgradeCost = Math.round(upgradeCost * 1.73);
        localStorage.setItem('upgradeCost', upgradeCost);
        localStorage.setItem("Coins", coins);

        clickCost.innerHTML = "Cost: " +  upgradeCost;
        
        clickPower = Math.ceil(clickPower * 1.4);
        localStorage.setItem('clickPower', clickPower); 

        clickBtn.innerHTML = 'Power : ' + clickPower;
    }
})



