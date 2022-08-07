
//Globals
function clearPage() {
  mainDiv().innerHTML = ""
}

//Nodes
const mainDiv = () => document.getElementById('main');
const favoritesPage = () => document.getElementById('favorites-list-link');
const homePageLink = () => document.getElementById('homepage-link');
const randomRecipePage = () => document.getElementById('random-recipe-link');

//Renderers
function renderHomePage() {
  //Create HTML for Homepage
  clearPage();

  const h1 = document.createElement("h1");
  const p = document.createElement("p");

  h1.innerText = "Welcome To The Little Cookbook!"
  p.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"

  mainDiv().appendChild(h1);
  mainDiv().appendChild(p);
}

function renderFavoritesPage() {
  clearPage();

  const h1 = document.createElement("h1");
  const ul = document.createElement("ul");
  const li = document.createElement("li");

  h1.innerText = "Favorite Recipes"
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

//Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  renderHomePage();
  favoritesListEvent();
  homePageEvent();
  randomRecipeEvent();
})

function favoritesListEvent() {
  favoritesPage().addEventListener("click", renderFavoritesPage);
}

function homePageEvent() {
  homePageLink().addEventListener("click", renderHomePage);
}

function randomRecipeEvent() {
  randomRecipePage().addEventListener("click", renderRandomRecipePage);
}
