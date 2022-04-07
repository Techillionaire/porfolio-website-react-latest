import React from 'react'

const Hero = () => {
  return (
    <section id='hero'>
        <div className='container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0'>
            <div className='flex flex-col mb-32 space-y-4 md:space-y-10 md:w-1/2'>
                <h1 className='max-w-md text-3xl font-bold text-center md:text-5xl md:text-left'>Hello, I'm Kingslee</h1>
                <p className='max-w-md text-2xl font-normal text-center md:text-3xl md:text-left'>Web developer</p>
                <p className='max-w-md text-2xl font-light text-center md:text-3xl md:text-left'>I build user-friendly, interactive and responsive web and mobile applications.</p>
                <div className='flex justify-center md:justify-start'>
                  <a href='' className='flex md:flex p-3 px-6 text-white bg-red-400 rounded-full baseline hover:bg-red-300'>Contact Me</a>
                </div>
            </div>

            <div className='md:w-1/2'>
              <img src=' alt='' className='' />

            </div>
        </div>
    </section>
  )
}

export default Hero