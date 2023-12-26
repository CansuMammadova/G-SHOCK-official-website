import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Home from './Pages/Home'
import Details from './Pages/Details'
import Cart from './Pages/Cart'

const App = () => {
  return (
    <div>
      <Header/>
      {/* <Contact /> */}
      {/* <About/> */}
      {/* <Home/> */}
      {/* <Details/> */}
      <Cart/>
      <Footer/>
    </div>
  )
}

export default App