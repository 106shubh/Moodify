
  const audioFiles = [
    new Audio('rain.wav'),
    new Audio('thunder.mp3'),
    new Audio('chopping.wav'),
    new Audio('koelsound.mp3'),
    new Audio('fire.mp3'),
    new Audio('ocean.mp3'),
    new Audio('wind-blowing-sfx-12809.mp3'),
    new Audio('owl-hoot-73006.mp3')
  ];

  // Make sure all audios loop
  audioFiles.forEach(audio => {
    audio.loop = true;
    audio.volume = 0.5; // default 50%
  });

  function playAll() {
    audioFiles.forEach(audio => audio.play());
  }

  function setVolume(index, value) {
    const volume = value / 100;
    audioFiles[index].volume = volume;
  }

  let isPlaying = false;

  function togglePlay() {
    if (!isPlaying) {
      audioFiles.forEach(audio => audio.play());
      isPlaying = true;
      document.querySelector('.play-button').innerText = '⏸️';
    } else {
      audioFiles.forEach(audio => audio.pause());
      isPlaying = false;
      document.querySelector('.play-button').innerText = '▶';
    }
  }
  //hamburger menu 
  function toggleHamburgerMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('active');
  }