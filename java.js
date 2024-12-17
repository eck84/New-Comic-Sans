    const connareImage = document.getElementById('connare');
    const sound = document.getElementById('hoverSound');

    connareImage.addEventListener('mouseover', function() {
      sound.play();
    });

    connareImage.addEventListener('mouseout', function() {
      sound.pause();
      sound.currentTime = 0;  