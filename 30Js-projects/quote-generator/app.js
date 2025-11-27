const quote = document.getElementById("quote");
const author = document.getElementById("author");

// New API (1 random quote)
const apiUrl = "https://dummyjson.com/quotes/random";

async function getQuote(url) {
  const response = await fetch(url);
  const data = await response.json();

  // DummyJSON format:
  // { quote: "...", author: "..." }

  quote.innerHTML = data.quote;
  author.innerHTML = data.author;
}

getQuote(apiUrl);

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      " — " +
      author.innerHTML,
    "Tweet Window",
    "width=600, height=300"
  );
}
