import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavItem } from "./navElement";
import logo from "../logos/logo.svg";
import hamburger from '../images/hamburger.svg'
import crossMark from '../images/xmark.svg'

const Navbar = () => {
  const pathname = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex justify-center items-center">
        <nav className="flex h-16 z-10
         justify-between items-center bg-gradient-to-b from-[#c5c8d0] to-[#7d9ce6]  
            fixed top-0  w-full
            ">
          <Link to="/" className="text-center font-bold p-2 md:ml-6 md:mr-10 flex items-center text-[#010527] text-xl">
            <img
              className="inline rounded-full "
              src={logo}
              alt="logo"
              width="70"
            />
            <h1 className="md:ml-3 lg:text-2xl ">

             Chemical Engineering Association
            </h1>
          </Link>
          {/* Mobile menu */}
          {
            !isOpen &&
            <div onClick={() => setIsOpen(true)} className="text-white md:hidden mr-4">
              <img src={hamburger} alt="hamburger" width={40} />
            </div>
          }

          <ul className="hidden text-[#010527] md:flex flex-col md:flex-row flex-1 justify-evenly items-center ">
            {
              NavItem.map((item) => (
                <li className={`${pathname.hash === item.href ? 'underline' : ''} font-semibold transition duration-2000 hover:underline`}>
                  <Link to={item.href} className="text-lg">
                    {item.title}
                  </Link>
                </li>
              ))
            }
          </ul>
        </nav>
        {
          isOpen &&
          <div onClick={() => setIsOpen(false)} className="flex flex-col md:hidden z-20 w-2/3 transition-all  ease-in-out delay-100 duration-500 shadow-md min-h-screen fixed top-0 bg-slate-600 right-0">
            <div onClick={() => setIsOpen(false)} className="text-white md:hidden m-2">
              <img src={crossMark} alt="hamburger" width={30} />
            </div>
            <ul className=" text-[#010527] flex flex-col gap-2   items-center ">
              {
                NavItem.map((item) => (
                  <li className={`${pathname.hash === item.href ? 'underline' : ''} font-semibold transition duration-2000 hover:underline hover:translate-x-1`}>
                    <Link to={item.href} className="text-lg">
                      {item.title}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
        }
      </div>
    </>
  );
};

export default Navbar;
