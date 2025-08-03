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

}));

export default useRecipeStore;