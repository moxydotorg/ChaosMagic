This is a rewrite of the Chaos webapp.
Chaos is a variant of play for Magic: the Gathering.
It adds random effects at the start of each turn. You'll "roll" on the Chaos List and do what it says before each turn.
The original game rules and list are here:
https://i.4pcdn.org/tg/1447655855551.pdf

This is a slightly altered version. This app will take care of the rolling and looking up of the effect on the list for you.
When you're instructed to roll on a different list just hit that list button for a roll.

If an effect references a die role, for example 1d6, it'll generate a roll for you and include it in italics. Feel free to use this or roll yourself. We've included some extra die roll options toward the bottom of the page.

If an effect instructs you to look through a list you can find the full list behind the options button.

To build this package, download it. In the tailwinds directory install tailwindcss (you'll need node.js installed already). I've included a simple shell script to assist with this. You can run:

installTailWind.sh

in the tailwinds directory. After that you can run the build.sh script in the app directory and it'll compile the css file and dump everything you need in the output directory.

If you're running this locally you may need "Disable Local File Restrictions" in your browser. In Sarafi in the Developer menu under "Developer Settings"
