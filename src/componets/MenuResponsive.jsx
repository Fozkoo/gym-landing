
import { useState } from 'react'
import wspSvg from '../images/whatsapp.svg'

function MenuResponsive (){

    return (
        <>
            <section className="menuResponsive hidden  z-10">
                <div className="nav-hambuger-responsive max-lg:absolute max-lg:w-full max-lg:h-full  max-lg:flex max-lg:justify-center max-lg:items-center max-lg:bg-black ">
                    <div className="container  max-lg:p-12 max-lg:flex max-lg:justify-center max-lg:flex-col max-lg:text-center  max-lg:w-full max-lg:h-full ">
                        <div className="close flex justify-end relative bottom-80">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="3" stroke="white" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </div>

                        <div className="links flex flex-col  max-lg:text-white gap-3">
                            <a href="" className='text-xl'>Nosotros</a>
                            <a href="" className='text-xl'>Clases</a>
                            <a href="" className='text-xl'>Planes</a>
                            <a href="#" className='text-2xl ml-16 mr-16 opciones-nav2 bg-[#FFC900] border-black text-black px-1 py-2 rounded-full hover:bg-black hover:text-white transition-colors duration-500'>Inscribite</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default MenuResponsive