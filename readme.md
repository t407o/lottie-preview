# Prerequisites

```
 curl -O -L https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js
```

# Use without chrome

- execute following commannds
- open `lottie-player/index.html` in browser (to distribute, zip the folder and share)

```
mkdir -p lottie-player

cp popup.html lottie-player/index.html
cp popup.js lottie-player/index.js

sed -i '' 's|./lottie-player.js|https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js|g' lottie-player/index.html
sed -i '' 's|popup.js|index.js|g' lottie-player/index.html
```
