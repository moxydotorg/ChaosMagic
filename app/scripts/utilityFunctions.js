/*
    Utility Functions for Chaos App
    This file contains utility functions for the Chaos App, including mana symbol replacement,
*/

import * as domElements from './domElements.js';

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

export async function replaceManaSymbols(effectText) {
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

 //iterates over the decks sequentially for debugging
export const getNextCardNumber = (deckKey) =>{ 
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

// --- Dice Roller Logic ---
export const rollDie = (sides) => {
    let result = Math.floor(Math.random() * sides) + 1;
    if(sides === 2 ) result = result === 1 ? 'Heads' : 'Tails';
    domElements.diceResultDisplay.textContent = `D${sides} rolled: ${result}`;
};

// Function to handle the dice roll results in text
// This function will replace patterns like 1d6, 2d8+3, etc. with the rolled result
export function insertDiceRollResults(input) {
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