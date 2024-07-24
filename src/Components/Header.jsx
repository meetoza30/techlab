import React from "react";
import TechLabLogo from './Images/tlcir-removebg.png';
import {Link, NavLink} from 'react-router-dom';
import './Header.css';


function Header(){

    return(
        <>
        {/* <div className="text-black font-bold size-10">Hello! Welcome</div> */}
        {/* <img src={TechLabLogo} className=" h-20 w-20"/> */}
        <nav className="flex flex-row items-center justify-around bg-orange-600 headcontain max-w-screen h-30 shadow-md shadow-yellow-600">
            <a href="/">
                <img src={TechLabLogo} className="tlogo"/>
            </a>
            <div className="flex flex-row justify-between items-center middiv">
            <Link style={{ textDecoration: 'none' }} to="home" className="mx-3 bg-yellow-200 rounded-md px-2 py-1 text-black font-semibold hover:bg-yellow-700  betelement hvr-bob">Home</Link>
            <Link style={{ textDecoration: 'none' }} to="code" className="mx-3 bg-yellow-200 rounded-md px-2 py-1 text-black font-semibold hover:bg-yellow-700  betelement hvr-bob">Code</Link>
            <Link style={{ textDecoration: 'none' }} to="ritual" className="mx-3 bg-yellow-200 rounded-md px-2 py-1 text-black font-semibold hover:bg-yellow-700  betelement hvr-bob">Ritual</Link>
            
            
            </div>

            <div className="flex flex-row left-0">
            <Link style={{ textDecoration: 'none' }} to="join_us" className="mx-3 bg-yellow-200 rounded-md px-2 py-1 text-black font-semibold hover:bg-yellow-700  betelement hvr-icon-bob hvr-icon">Join Us <span>&#8594;</span></Link>
            </div>
            
        </nav>
        </>
    )
}

export default Header;