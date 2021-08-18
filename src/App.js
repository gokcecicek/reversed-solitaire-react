import './App.css';
import React from 'react';
import Home from './components/Common/Home';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
      <div className="App">
        <ToastContainer
        autoClose={2000}
        position="top-center"
        className="toast-container"
        toastClassName="dark-toast"
      />
      <Home/>
      </div>
  );
}

export default App;
