window.addEventListener("load", quote);

async function quote() {
  var quotes = [];

  await fetch("./quotelist.json")
    .then((response) => response.json())
    .then((json) => (quotes = json));

  showQuote(quotes);

  var x = setInterval(function () {
    showQuote(quotes);
  }, 1 * 60 * 1000);
}

function showQuote(quotes) {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const item = getRandomInt(quotes.length);

  document.getElementById(
    "quote"
  ).innerHTML = `${quotes[item].quote} <br> - ${quotes[item].author}`;
}
