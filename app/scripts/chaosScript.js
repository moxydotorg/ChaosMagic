import { chaosList } from './chaosList.js';
import { realmEnchantmentList } from './enchantWorldLand.js';
import { personaList } from './personaLandList.js';
import { whackyList } from './whackyLandList.js';
import * as domElements from './domElements.js';
import * as modals from './modals.js';
import { replaceManaSymbols, rollDie, insertDiceRollResults, getNextCardNumber } from './utilityFunctions.js';

// Game State
export let discardPiles = { chaos: [], realm: [], persona: [], whacky: [] };
export let allDecks = {}; 

let currentlyDrawnCard = null; 
let activeEffects = []; 
let drawnCounts = { chaos: 0, realm: 0, persona: 0, whacky: 0 };



const deckIcons = { 
    chaos: `<svg class="w-full h-full text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm0-4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path><path d="M10 3.5A6.5 6.5 0 003.5 10H2a8 8 0 115.075-7.559L5.95 3.55A6.502 6.502 0 0010 3.5zM16.5 10A6.5 6.5 0 0010 3.5V2a8 8 0 11-7.559 5.075L3.55 5.95A6.502 6.502 0 0016.5 10z"></path></svg>`,
    realm: `<svg class="w-full h-full text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>`,
    persona: `<svg class="w-full h-full text-red-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>`,
    whacky: `<svg class="w-full h-full text-purple-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 00-6 6c0 1.282.406 2.47 1.076 3.451l-1.261 1.261a1 1 0 101.414 1.414l1.261-1.261A5.966 5.966 0 0010 14a6 6 0 006-6c0-1.282-.406-2.47-1.076-3.451l1.261-1.261a1 1 0 10-1.414-1.414l-1.261 1.261A5.966 5.966 0 0010 2zm0 10a4 4 0 110-8 4 4 0 010 8z"></path><path d="M6.228 7.205a.75.75 0 00-1.06 1.06l1.75 1.75a.75.75 0 001.06-1.06l-1.75-1.75zm8.602-1.06a.75.75 0 10-1.06 1.06l1.75 1.75a.75.75 0 101.06-1.06l-1.75-1.75z"></path></svg>`
};

// --- Pre-process Card Lists ---
// This function processes all card lists and replaces mana symbols with images
// This function is called once at the start of the script to load all card lists
// this could maybe filter the different groups of cards we want to use
async function preprocessAllCardLists() {
    const listNames = ["chaosList", "realmEnchantmentList", "personaList", "whackyList"];
    const loadedLists = { chaosList, realmEnchantmentList, personaList, whackyList }; 

    for (const listName of listNames) {
        const currentList = loadedLists[listName];
        if (typeof currentList === 'undefined') {
            console.error(`Critical Error: ${listName} is not defined. Make sure its .js file is loaded correctly.`);
            return false; // Indicate failure
        }

        // Process each card in the current list
        // This looks through each effect and replaces mana symbols with images to make it more magic-ish
        const processedCards = await Promise.all(currentList.map(async (card) => {
            const processedEffect = await replaceManaSymbols(card.effect);
            return { ...card, effect: processedEffect };
        }));
        
        // Update the global list variable with the processed cards
        // If they are `const` arrays of objects, this modifies the objects within the const array.
        globalThis[listName] = processedCards;
    }
    return true; // Indicate success
};

// --- Helper Functions ---
// This function updates the displayed drawn card information
const updateDrawnCardDisplay = () => { 
    if (currentlyDrawnCard) {
        domElements.drawnCardImage.src = currentlyDrawnCard.card.picture;
        domElements.drawnCardImage.alt = currentlyDrawnCard.card.name;
        domElements.drawnCardName.textContent = currentlyDrawnCard.card.name;
        domElements.drawnCardEffect.innerHTML = insertDiceRollResults(currentlyDrawnCard.card.effect); 
        
        domElements.drawnCardEffect.classList.add('text-left'); 
        domElements.drawnCardSection.style.display = 'flex';
        domElements.placeholderDrawnCard.style.display = 'none';
    } else {
        domElements.drawnCardSection.style.display = 'none';
        domElements.placeholderDrawnCard.style.display = 'flex';
        domElements.drawnCardEffect.innerHTML = ''; 
    }
};

