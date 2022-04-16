import React from 'react'

const Projects = ({ img, link, appName }) => {

  return (
    <div className="w-80 justify-center h-60 mx-5  my-3 rounded-t-lg border overflow-hidden">
        <div className="h-6 bg-blue-400 items-center">
          <div className='flex items-center justify-between'>
            <div className='flex'>
              <div className="w-1.5 h-1.5 rounded-full m-1 bg-gray-100"></div>
              <div className="w-1.5 h-1.5 rounded-full m-1 bg-gray-100"></div>
              <div className="w-1.5 h-1.5 rounded-full m-1 bg-gray-100"></div>
            </div>
            

            <div className='pe-4 font-bold text-sm mt-0.5'>
              <p className='text-gray-100'>{appName}</p>
            </div>
          </div>

            
          
          
          <a href={link} target="_blank" className="p-3 mt-80">
            <img src={img} alt='' className="w-full	object-contain" />
          </a>
        </div>
    </div>
  )
}

export default Projects