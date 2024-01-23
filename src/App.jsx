import React from 'react'
import Navbar from './components/Navbar/Navbar'
import 'material-symbols';
import Hero from './components/Hero/Hero';
import './App.css'
import Skills from './components/Skills/Skills';

function App() {
  return (
    <>
    <Navbar />
    <div className='container'>
      <Hero />
      <Skills />
    </div>
    </>
  )
}

export default App