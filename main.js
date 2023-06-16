let coinsCounter = document.querySelector('#count');
let leaf = document.querySelector('#Leaf');

// upgrade clicks
let upgradeClickPowerBtn = document.querySelector('#upgradeClickPowerBtn');
let clickCostIndicator = document.querySelector('#clickCostIndicator');

// power indicator
let powerInd = document.querySelector('#powerInd');

// resetbtn
let resetBtn = document.querySelector('#resetBtn');

// coins per second 1 st upgrade
let coinsPerSecCounter = document.querySelector('#coinsPerSec');
let CPSCostCounter = document.querySelector('#CPSCostCounter')
let CPSUpgrade1 = document.querySelector('#upgradeCPS1')


// coin data 
let coins;
+localStorage.getItem('Coins') > 0 ? coins = +localStorage.getItem('Coins') : coins = 0 ;

console.log(+localStorage.getItem('Coins'));

coinsCounter.innerHTML = coins;

// click power data
let clickPower;
+localStorage.getItem('clickPower') > 0 ? clickPower = +localStorage.getItem('clickPower') : clickPower = 1 ;

// upgrade cost data
let upgradeCost;
+localStorage.getItem('upgradeCost') > 0 ? upgradeCost = +localStorage.getItem('upgradeCost') : upgradeCost = 10;
clickCostIndicator.innerHTML = "Cost: " +  upgradeCost;
powerInd.innerHTML = 'Power : ' + clickPower;

// coins per second data
let coinsPerSecond;
+localStorage.getItem('coinsPerSecond') > 0 ? coinsPerSecond = +localStorage.getItem('coinsPerSecond') : coinsPerSecond = 0;
coinsPerSecCounter.innerHTML = "Coins/s : " + coinsPerSecond;

// cps cost data
let CPSCost1;
+localStorage.getItem('CPSCost1') > 0 ? CPSCost1 = +localStorage.getItem('CPSCost1') : CPSCost1 = 100;
CPSCostCounter.innerHTML = "Cost : " + CPSCost1;




// functions

// button colors on coins 

function updateColor(){


    if(upgradeCost <= coins){
        upgradeClickPowerBtn.classList.add("valid");
        upgradeClickPowerBtn.classList.remove("notvalid");
    }else{
        upgradeClickPowerBtn.classList.add("notvalid");
        upgradeClickPowerBtn.classList.remove("valid");
    }

    

    if(CPSCost1 <= coins){
        CPSUpgrade1.classList.add("valid");
        CPSUpgrade1.classList.remove("notvalid");
    }else{
        CPSUpgrade1.classList.add("notvalid");
        CPSUpgrade1.classList.remove("valid");
    }

    setTimeout(updateColor, 100);
    
}

updateColor();






// reset button
resetBtn.addEventListener('click', ()=>{

    localStorage.clear();
    location.reload();

})

// clicker
leaf.addEventListener('click', ()=>{
    coins += clickPower;
    coinsCounter.innerHTML = coins;



    localStorage.setItem("Coins", coins);
    localStorage.setItem('ClickPower', clickPower);
})

// upgrade clicker
upgradeClickPowerBtn.addEventListener('click', ()=>{
   
    if(coins >= upgradeCost){

        coinsCounter.innerHTML = coins -= upgradeCost;
        upgradeCost = Math.round(upgradeCost * 1.56);

        localStorage.setItem('upgradeCost', upgradeCost);
        localStorage.setItem("Coins", coins);

        clickCostIndicator.innerHTML = "Cost: " +  upgradeCost;
        
        clickPower = Math.ceil(clickPower * 1.4);
        localStorage.setItem('clickPower', clickPower); 

        powerInd.innerHTML = 'Power : ' + clickPower;
    }
})

// upgrade coins per second
let isFirstClick = true;

CPSUpgrade1.addEventListener('click', ()=>{


    if(coins >= CPSCost1){

        coinsCounter.innerHTML = coins -= CPSCost1;
        CPSCost1 = Math.round(CPSCost1 * 1.68);

        if(isFirstClick){
            coinsPerSecond = 1;
            isFirstClick = false;
        }else{
            coinsPerSecond = coinsPerSecond + Math.round(coinsPerSecond * 1.58);
        }
        
        localStorage.setItem("Coins", coins);
        localStorage.setItem("CPSCost1", CPSCost1);
        localStorage.setItem("coinsPerSecond", coinsPerSecond);
        
        CPSCostCounter.innerHTML = "Cost : " + CPSCost1;
        coinsPerSecCounter.innerHTML = "Coins/s : " + coinsPerSecond;

    }

    let hasAddedCoins = false;

    setInterval(function() {
    if (!hasAddedCoins) {
        coins += coinsPerSecond;
        hasAddedCoins = true;
        
        localStorage.setItem("Coins", coins);
        coinsCounter.innerHTML = coins;
    }
    }, 900);

    setInterval(function() {
    hasAddedCoins = false;
    }, 1400);
    
})

