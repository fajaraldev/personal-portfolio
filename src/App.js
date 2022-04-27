import React from 'react';
import { Navbar } from './components';
import { Home } from './container';


import './App.scss';

function App() {
  return (
    <>
      <Navbar />
      <div className="main">
        <Home/>
      </div>
    </>
  );
}

export default App;
