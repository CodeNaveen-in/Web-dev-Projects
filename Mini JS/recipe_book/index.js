// index.js

const recipeListEl = document.getElementById("recipe-list");

// This function takes a single recipe object and adds it to the page
function createRecipeElement(recipe) {
    // This is the "cleaning" part. We're extracting specific properties.
    const title = recipe.strMeal;
    const imageUrl = recipe.strMealThumb;
    const sourceUrl = recipe.strSource; // TheMealDB has this as a property
    const ingredients = [];
    
    // We have to manually loop through all 20 possible ingredients
    for (let i = 1; i <= 20; i++) {
        const ingredient = recipe[`strIngredient${i}`];
        const measure = recipe[`strMeasure${i}`];
        if (ingredient) {
            // "Cleaning" the ingredients data: combining ingredient and measure
            ingredients.push(`${ingredient} (${measure})`);
        }
    }

    // Now we create and add to the HTML
    const recipeItemEl = document.createElement("li");
    recipeItemEl.classList.add("recipe-card");

    recipeItemEl.innerHTML = `
        <img src="${imageUrl}" alt="${title}" />
        <h2>${title}</h2>
        <p><strong>Ingredients:</strong> ${ingredients.join(", ")}</p>
        <a href="${sourceUrl}" target="_blank">View Recipe <i class="material-icons"> rightarrow</i></a>
    `;

    recipeListEl.appendChild(recipeItemEl);
}

// Function to fetch multiple random recipes (by calling the API multiple times)
async function getMultipleRecipes(num) {
    const recipes = [];
    for (let i = 0; i < num; i++) {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        const data = await response.json();
        recipes.push(data.meals[0]); // The response has a single item in the 'meals' array
    }
    return recipes;
}

// Main function to run everything
async function init() {
    try {
        const recipes = await getMultipleRecipes(5); // Fetch 5 recipes
        recipes.forEach(recipe => createRecipeElement(recipe)); // Render each one
    } catch (error) {
        console.error('Error fetching or displaying recipes:', error);
        recipeListEl.innerHTML = "<p>Failed to load recipes. Please try again later.</p>";
    }
}

init();