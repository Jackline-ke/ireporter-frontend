import React from 'react'
// import './Banner.css'
// import { TypeAnimation } from "react-type-animation";
import cor from "../../assets/cor.png"
// import {Link} from 'react-scroll';

const Banner = () => {
  return (
    <div className='w-full h-screen font-serif'>
      <div className='px-8 py-8 flex flex-col md:flex-row items-center h-full'>
        <div className='flex flex-col sm:flex w-full py-8 text-center sm:text-left'>
          <h1 className='mb-4 text-4xl md:text-5xl text-[#ff1212] font-extrabold tracking-wider'>CORRUPTION AND UNETHICAL CONDUCT</h1>
          <p className='text-lg sm:text-xl text-gray-600 tracking-wider'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <div className='mt-8'>
            <button className='py-2 rounded-lg'>Read More</button>
          </div>
                
        </div>
        <div className='flex flex-col justify-center w-full sm:ml-8 px-16 sm:px-2'>
          <img src={cor} alt="banner image"/>
        </div>
      </div>
    </div>
  )
}

export default Banner