// This function updates the displayed active effects information
const updateActiveEffectsDisplay = () => { 
    domElements.activeEffectsContainer.innerHTML = ''; 
    if (activeEffects.length === 0) {
        domElements.activeEffectsContainer.appendChild(domElements.noActiveEffectsMessage); 
        domElements.noActiveEffectsMessage.style.display = 'block';
    } else {
        domElements.noActiveEffectsMessage.style.display = 'none';
        activeEffects.forEach(effect => {
            const effectElement = document.createElement('div');
            effectElement.className = 'effect-item';
            
            const iconSpan = document.createElement('span');
            iconSpan.className = 'effect-item-icon'; 
            iconSpan.innerHTML = deckIcons[effect.originalDeckKey]; 
            effectElement.appendChild(iconSpan); 

            const effectTextPara = document.createElement('p');
            effectTextPara.className = 'effect-item-text';
            effectTextPara.innerHTML = effect.effectText; 
            effectElement.appendChild(effectTextPara);

            const discardButton = document.createElement('button');
            discardButton.className = 'btn-action bg-pink-500 hover:bg-pink-600 text-xs font-medium py-1 px-2 rounded-md shadow-sm whitespace-nowrap';
            discardButton.textContent = 'Discard Effect';
            discardButton.onclick = () => discardEffect(effect.id);
            effectElement.appendChild(discardButton);
            
            domElements.activeEffectsContainer.appendChild(effectElement);
        });
    }
};

// This function updates the displayed counts of drawn cards for each deck
const updateDrawnCountsDisplay = () => { 
    for (const deckKey in drawnCounts) {
        const counterElement = document.getElementById(`count-${deckKey}`);
        if (counterElement) counterElement.textContent = drawnCounts[deckKey];
    }
};

   
// --- Core Logic Functions ---
// This function draws a card from the specified deck and updates the UI when the user clicks on the deck button
const drawCard = (deckKey) => { 
    if (currentlyDrawnCard) discardCurrentDrawnCard(); // Discard the currently drawn card if any
    if (!allDecks[deckKey] || !allDecks[deckKey].list) { 
        console.error(`Deck data for ${deckKey} is not available. External JS might not have loaded.`);
        return;
    }
    // const deckData = allDecks[deckKey];
    if (allDecks[deckKey].list.length > 0) {
        // iterate over all cards sequentially good for debugging
        //const randomIndex = getNextCardNumber(deckKey);         
        // randomly select a card from the deck
        const randomIndex = Math.floor(Math.random() * allDecks[deckKey].list.length);

        if (typeof randomIndex === 'undefined' || !allDecks[deckKey].list[randomIndex]) {
                console.error(`Failed to get valid card index for deck ${deckKey}. Index: ${randomIndex}`);
                return;
        }
        currentlyDrawnCard = { card: allDecks[deckKey].list[randomIndex], deckKey: deckKey };
        drawnCounts[deckKey]++; 
        updateDrawnCardDisplay();
        updateDrawnCountsDisplay(); 
    } else {
        console.error(`Deck ${deckKey} is empty.`);
    }
};

// This function moves the currently drawn card to the active effects list
const moveCurrentToEffect = () => {
    if (currentlyDrawnCard) {
        const newEffect = {
            id: '_' + Math.random().toString(36).slice(2, 11),
            effectText: currentlyDrawnCard.card.effect, 
            originalDeckKey: currentlyDrawnCard.deckKey,
            card: currentlyDrawnCard.card 
        };
        activeEffects.unshift(newEffect); 
        currentlyDrawnCard = null; 
        updateDrawnCardDisplay();
        updateActiveEffectsDisplay();
    }
};

// This function discards the currently drawn card and updates the UI
const discardCurrentDrawnCard = () => { 
    if (currentlyDrawnCard) {
        discardPiles[currentlyDrawnCard.deckKey].unshift(currentlyDrawnCard.card); 
        currentlyDrawnCard = null;
        updateDrawnCardDisplay();
    }
};

// This function discards an active effect and updates the UI
const discardEffect = (effectId) => { 
    const effectIndex = activeEffects.findIndex(effect => effect.id === effectId);
    if (effectIndex > -1) {
        const effectToDiscard = activeEffects[effectIndex];
        discardPiles[effectToDiscard.originalDeckKey].unshift(effectToDiscard.card); 
        activeEffects.splice(effectIndex, 1);
        updateActiveEffectsDisplay();
    }
};

// This function moves a card from the discard pile back to the drawn card section 
// refered to from the discard modal in modals.js
export const redrawCardFromDiscard = (cardToRedraw, deckKeyOfRedrawnCard) => {
    // 1. Handle currently displayed card (if any)
    if (currentlyDrawnCard) {
        discardCurrentDrawnCard(); // This will send it to its respective discard pile
    }

    // 2. Set the re-drawn card as the currently drawn card
    currentlyDrawnCard = { card: cardToRedraw, deckKey: deckKeyOfRedrawnCard };

    // 3. Remove the card from its discard pile
    const cardIndexInPile = discardPiles[deckKeyOfRedrawnCard].findIndex(discardedCard => 
        discardedCard.name === cardToRedraw.name && discardedCard.effect === cardToRedraw.effect
    ); // Find by content, assuming name+effect is unique enough for this context
    
    if (cardIndexInPile > -1) { 
        discardPiles[deckKeyOfRedrawnCard].splice(cardIndexInPile, 1);
    } 

    // 4. Update the UI
    updateDrawnCardDisplay();

    // 5. Close the modal
    modals.closeDiscardModal();   
};

