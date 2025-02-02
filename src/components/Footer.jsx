import React from 'react'
import { FaFacebook,FaTwitter,FaInstagram,FaLinkedin } from "react-icons/fa";


function Footer() {
  return (
    <>
    <hr />
    <footer className='py-12'>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 ">
        <div className='flex flex-col items-center justify-center'>
          <div className='flex space-x-4 cursor-pointer'>
            <FaFacebook size={24}/>
            <FaTwitter size={24}/>
            <FaInstagram size={24}/>
            <FaLinkedin size={24}/>
          </div>
          <div className='mt-8  border-t border-slate-700 pt-8 flex flex-col items-center space-y-2'>
            <p className='text-sm'>&copy; 2025 Your Company. All rights reserved.</p>
            <p className='text-sm'>Supportive Partner &#10084; Asgar</p>
          </div>
        </div>

      </div>

    </footer>
    </>
  )
}

export default Footer
