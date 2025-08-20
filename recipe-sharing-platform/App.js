import { BrowserRoute as Router, Route, Routes } from "react-router-dom";
import HomePage from "./src/components/HomePage";
import RecipeDetails from "./src/components/RecipeDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}