import React from 'react'

const About = () => {
  return (
    <section id='about'>
        <div className='container flex flex-col px-4 space-y-10 md:space-y-0 md:flex-row'>
           
            <div className='flex flex-col space-y-6 md:w-1/2 md:px-10'>
                <h2 className='max-w-md text-3xl font-bold text-center'>About me</h2>
                <p className='max-w-md text-center text-gray-600 md:text-left italic px-4'>lorem ipsum dolor sit amet, consectetur adip lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem ipsum lore
                lorem ipsum dolor sit amet, consectetur adip lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem ipsum lore
                lorem ipsum dolor sit amet, consectetur adip lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem ipsum lore
                </p>
            </div>

            <div className="flex flex-col space-y-6 md:w-1/2">
            <h2 className="max-w-md text-3xl font-bold text-center">Pro Skills</h2>
                <div className="flex flex-col space-y-2 md:space-y-0 md:space-x-6 md:flex-row px-4">
                    
                    <div className="rounded-l-full bg-blue-300 md:bg-transparent">
                        <div className="flex items-center space-x-2">
                            <div className="px-4 text-white rounded-full md:py-1 bg-blue-500">
                                01
                            </div>
                            <h4 className="text-base-4 font-light md:mb-4 text-2xl md:hidden py-2">Front-end Web dev.</h4>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h4 className="hidden  text-lg-2 font-normal md:flex text-2xl">Front-end Web development</h4>
                        <p className="text-gray-500">lorem ipsum dolor lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip</p>
                    </div>
                </div>

                <div className="flex flex-col space-y-2 md:space-y-0 md:space-x-6 md:flex-row px-4">
                    
                    <div className="rounded-l-full bg-blue-300 md:bg-transparent">
                        <div className="flex items-center space-x-2">
                            <div className="px-4 text-white rounded-full md:py-1 bg-blue-500">
                                02
                            </div>
                            <h4 className="text-base-4 font-light md:mb-4 text-2xl md:hidden py-2">Back-end Web dev.</h4>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h4 className="hidden  text-lg-2 font-normal md:flex text-2xl">Back-end Web development</h4>
                        <p className="text-gray-500">lorem ipsum dolor lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip</p>
                    </div>
                </div>
                <div className="flex flex-col space-y-2 md:space-y-0 md:space-x-6 md:flex-row px-4">
                    
                    <div className="rounded-l-full bg-blue-300 md:bg-transparent">
                        <div className="flex items-center space-x-2">
                            <div className="px-4 text-white rounded-full md:py-1 bg-blue-500">
                                03
                            </div>
                            <h4 className="text-base-4 font-light md:mb-4 text-2xl py-2 md:hidden">Mobile app dev</h4>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h4 className="hidden  text-lg-2 font-normal md:flex text-2xl">Mobile app development</h4>
                        <p className="text-gray-500">lorem ipsum dolor lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip</p>
                    </div>
                </div>
                <div className="flex flex-col space-y-2 md:space-y-0 md:space-x-6 md:flex-row px-4">
                    
                    <div className="rounded-l-full bg-blue-300 md:bg-transparent">
                        <div className="flex items-center space-x-2">
                            <div className="px-4 text-white rounded-full md:py-1 bg-blue-500">
                                04
                            </div>
                            <h4 className="text-base-4 font-light md:mb-4 text-2xl md:hidden py-2">Product Design</h4>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h4 className="hidden  text-lg-2 font-normal md:flex text-2xl">Product Design / UX Research</h4>
                        <p className="text-gray-500">lorem ipsum dolor lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About