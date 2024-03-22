import { useState } from 'react'
import imgSection from './assets/SC-WEB-Banner-home-1.jpg'
import gymLogo from './assets/logo-gym.png'
import './App.css'




function Slider() {
  const [count, setCount] = useState(0)

  return (
    <>
        <section>
            <div className="container-slider flex h-26 bg-black">
                <div className="container-text-tittle flex justify-center text-center w-6/12 ">
                    <div className="contenido flex justify-center  flex-col w-6/12 h-6/12 ">
                        <div className="contain-h2 flex text-white text-center h-16 text-base font-semibold ">
                            <h2 className='text-2xl'>MUSCULACIÓN & CLASES</h2>
                        </div>
                        <div className="contain-h1 flex text-white text-center h-16 font-semibold">
                            <h1 className="text-4xl">ENTRENÁ CON NOSOTROS</h1>
                        </div>


                        <div className="extra-text flex text-center h-16 text-lg text-[#FFC900] font-medium">
                            <span>Sumate a la cadena líder de gimnasios en Argentina.</span>
                        </div>

                        <div className="container-options flex gap-7 text-lg font-medium">
                          <a href="#" className='opciones-nav bg-white border-2 border-white	 text-black px-10 py-2 rounded-full hover:bg-black hover:text-white hover:border-white transition-colors duration-500'>Elegi un plan</a>
                          <a href="#" className='opciones-nav2 bg-[#FFC900] border-2 border-black px-10 py-2 rounded-full hover:bg-black hover:text-white hover:border-white  transition-colors duration-500'>Charla con un asesor</a>
                      </div>

                    </div>
                </div>

                <div className="container-img">
                    <img src={imgSection} alt="" />
                </div>

            </div>
        </section>

    </>
  )
}

export default Slider
