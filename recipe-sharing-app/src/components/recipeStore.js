import { use } from 'react';
import create from 'zustand'

const useRecipeStore = create((set, get) => ({
  // --- STATE ---
  recipes: [
    // Add some sample recipes so the filtering has something to work with
    { id: '1', name: 'Pap and malana', description: 'A simple and quick meal.' },
    { id: '2', name: 'Chicken Curry', description: 'A hearty chicken curry.' },
    { id: '3', name: 'Uputhu', description: 'A quick and healthy breakfast.' },
  ],
  searchTerm: '',
  filteredRecipes: [],
  recommendedRecipes: [], 
  favorites: [],

  // --- ACTIONS ---

  // Action to update the search term and then immediately filter the recipes
  setSearchTerm: (term) => {
    set({ searchTerm: term });

    // We then call the filtering logic using the updated state
    const { recipes } = get(); // get() returns the current state
    const lowerCaseTerm = term.toLowerCase();

    const filtered = recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(lowerCaseTerm) ||
      recipe.description.toLowerCase().includes(lowerCaseTerm)
    );
    set({ filteredRecipes: filtered });
  },
 // ---Action to add favorites and recommendations

  addFavorite: (recipeId) =>
    set(state => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set(state => ({
      // Remove the recipeId from the favorites array
      favorites: state.favorites.filter(id => id !== recipeId),
    })),

  generateRecommendations: () =>
    set(state => {
      // Get a list of all recipe IDs that are not in favorites
      const nonFavoriteRecipes = state.recipes.filter(
        recipe => !state.favorites.includes(recipe.id)
      );
      
    // A simple mock recommendation system: pick 2 random recipes that aren't favorites
      const numRecommendations = 2;
      const recommended = [];
      while (recommended.length < numRecommendations && nonFavoriteRecipes.length > 0) {
        const randomIndex = Math.floor(Math.random() * nonFavoriteRecipes.length);
        const randomRecipe = nonFavoriteRecipes.splice(randomIndex, 1)[0];
        recommended.push(randomRecipe);
      }

      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;