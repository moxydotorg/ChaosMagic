//See chaosList.js for a more indepth description of what this file is about.

// flavor is vestigial and isn't used. It can be removed or we can incorporate it into the design and add it to the other files.

//TODO: review the list for Oracle wording changes.
//TODO: can we change it to display an HTML element?
const personaList = [
    { //was KGB
        name: 'Josh',
        effect: 'Roll 1d6. For each opponent, lose that much life.<br/>'+
                'Each opponent gains that much life.<br/>'+
                'Until you have taken that many turns, you and permanents you control have hexproof, cannot be attacked, and creatures you control are unblockable.',
        flavor: '',
        picture: 'https://cards.scryfall.io/art_crop/front/7/7/77f4c9cb-f364-4556-8673-4b19d52a2cff.jpg?1562738043',
    },
    { //was ElderGod
        name: 'Jake',
        effect: 'Create a 5/5 blue Squid token. Until your next turn, whenever a Persona roll is made create a 5/5 blue Squid token.',
        flavor: 'mmmm, sushi....',
        picture: 'https://cards.scryfall.io/art_crop/front/5/8/581ed049-7b5b-47d9-96af-f737631a221f.jpg?1604194987',

    },
    { //was Team Revenant
        name: 'Ray',
        effect: 'Each opponent\'s life total becomes 1. Any player that dies this turn gets 4 saving rolls instead of one. '+
            'At end of turn, each opponent gains life equal to the life they lost this turn.',
        flavor: '',
        picture: 'https://cards.scryfall.io/art_crop/front/1/7/17d1a10f-ce21-4914-9984-c7c559161230.jpg?1593017425',
    },
    {
        name: 'Theo',
        effect: 'Draw 3 cards.<br/>Target opponent discards a card.<br/>Discard a card at random.<br/>Deal 2 damage to any target.',
        flavor: '',
        picture: 'https://cards.scryfall.io/art_crop/front/d/1/d1dbc559-c78c-4675-9582-9c28f8151bc7.jpg?1584832014',
    },
    {
        name: 'Lee',
        effect: 'Exchange life totals with target opponent.',
        flavor: '',
        picture: 'https://cards.scryfall.io/art_crop/front/c/0/c04d8edb-7350-4ab5-b721-390784c66329.jpg?1608909911',
    },
    { // was Matt
        name: 'Mark Rosewater',
        effect: 'Make three chaos rolls without resolving any of them. Create a proxy of each roll and put it into your hand. The casting cost of each proxy created this way is 0 and becomes an instant. <i>They may be responded to as normal instants, rather than Chaos rolls</i>',
        flavor: '',
        picture: 'https://cards.scryfall.io/art_crop/front/d/6/d6d74d2e-7382-4fe3-ac3e-6906203ffcc7.jpg?1674420698',
    },
    {
        name: 'Brian',
        effect: 'Create a Brian counter with '+
            '\'Sacrifice Brian to add or subtract 10 from the value of {X} in any casting cost that includes an {X} ',
        flavor: 'What about abilities?',
        picture: 'https://cards.scryfall.io/art_crop/front/d/6/d6c48f07-63b7-4a60-8da6-ce77405abf1e.jpg?1693248393',
    },
    {
        name: 'Dylan',
        effect: 'Choose one:'+
            '<ul><li>Gain 2 life for each green creature in play</li>'+
            '<li>You may play up to 2 cards from your hand without paying their mana cost</li></ul>',
        flavor: 'That\'s a lot of life!',
        picture: 'https://cards.scryfall.io/art_crop/front/b/2/b22c33bb-47fe-4334-9105-00f4b87811bd.jpg?1674137390',
    },
    {
        name: 'Tim',
        effect: 'Create a Tim token with '+
            '\'At the beginning of your upkeep gain 1d6 life. When you gain 5 or more life this way sacrifice Tim.\'',
        flavor: '',
        picture: 'https://cards.scryfall.io/art_crop/front/d/e/de4da30d-5c72-4323-b305-7277038b4a05.jpg?1562947893',
    },
    {
        name: 'Scott',
        effect: 'Put a creature from a graveyard onto the battlefield. Reveal the top card of each opponent\'s '+
            'library. Put each creature card revealed this way onto the battlefield. Put all other revealed '+
            'cards into their owner\'s graveyard.',
        flavor: '',
        picture: 'https://cards.scryfall.io/art_crop/front/5/7/57a966e3-c9ba-4105-a36b-54ca70ba9b77.jpg?1562776464',
    },
    { //was bruce
        name: 'Iyarwein',
        effect: 'Put a Hat counter on target creature. Creatures with Hat counters are unblockable. '+
            'Remove a Hat counter from a creature you control to exile target creature.',
        flavor: '',
        picture: 'https://cards.scryfall.io/art_crop/front/f/7/f77f6e64-2470-4c6a-a92b-328e4edc3ea9.jpg?1562947258',
    },
    {
        name: 'Ian',
        effect: 'Choose a permanent and exile it. Choose a player, that player plays the exiled card.<br/>'+
            'Destroy all Realm Enchantments. Roll a Realm Enchantment.',
        flavor: '',
        picture: 'https://cards.scryfall.io/art_crop/front/b/f/bfe513d1-2509-4051-ba85-49a19479fa5c.jpg?1562793694',

    },
    {
        name: 'Grahame',
        effect: 'Create a Grahame token it has \'Sacrifice Grahame: the next time you would lose the game '+
            'shuffle your deck, remove all counters on you, remove each emblem you have, your life total '+
            'becomes half your starting life total, rounded up instead.\'',
        flavor: '',
        picture: 'https://cards.scryfall.io/art_crop/front/d/6/d696f3a6-88c3-4aab-9c1f-05b5e36094fa.jpg?1583965541',
    },
    { // this is different previously made all creatures white. all previously white creates get 2/2 others get 1/1 for one round
        name: 'Mike',
        effect: 'Look at each players\' hand.<br/>'+
            'Pay 1 life: target player discards a card of your choice. <i>You may activate this ability multiple times.</i>',
        flavor: '',
        picture: 'https://cards.scryfall.io/art_crop/front/f/6/f603486d-c8d7-4a02-bdb3-c25d2bc62ba6.jpg?1593272971',
    },
    {
        name: 'Trevin',
        effect: 'For each creature you control, create a Trevin enchantment aura token attached to it. Trevin tokens have '+
            '\'Enchanted creature gets +1/+1.\' and \'Sacrifice Trevin: enchanted creature deals 1 damage to any target.\'',
        flavor: '',
        picture: 'https://cards.scryfall.io/art_crop/front/0/8/0810f7e3-03ff-4c46-a88f-2f8144540780.jpg?1562628499',
    },
    {
        name: 'Sharon',
        effect: 'Roll 1d6. Target creature you control becomes Sharon Sniper. It cannot attack and '+
            'gains \'{T}:Sharon Sniper deals damage equal to the roll to target attacking creature.\'',
        flavor: '',
        picture: 'https://cards.scryfall.io/art_crop/front/4/d/4df99e19-0b1e-48ec-a146-38cf147eab61.jpg?1562380858',
    },
    {
        name: 'Weissman Blast!',
        effect: 'Ban or restrict any card other than a basic land card for the rest of the game. '+
            '<i>All cards with that name in any zone or sideboard are removed from the game. - No not exiled.</i>',
        flavor: '',
        picture: 'https://cards.scryfall.io/art_crop/front/4/f/4fa69802-c392-4004-9d58-ad1fc42de0bd.jpg?1583965377'
    },
    {
        name: 'Manhito',
        effect: 'Choose one - '+
            '<ul><li> Wackyland</li>'+
            '<li>PersonaLand</li>'+
            '<li>Realm Enchant</li>'+
            'Destory the chosen land. Re-roll any roll that tells you to roll there.',
        flavor: 'It\'s gone for everyone',
        picture: 'https://cards.scryfall.io/art_crop/front/b/d/bdf280f4-74a1-4e6f-aec6-1852f04204e4.jpg?1562445186',
    },
    {
        name: 'Shroomie',
        effect: 'Create a proxy of any card in Magic and exile it. At end of each turn each player rolls 1d6. '+
            'A player that rolls a 6 may place the proxy into their hand. <i>Roll in APNAP order</i>',
        flavor: '',
        picture: 'https://cards.scryfall.io/art_crop/front/b/9/b9d349f3-5be2-4b1f-a4c3-ba94822cf0cf.jpg?1664410382',
    },
    {
        name: 'Bahahala',
        effect: 'Create a Chaos Tune counter with \'Sacrifice Chaos Tune: change any chaos roll to any other chaos roll'+
            '<i>You may use this ability during a chaos phase</i>',
        flavor: '',
        picture: 'https://cards.scryfall.io/art_crop/front/f/6/f6723528-8b2c-4beb-a465-800300faf158.jpg?1562946995',
    }
];

