#!/bin/sh
#npx tailwindcss -i ./input.css -o ./output.css --watch
npx tailwindcss -i ./input.css -o ./output.css
cp output.css ../index.css
