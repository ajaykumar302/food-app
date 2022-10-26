import React from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './Components/Products';

function App() {

  return (
    <div className="App">
   <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' elememt ={<Products/>} />
        </Routes>
        
        </BrowserRouter>
    
    </div>
  );
}

export default App;
