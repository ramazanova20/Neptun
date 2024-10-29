import React, { useState } from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCaretDown } from "react-icons/fa";

function SideBar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div className="text-center">
        <button
          onClick={toggleDrawer}
          className="block md:hidden bg-white text-[#FF8300] p-1 rounded text-2xl"
          type="button"
        >
          <GiHamburgerMenu />
        </button>
      </div>
      <div className="text-center">
        <button
          onClick={toggleDrawer}
          className=" hidden md:block lg:hidden bg-[#FF8300] text-white p-1 rounded text-2xl"
          type="button"
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Drawer component */}
      <div
        className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform ${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        } bg-white dark:bg-gray-800`}
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        
        <button
          onClick={toggleDrawer}
          className="text-black bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <IoIosCloseCircleOutline className='w-4 h-4' />
        </button>

        {/* Drawer navigation links */}
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 ">
            <li className='border-b'>
              <a href="/" onClick={(e) => e.preventDefault()} className="flex items-center  text-base px-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span>Ana Sehife</span>
              </a>
            </li>

            <li className="relative group">
              <div className="flex items-center px-2 cursor-pointer border-b">
                <a onClick={(e) => e.preventDefault()} className="menu-hover text-base my-2 py-2 text-gray-900 lg:mx-2 dark:text-white">Haqqimizda</a>
                <FaCaretDown />
              </div>
              <div className="invisible absolute z-50 w-full flex flex-col text-base bg-white py-2 px-4 text-gray-800 shadow-xl group-hover:visible">
                <a className="my-2 block border-gray-100 py-1 hover:text-black md:mx-2">Siyasetimiz</a>
                <a className="my-2 block border-gray-100 py-1 hover:text-black md:mx-2">Yenilikler</a>
              </div>
            </li>

            <li className="relative group">
              <div className="flex items-center px-2 cursor-pointer border-b">
                <a onClick={(e) => e.preventDefault()} className="menu-hover text-base my-2 py-2 text-gray-900 lg:mx-2 dark:text-white">Aksiyalar</a>
                <FaCaretDown />
              </div>
              <div className="invisible absolute z-50 w-full flex flex-col text-base bg-white py-2 px-4 text-gray-800 shadow-xl group-hover:visible">
                <a className="my-2 block border-gray-100 py-1 hover:text-black md:mx-2">Kampaniyalar</a>
                <a className="my-2 block border-gray-100 py-1 hover:text-black md:mx-2">Neptun Bonus Kart</a>
                <a className="my-2 block border-gray-100 py-1 hover:text-black md:mx-2">Elektron Kataloq</a>
              </div>
            </li>

            <li className="relative group">
              <div className="flex items-center px-2 cursor-pointer border-b">
                <a onClick={(e) => e.preventDefault()} className="menu-hover my-2 py-2 text-base text-gray-900 lg:mx-2 dark:text-white">Supermarketler</a>
                <FaCaretDown />
              </div>
              <div className="invisible absolute z-50 w-full flex flex-col text-base bg-white py-2 px-4 text-gray-800 shadow-xl group-hover:visible">
                <a className="my-2 block border-gray-100 py-1 hover:text-black md:mx-2">Magazalarimiz</a>
                <a className="my-2 block border-gray-100 py-1 hover:text-black md:mx-2">Irad Ve Teklifler</a>
                <a className="my-2 block border-gray-100 py-1 hover:text-black md:mx-2">Alicilarin Nezerine</a>
                <a className="my-2 block border-gray-100 py-1 hover:text-black md:mx-2">Partnyorluq</a>
                <a className="my-2 block border-gray-100 py-1 hover:text-black md:mx-2">Terefdaslar</a>
                <a className="my-2 block border-gray-100 py-1 hover:text-black md:mx-2">Supermarketde Reklam</a>
              </div>
            </li>

            <li className="relative group">
              <div className="flex items-center px-2 cursor-pointer border-b">
                <a onClick={(e) => e.preventDefault()} className="menu-hover my-2 py-2 text-base text-gray-900 lg:mx-2 dark:text-white">Karyera</a>
                <FaCaretDown />
              </div>
              <div className="invisible absolute z-50 w-full flex flex-col text-base bg-white py-2 px-4 text-gray-800 shadow-xl group-hover:visible">
                <a className="my-2 block border-gray-100 py-1 hover:text-black md:mx-2">Ise Qebul Proseduru</a>
                <a className="my-2 block border-gray-100 py-1 hover:text-black md:mx-2">Vakansiyalar</a>
                <a className="my-2 block border-gray-100 py-1 hover:text-black md:mx-2">CV Yerlesdirin</a>
              </div>
            </li>

            <li className='border-b'>
              <a href="/" onClick={(e) => e.preventDefault()} className="flex items-center text-base px-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <span>Elaqe</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideBar;
