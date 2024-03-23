import { useState } from 'react'
import gymLogo from './assets/logo-gym.png'
import './App.css'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <header>

      <div className="container-none bg-[#ffffff] flex h-20  items-center justify-center">

        <div className="container flex justify-between items-center px-10">


            <div className="container-logo flex">
              <a href="#">
              <img src={gymLogo} className='img-fluid h-12' alt="Gym Logo" />
              </a>

            </div>

            <div className="container-hamburger lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-7 h-7">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
            </div>

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
