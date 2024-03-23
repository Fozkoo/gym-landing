import { useState } from 'react'
import gymLogo from './assets/logo-gym.png'
import './App.css'
import MenuResponsive from './MenuResponsive'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MenuResponsive />
    <header className=''>
      <div className="container-none bg-[white] flex h-20  items-center justify-center">

      {/* CONTEINER HEADER */}
        <div className="container flex justify-between items-center px-10  max-lg:px-0 max-lg:justify-center ">

            {/* LOGO HEADER */}
              <div className="container-logo flex ">
                <a href="#">
                <img src={gymLogo} className='img-fluid h-12' alt="Gym Logo" />
                </a>

              </div>


            {/* HAMBURGER MENU */}
              <div className="container-hamburger lg:hidden  max-lg:relative max-lg:left-16">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-7 h-7">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
              </div>

              {/* NAV-HAMBURGER-RESPONSIVE */}

            
          


              {/* NAV OPTIONS */}
              <div className="contain-options flex gap-7 text-lg font-medium max-lg:hidden">
                  <a href="#" className="relative group">
                      Nosotros
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FFC900] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                  <a href="#retos" className="relative group">
                      Clases
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FFC900] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                  <a href="#ftco-section" className="relative group">
                      Planes
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FFC900] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                  <a href="#ftco-section" className="relative group">
                      Beneficios
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FFC900] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
              </div>

              {/* BOTONS OPTIONS */}
              <div className="container-options flex gap-7 text-lg font-medium max-lg:hidden">
                  <a href="#" className='opciones-nav bg-black border-2 border-black	 text-white px-10 py-1 rounded-full hover:bg-white hover:text-black hover:border-black transition-colors duration-500'>Busca una clase</a>
                  <a href="#" className='opciones-nav2 bg-[#FFC900] border-black px-10 py-2 rounded-full hover:bg-black hover:text-white transition-colors duration-500'>Inscribite</a>
              </div>

        </div>
      </div>
    </header>
    </>
  )
}

export default App
