
/*
Overall: search through api

When: DOMContentLoaded

Cause: Click search button

Effect: retrieves searched query console.log for now, render after.

*/

// Globals
function clearPage() {
  mainDiv().innerHTML = ""
}

// Nodes
const mainDiv = () => document.getElementById('main');
const favoritesPage = () => document.getElementById('favorites-list-link');
const homePageLink = () => document.getElementById('homepage-link');
const randomRecipePage = () => document.getElementById('random-recipe-link');
const searchRecipesPage = () => document.getElementById('search-recipes-link');


// Renderers
function renderHomePage() {
  // Create HTML for Homepage
  clearPage();

  const h1 = document.createElement("h1");
  const p = document.createElement("p");

  h1.innerText = "Welcome To The Little Cookbook!"
  p.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

  mainDiv().appendChild(h1);
  mainDiv().appendChild(p);
}

function renderFavoritesPage() {
  clearPage();

  const h1 = document.createElement("h1");
  const ul = document.createElement("ul");
  const li = document.createElement("li");

  h1.innerText = "Your Favorite Recipes"
  li.innerText = "This is a Favorited Recipe"

  ul.appendChild(li);
  mainDiv().appendChild(h1);
  mainDiv().appendChild(ul);
}

function renderRandomRecipePage() {
  clearPage();

  const h1 = document.createElement("h1");
  const p = document.createElement("p");

  h1.innerText = "Generate a Random Recipe"
  p.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

  mainDiv().appendChild(h1);
  mainDiv().appendChild(p);
}

function renderSearchRecipesPage() {
  clearPage();

  const h1 = document.createElement("h1");
  const div = document.createElement("div");
  const form = document.createElement("form");
  const input = document.createElement("input");
  const btn = document.createElement("button");

  h1.innerText = "Search Our Database!"


  mainDiv().appendChild(h1);

}

// DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  renderHomePage();
  favoritesListEvent();
  homePageEvent();
  randomRecipeEvent();
  searchRecipesPageEvent();
  searchInputEvent();
})

// Events
function favoritesListEvent() {
  favoritesPage().addEventListener("click", renderFavoritesPage)
};

function homePageEvent() {
  homePageLink().addEventListener("click", renderHomePage)
};

function randomRecipeEvent() {
  randomRecipePage().addEventListener("click", renderRandomRecipePage)
};

function searchRecipesPageEvent() {
  searchRecipesPage().addEventListener("click", renderSearchRecipesPage)
};

// function searchInputEvent() {
//   searchForm().addEventListener("submit", logSubmit)
// };

// function logSubmit (event) {
//   let searchQuery = "";
//   searchQuery = event.target.getElementById('search-query').value;
//   fetchRecipes(searchQuery);
//   event.preventDefault();
// }
