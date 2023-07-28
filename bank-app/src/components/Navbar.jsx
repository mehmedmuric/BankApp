import React, {useState} from 'react';
import {logo, close, menu} from '../assets';
import {navLinks} from '../constants';



const Navbar = () => {

  const [toggle, settoggle] = useState(false);


  return (
    <nav className='w-full justify-between flex py-6 items-center navbar'>
      <img src={logo} alt="nav_logo" className='w-[140px] h-[40px]'/>
      <ul className='list-none justify-end items-center flex-1 sm:flex hidden'>
        {navLinks.map((nav, index) =>(
          <li key={nav.id} 
          className={`
            font-popins 
            cursor-pointer 
            text-white 
            text-[18px] 
            font-normal
            hover:text-secondary
            ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`
            }>
            <a href={`${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className='justify-end items-center flex flex-1 sm:hidden'>
        <img src={toggle ? close : menu} alt="open_close-navbar" 
        className='w-[30px] h-[30px] object-contain' 
        onClick={() => settoggle((prev) => !prev)} 
        />
        <div className={`
        ${toggle ? 'flex' : 'hidden'} 
        p-6 
        bg-black-gradient 
        absolute 
        top-20 
        right-0 
        mx-4 my-2 
        rounded-xl 
        min-w-[140px] sidebar`
        }>
            <ul className='list-none justify-end items-center flex-1 flex flex-col'>
          {navLinks.map((nav, index) =>(
            <li key={nav.id} 
            className={`
              font-popins 
              cursor-pointer 
              text-white 
              text-[18px] 
              font-normal 
              ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`
              }>
              <a href={`${nav.id}`}>{nav.title}</a>
            </li>
          ))}
            </ul>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;