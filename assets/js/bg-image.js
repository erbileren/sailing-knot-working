window.addEventListener("load", bgImage);

async function bgImage() {
  var images = [];

  await fetch("./images.json")
    .then((response) => response.json())
    .then((json) => (images = json));

  showBg(images);

  var x = setInterval(function () {
    showBg(images);
  }, 1 * 60 * 1000);
}

function showBg(images) {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const item = getRandomInt(images.length);

  document.querySelector("body").style.backgroundImage =
    "url('./assets/img/album/" + images[item] + "')";
}
