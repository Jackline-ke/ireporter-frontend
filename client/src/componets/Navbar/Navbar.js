import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css"
import {FaBars, FaSearch} from "react-icons/fa"
// import profile from "../../assets/pro.jpg"
import { Context } from "../../context/Context";


function Navbar(){
    const [navbar, setNavbar] = useState(false)
    const handleClick = () => setNavbar(!navbar)
    const {user, dispatch} = useContext(Context)

    const handleLogout = () =>{
        dispatch({type: "LOGOUT"})
    }

    return(
        <div id="navbar" className="border-b-2 border-[#FF1212] text-gray-700 px-8 py-4">
            <div className="font-serif flex justify-between items-center">
                <div className=" flex justify-between items-center ">
                    <h5 className="logo">IReporter</h5>
                    {/* menu */}
                    <div className="flex items-center">
                        <ul className="hidden md:flex">
                            <li><Link to='/' className="uppercase">Home</Link></li>
                            <li><Link to='/write' className="uppercase">Write</Link></li>
                            <li><Link to='/write' className="uppercase">About</Link></li>
                            <li><Link to='/write' className="uppercase">Contact Us</Link></li>
                            {/* <Link to='/aboutUs'> <li>ABOUT US</li></Link> */}
                        <li onClick={handleLogout}>{user && "LOGOUT"}</li>
                        </ul>
                        <div className=" flex justify-center items-center">
                            {
                                user ? ( 
                                <Link to="/settings">
                                    <img className="navImage cursor-pointer " src={user.profilePicture} alt="Profile"/>
                                </Link>
                            ) :(
                                <div className="hidden md:flex">
                                    <button><Link to='/login' className="font-bold">Login</Link></button>
                                    <Link to='/register' className="ml-4 font-bold border border-[#FF1212] px-6 py-1">Register</Link>
                                </div>
                                )
                            }
                            {/* <FaSearch className="navSearch ml-8 cursor-pointer" /> */}
                        </div>
                    </div>
                </div>
                
            {/* Humburger */}
            <div className="md:hidden z-10">
                <FaBars onClick={handleClick}/>
            </div>

            {/* mobile */}
            <div className={navbar ? 'overflow-hidden md:hidden ease-in duration-300 absolute text-white top-0 left-0 h-screen w-[50%] bg-[#ff1212]/90 px-4 py-7' : 'absolute left-[-100%] top-0 h-screen ease-in duration-500' }>
                <ul className='flex flex-col gap-4'>
                    <li><Link to='/' className="uppercase">Home</Link></li>
                    <li><Link to='/write' className="uppercase">Write</Link></li>
                    <li><Link to='/write' className="uppercase">About</Link></li>
                    <li><Link to='/write' className="uppercase">Contact Us</Link></li>
                </ul>
            </div>
            {/* <div className="border-t-2 border-gray-100 mt-8"></div> */}

        </div>
        </div>
    )
}
export default Navbar