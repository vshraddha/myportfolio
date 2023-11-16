import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {Link} from "react-scroll"

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className='flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed'>
      <div>
        <h1 className='text-4xl font-signature'>Shraddha</h1>
      </div>

      <ul className='hidden md:flex '>
        <li className='cursor-pointer px-4 capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200'>
          <Link to='home' smooth duration={500}>
            Home
          </Link>
        </li>
        <li className='cursor-pointer px-4 capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200'>
          <Link to='portfolio' smooth duration={500}>
            Portfolio
          </Link>
        </li>
        <li className='cursor-pointer px-4 capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200'>
          <Link to='experience' smooth duration={500}>
            Experience
          </Link>
        </li>
        <li className='cursor-pointer px-4 capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200'>
          <Link to='contact' smooth duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
          <li className='px-4 cursor-pointer capitalize py-4 text-3xl'>
            <Link to='home' smooth duration={500}>
              Home
            </Link>
          </li>
          <li className='px-4 cursor-pointer capitalize py-4 text-3xl'>
            <Link to='portfolio' smooth duration={500}>
              Portfolio
            </Link>
          </li>
          <li className='px-4 cursor-pointer capitalize py-4 text-3xl'>
            <Link to='experience' smooth duration={500}>
              Experience
            </Link>
          </li>
          <li className='px-4 cursor-pointer capitalize py-4 text-3xl'>
            <Link to='contact' smooth duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;









