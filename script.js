// selected elements section
const addTitleInput = document.querySelector('.addTitle');
const addRatingInput = document.querySelector('.addRating');
const addMovieButton = document.querySelector('.addMovie');
const topMoviesButton = document.querySelector('.topMovies');

//add and rate a movie text box 

addMovieButton.addEventListener('click', () => {

   	let table = document.querySelector('table tbody');
    let rowContent = `<tr><td>${addTitleInput.value}</td><td class = "rating">${addRatingInput.value}</td></tr>`;

    table.innerHTML = rowContent; 

});

// Hilighted top movies 

topMoviesButton.addEventListener('click', () => {
  let ratings = document.querySelectorAll('.rating');

  for (let i = 0; i < ratings.length; i++) {
    if (ratings[i].textContent == 5) {
      let currentRow = ratings[i].parentNode;
      currentRow.className = 'topRated';
    }
  }
});