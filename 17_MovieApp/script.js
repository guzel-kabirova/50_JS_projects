const API_KEY = '298058c5dcd2225ccc5c06e75c90e256';
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
const IMG_API = `https://image.tmdb.org/t/p/w1280`;
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const form = document.getElementById('form');
const search = document.getElementById('search');
const filmsContainer = document.getElementById('films');

const getRatingColor = (rating) => {
    if (rating >= 7) {
        return 'green';
    } else if (rating >= 5) {
        return 'orange';
    } else {
        return 'red';
    }
};

const setFilms = (films) => {
    filmsContainer.innerHTML = '';
    films.forEach(film => {
        const {
            overview: description,
            poster_path: imgPath,
            title: filmName,
            vote_average: rating
        } = film;
        const filmsContainerEl = document.createElement('div');
        filmsContainerEl.classList.add('film-card');
        filmsContainerEl.innerHTML = `
        <div class="film-img-container">
        <img class="film-img" 
        width="300px"
        alt="Постер ${filmName}" 
        src="${IMG_API + imgPath}">
        </div>
        <div class="film-main-info">
            <h2 class="film-name">${filmName}</h2>
            <span class="film-rating ${getRatingColor(rating)}">${rating}</span>
        </div>
        <div class="film-description">
            <h2>Описание</h2>
            <p>${description}</p>
        </div>
        `;
        filmsContainer.appendChild(filmsContainerEl);
    });
};

const getFilms = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setFilms(data.results);
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = search.value.trim();
    if (value) {
        getFilms(SEARCH_URL + value);
        search.value = '';
    } else {
        window.location.reload();
    }
});

getFilms(API_URL);