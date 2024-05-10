import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Shop from './Pages/Shop'
import Shopping from './Pages/Shopping'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App