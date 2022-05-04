import React from 'react';
import { Navbar } from './components';
import { Home, About, Skills, Services, Work, Testimonials } from './container';


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
        <Work/>
        <Testimonials/>
      </div>
    </>
  );
}

export default App;
