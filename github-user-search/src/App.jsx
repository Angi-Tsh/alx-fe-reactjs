import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Search from './components/search'; 
import { fetchUserData } from './services/githubService';
import { data } from 'react-router-dom';



function App() {
  return (
    <div className="app-container">

      <Search />
    </div>
  );
}

export default App;
