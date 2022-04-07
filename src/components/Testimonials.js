import React from 'react'

const Testimonials = () => {
  return (
    <section id='testimonials'>
        <div className='max-w-6xl px-5 mx-auto mt-32 text-center'>
            <h2 className='text-4xl font-bold text-center'>Testimonials</h2>

            <div className='flex flex-col mt-24 md:flex-row md:space-x-6'>
                <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100 md:w-1/3'>
                    <img src='https://www.linkedin.com/in/adeposi-bamiduro-70925448/overlay/photo/' className='w-16'  alt='posiImg' />
                    <h3>Adebola Ogunmulu</h3>
                    <h5>HR Consultant</h5>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Testimonials