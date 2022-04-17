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
        </div>
    </nav>
  )
}

export default Nav