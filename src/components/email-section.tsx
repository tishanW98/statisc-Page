import React from 'react'

const EmailSection = () => {
  return (
    <footer className="text-gray-600 bg-blue-back body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap md:text-left text-center order-first place-content-center ">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <nav className="list-none mb-10">
          <p>
            <a className="text-gray-600 hover:text-gray-800">Stay ahead with our newsletter. Receive exclusive updates, industry insights, and product announcements directly to your inbox.</a>
          </p>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 " >
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
        <div className="mb-4">
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your email address"/>
      <div className="flex items-center justify-between">
      <button className="bg-blue-lite hover:bg-blue-700 text-white font-bold my-2 py-1 px-4 rounded focus:outline-none focus:shadow-outline" >
        Submit
      </button>
    </div>
    </div>
        </div>
      </div>
    </div>
  </div>
</footer>
  )
}

export default EmailSection