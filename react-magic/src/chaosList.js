// This is a single line comment in javascript
/*
    This is a multiline comment in javascript note the start and end tags are on a line by themselves.
*/

/*
    This creates an array of strings. Arrays are basically zero indexed lists of things. Each array item can be refered 
    to indivudally by using a notation such as:
    chaosList[0] 
    for the first item or
    chaosList[3] for the 4th item

    If you have an integer in a variable you can also reference it like:
    chaosList[x]
    for the x th entry.

    You can find out the size or length of the array by using the length attribute such as:
    let size = chaosList.length; 

    Adding this together you can get the last entry by doing:
    let size = chaosList.length;
    let lastEntry = chaosList[size-1]; //subtract 1 to account for the array being zero index based

    or it can be reduced a bit by doing:
    let lastEntry = chaosList[chaosList.length-1];

    When initializing arrays like we are here we use [ & ] to denote the beginning and end of the list.
    Inside the bracket's we use a comma seperated list of values, in this case it's all strings.

    Strings are dentoed with either double or single quotes around the string content.
    If a string contains a double quote try to use a single quote around the content.
    If a string contains a single quote try to use a double quote around the content.
    If a string contains both then you can escape the inner quote character by preceding it with a \
    for example:
    let complexString = 'This can\'t be done with out escaping the \' but you can use the " character';

    There are a few other characters that need to be escaped as well the \ being the one you're most likely
    to run into. So if you want \ in a string you would need to use \\ instead. You can string these together 
    in a row if you're using them a lot so something like Wear \\ Tear would look like this in a string:
    let cardName = "Wear \\\\ Tear";
    
    
    Each entry is a different "roll" on the list.
    Editing this string changes what is displayed when that line is rolled.
    The copy/paste included the roll number folllowed by a -.
    I don't think we need to keep the roll number if you want to take that out that's fine.
    If we need to know what number was rolled I can calculate that and display it when it's rolled.
*/

