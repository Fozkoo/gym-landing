import { useState } from 'react'
import imgSection from '../images/SC-WEB-Banner-home-1.jpg'
import imgContact from '../images/SC-WEB-Averiguadores.jpg'
import gymLogo from '../images/logo-gym.png'
import MenuResponsive from '../componets/MenuResponsive'





function Slider() {
  const [count, setCount] = useState(0)

  return (
    <>  

        
        <section className="slider max-lg:flex max-lg:w-[430px]">
            <div className="container-slider flex h-26 bg-black max-lg:h-[440px] max-lg:justify-center max-lg:items-center">

                <div className="container-text-tittle flex justify-center text-center w-6/12 max-lg:h-96 max-lg:absolute  max-lg:w-full">

                    <div className="contenido flex justify-center  flex-col w-6/12 h-6/12  max-lg:w-full">

                        <div className="contain-h2 flex text-white justify-center items-center h-16 text-base font-semibold ">

                            <h2 className='text-2xl max-lg:text-lg'>MUSCULACIÓN & CLASES</h2>
                        </div>


                        <div className="contain-h1 flex text-white text-center h-20 font-semibold  ">

                            <h1 className="text-4xl">ENTRENÁ CON NOSOTROS</h1>

                        </div>


                        <div className="extra-text flex justify-center items-center h-16 text-lg text-[#FFC900] font-medium   max-lg:text-base">
                            <span>Sumate a la cadena líder de gimnasios en Argentina.</span>
                        </div>

                        <div className="container-options flex gap-7 text-base font-medium max-lg:flex-col max-lg:gap-2">
                          <a href="#" className='opciones-nav bg-white border-2 border-white text-black px-10 py-2 rounded-full hover:bg-black hover:text-white hover:border-white transition-colors duration-500 max-lg:ml-28 max-lg:mr-28'>Elegi un plan</a>
                          <a href="#" className='opciones-nav2 bg-[#FFC900] border-2 border-black px-10 py-2 rounded-full hover:bg-black hover:text-white max-lg:border-none  transition-colors duration-500 max-lg:ml-20 max-lg:mr-20'>Charla con un asesor</a>
                      </div>

                    </div>
                </div>

                <div className="container-img max-lg:bg-red-400 max-lg:h-full flex max-lg:overflow-auto">

                    <img src={imgSection} alt="" className=''/>

                </div>

            </div>
        </section>

    </>
  )
}

export default Slider



   