import React, {useState, useEffect } from "react";

function RecipeDetail ({id}) { //id to be used to fetch specific recipe details as a prop.
    const [recipe, setRecipe] = useState(null);   

    useEffect (() =>{
        fetch("/src/data.json")
        .then (response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then (data => {//Find the recipe by id
            const foundRecipe = data.find(recipe => recipe.id === id)
            setRecipe(foundRecipe);})
        .catch(error => console.error("Error fetching recipe:", error));
    }, [id]); // id is assumed to be passed as a prop or obtained from route params 

    return (
        <div className="container bg-gray-100 p-8 sm:p-4 md:p-8 max-w-xs max-w-sm hover:bg-gray-200 rounded-lg shadow-md">
            { recipe ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <h2 className="text-2xl font-bold mb-4">{recipe.title}</h2>
                    <img src={recipe.image} alt={recipe.title} className="w-full sm:h-48 md:h-64 lg:h-80 rounded-lg mb-12" />
                    <p className="text-gray-700 mb-4">{recipe.summary}</p>
                </div>
            ) : (
                <p className="text-black-700 mb-4">Recipe loading ...</p>
            )} 
        </div>
    );
}
export default RecipeDetail;