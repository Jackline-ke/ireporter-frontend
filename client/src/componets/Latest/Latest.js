import React, {useEffect} from "react";
import cor1 from "../../assets/cor1.jpeg"
import AOS from "aos";
import "aos/dist/aos.css";

export default function () {
    useEffect( () =>{
        AOS.init({duration: 2000});
    }, [])
  return (
   <div className='flex justify-center'>
     <div className='font-serif mt-10 border border-[#ffc9c9] w-[90%] rounded-3xl shadow-xl'>
        <div className='flex justify-center mb-12'>
            <div>
                <div className='flex justify-center'>
                    <h1 className='text-5xl mb-4 mt-4 text-[#ff1212]'>Latest and New Updates</h1>
                </div>
                <p className='text-lg'>The latest news and headlines from the Ethics and Anti-Corruption Commission.</p>
            </div>
        </div>
        <div className='flex justify-center mb-10' data-aos="fade-right">
            <div className='w-[20%] border h-fit rounded-lg'>
                <div>
                    <img src={cor1} className='w-full rounded-tl-lg rounded-tr-lg' alt='latest'/>
                </div>
                <div>
                    <h1 className='mb-2 text-xl font-semibold p-4'>Prevention is better than cure, EACC tells the public</h1>
                    <h2 className='cursor-pointer ml-4 mb-4 text-[#ff1212]'>Read more...</h2>
                </div>
            </div>
            <div className='w-[20%] ml-8 border h-fit rounded-lg'>
                <div>
                    <img src={cor1} className='w-full rounded-tl-lg rounded-tr-lg'/>
                </div>
                <div>
                    <h1 className='mb-2 text-xl font-semibold p-4'>Prevention is better than cure, EACC tells the public</h1>
                    <h2 className='cursor-pointer ml-4 mb-4 text-[#ff1212]'>Read more...</h2>
                </div>
            </div>
            <div className='w-[20%] ml-8 border h-fit rounded-lg'>
                <div>
                    <img src={cor1} className='w-full rounded-tl-lg rounded-tr-lg'/>
                </div>
                <div>
                    <h1 className='mb-2 text-xl font-semibold p-4'>Prevention is better than cure, EACC tells the public</h1>
                    <h2 className='cursor-pointer ml-4 mb-4 text-[#ff1212]'>Read more...</h2>   
                </div>
            </div>
           
        </div>
    </div>
   </div>
  )
}
