import React from 'react';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import img from "../../assets/img/neptunimg.png";

function FooterMain() {
  return (
    <div className='m-[20px] relative'>
      <form>
        <div className='lg:gap-[20px] tablet:flex desktop:flex'>
          <p className='text-white font-bold mb-[15px] italic'>Bizə abunə olun</p>
          <div className='mb-[40px]'>
            <input className='rounded-[20px] lg:mx-[25px] p-[10px] lg:w-[318px] italic text-[12px]' type="email" id="email" placeholder="e-poçt ünvanınız..." />
            <button className='p-[8px] rounded-[20px] bg-[#ff8300] hover:bg-[#e17400] absolute lg:left-[252px] tablet:left-[362px] desktop:left-[362px] mt-[2px] w-[90px] text-[12px] text-white'>Abune ol</button>
          </div>
        </div>

        <div className='lg:gap-[20px] tablet:flex desktop:flex'>
          <p className='text-white font-bold mb-[15px] italic'>Sms xəbərdarlıq üçün</p>
          <div>
            <select className='rounded-[20px] lg:p-[10px] lg:w-[70px] lg:ml-[25px]'>
              <option value="...">...</option>
              <option>051</option>
              <option>055</option>
              <option>070</option>
              <option>071</option>
            </select>
            <input className='rounded-[20px] lg:p-[10px] relative lg:left-[20px] lg:w-[220px] italic text-[12px]' type="text" id="sms" placeholder="XXX YY ZZ" />
            <button className='p-[8px] rounded-[20px] bg-[#ff8300] hover:bg-[#e17400] absolute lg:left-[243px] tablet:left-[382px] desktop:left-[382px] mt-[2px] lg:w-[90px] text-[12px] text-white'>Abune ol</button>
          </div>
        </div>
      </form>

      <div className='mt-[30px] lg:gap-[20px] tablet:flex desktop:flex'>
        <p className='text-white font-bold mb-[15px] italic'>Bizi izləyin</p>
        <div className='flex lg:gap-[20px] text-[40px] text-white'>
          <div className='p-[10px] rounded-[50%] bg-white text-[#ff8300] hover:bg-[#e17400] hover:text-white'><FaFacebookF /></div>
          <div className='p-[10px] rounded-[50%] bg-white text-[#ff8300] hover:bg-[#e17400] hover:text-white'><FaInstagram /></div>
          <div className='p-[10px] rounded-[50%] bg-white text-[#ff8300] hover:bg-[#e17400] hover:text-white'><FiYoutube /></div>
          <div className='p-[10px] rounded-[50%] bg-white text-[#ff8300] hover:bg-[#e17400] hover:text-white'><CiLinkedin /></div>
        </div>
      </div>

      <div className='mt-[30px] tablet:hidden desktop:hidden'>
        <p className='border-dashed border-b border-white inline-block text-white italic font-bold'>Daha cox</p>
      </div>

      <div className='mt-[40px]'>
        <img className='h-[50px]' src={img} alt="img" />
      </div>

      <div className='my-[80px]'>
        <p className='text-white text-[18px] italic my-[10px]'>© 2003 - 2023 Neptun Supermarket. All rights reserved</p>
        <p className='text-white text-[18px] italic my-[10px]'>Created by: <b>aybeniz</b></p>
      </div>
    </div>
  );
}

export default FooterMain;
