import React, {useEffect} from "react";
import {Link} from 'react-scroll';
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";

export default function () {
    useEffect( () =>{
        AOS.init({duration: 2000});
    }, [])
  return (
    <div className='flex justify-center' id='aboutUs'>
        <div className='mt-10 font-serif mb-20 border border-[#ffc9c9] w-[90%] rounded-3xl shadow-xl' data-aos="fade-up">
        <div className='flex justify-center mb-8 mt-12'>
            <h1 className='text-6xl text-[#ff1212]'>Report Corruption</h1>
        </div>
        <div className='flex justify-center'>
        <p className='text-center text-xl text-gray-600'>
            Ethics and Anti-Corruption Commission gathers information on corruption <br/>occuring in Government and public Sector from
            a variety of sources.<br/> These sources includes members of the public, heads of governments <br/>and agencies, officals working in both
            the public and private sectors and the media.<br/> The report can be made in this website or send us an email from our contacts below.
        </p>
        </div>
        <div className='flex justify-center mt-10 mb-12'>
            <Link>
                <button className='button bg-white hover:bg-[#ff1212] hover:text-white border border-[#ffd6d6] w-60 p-6 rounded-3xl ml-16 text-black shadow-2xl text-4xl'>Email</button>
            </Link>
            <Link to='post'>
                <button className='button bg-white hover:bg-[#ff1212] hover:text-white w-60 p-6 border border-[#ffd6d6] rounded-3xl ml-16 text-black shadow-2xl text-4xl'>Posts</button>
            </Link>
        </div>
    </div>
    </div>
  )
}
