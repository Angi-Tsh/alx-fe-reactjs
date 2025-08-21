import React, {useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams to get the recipe ID from the URL


function RecipeDetail () { //id will not be used as a prop,as we will use useParams.
    const [recipe, setRecipe] = useState(null);   
    const { id } = useParams(); // Get the recipe ID from the URL parameters

    useEffect (() =>{
        fetch("/src/data.json")
        .then (response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then (data => {//Find the recipe by id
            const foundRecipe = data.find(recipe => recipe.id === Number(id))
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
                    <p className="text-gray-700 mb-4"><strong>Ingredients:</strong></p>
                    <p className="text-gray-700 mb-4">{recipe.ingredients}</p>
                    <p className="text-gray-700 mb-4"><strong>Instructions:</strong></p>
                    <p className="text-gray-700 mb-4">{recipe.instructions}</p>
                </div>
            ) : (
                <p className="text-black-700 mb-4">Recipe loading ...</p>
            )} 
        </div>
    );
}
export default RecipeDetail;