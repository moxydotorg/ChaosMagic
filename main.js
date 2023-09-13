let myVariable  = "bob" ;


document.getElementById("bChaos").addEventListener("click", rollChaos);
document.getElementById("bEnchant").addEventListener("click", rollEnchantWorldLand);
document.getElementById("bPersona").addEventListener("click", rollPersonaLand);
document.getElementById("bWhacky").addEventListener("click", rollWhackyLand);
document.getElementById("bClear").addEventListener("click", clearBoard);

function clearBoard(){
    document.getElementById("chaos").textContent=" ";
    document.getElementById("enchantworldland").textContent = " ";
    document.getElementById("personaland").textContent = " ";
    document.getElementById("whackyland").textContent = " ";
}

function rollChaos(){
    document.getElementById("chaos").textContent = " "+chaosList[Math.floor(Math.random() * chaosList.length)]; 
}

function rollEnchantWorldLand(){
    document.getElementById("enchantworldland").textContent = " "+encantWorldLandList[Math.floor(Math.random() * encantWorldLandList.length)]; 
}

function rollPersonaLand(){
    document.getElementById("personaland").textContent = " "+personaLandList[Math.floor(Math.random() * personaLandList.length)]; 
}


function rollWhackyLand(){
    document.getElementById("whackyland").textContent = " "+whackyLandList[Math.floor(Math.random() * whackyLandList.length)]; 
}

