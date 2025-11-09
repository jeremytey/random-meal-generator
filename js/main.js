// js/main.js
import { fetchRandomMeal } from './api.js';
import { renderMeal, renderError, clearMealDisplay,renderYouTube } from './render.js';
import { parseIngredients } from './utils.js';

// js/main.js (The Controller)


  const button = document.getElementById('random-btn');
  const loadingIndicator = document.querySelector('#loading');
  

  async function handleNewMealClick() {
  loadingIndicator.classList.remove('hidden');
  clearMealDisplay(); 

  try{
    const meal = await fetchRandomMeal();
    renderMeal(meal);
    renderYouTube(meal);
  } catch (error) {
    renderError('Failed to fetch a new meal. Please try again.');
  } finally {
    loadingIndicator.classList.add('hidden');
  }

// 4. Inside handleNewMealClick:
//    a. Show the loading indicator and clear previous meal display.
//    b. Use a try...catch block to call the async fetchRandomMeal().
//    c. If successful (in the try block):
//       - Call renderMeal() with the fetched data.
//       - Call renderYouTube() with the fetched data.
//    d. If it fails (in the catch block):
//       - Call renderError() with a user-friendly message.
//    e. Hide the loading indicator (in a finally block, which runs regardless of success/fail).

// 5. Attach the main function to the button click event listener.
// button.addEventListener('click', handleNewMealClick);
}

button.addEventListener('click', handleNewMealClick);
