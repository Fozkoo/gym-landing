import React, { useState } from 'react';
import gymLogo from '../images/logo-gym.png';
import BurgerButton from '..//componets/BurgerButton';

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
              {/* Opciones de navegación */}
            </div>

            {/* BOTONS OPTIONS */}
            <div className="container-options-slider flex gap-3 justify-center items-center font-semibold text-base max-lg:hidden">
              {/* Botones de opciones */}
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
