import React from 'react'

const Contact = () => {
  return (
    <section>
      <div className='container flex flex-col px-1 py-14 space-y-6 justify-center md:space-y-0 md:flex-row'>
        <div className='hidden md:w-1/2 justify-center md:flex'>
          <img src='https://raw.githubusercontent.com/Techillionaire/porfolio-website-react-latest/9798bb0ffa5ef96b6952c8f4cbbf1064fe36b7ac/src/assets/email.svg' alt='' className='w-90 h-90 ' />
        </div>

        <div className='md:w-1/2 flex flex-col px-4'>
          <h2 className="max-w-md text-3xl font-bold text-center  -mt-14 md:mt-0  py-4">Contact</h2>

          <form className='flex flex-col space-y-6 md:space-y-8 md:mt-8'>
            <input type="text" className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md p-4 shadow-sm focus:outline-none" placeholder="Enter your name"/>
            <input type="email" className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md p-4 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-400 focus:ring-1 sm:text-sm" placeholder="Enter your email"/>
            <textarea className='placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md p-4 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-400 focus:ring-1 sm:text-sm min-h-[50%]' placeholder="Enter your message"/>
            <div className='flex justify-center'>
              <a href='' className='p-3 px-14 text-white bg-blue-400 w-full text-center rounded baseline hover:bg-blue-300'>Send</a>
            </div>
          </form>


        </div>


      </div>
    </section>
  )
}

export default Contact