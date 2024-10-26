document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const lottieData = e.target.result;
        const player = document.getElementById('lottiePlayer');
        console.log(player);
        console.log(JSON.parse(lottieData));
        player.load(JSON.parse(lottieData));
      };
      reader.readAsText(file);
    }
  });
  