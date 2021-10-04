const joke = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

const getJoke = async () => {
    const url = 'https://icanhazdadjoke.com/';
    const obj = {
        headers: {'Accept': 'application/json'}
    }
    const response = await fetch(url, obj);
    const data = await response.json();
    joke.innerText = data.joke;
}

// const getJoke = () => {
//     const url = 'https://icanhazdadjoke.com/';
//     const obj = {
//         headers: {'Accept': 'application/json'}
//     }
//
//     fetch(url, obj)
//         .then(response => response.json())
//         .then(data => joke.innerText = data.joke)
// }

jokeBtn.addEventListener('click', getJoke)
