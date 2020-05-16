import React from 'react';
import './App.css';
import Header from './component/header.jsx';
import Navigation from "./component/navigation";
import Profile from "./component/profile";

function App() {
  return (
    <div className='app-wrapper'>
        <Header />
        <Navigation />
        <Profile />
    </div>
  );
}

export default App;
