const jokeContainer = document.getElementById('joke');
const btn = document.getElementById('btn');
const url = 'https://v2.jokeapi.dev/joke/Any';

let getJoke = () => {
    jokeContainer.classList.remove('fade');
    fetch(url)
        .then(res => res.json())
        .then(item => {
            if (item.type === 'single') {
                jokeContainer.textContent = item.joke;
            } else if (item.type === 'twopart') {
                jokeContainer.textContent = `${item.setup} — ${item.delivery}`;
            }
            jokeContainer.classList.add('fade');
        })
        .catch(err => {
            jokeContainer.textContent = "Oops! Couldn't fetch a joke.";
            console.error(err);
        });
};

btn.addEventListener('click', getJoke);
getJoke();
