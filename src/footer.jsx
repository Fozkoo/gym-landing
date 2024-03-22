
import { useState } from 'react'
import wspSvg from './assets/whatsapp.svg'

function Footer (){

    return (
        <>
            <section className="footer">

                <div className="container-footer bg-black h-[700px] flex flex-col justify-items-center justify-center items-center">
                    <div className="container text-white  flex justify-between p-40">

                        <div className="about flex flex-col ">
                            <div className="tittle-footer  text-white pb-6 text-2xl font-medium">
                                <h5>SportClub</h5>
                            </div>

                            <div className="contain-list flex  flex-col text-left bg-black text-base gap-1">
                            <a href="" className='hover:text-[#FFC900]'>Nosotros</a>
                            <a href="" className='hover:text-[#FFC900]'>Clases</a>
                            <a href="" className='hover:text-[#FFC900]'>Beneficios</a>
                            <a href="" className='hover:text-[#FFC900]'>Asociate</a>
                            </div>


                            
                        </div>

                        <div className="legales flex-col  w-[750px]">
                            <div className="tittle-footer text-white pb-6 text-2xl font-medium">
                                <h5>Legales</h5>
                            </div>

                            <div className="contain-list flex  flex-col text-left bg-black text-base gap-1">
                            <a href="" className='hover:text-[#FFC900]'>Contratos de adhesión - Ley nro 24.240 de defensa del consumidor</a>
                            <a href="" className='hover:text-[#FFC900]'>Defensa del consumidor</a>
                            <a href="" className='hover:text-[#FFC900]'>Términos y condiciones generales - Uso y App -</a>
                            <span>El apto médico es indispensable al momento de iniciar una actividad física (leyes nº 139 y 12329) y será requerido en la sede.</span>
                            </div>


                            
                        </div>


                        <div className="contact flex flex-col ">
                            <div className="tittle-footer  text-white pb-6 text-2xl font-medium">
                                <h5>Contacto</h5>
                            </div>

                            <div className="contain-list flex  flex-col text-left bg-black text-base gap-1">
                                <div className="container-wsp">
                                    <div className="svg">





                                    </div>

                                    <div className="text">
                                        <a href="#" className='hover:text-[#FFC900]'>WhatsApp</a>
                                    </div>
                                </div>
                            </div>


                            
                        </div>

                    </div>

                    <div className='border-t-1 border-white text-white w-[100%] pl-52 pr-52'>
                        <hr />
                    </div>

                    <div className="footer-footer text-white  flex justify-between items-center pl-52  pr-52 mt-10  w-full">

                        <div className="terminos flex">

                            <div className="text-footer-footer flex">
                                 <p>©2023-2024 SportClub Developed by <span className='text-[#FFC900]'><a href="" className='hover:text-[#FFC900]'>Fozkoo</a></span></p>
                            </div>
                        </div>

                        <div className="icon">
                            <div className="icon">

                             <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFC900" class="w-8 h-8 hover:w-14 h-14 transition-all duration-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>     
                            </a>   


                            </div>
                        </div>

                    </div>





                </div>


            </section>
            
        
        
        
        
        </>


    )

    


}


export default Footer