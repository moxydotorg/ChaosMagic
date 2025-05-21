import { chaosList } from './chaosList.js';
import { realmEnchantmentList } from './enchantWorldLand.js';
import { personaList } from './personaLandList.js';
import { whackyList } from './whackyLandList.js';

// logic to show basic rules section
const basicRulesButton = document.getElementById('basicRulesButton');
const basicRulesList = document.getElementById('basicRulesList');
if (basicRulesButton && basicRulesList) { 
  basicRulesButton.addEventListener('click', () => {
    basicRulesList.classList.toggle('max-h-0');
    basicRulesList.classList.toggle('max-h-[500px]'); 
  });
}



// DOM Elements
const decksSection = document.getElementById('decksSection');
const drawnCardSection = document.getElementById('drawnCardSection');
const placeholderDrawnCard = document.getElementById('placeholderDrawnCard');
const drawnCardImage = document.getElementById('drawnCardImage');
const drawnCardName = document.getElementById('drawnCardName');
const drawnCardEffect = document.getElementById('drawnCardEffect'); 
const moveToEffectButton = document.getElementById('moveToEffectButton');
const discardDrawnCardButton = document.getElementById('discardDrawnCardButton');
const activeEffectsContainer = document.getElementById('activeEffectsContainer');
const noActiveEffectsMessage = document.getElementById('noActiveEffects');
const resetButton = document.getElementById('resetButton');
const deckListsButton = document.getElementById('deckListsButton');
const testButton = document.getElementById('testButton');

// Discard Modal DOM Elements
const discardModal = document.getElementById('discardModal');
const discardModalTitle = document.getElementById('discardModalTitle');
const discardModalBody = document.getElementById('discardModalBody');
const closeDiscardModalButton = document.getElementById('closeDiscardModalButton');
const emptyDiscardMessage = document.getElementById('emptyDiscardMessage');

// All Cards Modal DOM Elements
const allCardsModal = document.getElementById('allCardsModal');
const allCardsModalTitle = document.getElementById('allCardsModalTitle');
const allCardsModalBody = document.getElementById('allCardsModalBody');
const closeAllCardsModalButton = document.getElementById('closeAllCardsModalButton');
const emptyAllCardsMessage = document.getElementById('emptyAllCardsMessage');

// Deck Lists Options Modal DOM elements
const deckListOptionsModal = document.getElementById('deckListOptionsModal');
const deckListOptionsModalTitle = document.getElementById('deckListOptionsModalTitle');
const deckListOptionsModalBody = document.getElementById('deckListOptionsModalBody');
const closeDeckListOptionsModalButton = document.getElementById('closeDeckListOptionsModalButton');
const defaultDeckListOptionsMessage = document.getElementById('defaultDeckListOptionsMessage');
const deckListOptionButtonsSection = document.getElementById('deckListOptionButtonsSection');

// Dice Roller Elements
const rollD2Button = document.getElementById('rollD2');
const rollD3Button = document.getElementById('rollD3');
const rollD4Button = document.getElementById('rollD4');
const rollD6Button = document.getElementById('rollD6');
const rollD10Button = document.getElementById('rollD10');
const diceResultDisplay = document.getElementById('diceResult');

// Game State
let currentlyDrawnCard = null; 
let activeEffects = []; 
let discardPiles = { chaos: [], realm: [], persona: [], whacky: [] };
let drawnCounts = { chaos: 0, realm: 0, persona: 0, whacky: 0 };

const deckIcons = { 
    chaos: `<svg class="w-full h-full text-red-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm0-4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path><path d="M10 3.5A6.5 6.5 0 003.5 10H2a8 8 0 115.075-7.559L5.95 3.55A6.502 6.502 0 0010 3.5zM16.5 10A6.5 6.5 0 0010 3.5V2a8 8 0 11-7.559 5.075L3.55 5.95A6.502 6.502 0 0016.5 10z"></path></svg>`,
    realm: `<svg class="w-full h-full text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>`,
    persona: `<svg class="w-full h-full text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>`,
    whacky: `<svg class="w-full h-full text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 00-6 6c0 1.282.406 2.47 1.076 3.451l-1.261 1.261a1 1 0 101.414 1.414l1.261-1.261A5.966 5.966 0 0010 14a6 6 0 006-6c0-1.282-.406-2.47-1.076-3.451l1.261-1.261a1 1 0 10-1.414-1.414l-1.261 1.261A5.966 5.966 0 0010 2zm0 10a4 4 0 110-8 4 4 0 010 8z"></path><path d="M6.228 7.205a.75.75 0 00-1.06 1.06l1.75 1.75a.75.75 0 001.06-1.06l-1.75-1.75zm8.602-1.06a.75.75 0 10-1.06 1.06l1.75 1.75a.75.75 0 101.06-1.06l-1.75-1.75z"></path></svg>`
};

