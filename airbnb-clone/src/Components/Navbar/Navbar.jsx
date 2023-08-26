import React from 'react'
import Airbnb_Logo from '../../assets/images/Airbnb_Logo.png'
import airbnb_logo from '../../assets/images/airbnb-logo.png'

function Navbar() {
  return (
    <nav class='navbar px-6 md:px-[2.5rem] lg:px-[5.5rem] text-3xl h-[4.4rem] md:h-[5rem] lg:h-[5.5rem] bg-[#f4f4f4] border-b border-[#d1d1d1] sticky top-0 z-30 grid items-center'>
      <div className="flex justify-center lg:justify-between items-center">
        
        <div className="logo-container w-full h-full hidden md:flex lg:flex">
          <div className="h-full md:w-[3rem] lg:w-[8rem] md:pr-0 lg:pr-4 ">
            <div className='h-full lg:flex items-center p-0 md:py-2 md:pr-4'>
              <img src={Airbnb_Logo} alt="" className='hidden lg:flex'/>
              <img src={airbnb_logo} alt="" className='hidden md:flex lg:hidden'/>
            </div>

          </div>
        </div>

        <div className="center-container bg-red-300 w-full h-[3rem] flex items-center justify-center md:mr-[5.5rem]">
          <div className="item-container bg-yellow-600 flex items-center justify-center h-full md:w-[22rem] lg:w-[24.5rem] border rounded-full px-3">
            <div className="inner-item-container h-full text-sm flex items-center justify-between">
              <span>
                <button className="itembtn w-full">Anywhere</button>
              </span>
              <span>
                <button className="itembtn w-full">Any week</button>
              </span>
              <span>
                <button className="itembtn w-full">
                  <span>Add guests</span>
                  <span>🔍</span>
                </button>
              </span>
            </div>
          </div>
        </div>

        <div className="right-container hidden md:flex lg:flex items-center justify-end gap-2 w-full h-[3rem]">
          <div className="h-full left flex items-center">
            <span className='h-full text-[1rem] w-[10rem] font-medium flex items-center rounded-full transition duration-100 hover:bg-[#ebebeb]'>
              <a href="#" className='w-full grid flex items-center justify-center'>Airbnb your home</a>
            </span>
            <span className='h-full transition duration-100 hover:bg-[#ebebeb]  h-full grid items-center px-3 rounded-full'>
              <svg width="1.4rem" height="1.4rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                <g id="SVGRepo_iconCarrier"> <g id="Navigation / Globe"> <path id="Vector" d="M3 12H8M3 12C3 16.9706 7.02944 21 12 21M3 12C3 7.02944 7.02944 3 12 3M8 12H16M8 12C8 16.9706 9.79086 21 12 21M8 12C8 7.02944 9.79086 3 12 3M16 12H21M16 12C16 7.02944 14.2091 3 12 3M16 12C16 16.9706 14.2091 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12C21 16.9706 16.9706 21 12 21" stroke="#000000" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round" /> </g> </g>

              </svg>
            </span>
          </div>

          <div className="right h-full w-[5.5rem] border border-gray-300 rounded-full px-2 flex items-center justify-center">
            <button className="w-full h-full flex items-center justify-between">
              <span className="pl-2">
                <svg class="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 14">
                  <path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z" />
                </svg>
              </span>
              <span className="">
                <svg width="2.2rem" height="2.2rem" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#494c4e" d="M9 0a9 9 0 0 0-9 9 8.654 8.654 0 0 0 .05.92 9 9 0 0 0 17.9 0A8.654 8.654 0 0 0 18 9a9 9 0 0 0-9-9zm5.42 13.42c-.01 0-.06.08-.07.08a6.975 6.975 0 0 1-10.7 0c-.01 0-.06-.08-.07-.08a.512.512 0 0 1-.09-.27.522.522 0 0 1 .34-.48c.74-.25 1.45-.49 1.65-.54a.16.16 0 0 1 .03-.13.49.49 0 0 1 .43-.36l1.27-.1a2.077 2.077 0 0 0-.19-.79v-.01a2.814 2.814 0 0 0-.45-.78 3.83 3.83 0 0 1-.79-2.38A3.38 3.38 0 0 1 8.88 4h.24a3.38 3.38 0 0 1 3.1 3.58 3.83 3.83 0 0 1-.79 2.38 2.814 2.814 0 0 0-.45.78v.01a2.077 2.077 0 0 0-.19.79l1.27.1a.49.49 0 0 1 .43.36.16.16 0 0 1 .03.13c.2.05.91.29 1.65.54a.49.49 0 0 1 .25.75z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar