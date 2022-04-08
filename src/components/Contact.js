import React from 'react'

const Contact = () => {
  return (
    <section>
      <div className='container flex flex-col px-4 py-14 space-y-6 justify-center md:space-y-0 md:flex-row'>
        <div className='hidden md:w-1/2 justify-center md:flex'>
          <img src='https://raw.githubusercontent.com/Techillionaire/porfolio-website-react-latest/9798bb0ffa5ef96b6952c8f4cbbf1064fe36b7ac/src/assets/email.svg' alt='' className='w-90 h-90 ' />
        </div>

        <div className='md:w-1/2 flex flex-col px-4'>
          <h2 className="max-w-md text-3xl font-bold text-center md:text-start -mt-14 md:mt-0  py-4 md:justify-start">Contact</h2>

          <form className='flex flex-col space-y-6 md:space-y-8 md:mt-8 pl-4'>
            <input type="text" className="bg-gray-300 p-4 rounded" placeholder="Enter your name"/>
            <input type="email" className="bg-gray-300 p-4 rounded" placeholder="Enter your email"/>
            <textarea className='bg-gray-300 p-4 rounded min-h-[50%] border-transparent' placeholder="Enter your message"/>
            <div className='flex justify-center md:justify-start'>
              <a href='' className='flex md:flex p-3 px-14 text-white bg-blue-400 rounded-full baseline hover:bg-blue-300'>Send</a>
            </div>
          </form>


        </div>


      </div>
    </section>
  )
}

export default Contact