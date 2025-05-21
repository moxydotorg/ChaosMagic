#!/bin/bash
# This script builds the project by running the Tailwind CSS compiler and copying necessary files to the output directory.
# It first checks if the output directory exists, and if not, creates it.
if [ ! -d ./output ]; then
  mkdir ./output
fi

# It then removes any existing files in the output directory to ensure a clean build.  
rm -rf ./output/*

# The script then runs the Tailwind CSS compiler using the specified input and output files.
./tailwinds/node_modules/.bin/tailwindcss -i ./tailwinds/input.css -o ./tailwinds/output.css

# After that, it copies the generated CSS file and other necessary files to the output directory.
cp ./tailwinds/output.css ./output/index.css
cp ChaosList.js chaosScript.js enchantWorldLand.js favicon.ico index.css index.html personaLandList.js symbols.css whackyLandList.js ./output/
