import React from 'react'
import {FaGithub , FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from "react-icons/bs"

const SocialLink = () => {
  return (
    <div className='flex flex-col top-[35%] left-0 fixed'>
      <ul >
        <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] 
        hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
          <a href="https://github.com/vshraddha" target='_blank' rel="noreferrer" className='flex justify-between items-center w-full text-white'>
          <>
          GitHub <FaGithub size={30}/>
        </>
        </a>
        </li>

        <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] 
        hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
          <a href="mailto: shraddhavagare222@gmail.com" rel="noreferrer" target='_blank' className='flex justify-between items-center w-full text-white'>
          <>
          Mail <HiOutlineMail size={30}/>
        </>
        </a>
        </li>

        <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] 
        hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
          <a href="https://www.linkedin.com/feed/" rel="noreferrer" target='_blank' className='flex justify-between items-center w-full text-white'>
          <>
          LinkedIn <FaLinkedin size={30}/>
        </>
        </a>
        </li>

        <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] 
        hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
          <a href="/Shraddha_Resume.pdf" rel="noreferrer" download={true} target='_blank' className='flex justify-between items-center w-full text-white'>
          <>
          Resume <BsFillPersonLinesFill size={30}/>
        </>
        </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialLink