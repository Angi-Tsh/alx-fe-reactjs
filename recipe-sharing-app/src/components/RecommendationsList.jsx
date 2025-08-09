import React, { useEffect } from 'react';
import useRecipeStore from '../useRecipeStore';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  const { recommendations, generateRecommendations } = useRecipeStore(state => ({
    recommendations: state.recommendations,
    generateRecommendations: state.generateRecommendations,
  }));

  // Generate recommendations when the component first mounts
  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p>No new recommendations. Add a favorite to get some!</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {recommendations.map(recipe => (
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

export default RecommendationsList;