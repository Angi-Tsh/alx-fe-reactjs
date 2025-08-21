import react from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom



function HomePage() { 
    const [recipes, setRecipes] = useState(null);

    useEffect (() => {
        fetch ("/src/data.json")
            .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json() //returns a Promise of the JSON data from your fetch call inside useEffect.
        })
            .then(data => setRecipes(data))
        .catch(error => console.error("Error fetching recipes:", error));
    }, []); //Empty dependecny array means this effect runs once after the initial render
    return (
        //wrapping the component in a div with a class for styling
        <div className="container bg-gray-100 p-8 sm:p-4 md:p-8 max-w-xs max-w-sm hover:bg-gray-200 rounded-lg shadow-md">
            <div className="font-bold text-2xl mb-4 font-serif">
                <header className="text-center mb-6">Recipes</header>
                <h1><Link to="/" className="hover:underline">Home</Link></h1> {/* A standard home page link in React Router is usually just */}
            </div>          
            {recipes ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <h2 className="text-2xl font-bold mb-4">Recipes</h2>
            {/*Once the data is fetched, we can map through the recipes and display them*/}
            <ul>{recipes.map((recipe,index) => ( //index is used as a key for each recipe, represents the position of the current item in the array.
                <li key={index}>
                    <Link to={`/recipe-sharing-platform/src/components/RecipeDetail.jsx/recipes/${recipe.id}`}>
                    {recipe.title}
                    </Link>
                </li>
            ))}
            </ul>
            </div>
        ) : (
            <p>Loading recipes...</p> //If recipes is null, we display a loading message
        )}  
        </div>
    );}

export default HomePage; //Exporting the HomePage component so it can be used in other parts of the application