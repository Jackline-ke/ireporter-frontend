import React, {useEffect} from "react";
import {Link} from 'react-scroll';
import AOS from "aos";
import "aos/dist/aos.css";
// import "./About.css";

export default function () {
    useEffect( () =>{
        AOS.init({duration: 2000});
    }, [])
  return (
    <div className='flex justify-center px-4 py-8 font-serif' id='aboutUs'>
       <div className="text-center">
        <h1 className="text-4xl md:text-5xl text-[#ff1212] font-extrabold mb-4">Report Corruption</h1>
        <p className="text-lg sm:text-xl text-gray-600 tracking-wider"> Ethics and Anti-Corruption Commission gathers information on corruption occuring in Government and public Sector from
            a variety of sources.These sources includes members of the public, heads of governments and agencies, officals working in both
            the public and private sectors and the media.The report can be made in this website or send us an email from our contacts below.</p>
       </div>
    </div>
  )
}


{/* <div className='flex justify-center mb-8 mt-12'>
            <h1 className='text-6xl text-[#ff1212]'>Report Corruption</h1>
        </div>
        <div className='flex justify-center'>
        <p className='text-center text-xl text-gray-600'>
            Ethics and Anti-Corruption Commission gathers information on corruption <br/>occuring in Government and public Sector from
            a variety of sources.<br/> These sources includes members of the public, heads of governments <br/>and agencies, officals working in both
            the public and private sectors and the media.<br/> The report can be made in this website or send us an email from our contacts below.
        </p>
        </div> */}