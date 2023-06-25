window.addEventListener("load", quote);


async function quote() {
  document.getElementById("quote-refresh").addEventListener('click', function(){ quote();}, false);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  var quotes = [];

  await fetch("/assets/quotes/list.json")
    .then((response) => response.json())
    .then((json) => (quotes = json));

  const item = getRandomInt(quotes.length);

  document.getElementById(
    "quote"
  ).innerHTML = `${quotes[item].quote} <br> - ${quotes[item].author}`;
}
