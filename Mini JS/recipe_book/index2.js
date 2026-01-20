// index.js - Made for scalable projects (using init())

// Access the API key from the environment variables
const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY
const recipeListEl = document.getElementById("recipe-list");

// This is the same function from your teacher's code
function displayRecipes(recipes) {
    recipeListEl.innerHTML = ""; // Clear any existing content
    recipes.forEach((recipe) => {
        // Here, the data is already in a clean format
        const title = recipe.title;
        const imageUrl = recipe.image;
        const sourceUrl = recipe.sourceUrl;

        // "Cleaning" the ingredients data: mapping to get the original text
        const ingredients = recipe.extendedIngredients.map((ingredient) => ingredient.original);

        // Now we create the HTML elements as before
        const recipeItemEl = document.createElement("li");
        recipeItemEl.classList.add("recipe-item");

        recipeItemEl.innerHTML = `
            <img src="${imageUrl}" alt="${title}" />
            <h2>${title}</h2>
            <p><strong>Ingredients:</strong> ${ingredients.join(", ")}</p>
            <a href="${sourceUrl}" target="_blank">View Recipe</a>
        `;
        
        recipeListEl.appendChild(recipeItemEl);
    });
}

// This is the same function from your teacher's code
async function getRecipes() {
    const response = await fetch(
        `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
    );
    const data = await response.json();
    return data.recipes; // The 'recipes' key holds the list of recipes
}

// Main function to run everything
async function init() {
    try {
        const recipes = await getRecipes(); // Fetches 10 recipes at once
        displayRecipes(recipes); // Renders them
    } catch (error) {
        console.error('Error fetching or displaying recipes:', error);
        recipeListEl.innerHTML = "<p>Failed to load recipes. Please check your API key and try again.</p>";
    }
}

init();