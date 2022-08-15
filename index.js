
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
const searchInput = document.getElementById("search-input");


function fetchRecipes(e) {
  // API Key + ID
  const apikey = ('');
  const apiId = ('');
  let searchValue = e.target.value;
  const apiUrl = (`https://api.edamam.com/api/recipes/v2?type=public&app_id=${apiId}&app_key=${apikey}` + `&q=${searchValue}`)
  // Fetch Request
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.hits)
    })
    .catch((error) => {
      console.error(error)
    })
}

// Renderers
function renderHomePage() {
  // Create HTML for Homepages
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

  h1.innerText = "Search Our Database!"

  mainDiv().appendChild(h1);

}

// DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  renderHomePage();
  favoritesListEvent();
  homePageEvent();
  randomRecipeEvent();
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

searchInput.addEventListener('change', fetchRecipes);








