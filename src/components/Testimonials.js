import React from 'react'
import { BsLinkedin } from "react-icons/bs";

const Testimonials = () => {
  return (
    <section id='testimonials'>
        <div className='container max-w-6xl px-3 my-3 mx-auto mt-10 text-center'>
            <h2 className='text-4xl font-bold text-center -mb-10'>Testimonials</h2>

            <div className='flex flex-col mt-24 md:flex-row md:space-x-6'>
                <div className='flex flex-col items-center p-8 space-y-5 rounded-lg bg-gray-100 md:w-1/3'>
                    <img src='https://whoosh.com.ng/wp-content/uploads/2021/03/Adeposi-Bamiduro--150x150.jpg' className='w-20 rounded-full'  alt='posiImg' />
                    <div className='flex'>
                        <h3 className='text-lg font-bold mr-5 -mt-2'>Adeposi Bamiduro  </h3>
                        <a className='' target="_blank" href='https://www.linkedin.com/in/adeposi-bamiduro-70925448/'>
                            <i><BsLinkedin /></i>
                        </a>
                    </div>
                    <p className='text-grey font-light italic'>lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip</p>
                    <h5 className='font-normal'>Solutions Architect</h5>
                </div>
                <div className='hidden md:flex flex-col items-center p-8 space-y-5 rounded-lg bg-gray-100 md:w-1/3'>
                    <img src='https://media-exp1.licdn.com/dms/image/C4D03AQHsRvzCtOkcBg/profile-displayphoto-shrink_200_200/0/1642267868373?e=2147483647&v=beta&t=xS7YKUE-sTPq1csugC7-r4wEwXOYnLGZgUkDDDZek1Q' className='w-20 rounded-full'  alt='posiImg' />
                    <div className='flex'>
                        <h3 className='text-lg font-bold mr-5 -mt-2'>Adebola Ogunmolu</h3>
                        <a className='' target="_blank" href='https://www.linkedin.com/in/adebolaogunmolu/'>
                            <i><BsLinkedin /></i>
                        </a>
                    </div>
                    <p className='text-grey font-light italic'>lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip</p>
                    <h5>HR Consultant</h5>
                </div>

                <div className='hidden md:flex flex-col items-center p-8 space-y-5 rounded-lg bg-gray-100 md:w-1/3'>
                    <img src='https://media-exp1.licdn.com/dms/image/C4D03AQFfuWfG6-QCdw/profile-displayphoto-shrink_200_200/0/1548152692067?e=1652918400&v=beta&t=asoNaWwRjB_eFCAvuls3MH0HTHgI6OGO58Nj1RxyFc4' className='w-20 rounded-full'  alt='posiImg' />
                    <div className='flex'>
                        <h3 className='text-lg font-bold mr-5 -mt-2'>Ebenezer Ugo</h3>
                        <a className='' target="_blank" href='https://www.linkedin.com/in/ebenezer-ugo/'>
                            <i><BsLinkedin /></i>
                        </a>
                    </div>
                    <p className='text-grey font-light italic'>lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip</p>
                    <h5>Sr. Software Developer</h5>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Testimonials