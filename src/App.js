import React from 'react';
import { Navbar } from './components';
import { Home, About } from './container';


import './App.scss';

function App() {
  return (
    <>
      <Navbar />
      <div className="main">
        <Home/>
        <About/>
      </div>
    </>
  );
}

export default App;
