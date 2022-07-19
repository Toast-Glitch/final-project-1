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


const searchInput = `pizza`;

// const button = document.querySelector(".button");
// const recipeText = document.querySelector(".recipe");

function fetchMeals() {
  //API Key
  const apikey = ('');
  //API URL   // API Parameters
  const mealsURL = (`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apikey}&query=${searchInput}`,
    { addRecipeInformation: "true" });
  //   addRecipeNutrition: "true",
  //   instructionsRequired: "true"
  // });
  // Fetch API Data
  fetch(mealsURL)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
};