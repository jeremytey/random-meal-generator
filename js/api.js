// js/api.js

const API_RANDOM_URL = 'https://www.themealdb.com/api/json/v1/1/random.php';


/**
 * fetchRandomMeal()
 * - Fetch random meal data from TheMealDB
 * - Return the meal object
 * - Handle errors gracefully
 */
export async function fetchRandomMeal() {
    try {
        const response = await fetch(API_RANDOM_URL);
        if(!response.ok) {
            throw new Error('Network response was not ok');
        }   
        const data = await response.json();
        const meal = data.meals[0];
        console.log(meal);
        return meal;
       

    } catch (error) {
        console.error('Error fetching random meal:', error);
    
    }
}

fetchRandomMeal();
