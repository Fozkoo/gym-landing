import { useState } from 'react'
import gymLogo from './images/logo-gym.png'
import MenuResponsive from './componets/MenuResponsive'
import Navbar from './componets/Navbar'
import Slider from './componets/Slider'
import Footer from './componets/footer'
import Contact from './componets/Contact'

function App() {
  
  return (
    <>
      <Navbar/>
      <MenuResponsive/>
      <Slider />
      <Contact />
      <Footer />
      
    </>
  )
}

export default App

