import { useState } from 'react'
import gymLogo from './images/logo-gym.png'
import MenuResponsive from './componets/MenuResponsive'
import Navbar from './componets/Navbar'
import Slider from './componets/Slider'



function App() {
  
  return (
    <>
      <Navbar/>
      <MenuResponsive/>
      <Slider />
      
    </>
  )
}

export default App

