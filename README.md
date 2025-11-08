#  Random Meal Generator

This is a simple web application that generates a random meal recipe at the click of a button. It's built with vanilla JavaScript, HTML, and CSS, and it fetches data from the free [TheMealDB API](https://www.themealdb.com/api.php).

This project was built to practice core JavaScript skills, specifically `async/await`, working with external APIs, and manipulating the DOM.

##  Features

* **Get Random Meal:** Click a button to fetch and display a new random meal.
* **View Recipe:** Displays the meal's name and a high-quality picture.
* **Read Instructions:** Provides step-by-step cooking instructions.
* **See Ingredients:** Dynamically lists all ingredients and their corresponding measurements.
* **Watch Video:** Includes a link to the recipe's YouTube video, if one is available.

---
## Concepts Used

* **JavaScript (ES6+):** Used for all logic, including API calls and DOM manipulation.
* **`fetch()` API with `async/await`:** For handling asynchronous network requests.
* **HTML5:** For the basic structure of the app.
* **CSS3:** For all styling.

---

##  How to Run

Since this is a simple front-end project, you can run it locally without any server.

1.  Clone the repository:
    ```sh
    git clone [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)
    ```
2.  Navigate to the project folder:
    ```sh
    cd YOUR_REPO_NAME
    ```
3.  Open the `index.html` file in your favorite web browser.

---

##  What I Learned

This project was a great exercise in:

* Making asynchronous API calls and handling the returned JSON data.
* Using `async/await` to write cleaner, more readable asynchronous code.
* Dynamically generating HTML content and updating the DOM based on API data.
* Parsing a complex JSON object (e.g., TheMealDB API returns up to 20 `strIngredient` and `strMeasure` fields, which must be looped over and filtered).
* Handling potential `null` or empty data fields from an API to prevent errors.