// RecipeList component
import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import FavoritesList from './FavoritesList';
import RecommendationsList from './RecommendationsList';
import SearchBar from './SearchBar';


  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);
    // Select the filtered recipes and the search term from the store
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const searchTerm = useRecipeStore(state => state.searchTerm);


    return (
      <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
        <h1>Recipe sharing:</h1>
         {/* Include the search bar to allow the user to filter */}
      <SearchBar />

      <h2>Available Recipes</h2>

        {/* Conditional rendering for no results */}
      {searchTerm !== '' && filteredRecipes.length === 0 ? (
        <p>No recipes match your search criteria.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {/* Map directly over the filteredRecipes array to show the filtered list */}
          {filteredRecipes.map((recipe) => (
            <li key={recipe.id} style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '10px', borderRadius: '5px' }}>
              <h3>
                <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none', color: '#007bff' }}>
                  {recipe.name}
                </Link>
              </h3>
              <p>{recipe.description}</p>
            </li>
          ))}
        </ul>
      )}

       <hr style={{ margin: '40px 0' }} />
      {/* Place FavoritesList and RecommendationsList  */}
      <FavoritesList />
      <RecommendationsList />
    </div>
  );
};

export default RecipeList;