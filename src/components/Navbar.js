import React from 'react';
import logo from '../images/logo.png'
import logo1 from '../images/logo1.png'



const Navbar = ({links}) => {
  return (
    <nav className='bg-custom-yellow'>
        <div className="flex justify-between px-10 items-center">
      {/* Logo */}
     
        <img
          src={logo}
          alt="Logo"
          className='w-40 h-30'
        />

      {/* Links */}
      <ul className="flex flex-col md:flex-row gap-3 md:gap-5">
        {links.map((link, index) => (
          <li key={index} className='hover:bg-gray-light rounded-md px-4 md:px-6 py-1 bg-custom-white  font-bold shrink '>
            <a href={link.url} >{link.text}</a>
          </li>
        ))}
      </ul>
      </div>
      <h1 className='text-center text-4xl font-bold pb-20'>Careers</h1>
      <div className=''>
     
      </div>
    </nav>
  );
};

export default Navbar;
