import React, { useEffect, useState }  from 'react'
import axios from 'axios'
import cor3 from '../../assets/cor3.jpeg'
import './Sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const [cats, setCats] = useState([]);

    useEffect(() =>{
        const getCats = async () =>{
            const res = await axios.get("http://localhost:5000/api/categories")
            setCats(res.data)
        }
        getCats();
    }, [])
  return (
    <div className='sidebar h-fit'>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>IReporter</span>
            <img src={cor3} alt="IReporter" />
            <p className='p-4 font-serif'>Ethics and Anti-Corruption Commission gathers information on corruption occuring in Government and public Sector from
            a variety of sources.These sources includes members of the public, heads of governments and agencies, officals working in both
            the public and private sectors and the media.The report can be made in this website or send us an email from our contacts below.
            </p>
        </div>
        {/* <div className='sidebarItem'>
            <span className='sidebarTitle'>CATEGORIES</span>
            <ul className='sidebarList font-serif grid grid-cols-2 gap-2'>
                {cats.map((c) =>{
                    <Link to={`/?cat=${c.name}`}><li className='sideListItem font-light'>{c.name}</li></Link>
                   
                })}
            </ul>
        </div> */}
    </div>
  )
}

export default Sidebar