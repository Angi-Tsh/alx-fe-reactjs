import { use } from 'react';
import create from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes })
}));

const addRecipe = (addRecipeecipe) => {
  useRecipeStore.getState().addRecipe(recipe); }

const deleteRecipe = (deleteRecipe) => {
    useRecipeStore.setState(state => ({
        recipes: state.recipes.filter(recipe => recipe.id !== deleteRecipe.id)
    }));
    }
const updateRecipe = (updatedRecipe) => {
    useRecipeStore.setState(state => ({
        recipes: state.recipes.map(recipe =>
            recipe.id === updatedRecipe.id ? updatedRecipe : recipe
        )
    }));
}

export { useRecipeStore, addRecipe, deleteRecipe, updateRecipe };