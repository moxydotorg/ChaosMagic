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
    Inside the bracket's we use a comma seperated list of values, in this case it's all strings, well I guess technically it's a named list of strings.

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
    If we need to know what number was rolled I can calculate that and display it when it's rolled.

    Each entry should have a name, picture, and effect. 
    Picture displays when drawn at the top of the play area
    Name displays just below the picture and as a header in the in-effect and discard areas
    Effect displays just below the name in the drawn, in-effect, and discard areas
    Group is an array of strings that "tags" each effect later to be used in enabling or disabling them as a group.
    
    Effect can contain additional HTML. This is useful for modal spells or lists of things. Unordered lists "<ul>" is common here.
    Effect can also contain symbol tags see: https://scryfall.com/docs/api/colors for a list of symbols. 
     --Newer symbols may require an update to the symbols.css file to support a new svg of that symbol.
*/

//TODO: review the list for Oracle wording changes.
//TODO: maybe standardize on how much colorless mana makes up for a colored mana and edit all the alt costs to be consistent.

const chaosList = 
[
    {
        //verified w/ scryfall 5/2025
        name: "Eureka",
        picture: "https://cards.scryfall.io/art_crop/front/5/2/520db5fb-d961-45a3-af74-6f054b8be3ab.jpg?1562858733",
        effect: "Starting with you, each player may put a permanent card from their hand onto the battlefield. Repeat this process until no one puts a card onto the battlefield.",
        groups: ["free drops"], 
    },
    {
        name: "Air Strike",
        picture: "https://placehold.co/600x400/FF4136/FFFFFF?text=Air+Strike&font=lora",
        effect: "Put 3 Eagle tokens into play. Treat these tokens as 2/1 fliers that are considered all colors and have haste. At end of turn, sacrifice all Eagle tokens.",   
        groups: ["free drops"],
    },
    {
        //verified w/ scryfall 5/2025
        name: "Feldon's Cane",
        picture: "https://cards.scryfall.io/art_crop/front/b/b/bb6af436-bcfd-4d47-a1aa-e84b587a725a.jpg?1562934632",
        effect: "Shuffle your graveyard into your library.",
        groups: ["shuffle", "recursion", "graveyard", "library"]
    },
    {
        name: "Enchant WorldLand",
        picture: "https://placehold.co/600x400/FF4136/FFFFFF?text=Roll+for+Realm+Enchant&font=lora",
        effect: "Roll in EnchantWorldLand.",
        groups: ["realm enchantment"],
    },
    {
        name: "Footbottom Feast",
        picture: "https://placehold.co/600x400/FF4136/FFFFFF?text=Footbottom+Feast&font=lora",
        effect: "Put any number of creature cards from your graveyard onto the top of your library. Draw a card.",
    },
    {
        //verifide w/ scryfall 5/2025
        name: "Tranquility",
        picture: "https://cards.scryfall.io/art_crop/front/e/e/ee21b620-4dfa-4e06-872e-8d8ffce12f76.jpg?1559591701",
        effect: "Destroy all enchantments.",
    },
    {
        name: "Roll 3 times",
        picture: "https://placehold.co/600x400/FF4136/FFFFFF?text=Roll+3&font=lora",
        effect: "Roll three Chaos Rolls.",
    },
    {
        //verfied w/ scryfall 5/2025
        name: "Rushing River",
        picture: "https://cards.scryfall.io/art_crop/front/5/2/52ddf7bf-de9c-4657-8d5b-79869d36fa63.jpg?1562912267",
        effect: "Return target non-land permanent to owner's hand. You may sacrifice one land, if you do return another target non-land permanent to owner's hand.",
    },
    {
        name: "Tainted Energy",
        picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Tainted+Energy",
        effect: "Lose 1d6 life or target opponent gains 1d6 life.",
    },
    {
        name: "Roll that Fork",
        picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Roll+that+Fork",
        effect: "Create a RollFork Counter. Sacrifice RollFork to duplicate the effects of any roll just rolled. You choose all new targets.",
    },
    {
        name: "Secret Cache", 
        picture:"https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Secret+Cache",
        effect: "Shuffle your deck. If your top card after the shuffle is a planeswalker, creature, enchantment, artifact, or land card, put it into play on your side. If not, lose one life and shuffle again. Repeat until you get a planeswalker, creature, enchantment, artifact, or land card.",
    },
    {
        //verified w/ scryfall 5/2025
        name: "Exhume",
        picture: "https://cards.scryfall.io/art_crop/front/a/8/a88b23ce-ce19-47da-b9f2-055a4d6bdc79.jpg?1562930508",
        effect: "Each player puts a creature card from their graveyard onto the battlefield.",
    },
    {
        name: "Neutral Plane",
        picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Neutral+Plane",
        effect: "Destroy all non-aura enchantments.",
    },
    {
        name: "Sworn Enemy",
        picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Sworn+Enemy",
        effect: "Target creature gains protection from the color of your choice until the end of turn.",
    },
    {
        //verified w/ scryfall 5/2025
        name: "Abandon Hope",
        effect: "Discard X cards. Look at target opponent's hand and choose X cards from it. That player discards those cards.",
        picture: "https://cards.scryfall.io/art_crop/front/9/4/942cf220-472c-48f6-8f60-993939ea5ab8.jpg?1562055436",
    },
    {
        name: "Mute",
        effect: "You may not cast spells this turn.",
        picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Mute",
    },
    {
        name: "ExoByte's Command",
        effect: "All players put cards from their libraries into their graveyards until they have threshold.",
        picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=ExoByte's+Command",
    },
    {
        //verified w/ scryfall 5/2025
        name: "Balance",
        effect: "Each player chooses a number of lands they control equal to the number of lands controlled by the player who controls the fewest, then sacrifices the rest. Players discard cards and sacrifice creatures the same way.",
        picture: "https://cards.scryfall.io/art_crop/front/8/3/8352e8b6-c947-49f3-a653-a6af65d3e9c3.jpg?1559591930",
    },
    {
        name: "Ancestral Recall",
        effect: "Target player draws three cards.",
        picture: "https://cards.scryfall.io/art_crop/front/2/d/2dd41293-d7c8-4422-9f0c-b3e96350f5c9.jpg?1559592144"
    },
    {
        //verified w/ scryfall 5/20225
        name: "Memory Lapse",
        picture: "https://cards.scryfall.io/art_crop/front/6/c/6c8b5df3-6153-470e-be9c-f38d3cf66081.jpg?1562587296",
        effect: "Skip your draw step.",
    },
    {
        name: "Terminate",
        effect: "Destroy target creature. It can't be regenerated",
        picture: "https://cards.scryfall.io/art_crop/front/1/9/190ca502-672d-4cc0-b6e0-b9de517058d0.jpg?1562900286"
    },
    {
        //verified w/ scryfall 5/2025
        name: "Prosperity",
        effect: "Each player draws 1d10 cards. (Roll once for everybody).",
        picture: "https://cards.scryfall.io/art_crop/front/3/f/3fa5e806-3cf2-4241-b45d-a05d2b715efd.jpg?1562277449",
    },
    {
        name: "Enlightened Tutor",
        effect: "Search your library for an artifact or enchantment card, reveal it, then shuffle and put that card on top. At the beginning of your upkeep, you may pay {W} or {3} to draw that card.",
        picture: "https://cards.scryfall.io/art_crop/front/c/4/c48e6462-638f-4642-bba4-1bf68c1fcd0f.jpg?1601341369"
    },
    {
        //verified w/ Scryfall 5/2025
        name: "Gauntlets of Chaos",
        effect: "Exchange control of target artifact, creature, or land you control and target permanent an opponent controls that shares a one of those types with it. If those permanents are exchanged this way, destroy all Auras attached to them.",
        picture: "https://cards.scryfall.io/art_crop/front/8/e/8ea1b001-1eb6-4bb9-b8f3-1aaea14a9a13.jpg?1562925095"
    },
    {
        name: "Deja Vu",
        effect: "Each player shuffles their graveyards and puts those cards on top of their library.",
        picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Deja+Vu",
    },
    {
        //verified w/ scryfall 5/2025
        name: "Manipulate Fate",
        effect: "Search your library for three cards, exile them, then shuffle. Draw a card.",
        picture: "https://cards.scryfall.io/art_crop/front/5/b/5bb52acb-dedb-4ed6-a6da-8c036f2b2958.jpg?1562913616",
    },
    {
        //verified w/ scryfall 5/2025
        name: "Syphon Soul",
        effect: "Syphon Soul deals 2 damage to each other player. You gain life equal to the damage dealt this way.",
        picture: "https://cards.scryfall.io/art_crop/front/d/c/dc308882-1c12-4da0-8eae-caf4cc3d43e1.jpg?1562866895",
    },
    {
        //verified w/ scryfall 5/2025
        name: "Demonic Tutor",
        effect: "Search your library for a card, put that card into your hand, then shuffle.",
        picture: "https://cards.scryfall.io/art_crop/front/0/8/085ed548-a8c8-40b3-8183-51c060bc95cb.jpg?1664927814",
    },
    {
        name: "Simplicity's Reward",
        effect: "Each player gains one life for each basic land they have in play. Each player takes one damage for each non-basic land they have in play.",
        picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Simplicity's+Reward",
    },
    {
        name: "Solid Fog",
        effect: "As long as you remain in the game, until your next turn no attack phases may be declared.",
        picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Solid+Fog",
    },
    {
        name: "Mating Call",
        effect: "At the beginning of your first main phase, you may pay the mana cost of a creature in any graveyard +1. If you do, exile that card from the game and put a token copy of that creature into the battlefield under your control.",
        picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Mating+Call",
    },
    {
        name: "Better Off Dead",
        effect: "Place a creature from your graveyard onto the battlefield under target opponent's control.",
        picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Better+Off+Dead",
    },
    {
        name: "Nevinyrral's lil' Disk",
        effect: "Each player sacrifices a creature, an enchantment, and an artifact.",
        picture: "https://cards.scryfall.io/art_crop/front/d/b/dbb21f21-668a-4d57-8d05-8db11fb82d99.jpg?1559591553",
    },
    {
        name: "Seeds of Innocence",
        effect: "Destroy all artifacts. They can't be regenerated. The controller of each of those artifacts gains life equal to its mana value.",
        picture: "https://cards.scryfall.io/art_crop/front/f/9/f9c868f5-0f90-4f7e-bafb-c45d2372fe06.jpg?1614021484",
    },
        {
            //verified w/ scryfall 5/2025
          name: "Massive Mana Clash",
          effect: "Each player flips a coin. Mana Clash deals 1 damage to each player whose coin comes up tails. When a player's coin comes up heads, they stop flipping. Repeat this process until each players’ coins has come up heads.",
          picture: "https://cards.scryfall.io/art_crop/front/a/0/a01f27b7-f1d0-4fb6-b743-ca7a810ef85c.jpg?1559603873"
        },
        {
            //verified w/ scryfall 5/2025
          name: "Storm Seeker",
          effect: "Storm Seeker deals damage to target player equal to the number of cards in that player’s hand.",
          picture: "https://cards.scryfall.io/art_crop/front/3/b/3b66d0cc-84d7-41ad-b0e7-74ebf604543f.jpg?1562858704"
        },
        {
            //verified w/ scryfall 5/2025
          name: "Collective Unconscious",
          effect: "Draw a card for each creature you control.",
          picture: "https://cards.scryfall.io/art_crop/front/8/f/8fa7d6a8-9190-403f-bbdd-ab71d9c89e4d.jpg?1562382055"
        },
        {
          name: "Chaos Knowledge",
          effect: "Roll twice on Chaos (without resolving either), then choose one roll to ignore. Resolve the other roll.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Chaos+Knowledge"
        },
        {
            //verified w/ scryfall 5/2025
          name: "Morbid Hunger",
          effect: "Morbid Hunger deals 3 damage to any target. You gain 3 life.",
          picture: "https://cards.scryfall.io/art_crop/front/4/7/47a4e7d0-ff09-4e19-8456-f4845f56dc8b.jpg?1562908117"
        },
        {
            //verified w/ scryfall 5/2025
          name: "Essence Vortex",
          effect: "Destroy target creature unless its controller pays life equal to its toughness. A creature destroyed this way can’t be regenerated.",
          picture: "https://cards.scryfall.io/art_crop/front/f/e/fe07e496-5070-4116-a91a-a3bbe19c12af.jpg?1562942896"
        },
        {
            //verified w/ scryfall 5/2025
          name: "Stupor",
          effect: "Target opponent discards a card at random, then discards a card.",
          picture: "https://cards.scryfall.io/art_crop/front/f/d/fd0b4aea-1e01-4afe-8054-77c5cc7935d6.jpg?1562786789"
        },
        {
            //verified w/ scryfall 5/2025
          name: "Braingeyeser",
          effect: "Target player draws 1d6 cards.",
          picture: "https://cards.scryfall.io/art_crop/front/a/5/a5dd8dbb-9538-4786-b20c-0ea2f446f323.jpg?1559591641",
        },
        {
            //verified w/ scryfall 5/2025
          name: "Stormbind",
          effect: "Discard a card at random: Stormbind deals 2 damage to any target. You may pay {2} each time you want to repeat this process in this Chaos Phase.",
          picture: "https://cards.scryfall.io/art_crop/front/4/5/45f03556-cef5-438d-a1d8-66c297502622.jpg?1562775467"
        },
        {
            //verified w/ scryfall 5/2025
          name: "Necropotence",
          effect: "Skip your draw step. Pay 1 life: Exile the top card of your library face down. Put that card into your hand at the beginning of your next end step. You may repeast this process any number of times",
          picture: "https://cards.scryfall.io/art_crop/front/5/4/54d7a0c1-efb4-4a8d-ad92-a96d43835052.jpg?1562910576"
        },
        {
            //verified w/ scryfall 5/2025
          name: "Earthquake",
          effect: "Earthquake deals 1d6 damage to each creature without flying and each player.",
          picture: "https://cards.scryfall.io/art_crop/front/8/6/86435875-ac92-4348-b41e-19570cf62a1c.jpg?1559591812"
        },
        {
            //verified w/ scryfall 5/2025
          name: "Stream of life",
          effect: "Target player gains 1d10 life.",
          picture: "https://cards.scryfall.io/art_crop/front/d/a/da18a2c9-850e-400d-b0b3-edd8a946e380.jpg?1559591656"
        },
        {
            //verified w/ scryfall 5/2025
          name: "Fumarole",
          effect: "Lose 3 life. Destroy target creature and target land.",
          picture: "https://cards.scryfall.io/art_crop/front/e/f/efa53e9a-0d7c-4d17-b2be-56930edfa2c2.jpg?1562940031"
        },
        {
          name: "Chaos Lore",
          effect: "Choose one: search your library for two basic lands and put them onto the battlefield, or search your library for a non-basic land and put it onto the battlefield. Shuffle your library afterwards.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Chaos+Lore"
        },
        {
            //verified w/ scryfall 5/2025
          name: "Winds of Change",
          effect: "Each player shuffles the cards from their hand into their library, then draws that many cards.",
          picture: "https://cards.scryfall.io/art_crop/front/1/8/186fd917-8d65-4de5-8546-a32a5f6d3bab.jpg?1562857764"
        },
        {
          name: "WackyLand III",
          effect: "Roll 1d3 times in WackyLand.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=WackyLand+III"
        },
        {
            //verified w/ scryfall 5/2025
          name: "Polymorph",
          effect: "Destroy target creature. It can’t be regenerated. Its controller reveals cards from the top of their library until they reveal a creature card. The player puts that card onto the battlefield, then shuffles all other cards revealed this way into their library.",
          picture: "https://cards.scryfall.io/art_crop/front/f/b/fbae8702-a152-4c53-8a76-691a221f2475.jpg?1562722872"
        },
        {
          name: "Gold Strike",
          effect: "All of your lands produce an additional mana of the appropriate type when tapped for mana this turn.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Gold+Strike"
        },
        {
            //verified w/ scryfall 5/2025
          name: "Portent",
          effect: "Look at the top 3 cards of target player’s library, then put them back in any order. You may have that player shuffle. Draw a card at the beginning of the next turn’s upkeep.",
          picture: "https://cards.scryfall.io/art_crop/front/e/0/e040be83-3fb5-4da5-ba7a-4923b8854b74.jpg?1562936849"
        },
        {
          name: "Revenge is Sweet",
          effect: "Sacrifice a permanent: destroy a permanent of the same type.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Revenge+is+Sweet"
        },
        {
          name: "Soul Leech",
          effect: "Deal 1 damage to up to 3 targets. Gain 1 life for each damage successfully dealt in this way.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Soul+Leech"
        },
        {
          name: "Stasis",
          effect: "Skip your untap step. At the beginning of their upkeep, any player currently affected by Stasis may pay {U} or {3} during their upkeep to have it affect the next person as well.",
          picture: "https://cards.scryfall.io/art_crop/front/5/9/5902c2aa-c77c-4c6a-9a1e-77cb9bb53aa1.jpg?1559592205"
        },
        {
          name: "Pity",
          effect: "The player with lowest amount of life gains five life. If there is a tie, no player may gain life.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Pity"
        },
        {
          name: "Creeping Mold",
          effect: "Destroy target artifact, enchantment, or land.",
          picture: "https://cards.scryfall.io/art_crop/front/3/6/36e7691f-c771-4451-ac54-3532ca10d48f.jpg?1562277441"
        },
        {
          name: "Mutual Betrayal",
          effect: "Look at target opponent's hand and choose a card. They look at your hand and choose a card. Exchange those cards.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Mutual+Betrayal"
        },
        {
          name: "Chain Lightning",
          effect: "Chain Lightning deals 3 damage to any target. Then that player or that permanent’s controller may pay {R}{R} or {4}. If the player does, they may copy this spell and may choose a new target for that copy.",
          picture: "https://cards.scryfall.io/art_crop/front/b/5/b5883762-ca0a-4932-8d2a-41a45796a5f8.jpg?1562860651"
        },
        {
          name: "Mana Short",
          effect: "Tap all lands you control. Lands you control do not untap as normal during your untap phase this turn.",
          picture: "https://cards.scryfall.io/art_crop/front/4/d/4da4f9a8-024b-4707-b300-ccb11bd87cea.jpg?1559591754"
        },
        {
          name: "Rolling Thunder",
          effect: "Rolling Thunder deals 1d6-1 damage divided as you choose among any number of targets.",
          picture: "https://cards.scryfall.io/art_crop/front/0/b/0bb07402-d526-4938-89a3-9174d5b5a4de.jpg?1593863103"
        },
        {
          name: "Goblin Game",
          effect: "Each player hides at least one item, then all players reveal them simultaneously. Each player loses life equal to the number of items they revealed. The player who revealed the fewest items then loses half their life, rounded up. If two or more players are tied for fewest, each loses half their life, rounded up.",
          picture: "https://cards.scryfall.io/art_crop/front/c/b/cbe6e7e5-ffea-4c6c-8a42-28e695029f24.jpg?1562938086"
        },
        {
          name: "Enchant WorldLand +",
          effect: "Leave any EnchantWorldLand in play. Roll in EnchantWorldLand and add another to the battlefield.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Enchant+WorldLand++"
        },
        {
          name: "Commanding Presence",
          effect: "Until end of turn, opponents may not play spells or abilities.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Commanding+Presence"
        },
        {
          name: "Illusions of Grandeur",
          effect: "Gain 20 life and 4 Illusion counters. At the beginning of your upkeep, if you have any Illusions counters, remove one. When the last Illusions counter is removed, lose 20 life.",
          picture: "https://cards.scryfall.io/art_crop/front/4/4/44c20ed5-7064-436d-ad76-85a1d6bf0103.jpg?1559592457"
        },
        {
          name: "Backflash",
          effect: "This turn, all cards with flashback that would be exiled are instead placed into their owners' hands.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Backflash"
        },
        {
          name: "Never Say Die",
          effect: "All creatures in all graveyards with toughness less than or equal to 1d6 are returned to the battlefield under their owner's control.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Never+Say+Die"
        },
        {
          name: "WackyLand",
          effect: "Roll in WackyLand.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=WackyLand"
        },
        {
          name: "PersonaLand",
          effect: "Roll in PersonaLand.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=PersonaLand"
        },
        {
          name: "Fighting a Legend",
          effect: "Each opponent rolls in PersonaLand.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Fighting+a+Legend"
        },
        {
          name: "Reclaim",
          effect: "Put target card from your graveyard on top of your library. At the beginning of your upkeep you may pay {G} or {3} to draw that card.",
          picture: "https://cards.scryfall.io/art_crop/front/2/b/2b47c082-57f6-4f69-87e8-a07cad9ef042.jpg?1562087371"
        },
        {
          name: "Prophetic Bolt",
          effect: "Prophetic Bolt deals 4 damage to any target. Look at the top four cards of your library. Put one of those cards into your hand and the rest on the bottom of your library in any order.",
          picture: "https://cards.scryfall.io/art_crop/front/7/9/79f74291-c452-4a60-bf5f-73efad6583d4.jpg?1562923762"
        },
        {
          name: "Hymn to Tourach",
          effect: "Target player discards two cards at random.",
          picture: "https://cards.scryfall.io/art_crop/front/e/b/eb9273ea-9a41-42e3-8c9c-0d50b127a818.jpg?1587910900"
        },
        {
          name: "Jester's Cap",
          effect: "Search target player’s library for three cards and exile them. Then that player shuffles.",
          picture: "https://cards.scryfall.io/art_crop/front/4/7/47ac44d0-8090-4e7b-ac47-c567294f185e.jpg?1562908134"
        },
        {
          name: "Agonizing Memories",
          effect: "Look at target player’s hand and choose two cards from it. Put them on top of that player’s library in any order.",
          picture: "https://cards.scryfall.io/art_crop/front/b/e/be277367-a58e-429e-af1b-58163becf861.jpg?1562803090"
        },
        {
            //end turn?
          name: "Time Crawl",
          effect: "Pass the dice, your turn is over. Put a turn counter in the Time Crawl Jackpot.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Time+Crawl"
        },
        {
          name: "Natural Order",
          effect: "Sacrifice a creature. Search your library for a creature card of the same color, put it onto the battlefield, then shuffle.",
          picture: "https://cards.scryfall.io/art_crop/front/0/8/0845f0b0-9413-4ddd-861d-9607636bebc6.jpg?1562276959"
        },
        {
          name: "Relentless Assault",
          effect: "After your attack phase, untap all creatures that attacked this turn. You get an additional combat phase followed by an additional main phase this turn.",
          picture: "https://cards.scryfall.io/art_crop/front/7/4/747161ea-cb65-4960-84dd-a05bfe5f3ba0.jpg?1562277689"
        },
        {
          name: "Grinning Totem",
          effect: "Search target opponent’s library for a card and exile it. Then that player shuffles. Until the beginning of your next upkeep, you may play that card. At the beginning of your next upkeep, if you haven’t played it, put it into its owner’s graveyard.",
          picture: "https://cards.scryfall.io/art_crop/front/f/3/f3558ddf-2bc6-4870-bd24-2467d870ffe5.jpg?1562722413"
        },
        {
          name: "Pestilence",
          effect: "Pestilence deals 1d6 damage to each creature and each player.",
          picture: "https://cards.scryfall.io/art_crop/front/9/0/90886a02-4c1f-48ea-8563-6d80c97d9f58.jpg?1559603763"
        },
        {
          name: "Circle Shield",
          effect: "Get three shield counters. Whenever you would take damage, remove a shield counter instead.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Circle+Shield"
        },
        {
          name: "Impulse",
          effect: "Look at the top four cards of your library. Put one of them into your hand and the rest on the bottom of your library in any order.",
          picture: "https://cards.scryfall.io/art_crop/front/9/d/9d710a97-062f-4773-b6c6-8aeddeb3b6e8.jpg?1562278157"
        },
        {
          name: "Temporal Spring",
          effect: "Put target permanent on top of its owner's library",
          picture: "https://cards.scryfall.io/art_crop/front/b/5/b584dfd1-a56c-406e-8504-47ea136dc102.jpg?1562937762"
        },
        {
          name: "Gamble",
          effect: "Search your library for a card, put that card into your hand, discard a card at random, then shuffle.",
          picture: "https://cards.scryfall.io/art_crop/front/0/e/0ee0f160-7339-4d98-8a8c-f08889ee52f5.jpg?1562898053"
        },
        {
          name: "Desert Twister",
          effect: "Destroy target permanent.",
          picture: "https://cards.scryfall.io/art_crop/front/0/d/0d77c149-cca2-45c7-bc83-5ba1872ad5e0.jpg?1562897613"
        },
        {
          name: "Roll 3 Times",
          effect: "Roll three Chaos Rolls.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Roll+3+Times"
        },
        {
          name: "WackyLand",
          effect: "Roll in WackyLand.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=WackyLand"
        },
        {
          name: "Forget",
          effect: "Target player discards two cards, then draws as many cards as they discarded this way.",
          picture: "https://cards.scryfall.io/art_crop/front/d/f/df3115a9-ad65-4213-9320-6f39c11676f3.jpg?1562588695"
        },
        {
          name: "Zaphod's Gambit",
          effect: "All players choose a card in their hand. All players then reveal their chosen card. The lowest casting cost creature, enchantment, and artifact are all put onto the battlefield. If two or more cards tie, those cards are put onto the battlefield.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Zaphod's+Gambit"
        },
        {
          name: "Luck",
          effect: "Randomly choose a spell in your hand. Play that spell without paying its casting cost. If {X} is in the casting cost, {X} is {0}.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Luck"
        },
        {
          name: "Windows of Opportunity",
          effect: "Target player taps all artifacts, lands, and creatures they control. At end of turn, tap all artifacts, lands, and creatures you control.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Windows+of+Opportunity"
        },
        {
          name: "Energy Bolt",
          effect: "Choose one: deal 1d6 damage to target player or planeswalker or target player gains 1d6 life.",
          picture: "https://cards.scryfall.io/art_crop/front/7/1/711f4cff-0256-44b2-a2fe-1cae6e9edb2b.jpg?1562719783"
        },
        {
          name: "Price of Knowledge",
          effect: "Skip your next turn. Draw four cards.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Price+of+Knowledge"
        },
        {
          name: "Tremble",
          effect: "Each player sacrifices a land of their choice.",
          picture: "https://cards.scryfall.io/art_crop/front/7/e/7e1dc36f-3fdd-42cf-9d3a-695f4bf60c68.jpg?1562918330"
        },
        {
          name: "Jokulhaups Light",
          effect: "All players sacrifice one land, one creature, and one artifact.",
          picture: "https://cards.scryfall.io/art_crop/front/9/9/99d26ff7-afff-40a0-b515-7928c2428809.jpg?1559592472"
        },
        {
          name: "Cone of Flame",
          effect: "Cone of Flame deals 1 damage to any target, 2 damage to another target, and 3 damage to a third target.",
          picture: "https://cards.scryfall.io/art_crop/front/5/7/5713f17a-9a57-41f8-b492-ced876e1a37f.jpg?1562800924"
        },
        {
          name: "Fact or Fiction",
          effect: "Reveal the top five cards of your library. An opponent separates those cards into two piles. Put one pile into your hand and the other into your graveyard.",
          picture: "https://cards.scryfall.io/art_crop/front/7/f/7fd4d018-dcf3-4439-8445-02d66e44f7d3.jpg?1562920780"
        },
        {
          name: "Happy Balance",
          effect: "Using the cards from the top of their libraries, each player equalizes hand size, number of lands, and number of creatures to the amount that is the highest. Players shuffle unused revealed cards into their libraries.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Happy+Balance"
        },
        {
          name: "Happy Land",
          effect: "Choose one: roll in EnchantWorldLand ,roll in WackyLand, or roll in PersonaLand .",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Happy+Land"
        },
        {
          name: "Confiscate",
          effect: "Gain control of target permanent.",
          picture: "https://cards.scryfall.io/art_crop/front/7/c/7cba6d4a-58d0-42d6-b49b-65c72b86007f.jpg?1562921288"
        },
        {
          name: "CounterRoll",
          effect: "Get a CounterRoll counter. Sacrifice CounterRoll to counter the effects of any roll.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=CounterRoll"
        },
        {
          name: "Flux",
          effect: "Each player discards any number of cards, then draws that many cards. Draw a card.",
          picture: "https://cards.scryfall.io/art_crop/front/3/6/368b28e4-a367-4a38-866d-c3768bd9b7ad.jpg?1562800201"
        },
        {
          name: "PersonaLand",
          effect: "Roll in PersonaLand .",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=PersonaLand"
        },
        {
          name: "Elric's Wager",
          effect: "Target opponent names a number and reveals cards from their library until they get a spell of that casting cost. They put that card into their hand and all other revealed cards into their graveyard. That player takes one damage for each card put into the graveyard in this manner.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Elric's+Wager"
        },
        {
          name: "Wheel of Fortune",
          effect: "Each player discards their hand, then draws seven cards.",
          picture: "https://cards.scryfall.io/art_crop/front/3/f/3f3c77ad-fce8-4506-90e1-7ef71552a71c.jpg?1559592998"
        },
        {
          name: "Double Sided Blade",
          effect: "Roll a 1d6. That number of cards is drawn by any combination of players of your choice. For each card you draw, take two damage. For each card drawn by an opponent, that player takes one damage.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Double+Sided+Blade"
        },
        {
          name: "Clash of Chaos",
          effect: "Choose target opponent. Flip a coin, opponent calls it in the air. Loser of the flip takes two damage. Winner decides to flip again, or to stop.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Clash+of+Chaos"
        },
        {
          name: "Master Chef",
          effect: "Choose one: get a CounterRoll counter. Sacrifice CounterRoll to counter the effects of any roll; or get a RollFork counter. Sacrifice RollFork to duplicate the effects of any Chaos effect just rolled. You choose all new targets.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Master+Chef"
        },
        {
          name: "All Hallow's Eve Light",
          effect: "Each player puts up to two creatures from their graveyard onto the battlefield.",
          picture: "https://cards.scryfall.io/art_crop/front/1/8/18787a2d-6688-47e9-94bc-ccf229df823f.jpg?1562857765"
        },
        {
          name: "Mana Barbs",
          effect: "Whenever you tap a land for mana this turn, take one damage.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Mana+Barbs"
        },
        {
          name: "Retribution",
          effect: "Choose two target creatures controlled by the same opponent. That player chooses and sacrifices one of those creatures. Put a -1/-1 counter on the other.",
          picture: "https://cards.scryfall.io/art_crop/front/b/3/b3adf9a6-7137-4995-9a83-2d410cb3cd20.jpg?1562588226"
        },
        {
          name: "WackyLand",
          effect: "Roll in WackyLand.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=WackyLand"
        },
        {
          name: "Infernal Tutor",
          effect: "Name a total casting cost. Reveal cards in your library until you reveal a permanent with the named casting cost. Put that card into play and exile the others.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Infernal+Tutor"
        },
        {
          name: "Mind Bend",
          effect: "Change the text of target permanent by replacing all instances of one color word with another or one basic land type with another.",
          picture: "https://cards.scryfall.io/art_crop/front/9/5/952eb6ae-a530-4f4f-92f0-a6602beaa7b2.jpg?1562720490"
        },
        {
          name: "Drain Life",
          effect: "Drain Life deals 1d6 damage to any target. You gain life equal to the damage dealt, but not more life than the player’s life total before the damage was dealt, the planeswalker’s loyalty before the damage was dealt, or the creature’s toughness.",
          picture: "https://cards.scryfall.io/art_crop/front/a/4/a400d404-9e0a-44dc-ba34-3a3115028ae0.jpg?1559592973"
        },
        {
          name: "Desperate Times",
          effect: "Look at the top three cards of your library. Put one into your hand and the other two into your graveyard. Roll again.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Desperate+Times"
        },
        {
          name: "Distract Shoes: Connor MacLeod",
          effect: "Borrow the Highlander's bright white shoes. Opponents are so distracted by them, after your turn you and all cards you control phase out.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Distract+Shoes%3A+Connor+MacLeod"
        },
        {
          name: "Patience",
          effect: "Lose two life and gain three Focus counters. At the beginning of your upkeep, if you have any Focus counters, remove one. When the last Focus counter is removed, gain five life.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Patience"
        },
        {
          name: "Price of Immortality",
          effect: "Choose and discard a card: gain four life.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Price+of+Immortality"
        },
        {
          name: "Gaea's Charm",
          effect: "Choose one: "+
                    "<ul><li>Target player shuffles up to three cards from their graveyard into their library</li>"+
                    "<li>Remove any 3 cards in target player's graveyard from the game. </li></ul><br/>Draw a card.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Gaea's+Charm"
        },
        {
          name: "5-Card Stud",
          effect: "All players reveal the top five cards of their library and use the casting costs of those cards to play 5-card stud. The player with the winning hand puts all of their cards into their hand. All other cards are placed in owner's graveyards.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=5-Card+Stud"
        },
        {
          name: "Ill Gotten Gains",
          effect: "Each player discards their hand, then returns up to three cards from their graveyard to their hand.",
          picture: "https://cards.scryfall.io/art_crop/front/8/2/826230ad-6b2b-42a0-9d6f-ed07d3554efd.jpg?1562922467"
        },
        {
          name: "Murphy's Law",
          effect: "Roll twice (without resolving either). Target opponent chooses a roll for you to ignore, then makes all decision in regards to how you resolve the remaining roll.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Murphy's+Law"
        },
        {
          name: "Regrowth",
          effect: "Return target card from your graveyard to your hand.",
          picture: "https://cards.scryfall.io/art_crop/front/8/9/898cd314-9060-4f1c-a821-1d61a292a12b.jpg?1559591659"
        },
        {
          name: "Chaos Storm",
          effect: "Roll twice and reverse the direction of turns.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Chaos+Storm"
        },
        {
          name: "CounterRoll",
          effect: "Get a CounterRoll counter. Sacrifice CounterRoll to counter the effects of any roll.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=CounterRoll"
        },
        {
          name: "Storm Seeker Misses",
          effect: "Take one damage for each card in your hand.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Storm+Seeker+Misses"
        },
        {
          name: "Price of Strength",
          effect: "Lose four life. Put 2 +1/+1 counters on each creature you control.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Price+of+Strength"
        },
        {
          name: "Global Stream of Life",
          effect: "Each player gains 1d10 life. (Roll once for everybody).",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Global+Stream+of+Life"
        },
        {
          name: "Disenchant",
          effect: "Destroy target artifact or enchantment.",
          picture: "https://cards.scryfall.io/art_crop/front/9/d/9d61d0a5-7e92-4413-9121-925e1876b64d.jpg?1559591821"
        },
        {
          name: "Gathering",
          effect: "Gain one life for each creature in play.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Gathering"
        },
        {
          name: "Gift of the Magi",
          effect: "Choose one: "+
                    "<ul><li>Gain three life</li>"+
                    "<li>Draw three cards</li>"+
                    "<li>Add three mana of any color to your mana pool at the beginning of your next main phase.</li></ul>",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Gift+of+the+Magi"
        },
        {
          name: "RollFork",
          effect: "Get a RollFork Counter. Sacrifice RollFork to duplicate the effects of any roll just rolled. You choose all new targets.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=RollFork"
        },
        {
          name: "Price of Power",
          effect: "Sacrifice a land. Deal four damage to any target.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Price+of+Power"
        },
        {
          name: "Enchant WorldLand",
          effect: "Leave any EnchantWorldLand in play. Roll in EnchantWorldLand and add another to the battlefield.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Enchant+WorldLand"
        },
        {
          name: "Pillage",
          effect: "Destroy target artifact or land. It cannot be regenerated.",
          picture: "https://cards.scryfall.io/art_crop/front/3/8/389ecb50-b007-4086-89fb-ec2daa5afdcf.jpg?1562768248"
        },
        {
          name: "Stronghold Discipline",
          effect: "Each player loses 1 life for each creature they control.",
          picture: "https://cards.scryfall.io/art_crop/front/4/6/46fa5472-5341-47cd-884e-fe2fcca12c0d.jpg?1562629681"
        },
        {
          name: "Soothing Balm",
          effect: "Target player gains 5 life.",
          picture: "https://cards.scryfall.io/art_crop/front/9/6/96b8f4be-9f4d-4373-8141-a03518ecd38a.jpg?1562382063"
        },
        {
          name: "Topple",
          effect: "Exile target creature with the greatest power among creatures on the battlefield.",
          picture: "https://cards.scryfall.io/art_crop/front/a/7/a7c25c67-4214-4318-a718-7d351e713f80.jpg?1562631404"
        },
        {
          name: "Ray of Command",
          effect: "Untap target creature an opponent controls and gain control of it until end of turn. That creature gains haste until end of turn. When you lose control of the creature, tap it.",
          picture: "https://cards.scryfall.io/art_crop/front/6/3/638abe5f-2a8a-42ca-bcdf-a52a3df66946.jpg?1562913414"
        },
        {
          name: "Gerrard's Wisdom",
          effect: "You gain 2 life for each card in your hand.",
          picture: "https://cards.scryfall.io/art_crop/front/f/8/f81defa5-edb4-4f1f-b13c-7cfb34511138.jpg?1562804288"
        },
        {
          name: "Peace Talks",
          effect: "As long as you remain in the game, until your next turn no player may declare an attack phase or cast a spell that targets a player.",
          picture: "https://cards.scryfall.io/art_crop/front/2/1/21da279d-a723-4902-bf84-dfe2c569d4c8.jpg?1562276986"
        },
        {
          name: "Arcanix Ray",
          effect: "Target player names a card and then turns over the top card of their library. If that is the card named, put it into the player's hand. Otherwise, put it into the player's graveyard, and that player takes two damage. Draw a card.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Arcanix+Ray"
        },
        {
          name: "Truce",
          effect: "Each player may draw up to two cards. For each card less than two a player draws this way, that player gains 2 life.",
          picture: "https://cards.scryfall.io/art_crop/front/3/5/35c5fd74-bd46-4833-ae25-1a11a8c15ed2.jpg?1562587068"
        },
        {
          name: "Meet in the Middle",
          effect: "Discard or draw until you have exactly four cards in hand.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Meet+in+the+Middle"
        },
        {
          name: "Land Ho!",
          effect: "All players may put up to three land from their hand and/or graveyard onto the battlefield.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Land+Ho!"
        },
        {
          name: "Unearth",
          effect: "Return target creature card with mana value 3 or less from your graveyard to the battlefield.",
          picture: "https://cards.scryfall.io/art_crop/front/b/6/b6cb2549-e485-44d6-9d65-7605c568909e.jpg?1562864214"
        },
        {
          name: "Blue",
          effect: "The next spell you play is countered. When this occurs, get a CounterRoll counter. Sacrifice CounterRoll to counter the effects of any roll.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Blue"
        },
        {
          name: "Wackyland III",
          effect: "Roll 1d3 times in WackyLand.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Wackyland+III"
        },
        {
          name: "Control Magic",
          effect: "Gain control of target creature.",
          picture: "https://cards.scryfall.io/art_crop/front/1/3/133315bd-3c46-4eff-938e-4dba63631c1b.jpg?1559591839"
        },
        {
          name: "Intimidation",
          effect: "Nobody can attack you until your next turn.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Intimidation"
        },
        {
          name: "Lightning Round",
          effect: "Until your next turn, when any player casts a spell, that player draws a card.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Lightning+Round"
        },
        {
          name: "Unhinge",
          effect: "Target player discards a card. Draw a card.",
          picture: "https://cards.scryfall.io/art_crop/front/b/8/b89deafd-cb7c-4da7-ab9b-8f795554a705.jpg?1562631705"
        },
        {
          name: "PersonaLand",
          effect: "Roll in PersonaLand .",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=PersonaLand"
        },
        {
          name: "Calm Before the Storm",
          effect: "There are no Chaos Phases until your next turn. Then, until your next turn after that, all players must roll double the normal rolls.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Calm+Before+the+Storm"
        },
        {
          name: "Peek",
          effect: "Look at target player's hand. Draw a card.",
          picture: "https://cards.scryfall.io/art_crop/front/f/5/f50843cc-20ac-4746-816e-f2630aa31594.jpg?1562941027"
        },
        {
          name: "Yawgmoth's Will",
          effect: "Until end of turn, you may play lands and cast spells from your graveyard. If a card would be put into your graveyard from anywhere this turn, exile that card instead.",
          picture: "https://cards.scryfall.io/art_crop/front/6/d/6d3e3c3a-d351-4d91-8884-312d4b6f540d.jpg?1562917904"
        },
        {
          name: "Triple EnchantWorldLand",
          effect: "Destroy all EnchantWorldLand rolls already in play. Roll in three times and keep all those EnchantWorld effects in play.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Triple+EnchantWorldLand"
        },
        {
          name: "CounterRoll",
          effect: "Get a CounterRoll counter. Sacrifice CounterRoll to counter the effects of any roll.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=CounterRoll"
        },
        {
          name: "Swords To Plowshares",
          effect: "Exile target creature. Its controller gains life equal to its power.",
          picture: "https://cards.scryfall.io/art_crop/front/2/5/255099be-c64e-4f6a-8463-4fc058d6908d.jpg?1559591712"
        },
        {
          name: "Price of Support",
          effect: "Sacrifice a creature. Put 4 Spirit tokens onto the battlefield. Treat these tokens as 1/1 creatures that are all colors.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Price+of+Support"
        },
        {
          name: "TimeTwister",
          effect: "Each player shuffles their hand and graveyard into their library, then draws seven cards.",
          picture: "https://cards.scryfall.io/art_crop/front/0/1/01bda3d7-122a-48a0-bab3-676c4a557b74.jpg?1559592242"
        },
        {
          name: "Misfortune",
          effect: "An opponent chooses one: you put a +1/+1 counter on each creature you control and gain four life or you put a -1/-1 counter on each creature that player controls that player takes four damage.",
          picture: "https://cards.scryfall.io/art_crop/front/b/1/b14cc32a-eb4f-4690-aceb-160780743ebe.jpg?1562770145"
        },
        {
          name: "Hymn of Rebirth",
          effect: "Put target creature card from a graveyard onto the battlefield under your control.",
          picture: "https://cards.scryfall.io/art_crop/front/6/1/61d0f2f2-f6e2-4b8a-8418-10b17c5e0ea9.jpg?1562913092"
        },
        {
          name: "Sift",
          effect: "Draw three cards, then discard a card.",
          picture: "https://cards.scryfall.io/art_crop/front/b/f/bf5b23da-9ba8-4b43-a5c9-51e1fc253913.jpg?1587857357"
        },
        {
          name: "RollFork",
          effect: "Get a RollFork Counter. Sacrifice RollFork to duplicate the effects of any roll just rolled. You choose all new targets.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=RollFork"
        },
        {
          name: "Conjure",
          effect: "Search your library for an artifact and put it directly onto the battlefield. Shuffle your library afterwards.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Conjure"
        },
        {
          name: "Helm of Obedience",
          effect: "Target opponent mills a card, then repeats this process until a creature card or 1d6 cards have been put into their graveyard this way, whichever comes first. If one or more creature cards were put into that graveyard this way, sacrifice this artifact and put one of them onto the battlefield under your control.",
          picture: "https://cards.scryfall.io/art_crop/front/b/1/b17e9216-b1ed-4101-a04e-2bb139ccfa55.jpg?1562770147"
        },
        {
          name: "Balloon",
          effect: "Each time you tap a land for mana this turn, gain 1 life.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Balloon"
        },
        {
          name: "Lucky Us",
          effect: "All players reveal the top card of their library. If that card is a planeswalker, creature, enchantment, artifact, or land card, they put it directly onto the battlefield. If it is an instant or sorcery, they cast it without paying its casting cost.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Lucky+Us"
        },
        {
          name: "Rediscovery",
          effect: "All cards that have been exiled face up are reshuffled into their owner's libraries.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Rediscovery"
        },
        {
          name: "PersonaLand",
          effect: "Roll in PersonaLand.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=PersonaLand"
        },
        {
          name: "Diminishing Returns",
          effect: "Each player shuffles their hand and graveyard into their library and removes the top four cards of their library from the game. Then each player draws up to seven cards.",
          picture: "https://cards.scryfall.io/art_crop/front/a/3/a375ec24-4841-4792-ad58-f29cdf0d1bbb.jpg?1562769689"
        },
        {
          name: "Power Surge",
          effect: "Take one damage for each land you have untapped.",
          picture: "https://cards.scryfall.io/art_crop/front/0/b/0b5717af-a1a3-45cb-8b05-7543eed5532a.jpg?1559604134"
        },
        {
          name: "Ancestral Lands",
          effect: "Search your library for a basic land card of each type you do not control and put those lands onto the battlefield.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Ancestral+Lands"
        },
        {
          name: "WackyLand",
          effect: "Roll in WackyLand.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=WackyLand"
        },
        {
          name: "Chaos Storm",
          effect: "Roll twice and reverse the direction of turns.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Chaos+Storm"
        },
        {
          name: "Innocent Blood",
          effect: "Each player sacrifices a creature of their choice.",
          picture: "https://cards.scryfall.io/art_crop/front/d/2/d26af8f6-df64-4027-880c-f2fae2d8103f.jpg?1562934288"
        },
        {
          name: "Weissman Charm",
          effect: "Choose one: "+
                    "<ul><li>Deal one damage to any number of targets and draw a card</li>"+
                    "<li>Draw enough cards to have one more card in hand than the player who currently has the most cards in hand.</li></ul>",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Weissman+Charm"
        },
        {
          name: "Global Half-Hymn",
          effect: "Each player chooses and discards one card.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Global+Half-Hymn"
        },
        {
          name: "Trade-In",
          effect: "Sacrifice a creature. Place target creature from your graveyard or your hand onto the battlefield.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Trade-In"
        },
        {
          name: "Go Fish",
          effect: "Name a non-land card. Look at all players' hands and put all copies of the named card into your hand. If no one has that card, draw a card (go fish).",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Go+Fish"
        },
        {
          name: "Blessed Wine",
          effect: "Gain one life. Draw a card.",
          picture: "https://cards.scryfall.io/art_crop/front/6/b/6b9a92f9-9bbc-4887-9fbc-0f7212fd5e66.jpg?1562914952"
        },
        {
          name: "Psionic Blast",
          effect: "Psionic Blast deals 4 damage to any target and 2 damage to you.",
          picture: "https://cards.scryfall.io/art_crop/front/7/3/73b6b789-00c5-4d72-8fb3-6808bfbf0144.jpg?1559591500"
        },
        {
          name: "Vampiric Tutor",
          effect: "Search your library for a card, then shuffle and put that card on top. You lose 2 life. At the beginning of your upkeep, you may pay {B} or 2 life to draw that card.",
          picture: "https://cards.scryfall.io/art_crop/front/0/a/0a07cba3-2e8d-48ec-a6f8-4d2edfcd833d.jpg?1562276960"
        },
        {
          name: "Shortcut",
          effect: "Target creature gains a landwalk ability of your choice.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Shortcut"
        },
        {
          name: "Enchant WorldLand",
          effect: "Roll in EnchantWorldLand.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Enchant+WorldLand"
        },
        {
          name: "Time Walk",
          effect: "Take an extra turn after this one.",
          picture: "https://cards.scryfall.io/art_crop/front/5/4/54992fda-45a9-4ed1-b380-34d167feec90.jpg?1559591520"
        },
        {
          name: "Wanna Bet?",
          effect: "Pick an opponent and a card they control. They pick one of yours. Flip a coin. Winner gets control of loser's card.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Wanna+Bet%3F"
        },
        {
          name: "Hurricane",
          effect: "Hurricane deals 1d6 damage to each creature with flying and each player.",
          picture: "https://cards.scryfall.io/art_crop/front/b/3/b3939f72-1ec6-4b2c-b37e-b1ebb024bb8f.jpg?1559591593"
        },
        {
          name: "Lat-Nam's Legacy",
          effect: "Shuffle a card from your hand into your library. If you do, draw two cards.",
          picture: "https://cards.scryfall.io/art_crop/front/c/d/cd3b0741-dd5e-4d98-a50b-19a0f20dd72c.jpg?1562770176"
        },
        {
          name: "Magical Sleight",
          effect: "Change all occurrences of one mana symbol on any card in play to any other mana symbol. This change does not end at the end of the turn.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Magical+Sleight"
        },
        {
          name: "Spring Cleaning",
          effect: "Destroy all lands. As many times as a player wishes, they may pay one life to prevent up to two of their lands from being destroyed in this manner.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Spring+Cleaning"
        },
        {
          name: "Brandish",
          effect: "All cards in all libraries, in all hands, and on the battlefield but not controlled by their owner go to their owner's graveyard.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Brandish"
        },
        {
          name: "East Wind",
          effect: "As long as you remain in the game, until your next turn if no other player is affected by East Wind, whenever any player would gain life, you gain it instead.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=East+Wind"
        },
        {
          name: "Fall Harvest",
          effect: "Sacrifice a land: gain life equal to the number of remaining land you control.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Fall+Harvest"
        },
        {
          name: "Steal Artifact",
          effect: "Gain control of target artifact.",
          picture: "https://cards.scryfall.io/art_crop/front/9/2/92c14d4d-abaa-411a-aaa1-0b79fccee8c1.jpg?1559591715"
        },
        {
          name: "Feast or Famine",
          effect: "Choose one: "+
                    "<ul><li>Destroy target nonartifact, nonblack creature. It can’t be regenerated.</li>"+
                    "<li>Create a 2/2 black zombie token.</li></ul>",
          picture: "https://cards.scryfall.io/art_crop/front/f/4/f4ac1586-c3d5-4add-bade-b527dcf4a391.jpg?1562770658"
        },
        {
            //how do we do this well?
          name: "Chaos Tune",
          effect: "Choose any roll from the Chaos List. Resolve this roll as if it was the chosen roll.",
          picture: "https://placehold.co/600x400/FF4136/FFFFFF?font=lora&text=Chaos+Tune"
        }
];
