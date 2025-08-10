import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Search from './components/search'; 
import { fetchUserData } from './services/githubService';
import { data } from 'react-router-dom';

function App() {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    //Before making a new request
  setUserData(null);
  setError(null);
  setIsLoading(true);

  try {
    const data = await fetchUserData(username);
    if (data) {
      setUserData(data);
    } else {
      setError("Looks like we can't find the user.");
    }
  } catch (err) {
    setError("Looks like we can't find the user.");
  } finally {
    setIsLoading(false);
  }
};

  const renderContent = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    }
    if (error) {
      return <p className="error-message">{error}</p>;
    }
    if (userData) {
      return (
        <div className="user-profile">
          <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} width="100" />
          <h3>{userData.name}</h3>
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="app-container">
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      {renderContent()}
    </div>
  );
}

export default App;