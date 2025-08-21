import React, { useState } from 'react';


//Checks if the title, steps, and ingredients are valid
const validate = (title, steps, ingredients) => {
    const errors = {}; 
    if (!title.trim()) {
        errors.title = "Title is required.";
    }
    if (!steps.trim()) {
        errors.steps = "Steps are required.";
    };
     //Make sure there are at least two ingredients
    const IngredientsArray = ingredients.split(',').filter(item => item.trim()!==''); //Splits the ingredients string into an array, removing any empty items
            if (IngredientsArray.length = 0){
                errors.ingredients = 'Please enter at least one ingredient.';
            } else if (IngredientsArray.length < 2) {
                errors.ingredients ='Please enter at least two ingredients, seperate by comma.'
            }
    return errors;
        };


function AddRecipeForm () {
    const [title, setTitle] = useState ('');
    const [ingredients, setIngredients] = useState('');
    const [steps, SetSteps] = useState('');
   const [Errors, setErrors] = useState({}); //State to hold form validation errors

    const handleSubmit = (event) => {
        event.preventDefault (); //Prevents default form submission 
       
        //Validate the form fields
        const errors = validate(title, steps, ingredients); 
        setErrors(errors); //Set the errors in state
       if (Object.keys(errors).length === 0) {
        //Log the recipe data to the console if validation passes, clear erros and logs data.
    console.log ("Recipe added:", { title, ingredients: IngredientsArray, steps });
        
        //Reset the form fields
        setTitle('');
        setIngredients('');    
        SetSteps('');
       }
    };

    return (
        <form onSubmit = {handleSubmit} className="bg-blue-100 p-8 sm:p-4 md:o-8 max-w-xs max-w-sm hover:bg-blue-200 rounded-lg shadow-md">
            <input type='text' value={title} onChange={(e) =>
                setTitle(e.target.value)} placeholder='Recipe Title' 
                className="border border-gray-300 p-2 rounded mb-4 w-full" 
            />
            <textarea value={ingredients} onChange={(e) =>
                 setIngredients (e.target.value)} placeholder=' Add your ingredients separated by commas.' 
                className="border border-gray-300 p-2 rounded mb-4 w-full" 
            />
            
            {Errors.ingredients && <p className="text-red-500 mb-4">{Errors.ingredients}</p>}
        
            <textarea value={steps} onChange={(e) => 
                SetSteps (e.target.value)} placeholder='Add recipe steps.' 
                className="border border-gray-300 p-2 rounded mb-4 w-full" />
            {Errors.steps && <p className="text-red-500 mb-4">{Errors.steps}</p>}
            <button type='submit' 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">  
                Submit
            </button>
    </form>
    );
}

export default AddRecipeForm;