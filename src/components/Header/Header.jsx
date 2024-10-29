import React from 'react';
import { IoSearch } from "react-icons/io5";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import { IoReload } from "react-icons/io5";
import { PiShoppingCartLight } from "react-icons/pi";
import { GoChevronDown } from "react-icons/go";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";
import MultiLevelDropdown from '../Dropdown/Dropdown';
import { FaCaretDown } from "react-icons/fa";
import SideBar from '../SideBar/SideBar';

function Header() {
  return (
    <>
      <header>
        <div className='headerTop'>
          <div className='container m-auto lg:max-w-[1024px]'>
            <div className='flex items-center justify-between '>
              <div className='logo max-w-[170px]'>
                <img src="./src/assets/img/Logo.png" title="Neptun Supermarket" alt="Neptun Supermarket" className='w-full' />
              </div>

              <div className='flex justify-between items-center lg:gap-10'>
                <form action="">
                  <div className='search min-w-44 pl-2 flex items-center gap-2 m-auto border-2 border-[#E3732A] rounded-3xl'>
                    <IoSearch className='text-[#E3732A] text-2xl' />
                    <input className='w-full' type="text" placeholder="Məhsulu axtarın" name="search" />
                    <button className='rounded-3xl bg-[#E3732A] text-white px-2 py-1 sm:px-4'>Axtar</button>
                  </div>
                </form>

                <div className=''>
                  <div className='Hamburger hidden md:block lg:hidden bg-[#FF8300] text-white p-1 rounded text-2xl'>
                    <SideBar />
                  </div>
                  <div className='hidden lg:block'>
                    <div className='lg:flex flex-row justify-between'>
                      <LiaFlagUsaSolid />
                      <div>
                        <img src="./src/assets/img/Contact.jpeg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='headerBottom bg-[#FF8300] text-white p-1 my-3'>
          <div className='container m-auto lg:max-w-[1024px]'>
            <div className='flex justify-between items-center relative'>

              {/* Multi-level Dropdown */}
              <MultiLevelDropdown />
              <div className='hidden lg:block mx-1'>
                <div className='mx-auto flex  w-full items-center justify-center px-2'>
                  <div >
                    <a href="" >Ana Sehife</a>
                  </div>
                  <div className="mx-auto flex  w-full items-center justify-center">
                    <div className="group relative cursor-pointer">

                      <div className="flex items-center px-2">
                        <a className="menu-hover my-2 py-2 text-base text-white lg:mx-2" onClick="">
                          Haqqimizda
                        </a>
                        <span>
                          <FaCaretDown />
                        </span>
                      </div>

                      <div className="invisible absolute z-50 flex w-full flex-col bg-white py-2 px-4 text-gray-800 shadow-xl group-hover:visible">

                        <a className="my-2 block  border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                          Siyasetimiz
                        </a>

                        <a className="my-2 block  border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                          Yenilikler
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mx-auto flex  w-full items-center justify-center">
                    <div className="group relative cursor-pointer">

                      <div className="flex items-center px-6">
                        <a className="menu-hover my-2 py-2 text-base text-white lg:mx-2" onClick="">
                          Aksiyalar
                        </a>
                        <span>
                          <FaCaretDown />
                        </span>
                      </div>

                      <div className="invisible absolute z-50 flex w-full flex-col bg-white py-2 px-4 text-gray-800 shadow-xl group-hover:visible">

                        <a className="my-2 block  border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                          Kampaniyalar
                        </a>

                        <a className="my-2 block  border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                          Neptun Bonus Kart
                        </a>

                        <a className="my-2 block  border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                          Elektron Kataloq
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mx-auto flex  w-full items-center justify-center">
                    <div className="group relative cursor-pointer">
                      <div className="flex items-center px-2">
                        <a className="menu-hover my-2 py-2 text-base text-white lg:mx-2" onClick="">
                          Supermarketler
                        </a>
                        <span>
                          <FaCaretDown />
                        </span>
                      </div>

                      <div className="invisible absolute z-50 flex w-full flex-col bg-white py-2 px-4 text-gray-800 shadow-xl group-hover:visible">

                        <a className="my-2 block  border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                          Magazalarimiz
                        </a>

                        <a className="my-2 block  border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                          Irad Ve Teklifler
                        </a>

                        <a className="my-2 block  border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                          Alicilarin Nezerine
                        </a>

                        <a className="my-2 block  border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                          Partnyorluq
                        </a>

                        <a className="my-2 block  border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                          Terefdaslar
                        </a>

                        <a className="my-2 block  border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                          Supermarketde Reklam
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mx-auto flex  w-full items-center justify-center">
                    <div className="group relative cursor-pointer">

                      <div className="flex items-center px-6">
                        <a className="menu-hover my-2 py-2 text-base text-white lg:mx-2" onClick="">
                          Karyera
                        </a>
                        <span>
                          <FaCaretDown />
                        </span>
                      </div>

                      <div className="invisible absolute z-50 flex w-full flex-col bg-white py-2 px-4 text-gray-800 shadow-xl group-hover:visible">

                        <a className="my-2 block  border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                          Ise Qebul Proseduru
                        </a>

                        <a className="my-2 block  border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                          Vakansiyalar
                        </a>

                        <a className="my-2 block  border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                          CV Yerlesdirin
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <a href="">Elaqe</a>
                  </div>
                </div>
              </div>
              {/* Right side elements */}
              <div className='flex items-center gap-2'>
                <div className='mx-auto flex  w-full items-center justify-between gap-2'>
                  <div className='mx-auto flex w-full items-center'>
                    <RiGitRepositoryPrivateLine />
                    <p>Giris</p>
                  </div>
                  <div className="w-px h-4 bg-gray-300" />
                  <div className='mx-auto flex w-full items-center'>
                    <p className='hidden lg:block' >Hesabim</p>

                    <div className="group relative cursor-pointer">
                      <div className="flex items-center px-2">
                        <span className="menu-hover my-2 py-2 text-base text-white lg:mx-2" onClick="">
                          <GoChevronDown />
                        </span>

                      </div>

                      <div className="invisible absolute z-50 flex flex-col bg-white py-2 px-2  text-gray-800 shadow-xl group-hover:visible">

                        <a className="my-2 block  border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                          Hesabim
                        </a>

                        <a className="my-2 block  border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                          Sifaris tarixcesi
                        </a>

                        <a className="my-2 block  border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                          Emeliyyatlar
                        </a>

                        <a className="my-2 block  border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                          Yuklemeler
                        </a>

                        <a className="my-2 block  border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                          Sifaris resmilesdir
                        </a>

                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex items-center gap-2 text-xl'>
                  <CiHeart />
                  <IoReload />
                  <PiShoppingCartLight />
                </div>
              </div>

              {/* Mobile Hamburger Icon */}
              <div className='block md:hidden bg-white text-[#FF8300] p-1 rounded text-2xl'>
                <SideBar />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
