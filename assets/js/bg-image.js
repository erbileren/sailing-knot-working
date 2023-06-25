window.addEventListener("load", bgImage);

async function bgImage() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  var images = [];

  await fetch("/images.json")
    .then((response) => response.json())
    .then((json) => (images = json));

  const item = getRandomInt(images.length);

  document.querySelector("body").style.backgroundImage = "url('./assets/img/album/"+images[item]+"')";
};

