import React from "react";
import TechLabLogo from './Images/tlcir-removebg.png';
import {Link, NavLink} from 'react-router-dom';
import './Header.css';


function Header(){

    return(
        <>
        {/* <div className="text-black font-bold size-10">Hello! Welcome</div> */}
        {/* <img src={TechLabLogo} className=" h-20 w-20"/> */}
        <nav className="items-center navbar  bg-orange-600 h-30 shadow-md shadow-yellow-600">
            <a href="/">
                <img src={TechLabLogo} className="tlogo"/>
            </a>
            <div className="flex flex-row justify-between items-center middiv">
            <Link style={{ textDecoration: 'none' }} to="home" className="bg-yellow-200 rounded-md px-2 py-1 text-black font-semibold hover:bg-yellow-700  betelement hvr-bob">Home</Link>
            <Link style={{ textDecoration: 'none' }} to="code" className=" bg-yellow-200 rounded-md px-2 py-1 text-black font-semibold hover:bg-yellow-700  betelement hvr-bob">Code</Link>
            <Link style={{ textDecoration: 'none' }} to="ritual" className=" bg-yellow-200 rounded-md px-2 py-1 text-black font-semibold hover:bg-yellow-700  betelement hvr-bob">Ritual</Link>
            
            
            </div>

            <div className="justify-center items-center">
            <Link style={{ textDecoration: 'none' }} to="join_us" className="mx-3 bg-yellow-200 rounded-md px-2 py-1 text-black font-semibold hover:bg-yellow-700  join betelement hvr-icon-bob hvr-icon">Join<span>&#8594;</span></Link>
            </div>
            
        </nav>
        </>
    )
}

export default Header;