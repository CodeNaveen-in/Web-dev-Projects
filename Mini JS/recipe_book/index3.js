const API_KEY = "ENTER_YOUR_API_KEY_HERE";
const recipeContainer = document.getElementById("recipe-list");

// ✅ 1. Async function to fetch recipes
async function fetchRecipes() {
  try {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=5&apiKey=${API_KEY}`);
    const data = await response.json();
    displayRecipes(data.recipes); // Pass the array to display function
  } catch (error) {
    console.error("Failed to fetch recipes:", error);
  }
}

// ✅ 2. Function to display recipes using createElement and appendChild
function displayRecipes(recipes) {
  recipes.forEach(recipe => {
    // Create a wrapper div
    const card = document.createElement("div");
    card.className = "recipe-card";

    // Create and append image
    const img = document.createElement("img");
    img.src = recipe.image;
    img.alt = recipe.title;
    card.appendChild(img);

    // Create and append title
    const title = document.createElement("h3");
    title.innerText = recipe.title;
    card.appendChild(title);

    // Create and append summary
    const summary = document.createElement("p");
    summary.innerHTML = recipe.summary; // contains HTML tags
    card.appendChild(summary);

    // Append the card to the container
    recipeContainer.appendChild(card);
  });
}

// ✅ 3. Call the fetch function when page loads
fetchRecipes();