//TODO: review the list for Oracle wording changes.
export const chaosList = 
[
    "1 - Eureka - Beginning with you and proceeding in turn order, each player may choose a planeswalker, creature, enchantment, artifact, or land card in their hand and put that card into play. Continue until each player in turn has declined to put a card into play.",
    "2 - Air Strike - Put 3 Eagle tokens into play. Treat these tokens as 2/1 fliers that are considered all colors and have haste. At end of turn, sacrifice all Eagle tokens.",    
    "3- Feldon's Cane - Reshuffle your graveyard into your library.",
    "4 - Enchant WorldLand - Roll in EnchantWorldLand.",
    "5 - Footbottom Feast - Put any number of creatures from your graveyard onto the top of your library. Draw a card.",
    "6 - Tranquility - Destroy all enchantments.",
    "7 - Roll 3 times - Roll three Chaos Rolls.",
    "8 - Rushing River - Return target non-land permanent to owner's hand. You may sacrifice a land to return another target non-land permanent to owner's hand.",
    "9 - Tainted Energy - Lose 1d6 life or target opponent gains 1d6 life.",
    "10 - Roll that Fork - Get a RollFork Counter. Sacrifice RollFork to duplicate the effects of any roll just rolled. You choose all new targets.",
    "11 - Secret Cache - Shuffle your deck. If your top card after the shuffle is a planeswalker, creature, enchantment, artifact, or land card, put it into play on your side. If not, lose one life and shuffle again. Repeat until you get a planeswalker, creature, enchantment, artifact, or land card.",
    "12 - Exhume - Each player puts a creature card from their graveyard into play.",
    "13 - Neutral Plane - Destroy all non-aura enchantments.",
    "14 - Sworn Enemy- Target creature gains protection from a color of your choice until the end of turn.",
    "15 - Abandon Hope - Discard any number of cards from your hand. Look at target opponent's hand and choose that number of cards from it. That player discards those cards.",
    "16 - Mute - You may not cast a spell this turn.",
    "17 - ExoByte's Command - All players put cards from their libraries into their graveyards until they have threshold.",
    "18 - Balance - Except the player who controls the fewest lands, each player sacrifices lands until all players control the same number of lands as the player who controls the fewest. Players do the same for creatures and for cards in hand.",
    "19 - Ancestral Recall - Target player draws three cards.",
    "20 - Memory Lapse - Skip your draw phase this turn.",
    "21 - Terminate - Destroy target creature.",
    "22 - Prosperity - All players draw 1d10 cards. (Roll once for everybody).",
    "23- Enlightened Tutor - Search your library for an artifact or enchantment card and reveal that card. Shuffle your library, and then put the card on top of it. At the beginning of your upkeep, you may pay W or (3) to draw that card.",
    "24 - Gauntlets of Chaos - Exchange control of target artifact, creature, or land you control for control of target permanent of the same type an opponent controls. Then destroy all enchantments played on those permanents.",
    "25 - Deja Vu - All players shuffle the cards in their graveyards and put those cards on top of their libraries.",
    "26 - Manipulate Fate - Search your library for three cards, exile them, then shuffle your library. Draw a card.",
    "27 - Syphon Soul - Deal two damage to each opponent and gain one life for each damage dealt.",
    "28 - Demonic Tutor - Search your library for a card and put it in your hand.",
    "29 - Simplicity's Reward - All players gain one life for each basic land they have in play. All players take one damage for each non-basic land they have in play.",
    "30 - Solid Fog - As long as you remain in the game, until your next turn no attack phases may be declared.",
    "31 - Mating Call - At the beginning of your first main phase, you may pay the mana cost of a creature in any graveyard +1. If you do, exile that card from the game and put a token copy of that creature into the battlefield under your control.",
    "32 - Better Off Dead - Place a creature from your graveyard onto the battlefield under target opponent's control.",
    "33- Nevinyrral's lil' Disk - Each player sacrifices a creature, an enchantment, and an artifact.",
    "34 - Seeds of Innocence - Destroy all artifacts. For each artifact destroyed, that artifacts controller gains life equal to that artifact's casting cost.",
    "35 - Massive Mana Clash - All players flip a coin. Each time a player's coin comes up tails, that player takes one damage. When a player's coin comes up heads, they stop flipping. Repeat until each player's coin has come up heads",
    "36 - Storm Seeker - Target player takes one damage for each card in their hand.",
    "37 - Collective Unconscious - Draw a card for each creature you control.",
    "38 - Chaos Knowledge - Roll twice (without resolving either), then choose one roll to ignore. Resolve the other roll.",
    "39 - Morbid Hunger - Deal three damage to any target. Gain three life.",
    "40 - Essence Vortex - Destroy target creature unless its controller pays life equal to its toughness. It cannot be regenerated.",
    "41 - Stupor - Target opponent discards a card at random, then chooses and discards a card.",
    "42 - Braingeyeser - Target player draws 1d6 cards.",
    "43- Stormbind - Discard a card at random: deal two damage to any target. You may pay (2) each time you want to repeat this process in this Chaos Phase.",
    "44 - Necropotence - Pay one life: set aside the top card of your library face down. At your next end of turn, put this card into your hand. You may do this as many times as you wish, but only during this Chaos Phase. Skip your draw step this turn.",
    "45 - Earthquake - All creatures without flying and all players take 1d6 damage.",
    "46 - Stream of life - Target player gains 1d10 life.",
    "47 - Fumarole - Lose three life: destroy target land and target creature.",
    "48 - Chaos Lore - Choose one: search your library for two basic lands and put them onto the battlefield, or search your library for a non-basic land and put it onto the battlefield. Shuffle your library afterwards.",
    "49 - Winds of Change - Each player shuffles their hand into their library, then draws a new hand of as many cards as they had before.",
    "50 - WackyLand III - Roll 1d3 times in WackyLand .",
    "51 - Polymorph - Destroy target creature. It cannot be regenerated. That creature's controller reveals cards in his or her library until a creature is revealed. Put that new creature onto the battlefield. Reshuffle all revealed cards into library.",
    "52 - Gold Strike - All of your lands produce an additional mana of the appropriate type when tapped for mana this turn.",
    "53- Portent - Look at the top three cards of target player's library. Put those cards back on top of that library in any order. You may then have that player shuffle their library. Draw a card.",
    "54 - Revenge is Sweet - Sacrifice a permanent: destroy a permanent of the same type.",
    "55 - Soul Leech - Deal one damage to up to three targets. Gain one life for each damage successfully dealt in this way.",
    "56 - Stasis - Skip your untap phase this turn. At the beginning of their upkeep, any player currently affected by Stasis may pay U or (3) during their upkeep to have it affect the next person as well.",
    "57 - Pity - The player with lowest amount of life gains five life. If there is a tie, no player may gain life.",
    "58 - Creeping Mold - Destroy target artifact, land, or enchantment.",
    "59 - Mutual Betrayal - Look at target opponent's hand and choose a card. They look at your hand and choose a card. Exchange cards.",
    "60 - Chain Lightning - Deal three damage to target creature or player. Each time this deals damage, the player or the controller of the creature last targeted may pay RR or (4) to deal three damage to target creature or player of their choice.",
    "61 - Mana Short - Tap all lands you control. Lands you control do not untap as normal during your untap phase this turn.",
    "62 - Rolling Thunder - Deal 1d6-1 damage divided any way you choose among any number of target creatures and/or players.",
    "63 - Goblin Game - Each player hides any number of objects (but greater than 0), then all players reveal them simultaneously. Each player loses life equal to the number he or she revealed. The player or players who revealed the least number loses half of their life, rounded up.",
    "64 - Enchant WorldLand + - Leave any EnchantWorldLand in play. Roll in EnchantWorldLand and add another to the battlefield.",
    "65 - Commanding Presence - Until end of turn, opponents may not play spells or abilities.",
    "66 - Illusions of Grandeur - Gain twenty life and four Illusion counters. At the beginning of your upkeep, if you have any Illusions counters, remove one. When the last Illusions counter is removed, lose 20 life.",
    "67 - Backflash - This turn, all cards with flashback that are exiled are instead placed into their owners' hands.",
    "68 - Never Say Die - All creatures in all graveyards with toughness less than or equal to 1d6 are returned to the battlefield under their owner's control.",
    "69 - WackyLand - Roll in WackyLand .",
    "70 - PersonaLand - Roll in PersonaLand .",
    "71 - Fighting a Legend - Each opponent rolls in PersonaLand .",
    "72 - Reclaim - Put target card from your graveyard on top of your library. At the beginning of your upkeep you may pay G or (3) to draw that card.",
    "73 - Prophetic Bolt - Deal four damage to target creature or player. Look at the top four cards of your library. Put one of those cards into your hand and the rest on the bottom of your library.",
    "74 - Hymn to Tourach - Target player discards two cards at random.",
    "75 - Jester's Cap - Search through target player's library for any three cards and exile those cards. That player then shuffles their library.",
    "76 - Agonizing Memories - Look at target player's hand and choose two cards from it. Put those cards on top of that player's library in any order.",
    "77 - Time Crawl - Pass the dice, your turn is over. Put a turn counter in the Time Crawl Jackpot.",
    "78 - Natural Order - Sacrifice a creature: search your library for a creature card of the same color and put that card onto the battlefield. Then shuffle your library.",
    "79 - Relentless Assault - After your attack phase, untap all creatures that attacked this turn. You get an additional combat phase followed by an additional main phase this turn.",
    "80 - Grinning Totem - Search target opponent's library for a card and set it aside. You may play it as if it were in your hand. Shuffle that library. At beginning of your next turn, unless it's in play, put it in its owner's graveyard",
    "81 - Pestilence - All players and creatures take 1d6 damage.",
    "82 - Circle Shield - Get three shield counters. Whenever you would take damage, remove a shield counter instead.",
    "83- Impulse - Look at the top four cards of your library. Put one of them into your hand and the rest on the bottom of your library.",
    "84 - Temporal Spring - Put target permanent on top of its owner's library",
    "85 - Gamble - Search your library for a card, put that card into your hand, then discard a card at random. Then shuffle your library.",
    "86 - Desert Twister - Destroy target permanent.",
    "87 - Roll 3 Times - Roll three Chaos Rolls.",
    "88 - WackyLand - Roll in WackyLand .",
    "89 - Forget - Target player discards two cards from his or her hand, then draws as many cards as they discarded this way.",
    "90 - Zaphod's Gambit - All players choose a card in their hand. All players then reveal their chosen card. The lowest casting cost creature, enchantment, and artifact are all put onto the battlefield. If two or more cards tie, those cards are put onto the battlefield.",
    "91 - Luck - Randomly choose a spell in your hand. Play that spell without paying its casting cost. If X is in the casting cost, X is 0.",
    "92 - Windows of Opportunity - Target player taps all artifacts, lands, and creatures they control. At end of turn, tap all artifacts, lands, and creatures you control.",
    "93- Energy Bolt - Choose one: deal 1d6 damage to target player or gain 1d6 life.",
    "94 - Price of Knowledge - Skip your next turn: draw four cards.",
    "95 - Tremble - All players sacrifice a land.",
    "96 - Jokulhaups Light - All players sacrifice one land, one creature, and one artifact.",
    "97 - Cone of Flame - Choose three target creatures and/or players. Deal one damage to the first, two damage to the second, and three damage to the third.",
    "98 - Fact or Fiction - Reveal the top five cards of your library. An opponent separates those cards into two face-up piles. Put one pile into your hand and the other into your graveyard.",
    "99 - Happy Balance - Using the cards from the top of their libraries, each player equalizes hand size, number of lands, and number of creatures to the amount that is the highest. Players shuffle unused revealed cards into their libraries.",
    "100 - Happy Land - Choose one: roll in EnchantWorldLand ,roll in WackyLand, or roll in PersonaLand .",
    "101 -Confiscate - Gain control of target permanent.",
    "102 - CounterRoll - Get a CounterRoll counter. Sacrifice CounterRoll to counter the effects of any roll.",
    "103 - Flux - All players choose and discard any number of cards, then draw that many cards. Draw a card.",
    "104 - PersonaLand - Roll in PersonaLand .",
    "105 - Elric's Wager - Target opponent names a number and reveals cards from their library until they get a spell of that casting cost. They put that card into their hand and all other revealed cards into their graveyard. That player takes one damage for each card put into the graveyard in this manner.",
    "106 - Wheel of Fortune - Each player discards their hand, and then each player draws seven cards.",
    "107 - Double Sided Blade - Roll a 1d6. That number of cards is drawn by any combination of players of your choice. For each card you draw, take two damage. For each card drawn by an opponent, that player takes one damage.",
    "108 - Clash of Chaos - Choose target opponent. Flip a coin, opponent calls it in the air. Loser of the flip takes two damage. Winner decides to flip again, or to stop.",
    "109 - Master Chef - Choose one: get a CounterRoll counter. Sacrifice CounterRoll to counter the effects of any roll; or get a RollFork counter. Sacrifice RollFork to duplicate the effects of any Chaos effect just rolled. You choose all new targets.",
    "110 - All Hallow's Eve Light - Each player puts up to two creatures from their graveyard onto the battlefield.",
    "111 - Mana Barbs - Whenever you tap a land for mana this turn, take one damage.",
    "112 - Retribution - Choose two target creatures controlled by one player. That player sacrifices one of those creatures. Put a -1/-1 counter on the other.",
    "113 - WackyLand - Roll in WackyLand .",
    "114 - Infernal Tutor - Name a total casting cost. Reveal cards in your library until you reveal a permanent with the named casting cost. Put that card into play and exile the others.",
    "115 - Mind Bend - Change the text of target permanent by replacing all instances of one color word or basic land type with another. This does not end at the end of the turn.",
    "116 - Drain Life - Deals 1d6 damage to target creature or player. You gain life equal to the damage dealt, but not more life than that creature's toughness or that player's life total.",
    "117 - Desperate Times - Look at the top three cards of your library. Put one into your hand and the other two into your graveyard. Roll again.",
    "118 - Distract Shoes: Connor MacLeod - Borrow the Highlander's bright white shoes. Opponents are so distracted by them, after your turn you and all cards you control phase out.",
    "119 - Patience - Lose two life and gain three Focus counters. At the beginning of your upkeep, if you have any Focus counters, remove one. When the last Focus counter is removed, gain five life.",
    "120 - Price of Immortality - Choose and discard a card: gain four life.",
    "121 - Gaea's Charm - Choose one: target player shuffles up to three cards from their graveyard into their library or remove any three cards in target player's graveyard from the game. Draw a card.",
    "122 - 5-Card Stud - All players reveal the top five cards of their library and use the casting costs of those cards to play 5-card stud. The player with the winning hand puts all of their cards into their hand. All other cards are placed in owner's graveyards.",
    "123 -Ill Gotten Gains - Each player discards their hand, then returns up to three cards from their graveyard into their hand.",
    "124 - Murphy's Law - Roll twice (without resolving either). Target opponent chooses a roll for you to ignore, then makes all decision in regards to how you resolve the remaining roll.",
    "125 - Regrowth - Return target card from your graveyard to your hand.",
    "126 - Chaos Storm - Roll twice and reverse the direction of turns.",
    "127 - CounterRoll - Get a CounterRoll counter. Sacrifice CounterRoll to counter the effects of any roll.",
    "128 - Storm Seeker Misses - Take one damage for each card in your hand.",
    "129 - Price of Strength - Lose four life: put 2 +1/+1 counters on each creature you control.",
    "130 - Global Stream of Life - Each player gains 1d10 life. (Roll once for everybody).",
    "131 - Disenchant - Destroy target artifact or enchantment.",
    "132 - Gathering - Gain one life for each creature in play.",
    "133 - Gift of the Magi - Choose one: gain three life, draw three cards, or add three mana of any color to your mana pool at the beginning of your next main phase.",
    "134 - RollFork - Get a RollFork Counter. Sacrifice RollFork to duplicate the effects of any roll just rolled. You choose all new targets.",
    "135 - Price of Power - Sacrifice a land: deal four damage to any target.",
    "136 - Enchant WorldLand - Leave any EnchantWorldLand in play. Roll in EnchantWorldLand and add another to the battlefield.",
    "137 - Pillage - Destroy target artifact or land. It cannot be regenerated.",
    "138 - Stronghold Discipline - Each player loses one life for each creature they control.",
    "139 - Soothing Balm - Target player gains five life.",
    "140 - Topple - Exile target creature with the greatest power. If two or more creatures are tied for greatest power, you choose which to target.",
    "141 - Ray of Command - Untap target creature an opponent controls and gain control of it until end of turn. That creature gains haste until end of turn. When you lose control of the creature, tap it.",
    "142 - Gerrard's Wisdom - You gain two life for each card in your hand.",
    "143 - Peace Talks - As long as you remain in the game, until your next turn no player may declare an attack phase or cast a spell that targets a player.",
    "144 - Arcanix Ray - Target player names a card and then turns over the top card of their library. If that is the card named, put it into the player's hand. Otherwise, put it into the player's graveyard, and that player takes two damage. Draw a card.",
    "145 - Truce - Each player may draw up to two cards. For each card less than two a player draws this way, that player gains two life.",
    "146 - Meet in the Middle - Discard or draw until you have exactly four cards in hand.",
    "147 - Land Ho! - All players may put up to three land from their hand and/or graveyard onto the battlefield.",
    "148 - Unearth - Choose target creature card in your graveyard with a total casting cost of three or less and return that creature to the battlefield under your control.",
    "149 - Blue - The next spell you play is countered. When this occurs, get a CounterRoll counter. Sacrifice CounterRoll to counter the effects of any roll.",
    "150 - Wackyland III - Roll 1d3 times in WackyLand .",
    "151 - Control Magic - Gain control of target creature.",
    "152 - Intimidation - Nobody can attack you until your next turn.",
    "153- Lightning Round - Until your next turn, when any player casts a spell, that player draws a card.",
    "154 - Unhinge - Target player chooses and discards a card. Draw a card",
    "155 - PersonaLand - Roll in PersonaLand .",
    "156 - Calm Before the Storm - There are no Chaos Phases until your next turn. Then, until your next turn after that, all players must roll double the normal rolls.",
    "157 - Peek - Look at target player's hand. Draw a card.",
    "158 - Yawgmoth's Will - Until end of turn, you may play cards in your graveyard as though they were in your hand. If a card would be put into your graveyard this turn, exile it instead.",
    "159 - Triple EnchantWorldLand - Destroy all EnchantWorldLand rolls already in play. Roll in three times and keep all those EnchantWorld effects in play.",
    "160 - CounterRoll - Get a CounterRoll counter. Sacrifice CounterRoll to counter the effects of any roll.",
    "161 - Swords To Plowshares - Exile target creature. That creature's controller gains life equal to its power.",
    "162 - Price of Support - Sacrifice a creature: put 4 Spirit tokens onto the battlefield. Treat these tokens as 1/1 creatures that are all colors.",
    "163- TimeTwister - Each player shuffles their hand and graveyard into their library. Each player then draws seven cards.",
    "164 - Misfortune - An opponent chooses one: you put a +1/+1 counter on each creature you control and gain four life or you put a -1/-1 counter on each creature that player controls that player takes four damage.",
    "165 - Hymn of Rebirth - Take target creature from any graveyard and put it onto the battlefield under your control.",
    "166 - Sift - Draw three cards, then choose and discard a card.",
    "167 - RollFork - Get a RollFork Counter. Sacrifice RollFork to duplicate the effects of any roll just rolled. You choose all new targets.",
    "168 - Conjure - Search your library for an artifact and put it directly onto the battlefield. Shuffle your library afterwards.",
    "169 - Helm of Obedience - Put the top card of target opponent's library into their graveyard. Repeat this process until you've put 1d6 cards or a creature card into that graveyard, whichever occurs first. If the last card put into the graveyard this way is a creature card, put that card into play under your control.",
    "170 - Balloon - Each time you tap a land for mana this turn, gain 1 life.",
    "171 - Lucky Us - All players reveal the top card of their library. If that card is a planeswalker, creature, enchantment, artifact, or land card, they put it directly onto the battlefield. If it is an instant or sorcery, they cast it without paying its casting cost.",
    "172 - Rediscovery - All cards that have been exiled face up are reshuffled into their owner's libraries.",
    "173- PersonaLand - Roll in PersonaLand.",
    "174 - Diminishing Returns - Each player shuffles their hand and graveyard into their library and removes the top four cards of their library from the game. Then each player draws up to seven cards.",
    "175 - Power Surge - Take one damage for each land you have untapped.",
    "176 - Ancestral Lands - Search your library for a basic land card of each type you do not control and put those lands onto the battlefield.",
    "177 - WackyLand - Roll in WackyLand .",
    "178 - Chaos Storm - Roll twice and reverse the direction of turns.",
    "179 - Innocent Blood - All players sacrifice a creature.",
    "180 - Weissman Charm - Choose one: deal one damage to any number of targets and draw a card or draw enough cards to have one more card in hand than the player who currently has the most cards in hand.",
    "181 - Global Half-Hymn - Each player chooses and discards one card.",
    "182 - Trade-In - Sacrifice a creature: place target creature from your graveyard or your hand onto the battlefield.",
    "183 - Go Fish - Name a non-land card. Look at all players' hands and put all copies of the named card into your hand. If no one has that card, draw a card (go fish).",
    "184 - Blessed Wine - Gain one life. Draw a card.",
    "185 - Psionic Blast - Deal four damage to target creature or player and two damage to yourself.",
    "186 - Vampiric Tutor - Search your library for a card, then shuffle your library and put that card on top of it. You lose two life. At the beginning of your upkeep, you may pay B or two life to draw that card.",
    "187 - Shortcut - Target creature gains a landwalk ability of your choice.",
    "188 - Enchant WorldLand -Roll in EnchantWorldLand.",
    "189 - Time Walk - Take an extra turn after this one.",
    "190 - Wanna Bet? - Pick an opponent and a card they control. They pick one of yours. Flip a coin. Winner gets control of loser's card.",
    "191 - Hurricane - Each player and flying creature takes 1d6 damage.",
    "192 - Lat-Nam's Legacy - Shuffle a card from your hand into your library: draw two cards.",
    "193- Magical Sleight - Change all occurrences of one mana symbol on any card in play to any other mana symbol. This change does not end at the end of the turn.",
    "194 - Spring Cleaning - Destroy all lands. As many times as a player wishes, they may pay one life to prevent up to two of their lands from being destroyed in this manner.",
    "195 - Brandish - All cards in all libraries, in all hands, and on the battlefield but not controlled by their owner go to their owner's graveyard.",
    "196 - East Wind - As long as you remain in the game, until your next turn if no other player is affected by East Wind, whenever any player would gain life, you gain it instead.",
    "197 - Fall Harvest - Sacrifice a land: gain life equal to the number of remaining land you control.",
    "198 - Steal Artifact - Gain control of target artifact.",
    "199 - Feast or Famine - Choose one: bury target non-black, non-artifact creature; or put a 2/2 black zombie token into play.",
    "200 - Chaos Tune - Choose any roll from the Chaos List. Resolve this roll as if it was the chosen roll.",
];

export const chaosDefaultCard = {
    name: 'Welcome to Chaos',
    text: 'For complete rules see <a href=\'https://i.4pcdn.org/tg/1447655855551.pdf\'>here.</a><br/>'+
            '<ol><li>Chaos Phase is before untap.</li>'+
            '<li>You MUST roll, extra costs MUST be paid, no targets? the effect fizzles.</li>'+
            '<li>Roll EnchantWorld before game starts after muligans.</li>'+
            '<li>You get a "saving roll" when you die, heal to zero if the roll gives extra life congrats!</li>'+
            '<li>Chaos is colorless.</li>'+
            '<li>No spells or effects allowed during Chaos Phase.</li>'+
            '<li>Triggered Effects still trigger.</li>'+
            '<li>EnchantWorlds are enchantments.</li>'+
            '<li>Counter-rolls and Fork-rolls are rolls themselves when used.</li>'+
            '<li>Ignore rolls that give you extra rolls on extra rolls.</li></ol>',
    flavor: '',
    img: 'https://cards.scryfall.io/art_crop/front/5/8/58831a7d-60c8-431a-a172-b78a23a678f4.jpg?1678810324',
};