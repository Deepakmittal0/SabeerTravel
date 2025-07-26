import React from 'react'
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Success from './pages/Success';
import Privacy from './pages/Privacy';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';



function App() {
  return (

    <>
    <Router>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/success' element={<Success/>}/>
      <Route path='/privacy' element={<Privacy/>}/>
    
    </Routes>
    {/* <Toaster/> */}
    </Router>
    </>
  )
}

export default App