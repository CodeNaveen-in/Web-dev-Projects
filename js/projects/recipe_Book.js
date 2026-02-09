export default function render(container){

    const API_KEY = "YOUR_API_KEY_HERE";
    // console.log(API_KEY); //Meant to test API key working

    const cont = document.createElement("div");
    cont.innerHTML = `<h2> Recipe Book </h2>`
    cont.id ="recipes-container";

    async function fetchrecipes() {
        const apiURL = `https://api.spoonacular.com/recipes/random?number=5&apiKey=${API_KEY}`;
        try {
            const response = await fetch (apiURL);
            
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            
            const data = await response.json();
            // console.log('FETCHED DATA: ', data); //Meant to see recieved JSON data on console
            return data.recipes;
        } catch (error){
            console.error('Error fetching data :', error.message);
        }
    }

    function createRecipeCard(recipe) {
        const div = document.createElement("div");
        div.classList.add("section", "card", "row");
        div.style.margin="20px";

        div.innerHTML = `
            <img src="${recipe.image}" width="300">
            <h4>${recipe.title}</h4>
            <p>${recipe.summary}</p>
            <a href="${recipe.sourceUrl}" target="_blank" class="btn btn-primary">View Recipe</a>
        `;

        return div;
    }


    async function init() {
        const recipes = await fetchrecipes(); // ← data comes here

        const recipe_list = document.getElementById("recipes-container");

        recipes.forEach(recipe => {
            const card = createRecipeCard(recipe);
            recipe_list.appendChild(card);
        });
    }

    container.appendChild(cont);
    init();
}