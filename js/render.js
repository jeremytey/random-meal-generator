// js/render.js
import { parseIngredients } from './utils.js';


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
  container.classList.remove('hidden');
}


export function renderError(message) {
  const errorDiv = document.querySelector('#error');
  errorDiv.innerHTML = '';
  errorDiv.textContent = message;
  errorDiv.style.color = 'red';
  errorDiv.classList.remove('hidden');
  
}


export function clearMealDisplay() {
  const container = document.querySelector('#meal');
  container.classList.add('hidden');

  const errorDiv = document.querySelector('#error');
  errorDiv.classList.add('hidden');
  errorDiv.textContent = '';
}

export function renderYouTube(meal) {
  const video = document.querySelector('#video');
  video.innerHTML = '';

  if (meal.strYoutube) {
    let videoId;
    
    // Handle both URL formats
    if (meal.strYoutube.includes('v=')) {
      videoId = meal.strYoutube.split('v=')[1].split('&')[0]; 
    } else if (meal.strYoutube.includes('youtu.be/')) {
      videoId = meal.strYoutube.split('youtu.be/')[1].split('?')[0]; 
    }
    
    if (videoId) {
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${videoId}`;
      iframe.width = '560';
      iframe.height = '315';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      videoContainer.appendChild(iframe);
      videoContainer.classList.remove('hidden');
    }
  } else {
    videoContainer.classList.add('hidden'); // 
  }
}