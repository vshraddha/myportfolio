import React from 'react'
import myimg from "../assets/FORMAL.jpg"
import {FiArrowRight} from "react-icons/fi"

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center text-white justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>

                <h2 className=' sm:text-5xl  font-bold'>I'm FrontEnd Developer</h2>
                <p className='py-4 text-gray-500'>Hii! I am Shraddha from Pune currently pursuing Btech in IT from Vishwakarma Institute Of Information Technology.I'm 
                Front-End Developer with 1.5 years of experience, specializing in web application development and proficient with CSS and JS Frameworks, </p>
                <div>
                    <button className='group font-bold cursor-pointer w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>Portfolio
                        <span className='group-hover:rotate-90 duration-300 ml-1'><FiArrowRight size={23} /></span>
                    </button>
                </div>
            </div>
            <div>
                <img  src= {myimg} alt="" className='mx-7 w-72 h-60 md:w-96  rounded-2xl' />
            </div>
        </div>
       
    </div>
  )
}

export default Home