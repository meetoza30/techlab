import React from "react";
import './Home.css'

function Home(){
    return(<>
    <div className="contain h-screen w-screen ">
    <h1 className="py-10 text-7xl text-center font-bold welcome ">Welcome to <span className="head head1 text-7xl text-center">T</span><span className="head head2 text-7xl text-center">E</span><span className="head head3 text-7xl text-center">C</span><span className="head head4 text-7xl text-center">H</span><span className="head head5 text-7xl text-center">L</span><span className="head head6 text-7xl text-center">A</span><span className="head head7 text-7xl text-center">B </span><span className="text-7xl text-red-600 font-bold">!</span></h1>
    <h1 className="text-5xl text-black font-bold text-wrap text-center subhead">Empowering students to <span className="text-red-600">code their future</span>,<span className="text-red-600"> master AI</span>, and <span className="text-red-600">shape tomorrow's tech culture</span>.</h1>

    <div className="text-2xl font-semibold items-center justify-center mx-auto text-center mt-10 intro">
    We thrive on curiosity, collaboration, and ethical practices, providing the tools and guidance needed for success. Key activities include quick lightning talks, a supportive mentorship program, startup idea competitions, coding challenges, and insightful podcasts. Join us to innovate and shape the future of tech together.

    </div>
    </div>
    </>)
}

export default Home;