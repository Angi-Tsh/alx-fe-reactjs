import React from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import { useRecipeStore } from './useRecipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  // Select the 'deleteRecipe' action from the store
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe); 
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId); // Call the deleteRecipe action
      navigate('/'); // Navigate back to the recipe list after deletion
    }
  };

  return (
    <button
      onClick={handleDelete}
      style={{
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        padding: '8px 12px',
        cursor: 'pointer',
        borderRadius: '4px'
      }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
