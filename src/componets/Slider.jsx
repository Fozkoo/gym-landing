import { useState } from 'react'
import imgSection from '../images/SC-WEB-Banner-home-1.png'
import imgContact from '../images/SC-WEB-Averiguadores.jpg'
import gymLogo from '../images/logo-gym.png'
import MenuResponsive from '../componets/MenuResponsive'

import './slider.css'



function Slider() {
  const [count, setCount] = useState(0)

  return (
    <>  

        
        <section className="slider">

            <div className="container-slider-global flex bg-black justify-center max-lg:justify-center max-lg:items-center">

                <div className="container-text-tittle-slider flex  justify-center text-center items-center flex-col w-6/12 max-lg:absolute max-lg:flex max-lg:z-10">

                    <div className="contenido-text-slider flex gap-4 justify-center items-center  flex-col w-6/12 h-6/12 max-lg:w-[400px] max-lg:p-5">

                        <div className="contain-h2-slider flex justify-normal items-center w-full  text-white text-base font-semibold max-lg:justify-center">
                            <h2 className='text-xl'>MUSCULACIÓN & CLASES</h2>
                        </div>


                        <div className="contain-h1-slider flex text-white text-center font-semibold">
                            <h1 className="text-4xl max-lg:text-4xl">ENTRENÁ CON NOSOTROS</h1>
                        </div>


                        <div className="extra-text-slider  w-full flex justify-normal items-start text-lg text-[#ffd300] font-semibold max-lg:text-base">
                            <span>Sumate a la cadena líder de gimnasios en Argentina.</span>
                        </div>




                        <div className="container-options-slider flex gap-3  font-medium max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:p-4 text-base  w-full">
                        
                            <div className='opciones-nav1 cursor-pointer bg-white h-[45px] border-2 justify-center items-center mb-3 border-white text-black px-10 py-[10px] rounded-full hover:bg-black hover:text-white hover:border-white transition-colors duration-500 max-lg:w-[190px] max-lg:h-[45px]'>
                                    <a href="#" className=''>Elegi un plan</a>
                                </div>

                                <div className='opciones-nav2 cursor-pointer bg-[#FFD300] h-[45px] border-2 border-black px-10 py-[10px] rounded-full hover:bg-black hover:border-white hover:text-white max-lg:border-none  transition-colors duration-500 max-lg:w-[250px] max-lg:h-[45px]'>
                                    <a href="#" className=''>Charla con un asesor</a>
                            </div>
                        </div>





                    </div>
                </div>


                <div className="container-img-slider flex max-lg:flex max-lg:items-center max-lg:h-[460px]">
                    <img src={imgSection} alt="" className=''/>
                </div>
            </div>
        </section>

    </>
  )
}

export default Slider



   