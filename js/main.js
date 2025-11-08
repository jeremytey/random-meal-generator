// js/main.js
import { fetchRandomMeal } from './api.js';
import { renderMeal, showLoading, showError } from './render.js';
import { $ } from './utils.js';

async function onRandomButton() {
  try {
    showError(''); // clear old errors
    showLoading(true);
    const meal = await fetchRandomMeal();
    if (!meal) throw new Error('No meal found');
    renderMeal(meal);
  } catch (err) {
    showError(err.message);
  } finally {
    showLoading(false);
  }
}

function init() {
  document.addEventListener('DOMContentLoaded', () => {
    $('#random-btn').addEventListener('click', onRandomButton);
  });
}

init();
