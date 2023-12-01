import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='bg-[#ff1212] text-white font-serif px-4 md:px-32 py-4'>
      <div className='flex justify-between items-center'>
        {/* logo */}
        <div className=''>
          <h5 className='text-white'>iReporter</h5>
        </div>
        {/* links */}
        <div className=''>
          <h5 className='font-semibold text-white'>Qick Links</h5>
          <ul>
            <li className=''>Home</li>
            <li className=''>Write</li>
            <li className=''>About</li>
            <li className=''>Contact Us</li>
          </ul>
        </div>
        {/* social media */}
        <div className=''>
          <h5 className='font-semibold text-white'>Social Media</h5>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </div>
  )
}


{/* <footer className='flex justify-center pt-8'>
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
</footer> */}