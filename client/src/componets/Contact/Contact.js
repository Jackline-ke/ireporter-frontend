import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div className='w-full h-screen font-serif flex justify-center items-center p-4' name='contact'>
        <form action='' className='flex flex-col max-w-[600px] w-[full]'>
            <div className='pb-8'>
                <p className='text-2xl font-bold inline border-b-2 border-[#ff1212]'>Contact</p>
                <p className=''>You can send us an Email</p>
            </div>
            <input type='text' placeholder='Name' name='name' className='bg-[#ffe6e6] p-2'/>
            <input type='text' placeholder='Email' name='email' className='my-4 p-2 bg-[#ffe6e6]'/>
            <textarea name='message' placeholder='Message' rows='10' className='bg-[#ffe6e6] p-2'></textarea>
            <button className='button bg-[#ff1212] hover:bg-[#740101] w-36 p-3 rounded-3xl ml-28 text-white mt-8 shadow-2xl'>Submit</button>
        </form>

    </div>
  )
}
 