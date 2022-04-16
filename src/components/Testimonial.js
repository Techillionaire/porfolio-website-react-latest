import React from 'react'

const Testimonial = ({img, position, name, comment}) => {
  return (
    <div className="w-80 justify-center h-60 mx-5  my-3 rounded-t-lg border overflow-hidden">
        <div className="h-6 bg-blue-400 items-center">
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
                <img src={img} alt='' className='rounded-full h-16 w-16'/>
                <p>{comment}</p>
                <p>{position}</p>
            </div>
        </div>

</div>
  )
}

export default Testimonial