let allDecks = {}; 
const ManaSymbolService = (() => {
    let symbolMap = null; 
    let fetchPromise = null;

    async function fetchSymbolMap() {
        if (symbolMap) return symbolMap;
        if (!fetchPromise) {
            fetchPromise = fetch('https://api.scryfall.com/symbology')
                .then(res => res.json())
                .then(data => {
                    if (!data || !data.data) throw new Error('Invalid symbol data');
                    const map = {};
                    data.data.forEach(symbol => {
                        const match = symbol.symbol.match(/^\{([^{}\s]+)\}$/);
                        if (match) map[match[1]] = symbol.english;
                    });
                    symbolMap = map;
                    return symbolMap;
                })
                .catch(err => {
                    console.error("Failed to fetch mana symbols:", err);
                    throw err; // Propagate error
                });
        }
        return fetchPromise;
    }
    return { getSymbolMap: async () => await fetchSymbolMap() };
})();

async function replaceManaSymbols(effectText) {
    let symbolMap;
    try {
        symbolMap = await ManaSymbolService.getSymbolMap();
    } catch (err) {
        return effectText; // On error, return original text
    }

    // Replace only raw {XYZ} entries, ignoring already replaced <abbr> tags
    const alreadyReplaced = new Set(); // Track already-replaced indices to avoid nesting

    // Use a regex with a callback replacer to ensure precise replacements
    const result = effectText.replace(/\{([^{}\s]+)\}/g, (match, symbolText, offset) => {
        if (symbolMap[symbolText]) {
            // Check if this position is already part of a previous replacement
            if (alreadyReplaced.has(offset)) return match;

            // Mark this range as replaced
            for (let i = offset; i < offset + match.length; i++) {
                alreadyReplaced.add(i);
            }

            // Return the wrapped HTML version
            return `<abbr class="card-symbol card-symbol-${symbolText}" title="${symbolMap[symbolText]}">{${symbolText}}</abbr>`;
        }
        return match; // Not in Scryfall list, leave it alone
    });

    return result;
}

function insertDiceRollResults(input) {
    // Match patterns like 1d6, 2d8+3, 3d12-1, etc.
    const dicePattern = /\b(\d+)d(\d+)([+-]\d+)?\b/g;
    return input.replace(dicePattern, (match, numDice, diceSides, modifier) => {
        numDice = parseInt(numDice, 10);
        diceSides = parseInt(diceSides, 10);
        let modValue = modifier ? parseInt(modifier, 10) : 0;
        // Roll the dice
        let total = 0;
        for (let i = 0; i < numDice; i++) {
            total += Math.floor(Math.random() * diceSides) + 1; // [1, diceSides]
        }
        total += modValue;
        // Return original match with result in parentheses
        return `${match} <i>(Rolled: ${total})</i>`;
    });
}

// --- Pre-process Card Lists ---
async function preprocessAllCardLists() {
    const listNames = ["chaosList", "realmEnchantmentList", "personaList", "whackyList"];
    const loadedLists = { chaosList, realmEnchantmentList, personaList, whackyList }; // Assuming these are globally available from deferred scripts

    for (const listName of listNames) {
        const currentList = loadedLists[listName];
        if (typeof currentList === 'undefined') {
            console.error(`Critical Error: ${listName} is not defined. Make sure its .js file is loaded correctly.`);
            // Display error to user (already handled in checkListsLoaded, but good to be cautious)
            return false; // Indicate failure
        }

        // Process each card in the current list
        const processedCards = await Promise.all(currentList.map(async (card) => {
            const processedEffect = await replaceManaSymbols(card.effect);
            return { ...card, effect: processedEffect };
        }));
        
        // Update the global list variable with the processed cards
        // This assumes global list variables are mutable, which they are if defined with `let` or `var`
        // If they are `const` arrays of objects, this modifies the objects within the const array.
        if (listName === "chaosList") globalThis.chaosList = processedCards;
        else if (listName === "realmEnchantmentList") globalThis.realmEnchantmentList = processedCards;
        else if (listName === "personaList") globalThis.personaList = processedCards;
        else if (listName === "whackyList") globalThis.whackyList = processedCards;
    }
    return true; // Indicate success
};

