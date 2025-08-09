import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useRecipeStore } from './components/recipeStore'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'
import EditRecipeForm from './components/EditRecipeForm'  

function App() {
  const [count, setCount] = useState(0)

  return (
     // 1. Wrap your entire application with the 'Router' component
    <Router>
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
        <header style={{ borderBottom: '1px solid #eee', paddingBottom: '15px', marginBottom: '20px' }}>
          <h1><Link to="/" style={{ textDecoration: 'none', color: '#333' }}>Recipe Sharing App</Link></h1>
          <nav>
            <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
          </nav>
        </header>
        <Routes>
          {/* 2. Define individual 'Route' components for each path */}

          {/* Home Page: Lists all recipes and has the Add Recipe Form */}
          <Route
            path="/" // The 'path' for this route
            element={<RecipeList />} // The component to render when this path matches
          />

          {/* Recipe Details Page: Displays a single recipe's full details */}
          <Route
            path="/recipes/:recipeId" 
            element={<RecipeDetails />} // The component to render
          />

          {/* Edit Recipe Page: Allows editing an existing recipe */}
          <Route
            path="/recipes/:recipeId/edit" // The 'path' for editing
            element={<EditRecipeForm />} // The component to render
          />

          {/* Optional: A catch-all route for 404 Not Found pages */}
          <Route
            path="*" // Matches any path not matched by previous routes
            element={
              <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h2>404 - Page Not Found</h2>
                <p>Oops! The page you're looking for doesn't exist.</p>
                <Link to="/">Go to Home Page</Link>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;