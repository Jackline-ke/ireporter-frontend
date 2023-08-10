import React from 'react'
import './Banner.css'
import { TypeAnimation } from "react-type-animation";
import cor from "../../assets/cor.png"
import {Link} from 'react-scroll';



const Banner = () => {
  return (
    <div className='row-container font-serif mb-20 mt-20'>
      <div className='row'>
        <div className='col-2'>
          <div className="mb-6 text-[36px] lg:text-[40px] font-secondary font-semibold uppercase leading-[1] ml-24">
            <span className="mr-4 text-black">Report on</span>
            <TypeAnimation sequence={[
              'Corruption',
              2000,
              'and Unethical conduct',
              2000,
              ]}
              speed={50}
              className="text-accent"
              wrapper="span"
              repeat={Infinity}
              />
          </div>
            <p className=''>Ethics and Anti-Corruption Commission gathers information on corruption occuring in Government and public Sector from
            a variety of sources.These sources includes members of the public, heads of governments and agencies, officals working in both
            the public and private sectors and the media</p>   

            <Link to="aboutUs" smooth={true}>
              <button className='button bg-[#ff1212] hover:bg-[#740101] w-36 p-3 rounded-3xl ml-28 text-white mt-8 shadow-2xl'>Read more</button>
            </Link>
        </div>
          <div className='col-2'>
            <img src={cor} alt='banner' width={600} height={950}/>
          </div>   
      </div>

    </div>
  )
}

export default Banner