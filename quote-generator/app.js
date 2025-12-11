const quote = document.getElementById("quote");
const author = document.getElementById("author");

let loading = false;

const apiUrl = "https://dummyjson.com/quotes/random";

async function getQuote(url) {
  if (loading) return;

  loading = true;

  try {
    const response = await fetch(url);
    const data = await response.json();

    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
  } catch (error) {
    quote.innerHTML = "Erro ao carregar a frase.";
    author.innerHTML = "";
  }

  loading = false;
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
