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
const mainDiv = () => document.getElementById('main');
const recipesContainer = () => document.getElementById('recipeCardContainer');
// const homePageLink = () => document.getElementById('home-page-link');


// Templates
// const homePageTemplate = () => {
//   return 'mainDiv()'
// };


//Renderers
// const renderMealResults = () => {
// }
// const renderHomePage = () => {
//   mainDiv().innerHTML = homePageTemplate;
// }


// When the DOM Loads
// document.addEventListener('DOMContentLoaded', () => {
//   renderHomePage();
//   homePageLinkEvent();
// })


// Events
const renderRecipeCards = (recipeArr = []) => {
  recipeArr.forEach((recipeCard) => {
    const { label: recipeName,
      ingredientLines: ingredients,
      image: recipeImg
    } = recipeCard.recipe;
    const renderIngredientsList = (ingredientLines = []) => {
      let str = '';
      for (var ingredient of ingredientLines) {
        string = str + `<li>${ingredient}</li>`;
        return string;
      }
      const htmlStr = (`
      <div class="row">
      <div class="col s12 m7">
      <div class="recipe-card">
      <div class="card-image">
        <img src="${recipeImg}">
      <span class="card-title">${recipeName}</span>
      </div>
      <div class="card-content">
        <p>
        ${renderIngredientsList}
        </p>
      </div>
      <div id=meal-card-link class="card-action">
        <a href="#"> link</a>
      </div>
    </div>
  </div>
</div>`
      )
    }
  });
};

// const homePageLinkEvent = () => {
//   homePageLink().addEventListener('click', (e) => {
//      renderHomePage();
//   })
// };


// API Info + Set up
const searchInput = 'pizza';

function fetchRecipes() {
  //API Key + ID
  const apikey = ();
  const apiId = ();
  //API URL + Parameters
  const recipesURL = (`https://api.edamam.com/api/recipes/v2?type=public&q=${searchInput}&app_id=${apiId}&app_key=${apikey}`);

  // Fetch API Data
  fetch(recipesURL)
    .then(response => response.json())
    .then((data) => { console.log(renderRecipeCards(data.hits)) })
};