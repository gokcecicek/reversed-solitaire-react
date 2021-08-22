import './App.css';
import React from 'react';
import Home from './components/Common/Home';
import { ToastContainer } from 'react-toastify';
import { GetConstants } from './components/Common/Constant';

function App() {
  document.title = GetConstants.HEADER;
  
  return (
      <div className="App" data-testid="app-testid">
        <ToastContainer
        autoClose={2000}
        className="toast-container"
        toastClassName="dark-toast"
      />
      <Home/>
      </div>
  );
}
export default App;
