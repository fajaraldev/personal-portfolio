import React from 'react';
import { Navbar } from './components';
import { Home, About, Skills, Services } from './container';


import './App.scss';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="main">
        <Home/>
        <About/>
        <Skills/>
        <Services/>
      </div>
    </>
  );
}

export default App;
