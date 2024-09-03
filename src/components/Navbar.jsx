import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { menu, close } from '../assets';
import logo2 from '../assets/logo2.svg';

const Navbar = () => {
  //i am setting the states for the navLinks
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7x1 mx-auto'>
        <Link to="/" className='flex items-center gap-2' onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
          /* setActive(""):no link is currently active so state stays the same
          window.scrollTo(0, 0): This scrolls the window back to the top of the page */
        }}>
          <img src={logo2} alt="logo" className='w-28 h-auto object-contain mr-[-32px]' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
           
            <span className='sm:block hidden'> | Software Engineering</span>
          </p>
        </Link>
        <ul className='list-none sm:flex hidden flex-row gap-10'>
          {/* lprop= key={nav.id} */}
          {navLinks.map((nav) => (
            <li key={nav.id}
                className={`${active === nav.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt='menu' className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle(!toggle)} />
          <div className={`${!toggle ?'hidden' : 'flex'} p-6
          black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] 
          z-10 rounded-xl `}>
             <ul className='list-none flex justify-end items-start flex-col gap-4'>
          {navLinks.map((nav) => (
            <li key={nav.id}
                className={`${active === nav.title ? "text-white" : "text-secondary"} 
                font-poppins font-medium cursor-pointer text-[16px] `}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(nav.title);

                }
                
          }>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
