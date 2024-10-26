# Use as local file

- execute following commannds

```sh
mkdir -p lottie-player

cp popup.html lottie-player/index.html
cp popup.js lottie-player/index.js

sed -i '' 's|./lottie-player.js|https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js|g' lottie-player/index.html
sed -i '' 's|popup.js|index.js|g' lottie-player/index.html
```

- open `lottie-player/index.html` in browser (to distribute, zip the folder and share)

# Use as chrome extension

# Prerequisites

- execute following commannd

```sh
 curl -O -L https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js
```

- load local extention into chrome (see: https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked)

# Special Thanks

- ChatGPT (Almost all the code is taken from ChatGPT)
