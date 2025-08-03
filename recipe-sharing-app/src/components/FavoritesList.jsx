import React from 'react';
import useRecipeStore from '../useRecipeStore';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  // Select the favorites IDs and the full recipes array
  const { favorites, recipes } = useRecipeStore(state => ({
    favorites: state.favorites,
    recipes: state.recipes,
  }));

  // Map the favorites IDs to their full recipe objects
  const favoriteRecipes = favorites.map(id =>
    recipes.find(recipe => recipe.id === id)
  ).filter(Boolean); // Filter out any undefined recipes just in case

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginBottom: '20px' }}>
      <h2>My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>You have no favorite recipes yet.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {favoriteRecipes.map(recipe => (
            <li key={recipe.id} style={{ marginBottom: '10px' }}>
              <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none', color: '#007bff' }}>
                <h3>{recipe.name}</h3>
              </Link>
              <p>{recipe.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesList;