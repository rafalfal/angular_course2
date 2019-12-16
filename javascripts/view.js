"use strict";

function generateMovieList(movies) {
  let index = 0;
  movies.forEach(function(movie) {
    var liEvent = document.createElement("li");
    liEvent.className = "movie";
    liEvent.innerHTML =
      '<h3 name="title" class="movie-title">Title: ' +
      movie.movieTitle +
      "</h3>" +
      '<h3 class="movie-category">Category: ' +
      movie.movieCategory +
      "</h3>" +
      '<button class="open-btn" onclick="openMovie(' +
      index +
      ')">Open</button>' +
      '<button class="update-btn" onclick="setUpdateForm(' +
      index +
      ')">Update</button>' +
      '<button class="remove-btn" onclick="removeMovie(' +
      index +
      ')">Remove</button>';
    movieList.appendChild(liEvent);
    index++;
  });
  if (movies.length === 0) {
    var liEvent = document.createElement("li");
    liEvent.innerHTML = "No films";
    liEvent.className = "movie";
    movieList.appendChild(liEvent);
  }
}

function resetMovieList() {
  movieList.innerHTML = "";
}

function loadApp() {
  movies.push(
    new Movie(
      "Movie1",
      "Category1",
      "./assets/movies/nasa.jpg",
      "./assets/movies/pawel-nolbert.jpg",
      "./assets/movies/luca-baggio.jpg"
    )
  );
  movies.push(
    new Movie(
      "Movie2",
      "Category2",
      "./assets/movies/mathew-schwartz.jpg",
      "./assets/movies/marcelo-quinan.jpg",
      "./assets/movies/luca-baggio.jpg"
    )
  );
  movies.push(
    new Movie(
      "Movie3",
      "Category3",
      "./assets/movies/guillermo-ferla.jpg",
      "./assets/movies/pawel-nolbert.jpg",
      "./assets/movies/aperture-vintage.jpg"
    )
  );
  generateMovieList(movies);
  addEventListeners();
}

function refreshApp() {
  resetMovieList();
  generateMovieList(movies);
}

function search() {
  const filtredMovies = searchMovies(searchText.value);
  resetMovieList();
  generateMovieList(filtredMovies);
}

function sortDesc() {
  sortDescMovies();
  refreshApp();
}

function sortAsc() {
  sortAscMovies();
  refreshApp();
}

function showForm() {
  modal.style.display = "flex";
}
function exitCarousel() {
  carouselPanel.style.display = "none";
}
function addEventListeners() {
  addNewBtn.addEventListener("click", showForm);
  formMovieTitle.addEventListener("change", changeSubmitBtn);
  formMovieCategory.addEventListener("change", changeSubmitBtn);
  formAddNewSubmitBtn.addEventListener("click", addNewMovie);
  sortDescBtn.addEventListener("click", sortDesc);
  sortAscBtn.addEventListener("click", sortAsc);
  firstImageBtn.addEventListener("click", chooseFirstImage);
  secondImageBtn.addEventListener("click", chooseSecondImage);
  thirdImageBtn.addEventListener("click", chooseThirdImage);
  updateFormBtn.addEventListener("click", updateMovie);
  carouselExitBtn.addEventListener("click", exitCarousel);
  searchBtn.addEventListener("click", search);

  addNewForm.addEventListener("submit", function(event) {
    event.preventDefault();
    modal.style.display = "none";
  });
  updateForm.addEventListener("submit", function(event) {
    event.preventDefault();
    updateModal.style.display = "none";
  });
  searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
  });
}
