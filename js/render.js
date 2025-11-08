// js/render.js
import { parseIngredients, $ } from './utils.js';

/**
 * renderMeal(meal)
 * - Inject meal details into DOM
 * - Show image, title, ingredients, and instructions
 * - Handle optional YouTube video
 */
export function renderMeal(meal) {
  // pseudocode:
  // const titleEl = $('#meal-title');
  // const imgEl = $('#meal-image');
  // const ingredientsEl = $('#ingredients');
  // const instructionsEl = $('#instructions');
  // const videoEl = $('#video');
  //
  // titleEl.textContent = meal.strMeal;
  // imgEl.src = meal.strMealThumb;
  // ingredientsEl.innerHTML = ''; // clear old list
  //
  // const list = parseIngredients(meal);
  // list.forEach(({ingredient, measure}) => {
  //   const li = document.createElement('li');
  //   li.textContent = `${ingredient} - ${measure}`;
  //   ingredientsEl.appendChild(li);
  // });
  //
  // instructionsEl.textContent = meal.strInstructions;
  //
  // // YouTube video bonus
  // if (meal.strYoutube) {
  //   const embedUrl = meal.strYoutube.replace('watch?v=', 'embed/');
  //   videoEl.innerHTML = `<iframe src="${embedUrl}" allowfullscreen></iframe>`;
  //   videoEl.classList.remove('hidden');
  // } else {
  //   videoEl.classList.add('hidden');
  // }
  //
  // $('#meal').classList.remove('hidden');
}

/**
 * showLoading(isLoading)
 */
export function showLoading(isLoading) {
  // pseudocode:
  // const loading = $('#loading');
  // const btn = $('#random-btn');
  // if (isLoading) {
  //   loading.classList.remove('hidden');
  //   btn.disabled = true;
  // } else {
  //   loading.classList.add('hidden');
  //   btn.disabled = false;
  // }
}

/**
 * showError(message)
 */
export function showError(message) {
  // pseudocode:
  // const errorEl = $('#error');
  // errorEl.textContent = message;
  // errorEl.classList.remove('hidden');
}
