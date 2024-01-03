"use client";
import React from 'react'
import { useScrollPosition } from "@/hooks/useScrollPosition";

const Header = () => {

  const scrollPosition = useScrollPosition();
  return (
    <header className={`sticky top-0 z-50 transition-shadow ${scrollPosition > 0 ? "shadow bg-opacity-70 backdrop-blur-lg backdrop-filter" : "shadow-none"}`}>
  <div className="container mx-auto flex flex-wrap pr-20 pl-20 p-5 flex-col  md:flex-row items-center">

    <div className="flex items-left">
          <img
            src="img/logo3.png"
            alt="Logo"
            className="w-50 h-12" //rounded-full
          />
          {/* <span className="ml-3 text-xl font-bold">RXBIT</span> */}
        </div>

    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">User</a>
      <a className="mr-5 hover:text-gray-900">Pricing</a>
    </nav>
    <div className="flex justify-center">
    <button className="inline-flex items-center mr-4 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Sign In
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    <button className="inline-flex items-center bg-blue-lite border-0 py-2 px-3 focus:outline-none hover:bg-gray-200 rounded text-white mt-4 md:mt-0">Register
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
      </div>
  </div>
</header>
  )
}

export default Header