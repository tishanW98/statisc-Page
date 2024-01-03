import React from 'react'

const HeroSection = () => {
  return (
    <section className="text-gray-600 body-font ml-20 pr-20 pl-20 p-5">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold"><span className="text-blue-lite" >Revolutionize</span> Your <br/>Business Operations
      </h1>
      <p className="mb-8  max-w-100 leading-relaxed ">Seamlessly integrate point of sale transactions with intelligent inventory management, all in one powerful solution. Say goodbye to the challenges of traditional systems and embrace a future where your business works as smart as you do.</p>
    </div>
    <div className="lg:max-w-lg lg:w-full mr-20 md:w-1/2 w-5/6">
    <img alt="hero" src="img/web1.png" className="object-cover object-center rounded"/>
    </div>
  </div>
</section>
  )
}

export default HeroSection