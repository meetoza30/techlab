import React from "react";
import './Code.css'
import explore from './Images/explore.jpg'
import equip from './Images/equip.jpg'
import collab from './Images/collab.jpg'
import empower from './Images/empower.jpg'
import elevate from './Images/elevate.jpg'
import ethics from './Images/ethics.jpg'

function Code(){
    return(<>
    
    <div className="pt-10 contain p-4">
    <h1 className="text-center font-bold heading text-3xl">We embrace the power of technology and foster a community driven by the following code:
    </h1>
    <div className="flex justify-around pt-12 container">
  <div className="bg-white rounded-xl shadow-lg overflow-hidden box border-2 whitecontain border-black transform transition duration-500 hover:scale-105">
    <div className="p-4 flex flex-col items-center sm:flex sm:flex-col ">
      <img src={explore} alt="Explore" className="w-24 h-24 object-cover mb-4" />
      <h2 className="inline-block font-bold text-white bg-red-600 px-3 py-1 rounded-full mb-2">Explore</h2>
      <p className="text-gray-700 text-sm text-center bg-orange-300 p-3 rounded-xl font-semibold">
        We encourage exploration and curiosity, empowering individuals to dive into the vast world of technology with an open mind. Tech Lab is a space where you can fearlessly discover new concepts, tools, and possibilities.
      </p>
    </div>
  </div>

  <div className="bg-white rounded-xl shadow-lg overflow-hidden box border-2 border-black transform transition duration-500 hover:scale-105 mx-20">
    <div className="p-4 flex flex-col items-center">
      <img src={equip} alt="Explore" className="w-24 h-24 object-cover mb-4" />
      <h2 className="inline-block font-bold text-white bg-red-600 px-3 py-1 rounded-full mb-2">Equip</h2>
      <p className="text-gray-700 text-sm text-center bg-orange-300 p-3 rounded-xl font-semibold">
      At Tech Lab, we provide you with the knowledge, skills, and resources needed to excel in the ever-evolving tech landscape. We equip you with the tools and guidance necessary to navigate through programming, AI, and tech culture confidently.
      </p>
    </div>
  </div>

  <div className="bg-white rounded-xl shadow-lg overflow-hidden box border-2 border-black transform transition duration-500 hover:scale-105">
    <div className="p-4 flex flex-col items-center">
      <img src={collab} alt="Explore" className="w-24 h-24 object-cover mb-4" />
      <h2 className="inline-block font-bold text-white bg-red-600 px-3 py-1 rounded-full mb-2">Collaboration</h2>
      <p className="text-gray-700 text-sm text-center bg-orange-300 p-3 rounded-xl font-semibold">
      Collaboration lies at the heart of Tech Lab. We believe that by working together, we can achieve more. Through collaboration, we foster an environment where ideas are shared, connections are made, and innovation thrives.

      </p>
    </div>
  </div>
  </div>

  <div className="flex justify-around pt-12 pb-10 container">
  <div className="bg-white rounded-xl shadow-lg overflow-hidden box border-2 border-black transform transition duration-500 hover:scale-105">
    <div className="p-4 flex flex-col items-center">
      <img src={empower} alt="Explore" className="w-24 h-24 object-cover mb-4" />
      <h2 className="inline-block font-bold text-white bg-red-600 px-3 py-1 rounded-full mb-2">Empower</h2>
      <p className="text-gray-700 text-sm text-center bg-orange-300 p-3 rounded-xl font-semibold">
      We empower individuals to take control of their learning journey and unlock their full potential. At Tech Lab, you'll gain the skills, confidence, and mindset needed to make a meaningful impact in the world of technology.
      </p>
    </div>
  </div>

  <div className="bg-white rounded-xl shadow-lg overflow-hidden box border-2 border-black transform transition duration-500 hover:scale-105 mx-20">
    <div className="p-4 flex flex-col items-center">
      <img src={elevate} alt="Explore" className="w-24 h-24 object-cover mb-4" />
      <h2 className="inline-block font-bold text-white bg-red-600 px-3 py-1 rounded-full mb-2">Elevate</h2>
      <p className="text-gray-700 text-sm text-center bg-orange-300 p-3 rounded-xl font-semibold">
      Together, we elevate each other to new heights. At Tech Lab, we celebrate achievements, big and small. We support and inspire one another, pushing boundaries and reaching for the stars.
      </p>
    </div>
  </div>

  <div className="bg-white rounded-xl shadow-lg overflow-hidden box border-2 border-black transform transition duration-500 hover:scale-105">
    <div className="p-4 flex flex-col items-center">
      <img src={ethics} alt="Explore" className="w-24 h-24 object-cover mb-4" />
      <h2 className="inline-block font-bold text-white bg-red-600 px-3 py-1 rounded-full mb-2">Ethics</h2>
      <p className="text-gray-700 text-sm text-center bg-orange-300 p-3 rounded-xl font-semibold">
      Ethical considerations are paramount in the world of technology. At Tech Lab, we emphasize the importance of ethical practices, responsible AI development, and fostering an inclusive and diverse tech culture that respects and values all individuals.

      </p>
    </div>
  </div>
  </div>
</div>
    </>)
}

export default Code;