// This function resets the game state and UI elements back to their initial state
const resetGame = () => { 
    currentlyDrawnCard = null; activeEffects = [];
    discardPiles = { chaos: [], realm: [], persona: [], whacky: [] };
    drawnCounts = { chaos: 0, realm: 0, persona: 0, whacky: 0 }; 
    updateDrawnCardDisplay(); updateActiveEffectsDisplay(); updateDrawnCountsDisplay(); 
    modals.closeDiscardModal(); 
    modals.closeAllCardsModal(); 
    modals.closeDeckListOptionsModal();
    if (domElements.diceResultDisplay) domElements.diceResultDisplay.textContent = "Roll result will appear here."; 
};

/*
// Event Listeners
*/
if(domElements.rollD2Button) domElements.rollD2Button.addEventListener('click', () => rollDie(2));
if(domElements.rollD3Button) domElements.rollD3Button.addEventListener('click', () => rollDie(3));
if(domElements.rollD4Button) domElements.rollD4Button.addEventListener('click', () => rollDie(4));
if(domElements.rollD6Button) domElements.rollD6Button.addEventListener('click', () => rollDie(6));
if(domElements.rollD10Button) domElements.rollD10Button.addEventListener('click', () => rollDie(10));

domElements.decksSection.addEventListener('click', (event) => { 
    const target = event.target.closest('button[data-deck], button[data-view-discard], button[data-view-all]'); 
    if (!target) return;
    if (target.dataset.deck) drawCard(target.dataset.deck);
    else if (target.dataset.viewDiscard) modals.openDiscardModal(target.dataset.viewDiscard);
    else if (target.dataset.viewAll){
            modals.openAllCardsModal(target.dataset.viewAll); // Listener for new button
    }
});

domElements.deckListOptionButtonsSection.addEventListener('click', (event) => {
    const target = event.target.closest('button[data-view-all]');
    if(!target) return;
    if(target.dataset.viewAll){
        modals.closeDeckListOptionsModal();
        modals.openAllCardsModal(target.dataset.viewAll); 
    } 
});

// Drawn Card Section Listeners
domElements.moveToEffectButton.addEventListener('click', moveCurrentToEffect);
domElements.discardDrawnCardButton.addEventListener('click', discardCurrentDrawnCard);

// Discard Modal Listeners
domElements.closeDiscardModalButton.addEventListener('click', modals.closeDiscardModal);
domElements.discardModal.addEventListener('click', (event) => { if (event.target === domElements.discardModal) modals.closeDiscardModal(); });

// All Cards Modal Listeners
domElements.closeAllCardsModalButton.addEventListener('click', modals.closeAllCardsModal);
domElements.allCardsModal.addEventListener('click', (event) => { if (event.target === domElements.allCardsModal) modals.closeAllCardsModal(); });

// Deck List Modal Listeners
domElements.closeDeckListOptionsModalButton.addEventListener('click', modals.closeDeckListOptionsModal);
domElements.deckListOptionsModal.addEventListener('click', (event) => { if (event.target === domElements.deckListOptionsModal) modals.closeDeckListOptionsModal(); });

domElements.resetButton.addEventListener('click', resetGame);
domElements.deckListsButton.addEventListener('click', modals.openDeckListOptionsModal);
domElements.testButton.addEventListener('click',modals.openTest);

// logic to show/hide basic rules section
domElements.basicRulesButton.addEventListener('click', () => {
    domElements.basicRulesList.classList.toggle('max-h-0');
    domElements.basicRulesList.classList.toggle('max-h-[500px]'); 
});



// Main Application Logic
// --- Initialize Decks after pre-processing ---
const processingSuccessful = await preprocessAllCardLists();

if (processingSuccessful) {
    allDecks = {
        chaos: { list: globalThis.chaosList, name: "Chaos" },
        realm: { list: globalThis.realmEnchantmentList, name: "Realm Enchantment" },
        persona: { list: globalThis.personaList, name: "Persona" },
        whacky: { list: globalThis.whackyList, name: "Whacky Rules" }
    };
} else {
    console.error("Halting app initialization due to errors in pre-processing card lists.");
    // Display a prominent error message to the user on the page
    alert("Critical Error: Could not load or process card data. The application may not function correctly. Please check the console for details.");
}

// Initial UI setup (only if processing was successful)
if (processingSuccessful) {
    updateDrawnCardDisplay(); 
    updateActiveEffectsDisplay();
    updateDrawnCountsDisplay(); 
}