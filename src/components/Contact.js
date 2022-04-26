import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const formRef = useRef()
  const [ done, setDone ] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault(e)

    emailjs.sendForm('service_ha5qpng', 'template_emd4i4g', formRef.current, '1BxZpTTGfCmtTXvFy')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });

  }


  return (
    <section>
      <div className='container flex flex-col px-1 py-14 space-y-6 justify-center md:space-y-0 md:flex-row'>
        <div className='hidden md:w-1/2 justify-center md:flex'>
          <img src='https://raw.githubusercontent.com/Techillionaire/porfolio-website-react-latest/9798bb0ffa5ef96b6952c8f4cbbf1064fe36b7ac/src/assets/email.svg' alt='' className='w-90 h-90 ' />
        </div>

        <div className='md:w-1/2 flex flex-col px-4'>
          <h2 className="max-w-md text-3xl font-bold text-center  -mt-14 md:mt-0  py-4">Contact</h2>

          <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col space-y-6 md:space-y-4 md:mt-8'>
            <input type="text" name="user_name" className="placeholder:text-slate-400 block bg-gray-100 w-full  border-slate-300 border-0 rounded-md p-3 shadow-sm focus:outline-none" placeholder="Name"/>
            <input type="text" name="user_subject"className="placeholder:text-slate-400 block bg-gray-100 border-0 w-full  border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-400 focus:ring-1 sm:text-sm" placeholder="Subject"/>
            <input type="email" name="user_email" className="placeholder:text-slate-400 block bg-gray-100 w-full border-0 border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-400 focus:ring-1 sm:text-sm" placeholder="Email"/>
            <textarea name='message' className='placeholder:text-slate-400 block bg-gray-100 w-full border-0 border-slate-300 rounded-md p-4 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-400 focus:ring-1 sm:text-sm min-h-[50%]' placeholder="Enter your message"/>
            <div className='flex justify-center'>
              <button  className='p-3 px-14 text-white bg-blue-400 w-full text-center rounded baseline hover:bg-blue-300'>Send</button>
              {done && "Thank you, I'll get back to you shortly..."}
            </div>
          </form>


        </div>


      </div>
    </section>
  )
}

export default Contact