// --- Helper Functions ---
    const generateId = () => '_' + Math.random().toString(36).substr(2, 9);

    const updateDrawnCardDisplay = () => { 
        if (currentlyDrawnCard) {
            drawnCardImage.src = currentlyDrawnCard.card.picture;
            drawnCardImage.alt = currentlyDrawnCard.card.name;
            drawnCardName.textContent = currentlyDrawnCard.card.name;
            drawnCardEffect.innerHTML = insertDiceRollResults(currentlyDrawnCard.card.effect); 
            
            drawnCardEffect.classList.add('text-left'); 
            const unorderedLists = drawnCardEffect.querySelectorAll('ul');
            unorderedLists.forEach(ul => ul.classList.add('list-disc', 'list-inside', 'pl-5', 'mb-2'));
            const orderedLists = drawnCardEffect.querySelectorAll('ol');
            orderedLists.forEach(ol => ol.classList.add('list-decimal', 'list-inside', 'pl-5', 'mb-2'));
            drawnCardSection.style.display = 'flex';
            placeholderDrawnCard.style.display = 'none';
        } else {
            drawnCardSection.style.display = 'none';
            placeholderDrawnCard.style.display = 'flex';
            drawnCardEffect.innerHTML = ''; 
        }
    };

    const updateActiveEffectsDisplay = () => { 
        activeEffectsContainer.innerHTML = ''; 
        if (activeEffects.length === 0) {
            activeEffectsContainer.appendChild(noActiveEffectsMessage); 
            noActiveEffectsMessage.style.display = 'block';
        } else {
            noActiveEffectsMessage.style.display = 'none';
            activeEffects.forEach(effect => {
                const effectElement = document.createElement('div');
                effectElement.className = 'effect-item';
                
                const iconSpan = document.createElement('span');
                iconSpan.className = 'effect-item-icon'; 
                iconSpan.innerHTML = deckIcons[effect.originalDeckKey] || deckIcons.whacky; 
                effectElement.appendChild(iconSpan); 

                const effectTextPara = document.createElement('p');
                effectTextPara.className = 'text-sm text-gray-200 flex-grow mr-2';
                effectTextPara.innerHTML = effect.effectText; 
                
                const unorderedLists = effectTextPara.querySelectorAll('ul');
                unorderedLists.forEach(ul => ul.classList.add('list-disc', 'list-inside', 'pl-5', 'mb-2'));
                const orderedLists = effectTextPara.querySelectorAll('ol');
                orderedLists.forEach(ol => ol.classList.add('list-decimal', 'list-inside', 'pl-5', 'mb-2'));

                effectElement.appendChild(effectTextPara);

                const discardButton = document.createElement('button');
                discardButton.className = 'btn-action bg-pink-500 hover:bg-pink-600 text-xs font-medium py-1 px-2 rounded-md shadow-sm whitespace-nowrap';
                discardButton.textContent = 'Discard Effect';
                discardButton.onclick = () => discardEffect(effect.id);
                effectElement.appendChild(discardButton);
                
                activeEffectsContainer.appendChild(effectElement);
            });
        }
    };
    const updateDrawnCountsDisplay = () => { 
        for (const deckKey in drawnCounts) {
            const counterElement = document.getElementById(`count-${deckKey}`);
            if (counterElement) counterElement.textContent = drawnCounts[deckKey];
        }
    };

    //iterates over the decks sequentially for debugging
    const getNextCardNumber = (deckKey) =>{ 
        if (!getNextCardNumber.deckCounters) getNextCardNumber.deckCounters = {};
        if (getNextCardNumber.deckCounters[deckKey] === undefined) getNextCardNumber.deckCounters[deckKey] = 0;
        const currentCardNumber = getNextCardNumber.deckCounters[deckKey];
        if (allDecks && allDecks[deckKey] && allDecks[deckKey].list) {
            getNextCardNumber.deckCounters[deckKey]++;
            if (getNextCardNumber.deckCounters[deckKey] >= allDecks[deckKey].list.length) {
                getNextCardNumber.deckCounters[deckKey] = 0;
            }
        } else {
            console.warn(`Deck with key '${deckKey}' not found or has no 'list' property.`);
            return undefined; 
        }
        return currentCardNumber;
    };
