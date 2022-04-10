import React from 'react'

const Hero = () => {
  return (
    <section id='hero'>
        <div className='container flex flex-col-reverse md:mb-6 md:flex-row items-center px-6 mx-auto space-y-0 md:space-y-0'>
            <div className='flex flex-col mb-32 space-y-8 md:space-y-10 md:w-1/2'>
                <h1 className='max-w-md text-3xl font-bold text-center md:text-start md:text-5xl md:text-left'>Hello, I'm Kingslee.</h1>
                <p className='max-w-md text-2xl font-normal text-center md:text-start md:text-3xl md:text-left'>Web developer.</p>
                <p className='max-w-md text-2xl font-light text-center md:text-start md:text-3xl md:text-start'>I design and build user-friendly, interactive and responsive web and mobile applications.</p>
            
                <div className='flex justify-center md:justify-start md:ml-40'>
                  <button className='btn font-normal p-2 text-blue-400 sm:w-100 hover:outline-blue-300 hover:outline outline hover:text-white outline-blue-200 hover:bg-blue-400 '>Drop a message</button>
                </div>

            </div>

            <div className='hidden md:flex md:w-1/2 justify-center'>
              <img src='https://raw.githubusercontent.com/Techillionaire/porfolio-website-react-latest/cbdd8ddb16ff02a09721d4eac39b1b9ca6aaa2af/src/assets/office-workplace.svg' alt='' className='w-85 h-85 ' />
            </div>

            <div className='flex md:hidden justify-center'>
              <img src='https://raw.githubusercontent.com/Techillionaire/porfolio-website-react-latest/cbdd8ddb16ff02a09721d4eac39b1b9ca6aaa2af/src/assets/office-workplace.svg' alt='' className='w-80 h-80 ' />
            </div>
        </div>
    </section>
  )
}

export default Hero