import react from "react";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/recipes/:id" element={<RecipeDetail/>}/>
    </Routes>
    </BrowserRouter>
  )
}