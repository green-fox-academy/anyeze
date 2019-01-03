'use strict'

const genre = document.querySelector('#genre');
const movie = document.querySelector('#movie');
const movies = document.querySelectorAll('#movie option');
const allScifi = document.querySelectorAll('.scifi');
const allComedy = document.querySelectorAll('.comedy');
const allDrama = document.querySelectorAll('.drama');
const selectedMovie = document.querySelector('.selected');
const body = document.querySelector('body');

genre.addEventListener('change', () => {
  switch (genre.value) {
    case 'scifi':
      movies.forEach(e => {
        e.style.display = 'none';
      });
      allScifi.forEach(e => {
        e.style.display = 'inherit';
      })
      break;
    case 'drama':
      movies.forEach(e => {
        e.style.display = 'none';
      });
      allDrama.forEach(e => {
        e.style.display = 'inherit';
      })
      break;
    case 'comedy':
      movies.forEach(e => {
        e.style.display = 'none';
      });
      allComedy.forEach(e => {
        e.style.display = 'inherit';
      })
  }
})
movie.addEventListener('change', () => {
  selectedMovie.innerText = movie.value;
  // switch (movie.value){
  //   case 'Moon':
  //   body.style.background = 'url(https://cdn.empireonline.com/jpg/80/0/0/1000/563/0/north/0/0/0/0/0/t/films/17431/images/go6jnBNw2iNJKYTazt22SvxVI09.jpg) no-repeat'
  // }
  
});
