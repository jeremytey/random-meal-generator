// js/utils.js

/**
 * parseIngredients(meal)
 * - Extract ingredients + measures from meal object
 * - Return an array of { ingredient, measure }
 */
export function parseIngredients(meal) {
  // pseudocode:
  // const ingredients = [];
  // for (let i = 1; i <= 20; i++) {
  //   const ingredient = meal[`strIngredient${i}`];
  //   const measure = meal[`strMeasure${i}`];
  //   if (ingredient) ingredients.push({ ingredient, measure });
  // }
  // return ingredients;
}

/**
 * Utility for querying DOM quickly
 */
export const $ = (selector) => document.querySelector(selector);
