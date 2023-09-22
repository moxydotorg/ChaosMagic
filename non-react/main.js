/*
    This is the main script for the program. It'll grow over time as we add more complexity to it.

    It begins executing from the top of the file to the bottom of the file. 

    When it encounters a "function" it'll skip that block until another line calls for it to be executed.

    To start with we grab each button by using the ID we assigned it in the HTML 
    For example, the roll chaos button had the ID bChaos.
    After we get the button element we add what's called a "listener" to it for a particular event.
    In this case we're listening to the "click" event and we specify what function should be called
    when that event happens. In this case "rollChaos"

    So when a user clicks a button with the ID bChaos this script will run the function rollChaos

    We do this for each of the buttons we're initializing

    After we initialize the event listeners there's nothing more for us to do but wait for a click
*/

document.getElementById("bChaos").addEventListener("click", rollChaos);
document.getElementById("bEnchant").addEventListener("click", rollEnchantWorldLand);
document.getElementById("bPersona").addEventListener("click", rollPersonaLand);
document.getElementById("bWhacky").addEventListener("click", rollWhackyLand);
document.getElementById("bClear").addEventListener("click", clearBoard);

//buttons are initialized we're done with the main portion of the script we just wait for an event to happen now.


/*
    This function clears the board and prepares it for a new game.
    This gets the cahos, enchantworldland, personaland, and whackyland paragraphs and sets their text content
    to an blank space
*/
//TODO: reset the roll history arrays for each and the pointer for each array
function clearBoard(){
    document.getElementById("chaos").textContent=" ";
    document.getElementById("enchantworldland").textContent = " ";
    document.getElementById("personaland").textContent = " ";
    document.getElementById("whackyland").textContent = " ";
}

/* 
    When the chaos button is pressed 
     1) generate a random number (Math.random()) between 0 and 1 
     2) multiply that number by the length of the chaosList array (so if we add new items later this isn't hard coded)
     3) floor the result to make sure we have an integer result.
        - this creates a random number between 0 and chaosList.length-1
     4) use that number as an index into the chaosList array.
     5) prefix the result with a space (in case we get an empty result)
     6) assign the result to the text content of the Chaos paragraph in the HTML document.
*/
//TODO: create a history array and a pointer for where we're currently add.
//TODO: add next/back buttons to move the pointer in the array then remove the Chaos Roll button
function rollChaos(){
    document.getElementById("chaos").textContent = " "+chaosList[Math.floor(Math.random() * chaosList.length)]; 
}

/* 
    When the enchantworldlland button is pressed 
     1) generate a random number (Math.random()) between 0 and 1 
     2) multiply that number by the length of the  array (so if we add new items later this isn't hard coded)
     3) floor the result to make sure we have an integer result.
        - this creates a random number between 0 and array .length-1
     4) use that number as an index into the  array.
     5) prefix the result with a space (in case we get an empty result)
     6) assign the result to the text content of the  paragraph in the HTML document.
*/
//TODO: create a history array and a pointer for where we're currently add.
//TODO: add next/back buttons to move the pointer in the array then remove the Roll button
function rollEnchantWorldLand(){
    document.getElementById("enchantworldland").textContent = " "+encantWorldLandList[Math.floor(Math.random() * encantWorldLandList.length)]; 
}

/* 
    When the personaLand button is pressed 
     1) generate a random number (Math.random()) between 0 and 1 
     2) multiply that number by the length of the  array (so if we add new items later this isn't hard coded)
     3) floor the result to make sure we have an integer result.
        - this creates a random number between 0 and array .length-1
     4) use that number as an index into the  array.
     5) prefix the result with a space (in case we get an empty result)
     6) assign the result to the text content of the  paragraph in the HTML document.
*/
//TODO: create a history array and a pointer for where we're currently add.
//TODO: add next/back buttons to move the pointer in the array then remove the Roll button
function rollPersonaLand(){
    document.getElementById("personaland").textContent = " "+personaLandList[Math.floor(Math.random() * personaLandList.length)]; 
}

/* 
    When the whackyland button is pressed 
     1) generate a random number (Math.random()) between 0 and 1 
     2) multiply that number by the length of the  array (so if we add new items later this isn't hard coded)
     3) floor the result to make sure we have an integer result.
        - this creates a random number between 0 and array .length-1
     4) use that number as an index into the  array.
     5) prefix the result with a space (in case we get an empty result)
     6) assign the result to the text content of the  paragraph in the HTML document.
*/
//TODO: create a history array and a pointer for where we're currently add.
//TODO: add next/back buttons to move the pointer in the array then remove the Roll button
function rollWhackyLand(){
    document.getElementById("whackyland").textContent = " "+whackyLandList[Math.floor(Math.random() * whackyLandList.length)]; 
}

