import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Home from './Pages/Home'
import Details from './Pages/Details'
import Cart from './Pages/Cart'
import Shop from './Pages/Shop'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App