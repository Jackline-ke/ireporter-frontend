import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
   <div className='bg-[#ff1212] text-white font-serif'>
    <footer className='flex justify-center pt-8'>
      <div>
        <h1 className='font-bold text-xl'>iReporter</h1>
        <p>Stop Corruption </p>
      </div>
      <div className='ml-48'>
        <div className='flex justify-center'>
          <h1 className='font-bold text-xl'>Social Media</h1>
        </div>
        <div className='flex justify-center mt-2'>
          <ul>
            <li className='font-light'>Facebook</li>
            <li className='font-light'>Twitter</li>
            <li className='font-light'>Instagram</li>
          </ul>
        </div>
      </div>
      <div className='ml-48'>
        <div className='flex justify-center'>
          <h1 className='font-bold text-xl'>Contact Us</h1>
        </div>
        <ul>
          <li className='font-light'>Phone Number: +25477889933</li>
          <li className='font-light'>Email: ireporter@gmail.com</li>
        </ul>
      </div>
    </footer>
   </div>
  )
}
