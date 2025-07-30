import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './useRecipeStore'; 
import { Recipe } from '../types'; 

const EditRecipeForm = () => {
  const { recipeId } = useParams();
  const navigate = useNavigate();

  // Select the recipe to edit from the store
  const recipeToEdit = useRecipeStore(state =>
    state.recipes.find(r => r.id === recipeId)
  );

  // Get the updateRecipe action from the store
  const updateRecipe = useRecipeStore(state => state.updateRecipe);

  // Local state for form inputs, initialized with the current recipe's values
  const [editedRecipe, setEditedRecipe] = useState(null);

  // Initialize form fields when component mounts or recipeToEdit changes
  useEffect(() => {
    if (recipeToEdit) {
      setEditedRecipe({ ...recipeToEdit }); // Create a copy to avoid direct state mutation
    } else {
      // If recipe not found (e.g., direct access to invalid ID), redirect
      navigate('/');
      console.warn(`Recipe with ID ${recipeId} not found. Redirecting.`);
    }
  }, [recipeToEdit, navigate, recipeId]);

  // Handle changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedRecipe(prev => {
      if (!prev) return null;
      if (name === 'ingredients') {
        // Special handling for array of ingredients, assuming comma-separated input
        return { ...prev, [name]: value.split(',').map(item => item.trim()) };
      }
      return { ...prev, [name]: value };
    });
  };

  // Handle form submission
  const handleSubmit = (event) => { // 'event' is the form submission event
    event.preventDefault(); // Prevent default browser form submission (important for SPAs)

    if (editedRecipe) {
      updateRecipe(editedRecipe); // Call Zustand action to update
      navigate(`/recipes/${editedRecipe.id}`); // Navigate back to recipe details page
    }
  };

  // Show loading/error state if recipe hasn't been loaded or found
  if (!editedRecipe) {
    return <div style={{ padding: '20px' }}>Loading recipe...</div>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>Edit Recipe: {editedRecipe.name}</h2>
      {/* The 'form' element */}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={editedRecipe.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="description" style={{ display: 'block', marginBottom: '5px' }}>Description:</label>
          <textarea
            id="description"
            name="description"
            value={editedRecipe.description}
            onChange={handleChange}
            rows={3}
            required
            style={{ width: '100%', padding: '8px' }}
          ></textarea>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="ingredients" style={{ display: 'block', marginBottom: '5px' }}>Ingredients (comma-separated):</label>
          <input
            type="text"
            id="ingredients"
            name="ingredients"
            value={editedRecipe.ingredients.join(', ')} // Join array for input
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="instructions" style={{ display: 'block', marginBottom: '5px' }}>Instructions:</label>
          <textarea
            id="instructions"
            name="instructions"
            value={editedRecipe.instructions}
            onChange={handleChange}
            rows={5}
            required
            style={{ width: '100%', padding: '8px' }}
          ></textarea>
        </div>

        {/* The 'button' elements */}
        <button type="submit" style={{ padding: '10px 15px', marginRight: '10px' }}>Save Changes</button>
        <button type="button" onClick={() => navigate(`/recipes/${recipeId}`)} style={{ padding: '10px 15px' }}>Cancel</button>
      </form>
    </div>
  );
};

export default EditRecipeForm;
