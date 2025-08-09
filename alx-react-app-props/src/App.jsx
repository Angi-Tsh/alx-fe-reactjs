import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from "./components/WelcomeMessage.jsx"
import Header from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';
import UserProfile from './components/UserProfile.jsx'
import ProfilePage from './ProfilePage.jsx';
import UserContext from './components/UserContext.js';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
       <Footer />
    </>
  )
}

function App() {
  const userData = { name: "Jane Doe", 
                     email: "jane.doe@example.com" };
  return (
    <div>
      <h1>My Application</h1>
      {/*
        Wrap the components that need access to user data inside UserContext.Provider.
        Pass userData as the value to the provider.
      */}
      <UserContext.Provider value={userData}>
        {/* ProfilePage (and its children) will now have access to userData */}
        <ProfilePage userData={userData}/>
      </UserContext.Provider>
    </div>
  );
}


export default App
