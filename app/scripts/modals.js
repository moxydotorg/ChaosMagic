import * as domElements from './domElements.js';
import { allDecks, discardPiles, redrawCardFromDiscard } from './chaosScript.js';

const redrawIcon = `<svg fill="#000000" class="w-5 h-5" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" class="cls-1" d="M6,3.6V0L0,6l6,6V8c6-.27,7.53,3.76,7.88,5.77a.27.27,0,0,0,.53,0C17.08,2.86,6,3.6,6,3.6Z"/></svg>`; // Undo arrow icon

// --- Modal Logic: Discard Pile ---
export const openDiscardModal = (deckKey) => { 
    const pile = discardPiles[deckKey];
    if (!allDecks[deckKey]) {
        console.error(`Deck data for ${deckKey} is not available for discard modal.`);
        return;
    }
    domElements.discardModalTitle.textContent = `${allDecks[deckKey].name} Discard Pile`;
    domElements.discardModalBody.innerHTML = ''; 
    if (pile.length === 0) {
        domElements.discardModalBody.appendChild(domElements.emptyDiscardMessage); 
        domElements.emptyDiscardMessage.style.display = 'block';
    } else {
        domElements.emptyDiscardMessage.style.display = 'none';
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
            contentWrapper.appendChild(effectElement);

            cardElement.appendChild(contentWrapper);

            // Add Re-draw button
            const redrawButton = document.createElement('button');
            // redrawButton.innerHTML = `<?xml version="1.0" encoding="utf-8"?><svg fill="#000000" class="w-5 h-5" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" class="cls-1" d="M6,3.6V0L0,6l6,6V8c6-.27,7.53,3.76,7.88,5.77a.27.27,0,0,0,.53,0C17.08,2.86,6,3.6,6,3.6Z"/></svg>`; // Undo arrow icon
            redrawButton.innerHTML = redrawIcon; 
            redrawButton.className = 'rounded-lg btn-action m-1 bg-indigo-500 hover:bg-indigo-600 p-[0.375rem] m-l-[0.5rem]';
            redrawButton.title = 'Re-draw card';
            redrawButton.onclick = () => redrawCardFromDiscard(card, deckKey);
            cardElement.appendChild(redrawButton);

            domElements.discardModalBody.appendChild(cardElement);
        });
    }
    domElements.discardModal.style.display = 'flex';
};

// --- Modal Logic: View All Cards ---
export const openAllCardsModal = (deckKey) => {
    if (!allDecks[deckKey] || !allDecks[deckKey].list) {
        console.error(`Deck data for ${deckKey} is not available for 'View All Cards' modal.`);
        return;
    }
    // const deckData = allDecks[deckKey];
    domElements.allCardsModalTitle.textContent = `All Cards in ${allDecks[deckKey].name}`;
    domElements.allCardsModalBody.innerHTML = ''; // Clear previous content

    if (allDecks[deckKey].list.length === 0) {
        domElements.allCardsModalBody.appendChild(domElements.emptyAllCardsMessage);
        domElements.emptyAllCardsMessage.style.display = 'block';
    } else {
        domElements.emptyAllCardsMessage.style.display = 'none';
        allDecks[deckKey].list.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.className = 'modal-card-item'; 

            const contentWrapper = document.createElement('div');
            contentWrapper.className = 'modal-card-item-content';

            const nameElement = document.createElement('h4');
            nameElement.textContent = card.name;
            contentWrapper.appendChild(nameElement);

            const effectElement = document.createElement('p');
            effectElement.innerHTML = card.effect; 
            
            contentWrapper.appendChild(effectElement);
            cardElement.appendChild(contentWrapper);
            domElements.allCardsModalBody.appendChild(cardElement);
        });   
    }
    domElements.allCardsModal.style.display = 'flex';
    // Scroll to top of the modal body when opened
    requestAnimationFrame(() => {
        domElements.allCardsModalBody.scrollTop = 0; 
    });
};

// --- Modal Logic: Deck List Options ---
// this was basically to open a debug area it's not really used right now
export const openTest = () => {
    alert('test opened');
}

export const openDeckListOptionsModal = () => {
    domElements.deckListOptionsModal.style.display = 'flex';
    return;                
}

export const closeDiscardModal = () => { domElements.discardModal.style.display = 'none'; };
export const closeAllCardsModal = () => { domElements.allCardsModal.style.display = 'none'; };
export const closeDeckListOptionsModal = () => { domElements.deckListOptionsModal.style.display = 'none'; };