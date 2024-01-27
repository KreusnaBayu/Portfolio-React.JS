import React from 'react'
import Navbar from './components/Navbar/Navbar'
import 'material-symbols';
import Hero from './components/Hero/Hero';
import './App.css'
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <>
    <Navbar />
    <div className='container'>
      <Hero />
      <Skills />
      <Portfolio />
    </div>
    </>
  )
}

export default App