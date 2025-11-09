// js/render.js
import { parseIngredients } from './utils.js';
import { fetchRandomMeal } from './api.js';


export function renderMeal(meal) {
  const container = document.querySelector('#meal');
  const title = document.querySelector('#meal-title');
  const img = document.querySelector('#meal-image');
  const ingredientsList = document.querySelector('#ingredients');
  const instructions = document.querySelector('#instructions');

  // clear previous data
  ingredientsList.innerHTML = '';
  instructions.textContent = '';

  // fill in new data
  title.textContent = meal.strMeal;
  img.src = meal.strMealThumb;
  img.alt = meal.strMeal;

  const ingredients = parseIngredients(meal);
  ingredients.forEach(({ ingredient, measure }) => {
    const li = document.createElement('li');
    li.textContent = `${measure} ${ingredient}`;
    ingredientsList.appendChild(li);
  });

  instructions.textContent = meal.strInstructions;

  // show section
  container.classList.remove('hidden');
}


export function renderError(message) {
  const container = document.querySelector('#meal');
  container.innerHTML = '';
  const errorDiv = document.createElement('div');
  errorDiv.textContent = message;
  errorDiv.style.color = 'red';
  container.appendChild(errorDiv);
  
}


export function clearMealDisplay() {
  const container = document.querySelector('#meal');
  container.innerHTML = '';
}

export function renderYouTube(meal) {
  const video = document.querySelector('#video');
  video.innerHTML = '';
  if (meal.strYoutube) {
    const iframe = document.createElement('iframe');
    const videoId = meal.strYoutube.split('v=')[1];
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.width = '560';
    iframe.height = '315';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    video.appendChild(iframe);
    video.classList.remove('hidden');
  }
}

