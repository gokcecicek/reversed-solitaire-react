import './App.css';
import React from 'react';
import Home from './components/Common/Home';
import Navbar from './components/Common/Header';
import Background from './components/Common/Background';

function App() {
  return (
      <div className="App">
        <Background/>
        <Navbar></Navbar>
        <Home/>
      </div>
  );
}

export default App;
