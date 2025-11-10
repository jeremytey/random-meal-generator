// js/main.js
import { fetchRandomMeal } from './api.js';
import { renderMeal, renderError, clearMealDisplay,renderYouTube } from './render.js';

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
    console.error('❌ Caught error in handleNewMealClick:', error);
    renderError('Failed to fetch a new meal. Please try again.');
  } finally {
    loadingIndicator.classList.add('hidden');
  }


}

button.addEventListener('click', handleNewMealClick);
