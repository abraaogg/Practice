const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

const result = document.getElementById('result');
const sound = document.getElementById('sound');

const btn = document.getElementById('search-btn');

btn.addEventListener('click', () => {
    let inpWord = document.getElementById('inp-word').value;
    fetch(`${url} ${inpWord}`)
    .then((response) => response.json()).then((data) => {
        console.log(data);
        result.innerHTML = `
        <div class="word">
                <h3>${inpWord}</h3>
                <button>
                    <i class="fa-solid fa-microphone"></i>
                </button>
            </div>
            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>/sample/</p>
            </div>
            <p class="word-meaning">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae explicabo delectus ducimus, laboriosam esse nostrum dolores! Odit commodi eveniet suscipit, dolor porro tempore iusto officiis expedita, tempora pariatur, ab rerum!
            </p>
            <p class="word-example">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, accusamus.</p>
        `;
    })
})