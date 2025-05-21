//See chaosList.js for a more indepth description of what this file is about.

// flavor is vestigial and isn't used. It can be removed or we can incorporate it into the design and add it to the other files.

//TODO: review the list for Oracle wording changes.
export const whackyList = [
    {
        name: 'Time Sprint',
        effect: 'Take 2 extra turns after this one.',
        picture: 'https://cards.scryfall.io/art_crop/front/3/c/3c878780-f666-44ab-a60e-c9985f628fc3.jpg?1562546496',
        flavor: 'Some added Flair',
    },
    { //previously was Chaos Ward - target creature is immune to effects of chaos rolls - including whackyland, etc
        name: 'Musical Chairs',
        effect: 'All pllayers get up and move one seat in the direction of play',
        flavor: 'Really? let\'s just scoot our decks around.',
        picture: 'https://cards.scryfall.io/art_crop/front/8/8/889b42c8-f009-4a75-b4bf-812fbbd87626.jpg?1583965804',
    },
    { // replace this art
        name: 'It\'s a New Ruling',
        effect: 'Add up all numbers on target card and redistribute them however you wish.',
        flavor: 'Do we count the numbers in the art? What about the collector number?',
        picture: 'https://cards.scryfall.io/art_crop/front/b/1/b111425a-adaa-4938-88a1-6fdd0bcecc39.jpg?1562932351',
    },
    {
        name: 'Master of Chaos',
        effect: 'Until your next turn, you choose all targets of Chaos Rolls',
        flavor: 'Does that count Persona and Whacky rolls?',
        picture: 'https://cards.scryfall.io/art_crop/front/e/e/ee245922-b380-4b2e-a43f-ab1ba8078943.jpg?1562939685',
    },
    { //previously Reallly damn Wacky rolll twice on wackyland and 1d6 times on chaos
        name: 'Magic Online Pricing',
        effect: 'Each player sacrifices zero or more permanents. <br/> '+
                'Then each player loses:<br/>'+
                '<ul><li>3 life for each rare they control,</li>'+
                '<li>2 life for each uncommon they control and,</li>'+
                '<li>1 life for each common they control.</li></ul> <br/><i>(Basic lands do not have a rarity.)</i>',
        flavor: '',
        picture: 'https://cards.scryfall.io/art_crop/front/d/1/d13cb0d3-3452-4c1f-81ec-024b4c45bbad.jpg?1674140884'
    },
    {
        name: 'Real Rainbow Vale',
        effect: 'Create a land token named Rainbow Vale.<br/>'+
            'It has \'{T}: Add 1 mana of any color. An opponent gains control of Rainbow Vale at the beginning of the next end step.\' and <br/>'+
            '\'At the end of each step and phase, if you have unspent mana produced by Rainbow Vale, you lose 5 life per unspent mana produced by Rainbow Vale\' and <br/>'+
            'At the beginning of your end step, if Rainbow Vale is untapped, lose 5 life\'',
        flavor: 'That\'s how it\'s meant to be played',
        picture: 'https://cards.scryfall.io/art_crop/front/5/1/51f8b918-ac13-4538-a39d-6553580bf39b.jpg?1559592494',
    },
    {
        name: 'Musical Life',
        effect: 'Each player passes their life total to the next player in turn order',
        flavor: '',
        picture: 'https://cards.scryfall.io/art_crop/front/b/6/b6d56ce1-fb5d-47c6-961d-65b544a48b32.jpg?1562416450',
    },
    {
        name: 'Calculator',
        effect: 'Add or subtract 1d6 from any number on a permanent on the battlefield.',
        flavor: '',
        picture: 'https://cards.scryfall.io/art_crop/front/b/1/b111425a-adaa-4938-88a1-6fdd0bcecc39.jpg?1562932351',
    },
    {
        name: 'Turn Twister',
        effect: 'Until your next turn, randomly choose who takes the next turn.',
        flavor: 'Am I next?',
        picture: 'https://cards.scryfall.io/art_crop/front/1/a/1a07b620-6702-4c24-a6bb-03167c64be30.jpg?1562873585',
    },
    { // was chaotic prejudice
        name: 'Escape from AOl',
        effect: 'Target land you control gains <br/>'+
            '\'At the beginning of your upkeep, exile a creature you control, then flip a coin.<br/>'+
            'If the flip is heads, another target player gains control of this land.<br/>'+
            'When this land is destroyed put all creatures exiled with it onto the battlefield under your control.',
            flavor: '',
            picture: 'https://cards.scryfall.io/art_crop/front/a/3/a3da3387-454c-4c09-b78f-6fcc36c426ce.jpg?1583542842',
    },
    {
        name: 'Magnet',
        effect: 'Target creature gains \'Each spell and ability that can target this creature, must target this creature.\'',
        flavor: '',
        picture: 'https://cards.scryfall.io/art_crop/front/7/4/74baa632-d046-401a-9172-1ab6284240bc.jpg?1599710220',
    },
    {
        name: 'Wrath of the Random',
        effect: 'Destroy each permanent with a casting cost of 1d6. They cannot be regenerated.',
        flavor: '',
        picture: 'https://cards.scryfall.io/art_crop/front/4/d/4d9715c2-9036-4ae2-a5b4-1b190d50c963.jpg?1562443764',
    },
    {
        //was I decree it
        name: 'Chaos War',
        effect: 'Target creature gains protection from chaos. <i>This does not end at the end of turn</i>',
        flavor: '',
        picture: 'https://cards.scryfall.io/art_crop/front/d/4/d4d2b011-bb0d-463c-bf2a-04b6650771a3.jpg?1562056865',
    },
    {
        name: 'Fun Time',
        effect: 'Roll once on Chaos list, Whacky, Persona, and Realm Enchantment',
        flavor: '',
        picture: 'https://cards.scryfall.io/art_crop/front/4/2/42c47a99-965c-4bde-935a-10f28cf5ccba.jpg?1673915165',
    },
    {
        name: 'Time Wall Safe',
        effect: 'Choose a phase. Skip that phase this turn. Create a Safe counter with \'Sacrifice this token: take the chosen phase immediately.\'',
        flavor: '',
        picture: 'https://cards.scryfall.io/art_crop/front/e/7/e7ea65e2-68d8-429f-9be7-e6e5e12a2a4d.jpg?1562722388',
    },
    {
        name: 'nruT',
        effect: 'Go to your ending phase and proceed backwards through the order of phases and steps. When you reach your chaos phase, roll a chaos roll. Resolve that roll and end your turn.',
        flavor: '',
        picture: 'https://cards.scryfall.io/art_crop/front/5/5/5595a57a-a76c-467b-afaf-5affffc24f35.jpg?1562915041',
    },
    {
        name: 'Expansion in a Bottle',
        effect: 'Destroy all non-land permanents from target expansion. They can\'t be regenerated.',
        flavor: '',
        picture: 'https://cards.scryfall.io/art_crop/front/c/f/cfd5c243-2a40-4ba8-ad00-715f52eeda62.jpg?1615259961',
    },
    {
        name: 'Ka-Ching!!$$ - Ka-Ching!!$$',
        effect: '<ul> <li>Create a Black Lotus token</li> <li>Create a Mox Pearl token</li>'+
                '<li>Create a Mox Sapphire token</li> <li>Create a Mox Jet token</li>'+
                '<li>Create a Mox Ruby token</li> <li>Create a Mox Emerald token</li>'+
                '<li>Crate a Mox Diamond token</li> </ul>',
        flavor: '',
        picture: 'https://cards.scryfall.io/art_crop/front/c/4/c4e30889-d245-4f20-938a-1295ddbcfac6.jpg?1583965812',

    },
    {
        //could we keep track of the counters in the flavor maybe?
        name: 'Time Crawl Jackpot',
        effect: 'Put a turn counter in the Time Crawl Jackpot. After this turn, take an additional turn for each turn counter in the Time Crawl Jackpot',
        flavor: '',
        picture: 'https://cards.scryfall.io/art_crop/front/6/2/628eda6f-f88e-4d82-a884-d1537302adb4.jpg?1680478173',
    },
];