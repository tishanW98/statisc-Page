import React from 'react'

const Steps = () => {
  return (
    <section className="text-gray-600 body-font grid grid-cols-2">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <div className="text-left lg:w-2/3 w-full">
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold">Get Started in<br/><span className="text-blue-dark">Three Simple Steps</span>
      </h1>
      <p className="mb-8 leading-relaxed">Welcome to a new era of business management. Dive in and discover the simplicity of powerful tools working in harmony for your success.</p>
      <div className="flex justify-left">
        <button className="inline-flex text-white bg-blue-lite border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get Started</button>
      </div>
    </div>
  </div>
  <div className="container px-5 py-24 mx-auto">
  <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-blue-lite sm:flex-row flex-col">
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-blue-lite text-lg title-font font-medium mb-2">Seamless Onboarding</h2>
        <p className="leading-relaxed text-base">Embark on your POS journey with a quick and seamless registration process. Your gateway to efficient business management begins here.</p>

      </div>
      <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
      <div className="flex items-left">
          <img
            src="img/1.png"
            alt="three"
            className="w-50 h-12" //rounded-full
          />
        </div>
      </div>
    </div>
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-blue-lite sm:flex-row flex-col">
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-blue-lite text-lg title-font font-medium mb-2">Unlock Premium Power</h2>
        <p className="leading-relaxed text-base">Experience the full power of our SaaS POS with a secure and straightforward payment process. Elevate your operations with premium features tailored to your business needs.</p>
      </div>
      <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
      <div className="flex items-left">
          <img
            src="img/2.png"
            alt="twoo"
            className="w-50 h-12" //rounded-full
          />
        </div>
      </div>
    </div>
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-blue-lite sm:flex-row flex-col">
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-blue-lite text-lg title-font font-medium mb-2">Intuitive Dashboard Dive</h2>
        <p className="leading-relaxed text-base ">Effortlessly navigate through your business landscape with our user-friendly interface. Your dashboard awaits to simplify inventory management and streamline sales processes.</p>
      </div>
      <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
      <div className="flex items-left">
          <img
            src="img/3.png"
            alt="three"
            className="w-50 h-12" //rounded-full
          />
        </div>
      </div>
    </div>
    <button className="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
  </div>
</section>
  )
}

export default Steps