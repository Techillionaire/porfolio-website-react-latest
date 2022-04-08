import React from 'react'
import { FaGithub, FaFacebook, FaTwitter, FaInstagram, FaStackOverflow } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-gray-200'>
        <div className='container flex flex-col-reverse justify-between px-6 mx-auto space-y-8 md:flex-row md:space-y-0 md:py-12'>
            <div className='flex flex-col-reverse items-center justify-between space-y-6 pb-6 md:flex-row md:justify-between md:space-x-80 md:space-y-0 '>
                <div>
                    <a href='/' className='logo font-light text-center text-base space-y-4 md:font-bold md:font-2xl'>Techillionaire.</a>
                </div>
                <div className='flex justify-between space-x-6 py-6 md:space-x-40'>
                    <a href='https://github.com/Techillionaire' target='_blank' className=''>
                        <i className='icons'><FaGithub /></i>
                    </a>
                    <a href='https://stackoverflow.com/users/15582692/techillionaire' target='_blank' className=''>
                        <i className='icons'><FaStackOverflow /></i>
                    </a>
                    <a target='_blank' href='https://twitter.com/leeowonikoko' className=''>
                        <i className='icons'><FaTwitter /></i>
                    </a>
                    <a target='_blank' href='https://www.instagram.com/leeowonikoko/' className=''>
                        <i className='icons'><FaInstagram /></i>
                    </a>
                    <a  target='_blank' href='https://www.facebook.com/leeowonikoko1' className=''>
                        <i className='icons'><FaFacebook /></i>
                    </a>
                </div>

        
            </div>
        </div>

    </footer>
  )
}

export default Footer