
import { useState } from 'react'
import wspSvg from '../images/whatsapp.svg'
import './footer.css'

function Footer (){

    return (
        <>
            <section className="footer">
                
                <div className="container-footer bg-black h-[700px] flex flex-col justify-items-center justify-center items-center">
                    <div className="container text-white  flex justify-between p-1">

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
                            <span className='text-sm'>El apto médico es indispensable al momento de iniciar una actividad física (leyes nº 139 y 12329) y será requerido en la sede.</span>
                            </div>


                            
                        </div>


                        <div className="contact flex flex-col ">
                            <div className="tittle-footer  text-white pb-6 text-2xl font-medium">
                                <h5>Contacto</h5>
                            </div>

                            <div className="contain-list flex  flex-col text-left bg-black text-base gap-1">
                                <div className="container-wsp flex justify-center items-center gap-2 mb-3">
                                    <div className="svg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='white'><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                                    </div>
                                    <div className="text">
                                        <a href="#" className='hover:text-[#FFC900]'>WhatsApp</a>
   
                                    </div>


                                </div>

                                <div className="container-instagram flex justify-center items-center gap-2 mb-3">
                                    <div className="svg">

                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='white'><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>

                                    </div>
                                    <div className="text">
                                        <a href="#" className='hover:text-[#FFC900]'>Instagram</a>
   
                                    </div>


                                </div>

                                <div className="container-location flex justify-center items-center gap-2 mb-3">
                                    <div className="svg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='white'><path d="M11.239 7.237c-.004-.009-.288-.017-.24-.078l.137-.085c.013-.077.072-.162-.007-.304l.047-.125-.1.029s.141-.606.33-.332l-.08.093c.122.122.155.426.195.623.115.06.294.071.088.175.106-.018-.561.286-.648.161-.065-.076.288-.127.278-.157zm-.715-.159c-.077.078.003.128.082.094.114-.05.269-.048.284-.202l.073-.091-.101-.135c-.06-.012-.1.064-.137.095l-.066.017-.062.08.007.044-.08.098zm7 9.167l-.733-1.206-.724-1.186c-.73-1.194-1.388-2.276-1.961-3.296l-.07.067c-.376.156-.942-.509-1.339-.531.192.03.018-.49.018-.524-.153-.189-1.123.021-1.378.055-.479.063-.979.057-1.346.355-.258.21-.262.551-.524.716-.17.106-.356.072-.502.209-.258.245-.553.607-.697.929-.062.135.077.458.043.632-.336 1.063.085 2.538 1.375 2.701.312.039.638.209.955.114.252-.076.474-.248.745-.268.377-.025.22.529.737.379.251-.074.365.172.365.359-.084.391-.268.609.088.883.242.188.442.456.486.78.026.182.196.494-.015.602-.149.075-.259.507-.257.649.031.165.365.481.466.621.146.2.039.436.158.663.122.232.237.41.323.645.111.324.958-.007 1.156-.006.673.004 1.014-.944 1.487-1.235.267-.165.192-.616.51-.848.296-.215.608-.344.636-.741.021-.344-.259-1.062-.104-1.353l.102-.165zm-7.301-7.76c.041.172-.119.645-.154.795-.031.138.442.226.415.295.004-.008.642-.22.705-.275l.144-.323c.121-.081.248-.146.384-.196l.164-.285c.056-.021.71-.123.756-.101.165.075.469.389.583.531l.041.032c-.326-.67-.59-1.314-.796-1.942l-.083.036c-.222 0-.528.251-.663.405-.095.104-.669.337-.732.33.33.035.314.276.288.482-.068.476-1.096.035-1.052.216zm10.904 5.049c-.277 4.807-4.253 8.623-9.13 8.623-2.603 0-4.951-1.086-6.618-2.83-.198-.208-.346-.7-.02-.9l.331-.085c.259-.22-.242-1.111-.044-1.254.617-.441.324-.982-.055-1.429-.161-.19-1.043-1.1-1.143-.937.074-.249-.16-.85-.302-1.087-.239-.398-.553-.643-.679-1.081-.05-.174-.05-.704-.153-.826-.041-.05-.358-.185-.347-.257.305-1.82 1.147-3.458 2.364-4.751l.821-.33c.515-.773.545-.173 1.008-.375.154 0 .331-.634.496-.734.289-.185.068-.185.015-.27-.112-.184 2.411-1.103 2.453-.938.034.14-1.249.809-1.108.788-.326.043-.388.627-.328.625.163-.005 1.182-.774 1.657-.61.466.161 1.301-.37 1.627-.64l.04-.038c.029-.761.195-1.494.481-2.172l-.493-.026c-6.075 0-11 4.925-11 11s4.925 11 11 11c6.074 0 11-4.925 11-11 0-.764-.078-1.509-.227-2.229-.491.864-1.044 1.779-1.646 2.763zm1.873-9.1c0 2.45-1.951 5.373-4.5 9.566-2.549-4.193-4.5-7.116-4.5-9.566 0-2.449 2.139-4.434 4.5-4.434s4.5 1.985 4.5 4.434zm-2.75.066c0-.966-.784-1.75-1.75-1.75s-1.75.784-1.75 1.75.784 1.75 1.75 1.75 1.75-.784 1.75-1.75z"/></svg>
                                    </div>

                                    <div className="text flex">
                                        <a href="#" className='hover:text-[#FFC900]'>Visitanos</a>
                                    </div>





                                </div>
                            </div>


                            
                        </div>

                    </div>




















                    <div className='separador border-t-1 border-white text-white w-[100%] pl-52 pr-52'>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFC900" class="w-8 h-8 hover:w-11 hover:h-11 transition-all duration-500">
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