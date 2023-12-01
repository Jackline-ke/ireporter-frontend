import React from 'react'
import CountUp from 'react-countup'
import {useInView} from 'react-intersection-observer'

export default function Achievement() {
    const [ref, inView] = useInView({
        threshold: 0.5
    });
  return (
    <div className='flex flex-col justify-center px-4 py-8 font-serif' id='aboutUs' ref={ref}>
       <div className="text-center">
        <h1 className="text-4xl md:text-5xl text-[#ff1212] font-extrabold mb-4">Our Achievement</h1>
        <p className="text-lg sm:text-xl text-gray-600 tracking-wider"> iReporter has been able to secure convictions in Court, enhanced financial investigations and recovered assets <br/>acquired from corruption 
            as a deterrence strategy. This has been achieved through proactive disruptions, robust prosecution of recovery
            cases and enhanced use of Alternative Dispute Resolution </p>
       </div>
       <div className='flex justify-center mt-5'>
            <div>
                <h1 className='text-xl md:text-3xl text-[#ff1212]'>Resolved</h1>
                <div className='flex justify-center'>
                    {inView ? <CountUp start={0} end={127} duration={10} className='font-semibold text-xl'/> : null}
                </div>
            </div>
            <div className='ml-16'>
                <h1  className='text-xl md:text-3xl text-[#ff1212]'>Under Investigation</h1>
                <div className='flex justify-center'>
                    {inView ? <CountUp start={0} end={42} duration={10} className='font-semibold text-xl'/> : null}
                </div>
            </div>
            <div className='ml-16'>
                <h1  className='text-xl md:text-3xl text-[#ff1212]'>Rejected</h1>
                <div className='flex justify-center'>
                    {inView ? <CountUp start={0} end={85} duration={10} className='font-semibold text-xl'/> : null}
                </div>
            </div>
        </div>
    </div>
  )
}



// iReporter has been able to secure convictions in Court, enhanced financial investigations and recovered assets <br/>acquired from corruption 
//             as a deterrence strategy. This has been achieved through proactive<br/> disruptions, robust prosecution of recovery
//             cases and enhanced use of <br/> Alternative Dispute Resolution 
{/* <div className='flex justify-center mt-10 mb-12'>
            <div>
                <h1 className='text-3xl text-[#ff1212]'>Resolved</h1>
                <div className='flex justify-center'>
                    {inView ? <CountUp start={0} end={127} duration={10} className='font-bold text-xl'/> : null}
                </div>
            </div>
            <div className='ml-16'>
                <h1  className='text-3xl text-[#ff1212]'>Under Investigation</h1>
                <div className='flex justify-center'>
                    {inView ? <CountUp start={0} end={42} duration={10} className='font-bold text-xl'/> : null}
                </div>
            </div>
            <div className='ml-16'>
                <h1  className='text-3xl text-[#ff1212]'>Rejected</h1>
                <div className='flex justify-center'>
                    {inView ? <CountUp start={0} end={85} duration={10} className='font-bold text-xl'/> : null}
                </div>
            </div>
        </div> */}