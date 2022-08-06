/** 
 * 3 Question Rule for Events 
 * Think about the full feature.
 * At what time can I perform the feature?
 * What will trigger the event?
 * Effect that the event will cause?

 * Use at least 3 unique event-listeners that enable interactivity. Think search or filter functionality, toggling dark/light mode, upvoting posts, etc. Each of your event listeners should have its own unique callback function.
 
 * Your project must implement at least one instance of array iteration using available array methods (map, forEach, filter, etc). Manipulating your API data in some way should present an opportunity to implement your array iteration.

 * Follow good coding practices. Keep your code DRY (Do not repeat yourself) by utilizing functions to abstract repetitive code.
**/

// Node Getters
const mainDiv = document.getElementById('main');
const searchBar = document.getElementById('recipe-search');
const searchButton = document.getElementById('button');

// Globals
let htmlData = [];
let inputText;

// API Info + Set up
function fetchRecipes() {
  if (searchBar.value !== "") {
    inputText.value;
  }
  const configURL = ('')
  //API Key + ID
  const apikey = ('');
  const apiId = ('');
  //API URL
  let recipesURL = configURL + inputText + "&" + apiId + apikey;
  // Fetch API Data
  fetch(recipesURL)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      if (data.length > 0) {
        // Render Recipe Cards
        htmlData = data;
        // searchResults.innerHTML = JSON.stringify(htmlData);
        renderCards();
      }
      else {
        searchResults.innerHTML = 'Sorry, no recipes found!';
      }
    })
};
//         const html = renderCards(data).join("");
//         searchResults.insertAdjacentHTML("afterbegin", html);
//       }
//       else {
//         searchResults.innerHTML = 'Sorry, recipes not found!'
//       }
//     });
// }
// const searchResults = document.getElementById('recipe-search-results');

let searchResults = document.createElement('div');
searchResults.appendChild()
searchResults.innerHTML = "";
return data.map(recipeCard => {
  return `<h1>Results</h1>
      <div class="row">
      <div class="col s12 m7">
      <div class="recipe-card">
      <div class="card-image">
        '<img src= "'+dataHTML[i]/image'"'
      <span class="card-title">${recipeCard.recipe.label}</span>
      </div>
      <div class="card-content">
        <p>Ingredients:
        ${recipeCard.recipe.ingredientLines}
        </p>
      </div>
      <div id=meal-card-link class="card-action">
        <a href="#">${recipeCard.recipe.url}</a>
      </div>
      </div>
      </div
      </div>`
})
  // searchResults.innerHTML += recipeCard;
};


// Events
function searchEvent() {
  searchBar.addEventListener('submit', (e) => {
    e.preventDefault();
    fetchRecipes(e.target);
  })
};

