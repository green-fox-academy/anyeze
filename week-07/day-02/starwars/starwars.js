'use strict'

const url = "https://swapi.co/api/";
const xhr = new XMLHttpRequest();
const body = document.querySelector('body');
const form = document.createElement('form');
const label = document.createElement('h1');
const inputField = document.createElement('input');
const btn = document.createElement('button');
const container = document.createElement('div');
const characterList = document.createElement('div');
const filmList = document.createElement('div');

form.appendChild(label);
form.appendChild(inputField);
form.appendChild(btn);

label.innerText = "Enter a character name";
inputField.type = "text";
inputField.setAttribute('type', 'text');
btn.innerText = "Search";
btn.setAttribute('type', 'submit');
btn.setAttribute('id', 'search');

body.appendChild(form);

container.setAttribute('id', 'container');
characterList.setAttribute('id', 'characterlist');
filmList.setAttribute('id', 'filmlist');

container.appendChild(characterList);
container.appendChild(filmList);
body.appendChild(container);

form.addEventListener('submit', event => {
    event.preventDefault();
    emptyCharacterList();
    emptyFilmList();
    const searchedCharacter = form.querySelector('input').value;
    xhr.open('GET', `${url}people/?search=${searchedCharacter}`);
    xhr.onload = () => {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            displayName(response);
        }
    }
    xhr.send();
});

characterList.addEventListener('click', event => {
    event.preventDefault();
    const selectedCharacter = event.target.innerHTML;
    xhr.open('GET', `${url}people/?search=${selectedCharacter}`);
    xhr.onload = () => {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            displayFilm(response);
            emptyFilmList();
        }
    }
    xhr.send();
})

const displayName = (response) => {
    response.results.forEach(character => {
        let characterName = character.name;
        let characterElement = document.createElement('p');
        characterElement.innerText = characterName;
        characterList.appendChild(characterElement);
    });
};

const displayFilm = (response) => {
    console.log(response);
    response.results[0].films.forEach(e => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', e);
        xhr.onload = () => {
            if (xhr.status === 200) {
                let responseFilms = JSON.parse(xhr.responseText);
                let title = responseFilms.title;
                let film = document.createElement('p');
                film.innerText = title;
                filmList.appendChild(film)
            }
        }
        xhr.send();
    });
}

const emptyCharacterList = () => {
    characterList.innerHTML = '';
};

const emptyFilmList = () => {
    filmList.innerHTML = '';
};
