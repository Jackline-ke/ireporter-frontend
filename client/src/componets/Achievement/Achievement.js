import React from 'react'
import CountUp from 'react-countup'
import {useInView} from 'react-intersection-observer'

export default function Achievement() {
    const [ref, inView] = useInView({
        threshold: 0.5
    });
  return (
    <div className='flex justify-center' ref={ref}>
        <div className='mt-10 font-serif mb-20'>
        <div className='flex justify-center mb-8 mt-12'>
            <h1 className='text-6xl text-[#ff1212] font-extrabold'>Our Achievement</h1>
        </div>
        <div className='flex justify-center'>
        <p className='text-center text-xl text-gray-600'>
            iReporter has been able to secure convictions in Court, enhanced financial investigations and recovered assets <br/>acquired from corruption 
            as a deterrence strategy. This has been achieved through proactive<br/> disruptions, robust prosecution of recovery
            cases and enhanced use of <br/> Alternative Dispute Resolution 
        </p>
        </div>
        <div className='flex justify-center mt-10 mb-12'>
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
        </div>
        </div>
    </div>
  )
}
