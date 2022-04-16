import React from 'react'
import { BsLinkedin } from 'react-icons/bs'

const Testimonial = ({img, position, name, comment, link}) => {
  return (
    <div className="w-80 justify-center h-60 mx-5  my-3 rounded-t-lg border overflow-hidden bg-gray-100">
        <div className="h-6 bg-blue-400 ps-2 items-center">
        <div className='flex items-center justify-between'>
            <div className='flex mt-1'>
            <div className="w-1.5 h-1.5 rounded-full m-1 bg-gray-100"></div>
            <div className="w-1.5 h-1.5 rounded-full m-1 bg-gray-100"></div>
            <div className="w-1.5 h-1.5 rounded-full m-1 bg-gray-100"></div>
            </div>
            
            <div className='pe-4 font-bold text-sm mt-0.5'>
            <p className='text-gray-100'>{name}</p>
            </div>
        </div>


        </div>

        <div className='items-center'>
            <div className='block space-y-4 p-3 items-center justify-center'>
                <img src={img} alt='' className='rounded-full h-16 w-16 ms-5'/>
                <p className='ms-4 text-gray-500' >{comment}</p>
                <div className='flex justify-between'>
                  <p className='ms-4 font-bold text-gray-700 italic'>{position}</p>
                  
                    <div className='p-2 hover:bg-blue-100 hover:rounded-full'>
                      <a href={link} target='_blank' rel="noreferrer">
                        <i className='text-lg'>
                          <BsLinkedin />
                        </i>
                      </a>
                    </div>
                  </div>
            </div>
        </div>

</div>
  )
}

export default Testimonial


