import React from 'react'

const Nav = () => {
  return (
    <nav className='container relative mx-auto p-6'>
        <div className='flex items-center justify-between'>
            <div>
                <a href=''className='logo font-light text-3xl'>Techillionaire.</a>
            </div>

            <div className='hidden md:flex space-x-6'>
                <a href='' className='hover:text-blue-400'>Home</a>
                <a href='' className='hover:text-blue-400'>About Me</a>
                <a href='' className='hover:text-blue-400'>Projects</a>
                <a href='' className='hover:text-blue-400'>Testimonials</a>
                <a href='' className='hover:text-blue-400'>Blog</a>
            </div>

            <a href='' className='hidden md:flex btn font-normal p-2 text-blue-400 sm:w-100 hover:outline-blue-300 hover:outline outline hover:text-white outline-blue-200 hover:bg-blue-400 '>Get in touch</a>
            <button className='hamburger block md:hidden focus:outline-none'>
              <span className='hamburgerTop'></span>
              <span className='hamburgerMiddle'></span>
              <span className='hamburgerBottom'></span>
            </button>
        </div>

        {/* Mobile menu */}
         <div className='md:hidden'>
           <div className='absolute flex flex-col items-center self-end hidden py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'>
           <a href='' className='hover:text-blue-400'>Home</a>
                <a href='' className='hover:text-blue-400'>About Me</a>
                <a href='' className='hover:text-blue-400'>Projects</a>
                <a href='' className='hover:text-blue-400'>Testimonials</a>
                <a href='' className='hover:text-blue-400'>Blog</a>
           </div>
         </div>
    </nav>
  )
}

export default Nav