// --- Core Logic Functions ---
    const drawCard = (deckKey) => { 
        if (currentlyDrawnCard) discardCurrentDrawnCard();
        if (!allDecks[deckKey] || !allDecks[deckKey].list) { 
            console.error(`Deck data for ${deckKey} is not available. External JS might not have loaded.`);
            alert(`Data for ${allDecks[deckKey] ? allDecks[deckKey].name : deckKey} deck is missing.`);
            return;
        }
        const deckData = allDecks[deckKey];
        if (deckData.list.length > 0) {
            //const randomIndex = getNextCardNumber(deckKey); //iterate over all cards sequentially
            const randomIndex = Math.floor(Math.random() * deckData.list.length);
            if (typeof randomIndex === 'undefined' || !deckData.list[randomIndex]) {
                    console.error(`Failed to get valid card index for deck ${deckKey}. Index: ${randomIndex}`);
                    alert(`Error drawing card from ${deckData.name}. Please try again.`);
                    return;
            }
            currentlyDrawnCard = { card: deckData.list[randomIndex], deckKey: deckKey };
            drawnCounts[deckKey]++; 
            updateDrawnCardDisplay();
            updateDrawnCountsDisplay(); 
        } else {
            console.error(`Deck ${deckKey} is empty.`);
            alert(`${deckData.name} deck is currently empty.`);
        }
    };
    const moveCurrentToEffect = () => {
        if (currentlyDrawnCard) {
            const newEffect = {
                id: generateId(),
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
    const discardCurrentDrawnCard = () => { 
            if (currentlyDrawnCard) {
            discardPiles[currentlyDrawnCard.deckKey].unshift(currentlyDrawnCard.card); 
            currentlyDrawnCard = null;
            updateDrawnCardDisplay();
        }
    };
    const discardEffect = (effectId) => { 
        const effectIndex = activeEffects.findIndex(effect => effect.id === effectId);
        if (effectIndex > -1) {
            const effectToDiscard = activeEffects[effectIndex];
            discardPiles[effectToDiscard.originalDeckKey].unshift(effectToDiscard.card); 
            activeEffects.splice(effectIndex, 1);
            updateActiveEffectsDisplay();
        }
    };

    const redrawCardFromDiscard = (cardToRedraw, deckKeyOfRedrawnCard) => {
            // 1. Handle currently displayed card (if any)
            if (currentlyDrawnCard) {
            discardCurrentDrawnCard(); // This will send it to its respective discard pile
        }

        // 2. Set the re-drawn card as the currently drawn card
        currentlyDrawnCard = { card: cardToRedraw, deckKey: deckKeyOfRedrawnCard };

        // 3. Remove the card from its discard pile
        const pile = discardPiles[deckKeyOfRedrawnCard];
        const cardIndexInPile = pile.findIndex(discardedCard => 
            discardedCard.name === cardToRedraw.name && discardedCard.effect === cardToRedraw.effect
        ); // Find by content, assuming name+effect is unique enough for this context
        
        if (cardIndexInPile > -1) { //does this throw away everything behind cardIndexInPile?
            pile.splice(cardIndexInPile, 1);
        } 

        // 4. Update the UI
        updateDrawnCardDisplay();
        // No need to call updateDrawnCountsDisplay() as the count doesn't change.

        // 5. Close the modal
        closeDiscardModal();   
    };

// --- Modal Logic: Discard Pile ---
    const openDiscardModal = (deckKey) => { 
        const pile = discardPiles[deckKey];
            if (!allDecks[deckKey]) {
            console.error(`Deck data for ${deckKey} is not available for discard modal.`);
            discardModalTitle.textContent = "Error";
            discardModalBody.innerHTML = '<p class="text-red-500 text-center">Could not load discard pile: deck data missing.</p>';
            discardModal.style.display = 'flex';
            return;
        }
        //const deckName = allDecks[deckKey].name;
        //discardModalTitle.textContent = `${deckName} Discard Pile`;
        discardModalTitle.textContent = `${allDecks[deckKey].name} Discard Pile`;
        discardModalBody.innerHTML = ''; 
        if (pile.length === 0) {
            discardModalBody.appendChild(emptyDiscardMessage); 
            emptyDiscardMessage.style.display = 'block';
        } else {
            emptyDiscardMessage.style.display = 'none';
            pile.forEach(card => { 
                const cardElement = document.createElement('div');
                cardElement.className = 'modal-card-item';

                const contentWrapper = document.createElement('div'); 
                contentWrapper.className = 'modal-card-item-content';

                const nameElement = document.createElement('h4');
                nameElement.textContent = card.name;
                contentWrapper.appendChild(nameElement);

                const effectElement = document.createElement('p');
                effectElement.innerHTML = card.effect;                         
                const unorderedLists = effectElement.querySelectorAll('ul');
                unorderedLists.forEach(ul => ul.classList.add('list-disc', 'list-inside', 'pl-5', 'mb-2'));
                const orderedLists = effectElement.querySelectorAll('ol');
                orderedLists.forEach(ol => ol.classList.add('list-decimal', 'list-inside', 'pl-5', 'mb-2'));
                contentWrapper.appendChild(effectElement);

                cardElement.appendChild(contentWrapper);

                // Add Re-draw button
                const redrawButton = document.createElement('button');
                redrawButton.innerHTML = `<?xml version="1.0" encoding="utf-8"?><svg fill="#000000" class="w-5 h-5" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" class="cls-1" d="M6,3.6V0L0,6l6,6V8c6-.27,7.53,3.76,7.88,5.77a.27.27,0,0,0,.53,0C17.08,2.86,6,3.6,6,3.6Z"/></svg>`; // Undo arrow icon
                redrawButton.className = 'rounded-lg btn-action m-1 bg-indigo-500 hover:bg-indigo-600 p-[0.375rem] m-l-[0.5rem]';
                redrawButton.title = 'Re-draw card';
                redrawButton.onclick = () => redrawCardFromDiscard(card, deckKey);
                cardElement.appendChild(redrawButton);

                discardModalBody.appendChild(cardElement);
            });
        }
        discardModal.style.display = 'flex';
    };
    const closeDiscardModal = () => { discardModal.style.display = 'none'; };

    // --- Modal Logic: View All Cards ---
    const openAllCardsModal = (deckKey) => {
        if (!allDecks[deckKey] || !allDecks[deckKey].list) {
            console.error(`Deck data for ${deckKey} is not available for 'View All Cards' modal.`);
            allCardsModalTitle.textContent = "Error";
            allCardsModalBody.innerHTML = '<p class="text-red-500 text-center">Could not load card list: deck data missing.</p>';
            allCardsModal.style.display = 'flex';
            return;
        }

        const deckData = allDecks[deckKey];
        allCardsModalTitle.textContent = `All Cards in ${deckData.name}`;
        allCardsModalBody.innerHTML = ''; // Clear previous content

        if (deckData.list.length === 0) {
            allCardsModalBody.appendChild(emptyAllCardsMessage);
            emptyAllCardsMessage.style.display = 'block';
        } else {
            emptyAllCardsMessage.style.display = 'none';
            deckData.list.forEach(card => {
                const cardElement = document.createElement('div');
                cardElement.className = 'modal-card-item'; // Reusing the style

                const contentWrapper = document.createElement('div');
                contentWrapper.className = 'modal-card-item-content';

                const nameElement = document.createElement('h4');
                nameElement.textContent = card.name;
                contentWrapper.appendChild(nameElement);

                const effectElement = document.createElement('p');
                effectElement.innerHTML = card.effect; // Effect text already processed with mana symbols
                
                // Apply list styling if any ul/ol are present in the effect
                const unorderedLists = effectElement.querySelectorAll('ul');
                unorderedLists.forEach(ul => ul.classList.add('list-disc', 'list-inside', 'pl-5', 'mb-2'));
                const orderedLists = effectElement.querySelectorAll('ol');
                orderedLists.forEach(ol => ol.classList.add('list-decimal', 'list-inside', 'pl-5', 'mb-2'));
                
                contentWrapper.appendChild(effectElement);
                cardElement.appendChild(contentWrapper);
                allCardsModalBody.appendChild(cardElement);
            });   
        }
        allCardsModal.style.display = 'flex';
        requestAnimationFrame(() => {
            allCardsModalBody.scrollTop = 0; // Scroll to top on open
        });
    };
    const closeAllCardsModal = () => { allCardsModal.style.display = 'none'; };

    const openTest = () => {
        alert('test opened');
    }

    const resetGame = () => { 
        currentlyDrawnCard = null; activeEffects = [];
        discardPiles = { chaos: [], realm: [], persona: [], whacky: [] };
        drawnCounts = { chaos: 0, realm: 0, persona: 0, whacky: 0 }; 
        updateDrawnCardDisplay(); updateActiveEffectsDisplay(); updateDrawnCountsDisplay(); 
        closeDiscardModal(); 
        closeAllCardsModal(); 
        closeDeckListOptionsModal();
        if (diceResultDisplay) diceResultDisplay.textContent = "Roll result will appear here."; 
    };

    const openDeckListOptionsModal = () => {
        deckListOptionsModal.style.display = 'flex';
        return;                
    }

    const closeDeckListOptionsModal = () => {
        deckListOptionsModal.style.display = 'none'; 
    };

    // --- Dice Roller Logic ---
    const rollDie = (sides) => {
        let result = Math.floor(Math.random() * sides) + 1;
        if(sides === 2 ) result = result === 1 ? 'Heads' : 'Tails';
        diceResultDisplay.textContent = `D${sides} rolled: ${result}`;
    };

/*
// Event Listeners
*/

if(rollD2Button) rollD2Button.addEventListener('click', () => rollDie(2));
if(rollD3Button) rollD3Button.addEventListener('click', () => rollDie(3));
if(rollD4Button) rollD4Button.addEventListener('click', () => rollDie(4));
if(rollD6Button) rollD6Button.addEventListener('click', () => rollDie(6));
if(rollD10Button) rollD10Button.addEventListener('click', () => rollDie(10));


decksSection.addEventListener('click', (event) => { 
    const target = event.target.closest('button[data-deck], button[data-view-discard], button[data-view-all]'); 
    if (!target) return;
    if (target.dataset.deck) drawCard(target.dataset.deck);
    else if (target.dataset.viewDiscard) openDiscardModal(target.dataset.viewDiscard);
    else if (target.dataset.viewAll){
            openAllCardsModal(target.dataset.viewAll); // Listener for new button
    }
});

    deckListOptionButtonsSection.addEventListener('click', (event) => {
    const target = event.target.closest('button[data-view-all]');
    if(!target) return;
    if(target.dataset.viewAll){
        closeDeckListOptionsModal();
        openAllCardsModal(target.dataset.viewAll); 
    } 
});
moveToEffectButton.addEventListener('click', moveCurrentToEffect);
discardDrawnCardButton.addEventListener('click', discardCurrentDrawnCard);

// Discard Modal Listeners
closeDiscardModalButton.addEventListener('click', closeDiscardModal);
discardModal.addEventListener('click', (event) => { if (event.target === discardModal) closeDiscardModal(); });

// All Cards Modal Listeners
closeAllCardsModalButton.addEventListener('click', closeAllCardsModal);
allCardsModal.addEventListener('click', (event) => { if (event.target === allCardsModal) closeAllCardsModal(); });

// Deck List Modal Listeners
closeDeckListOptionsModalButton.addEventListener('click', closeDeckListOptionsModal);
deckListOptionsModal.addEventListener('click', (event) => { if (event.target === deckListOptionsModal) closeDeckListOptionsModal(); });

resetButton.addEventListener('click', resetGame);
deckListsButton.addEventListener('click', openDeckListOptionsModal);
testButton.addEventListener('click',openTest);



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
    const header = document.querySelector('header > h1');
    if (header && !document.getElementById('fatalErrorMsg')) {
        const errorMsg = document.createElement('p');
        errorMsg.id = 'fatalErrorMsg';
        errorMsg.textContent = "Critical Error: Could not load or process card data. The application may not function correctly. Please check the console for details and try reloading.";
        errorMsg.className = "text-red-500 text-xl font-bold my-4 text-center";
        header.parentElement.insertBefore(errorMsg, header.nextSibling);
    }
    // return; // Stop further script execution
}

// Initial UI setup (only if processing was successful)
if (processingSuccessful) {
    updateDrawnCardDisplay(); 
    updateActiveEffectsDisplay();
    updateDrawnCountsDisplay(); 
}