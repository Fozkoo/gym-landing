import { useState } from 'react'
import imgContact from '../images/SC-WEB-Averiguadores.jpg'





function Contact() {
  const [count, setCount] = useState(0)

  return (
    <>
        <section className='Contact-section max-lg:bg-[#BEBEBE]'>

        <div className="container-slider flex h-[550px] mt-10  max-lg:justify-center ">
                <div className="container-text-tittle flex justify-center text-center w-6/12  max-lg:hidden">
                    <img src={imgContact} alt="" />
                </div>

                <div className="container-img  w-6/12 flex justify-center items-center max-lg:w-11/12">

                    <div className="text-form w-10/12  max-lg:w-11/12">

                        <div className="text-1  font-semibold text-[#8F8F8F]">
                            <h2 className='text-xl'>NUEVOS SOCIOS</h2>
                        </div>
                        <div className="text2   font-semibold text-white w-4/6 max-lg:w-5/6">
                            <h2 className='text-3xl'>Escribinos para conocer más sobre nosotros</h2>
                        </div>

                        <div className="text3  font-bold  w-4/6 text-[#8F8F8F] max-lg:w-11/12">
                             <h2 className='text-1xl'>Completá el formulario y un asesor se pondrá en contacto para ayudarte a elegir tu plan y asociarte.</h2>
                        </div>

                        <div className="form flex flex-col gap-6 mt-5">
                            <input type="text" placeholder='Nombre' className='w-4/6 p-3 outline-none max-lg:w-full'/> 
                            <input type="email" placeholder='Email' className='w-4/6 p-3 outline-none max-lg:w-full'/>
                            <input type="number" placeholder='Numero' className='w-4/6 p-3 outline-none max-lg:w-full'/>
                        </div>

                        <div className="boton w-4/6 p-3 mt-5 flex justify-center max-lg:w-full ">
                             <a href="" className='opciones-nav2 bg-[black] text-white border-2 border-black px-10 py-2 rounded-full hover:bg-[#FFC900] hover:text-black hover:border-[#FFC900]  transition-colors duration-500'>Charla con un asesor</a>
                        </div>
                    </div>
                </div>

            </div>


        </section>

    </>
  )
}

export default Contact
