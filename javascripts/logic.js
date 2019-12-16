"use strict";

const movies = [];

const movieList = document.getElementById("movie-list");
const addNewBtn = document.getElementById("add-new-btn");
const addNewModal = document.getElementById("modal");
const formMovieTitle = document.getElementById("form-movie-title");
const formMovieCategory = document.getElementById("form-movie-category");
const formAddNewSubmitBtn = document.getElementById("submit-form-btn");
const formPicture1 = document.getElementById("form-picture-1");
const formPicture2 = document.getElementById("form-picture-2");
const formPicture3 = document.getElementById("form-picture-3");
const addNewForm = document.getElementById("add-new-form");
const sortDescBtn = document.getElementById("sort-desc-btn");
const sortAscBtn = document.getElementById("sort-asc-btn");
const firstImageBtn = document.getElementById("carousel-button-1");
const secondImageBtn = document.getElementById("carousel-button-2");
const thirdImageBtn = document.getElementById("carousel-button-3");
const firstImageDiv = document.getElementById("carousel-item-1");
const secondImageDiv = document.getElementById("carousel-item-2");
const thirdImageDiv = document.getElementById("carousel-item-3");
const firstImageShown = document.getElementById("picture-1");
const secondImageShown = document.getElementById("picture-2");
const thirdImageShown = document.getElementById("picture-3");
const carouselPanel = document.getElementById("carousel-panel");
const updateBtn = document.getElementById("update-btn");
const updateFormBtn = document.getElementById("update-form-btn");
const updateModal = document.getElementById("update-modal");
const updateForm = document.getElementById("update-form");
const updateFormMovieTitle = document.getElementById("update-form-movie-title");
const updateFormMovieCategory = document.getElementById(
  "update-form-movie-category"
);
const updateFormPicture1 = document.getElementById("update-form-picture-1");
const updateFormPicture2 = document.getElementById("update-form-picture-2");
const updateFormPicture3 = document.getElementById("update-form-picture-3");
const updateIndex = document.getElementById("update-index");
const carouselExitBtn = document.getElementById("carousel-button-exit");
const searchText = document.getElementById("search-text");
const searchBtn = document.getElementById("search-btn");
const searchForm = document.getElementById("search-form");

function addMovie(movieTitle, movieCategory, picture1, picture2, picture3) {
  const url = "./assets/movies/";
  const movieToPush = new Movie(
    movieTitle,
    movieCategory,
    url + picture1,
    url + picture2,
    url + picture3
  );
  movies.push(movieToPush);
}

function addNewMovie() {
  addMovie(
    formMovieTitle.value,
    formMovieCategory.value,
    formPicture1.value,
    formPicture2.value,
    formPicture3.value
  );
  resetAddForm();
  refreshApp();
}

function checkTitleForm() {
  return formMovieTitle.value != "";
}

function checkCategoryForm() {
  return formMovieCategory.value != "";
}

function changeSubmitBtn() {
  formAddNewSubmitBtn.disabled = !checkTitleForm() || !checkCategoryForm();
}

function sortDescMovies() {
  for (let j = 0; j < movies.length - 1; j++) {
    for (let i = 0; i < movies.length - 1; i++) {
      if (movies[i].movieTitle < movies[i + 1].movieTitle) {
        let tempMovie = movies[i];
        movies[i] = movies[i + 1];
        movies[i + 1] = tempMovie;
      }
    }
  }
}

function sortAscMovies() {
  for (let j = 0; j < movies.length - 1; j++) {
    for (let i = 0; i < movies.length - 1; i++) {
      if (movies[i].movieTitle > movies[i + 1].movieTitle) {
        let tempMovie = movies[i];
        movies[i] = movies[i + 1];
        movies[i + 1] = tempMovie;
      }
    }
  }
}

function openMovie(index) {
  firstImageShown.src = movies[index].imgSrc1;
  secondImageShown.src = movies[index].imgSrc2;
  thirdImageShown.src = movies[index].imgSrc3;
  carouselPanel.style.display = "flex";
}

function setUpdateForm(index) {
  updateFormMovieTitle.value = movies[index].movieTitle;
  updateFormMovieCategory.value = movies[index].movieCategory;
  updateFormPicture1.value = movies[index].imgSrc1.slice(16);
  updateFormPicture2.value = movies[index].imgSrc2.slice(16);
  updateFormPicture3.value = movies[index].imgSrc3.slice(16);
  updateIndex.value = index;
  updateModal.style.display = "flex";
}

function updateMovie() {
  movies.splice(updateIndex.value, 1);
  addMovie(
    updateFormMovieTitle.value,
    updateFormMovieCategory.value,
    updateFormPicture1.value,
    updateFormPicture2.value,
    updateFormPicture3.value
  );
  resetUpdateForm();
  refreshApp();
}

function removeMovie(index) {
  movies.splice(index, 1);
  refreshApp();
}

function nextImage(imageNumber) {
  firstImageDiv.style.display = "none";
  secondImageDiv.style.display = "none";
  thirdImageDiv.style.display = "none";
  firstImageBtn.disabled = false;
  secondImageBtn.disabled = false;
  thirdImageBtn.disabled = false;
  switch (imageNumber) {
    case 1:
      firstImageDiv.style.display = "flex";
      firstImageBtn.disabled = true;
      break;
    case 2:
      secondImageDiv.style.display = "flex";
      secondImageBtn.disabled = true;
      break;
    case 3:
      thirdImageDiv.style.display = "flex";
      thirdImageBtn.disabled = true;
      break;
    default:
      console.log("Something is wrong");
  }
}

function resetAddForm() {
  formMovieTitle.value = "";
  formMovieCategory.value = "";
  formPicture1.value = "";
  formPicture2.value = "";
  formPicture3.value = "";
}

function resetUpdateForm() {
  updateFormMovieTitle.value = "";
  updateFormMovieCategory.value = "";
  updateFormPicture1.value = "";
  updateFormPicture2.value = "";
  updateFormPicture3.value = "";
}

function chooseFirstImage() {
  nextImage(1);
}

function chooseSecondImage() {
  nextImage(2);
}

function chooseThirdImage() {
  nextImage(3);
}

function searchMovies(text) {
  return movies.filter(function(movie) {
    return (
      movie.movieCategory.toLowerCase().includes(text.toLowerCase()) ||
      movie.movieTitle.toLowerCase().includes(text.toLowerCase())
    );
  });
}
