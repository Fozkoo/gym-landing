
import { useState } from 'react'
import wspSvg from './assets/whatsapp.svg'

function Footer (){

    return (
        <>
            <section className="footer">

                <div className="container-footer bg-black h-96 flex justify-items-center justify-center items-center">
                    <div className="container text-white   flex justify-between p-40">

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
                </div>


            </section>
            
        
        
        
        
        </>


    )

    


}


export default Footer