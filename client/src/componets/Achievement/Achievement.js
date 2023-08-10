import React from 'react'

export default function Achievement() {
  return (
    <div className='flex justify-center'>
        <div className='mt-10 font-serif mb-20 border border-[#ff1212] w-[90%] rounded-3xl drop-shadow-xl'>
        <div className='flex justify-center mb-8 mt-12'>
            <h1 className='text-6xl text-[#ff1212] font-extrabold'>Report Corruption</h1>
        </div>
        <div className='flex justify-center'>
        <p className='text-center text-xl'>
            Ethics and Anti-Corruption Commission gathers information on corruption <br/>occuring in Government and public Sector from
            a variety of sources.<br/> These sources includes members of the public, heads of governments <br/>and agencies, officals working in both
            the public and private sectors and the media.<br/> The report can be made in this website or send us an email from our contacts below.
        </p>
        </div>
        <div className='flex justify-center mt-10 mb-12'>
            <div className='text-4xl bg-white p-4 w-64 flex justify-center items-center rounded-2xl drop-shadow-xl'>
                <h1>Email</h1>
            </div>
            <div className='ml-16 text-4xl bg-white p-4 w-64 flex justify-center items-center rounded-2xl drop-shadow-xl'>
                <h1>Posts</h1>
            </div>
        </div>
        </div>
    </div>
  )
}
