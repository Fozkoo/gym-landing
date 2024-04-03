import React, { useState } from 'react';
import gymLogo from '../images/logo-gym.png';
import BurgerButton from '..//componets/BurgerButton';
import './navbar.css'
function Navbar() {
 const [isMenuVisible, setIsMenuVisible] = useState(false);

 const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
 };

 return (
    <>
      <header className=''>
        <div className="container-none bg-[white] flex h-20 items-center justify-center">
          {/* CONTEINER HEADER */}
          <div className="container flex justify-between items-center px-10 max-lg:px-0 max-lg:justify-center ">
            {/* LOGO HEADER */}
            <div className="container-logo flex ">
              <a href="#">
                <img src={gymLogo} className='img-fluid h-12' alt="Gym Logo" />
              </a>
            </div>

            <div className="container-hamburger lg:hidden flex absolute  left-[85%]" onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" className="w-7 h-7">
                <path strokeLinecap="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
              </svg>
            </div>

            {/* NAV OPTIONS */}
            <div className="contain-options flex gap-7 text-lg font-medium max-lg:hidden">
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
            </div>

            {/* BOTONS OPTIONS */}
            <div className="container-options-slider flex gap-3 justify-center items-center font-semibold text-base max-lg:hidden">
                <div className="container-options-slider  flex gap-3 justify-center items-center font-semibold text-base max-lg:hidden">

                    <div className='opciones-nav1 cursor-pointer bg-black text-white h-[45px] border-2 justify-center items-center mb-0 border-white px-10 py-[10px] rounded-full hover:bg-white hover:text-black hover:border-black transition-colors duration-500 max-lg:w-[190px] max-lg:h-[45px]'>
                            <a href="#" className=''>Buscá una clase</a>
                    </div>

                    <div className='opciones-nav2 cursor-pointer bg-[#FFD300] h-[45px] border-2 border-[#FFD300] px-10 py-[10px] rounded-full hover:bg-black hover:border-white hover:text-white max-lg:border-none  transition-colors duration-500 max-lg:w-[250px] max-lg:h-[45px]'>
                            <a href="#" className=''>Asociate</a>
                    </div>

                </div>
            </div>
          </div>
        </div>

      </header>

      <div className={`container-menuMobile ${isMenuVisible ? 'flex' : 'hidden'} gap-5 h-56 justify-center items-center bg-black flex-col text-white`}>
        <a href="">Nosotros</a>
        <a href="">Contacto</a>
        <a href="">Planes</a>
        <a href="#" className='text-xl ml-16 mr-16 opciones-nav2 bg-[#FFC900] border-black text-black px-6 py-1 rounded-full hover:bg-black hover:text-white transition-colors duration-500'>Inscribite</a>
    </div>

    </>
 );
}

export default Navbar;
