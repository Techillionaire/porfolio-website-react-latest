import React from 'react'

const Nav = () => {
  return (
    <nav className='container relative mx-auto p-6'>
        <div className='flex items-center justify-between'>
            <div>
                <a href=''className='logo font-light text-3xl'>Techillionaire.</a>
            </div>

            <div className='hidden md:flex space-x-6'>
                <a href='' className='hover:text-red-300'>Home</a>
                <a href='' className='hover:text-red-300'>About Me</a>
                <a href='' className='hover:text-red-300'>Projects</a>
                <a href='' className='hover:text-red-300'>Testimonials</a>
                <a href='' className='hover:text-red-300'>Blog</a>
            </div>

            <a href='' className='hidden md:flex p-3 px-6 text-white bg-red-400 rounded-full baseline hover:bg-red-300'>Contact Me</a>
        </div>
    </nav>
  )
}

export default Nav