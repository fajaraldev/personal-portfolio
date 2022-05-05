import React from 'react';
import { Navbar } from './components';
import { Home, About, Skills, Services, Work, Testimonials, Contact } from './container';


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
        <Contact />
      </div>
    </>
  );
}

export default App;
