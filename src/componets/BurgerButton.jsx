import React from 'react'

function BurgerButton(props) {

  


  return (
    <>
                        {/* HAMBURGER MENU */}
      <div className="container-hamburger lg:hidden flex absolute left-[85%]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="black" className="w-7 h-7">
            <path strokeLinecap="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
      </div>
    </>
  )
}

export default BurgerButton