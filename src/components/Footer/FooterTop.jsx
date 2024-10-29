import React from 'react';
import { BsTruck } from "react-icons/bs";
import { LuWallet } from "react-icons/lu";
import { IoGiftOutline } from "react-icons/io5";
import { TbHeadset } from "react-icons/tb";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";

function FooterTop() {
  return (
    <div className='lg:m-[40px] flex'>
      <div className='p-[10px] pt-[20px] text-white flex justify-between items-start lg:gap-[50px] tablet:gap-[60px] desktop:gap-[80px]'>
        <div>
          <div className='text-[30px] tablet:text-[40px] flex justify-center items-center'><BsTruck /></div>
          <p className='italic font-bold'>Pulsuz çatdırılma <br />50 azn-dən yuxarı</p>
        </div>
        <div>
          <div className='text-[30px] tablet:text-[40px] flex justify-center items-center'><LuWallet /></div>
          <p className='italic font-bold'>Nağd və ya <br />kartla ödəniş</p>
        </div>
        <div>
          <div className='text-[30px] tablet:text-[40px] flex justify-center items-center'><IoGiftOutline /></div>
          <p className='italic font-bold'>Hədiyyə<br />kuponları</p>
        </div>
        <div className='hidden tablet:block desktop:block'>
          <div className='text-[30px] tablet:text-[40px] flex justify-center items-center'><TbHeadset /></div>
          <p className='italic font-bold'>Onlayn müştəri <br />xidmətləri</p>
        </div>
        <div className='hidden tablet:block desktop:block'>
          <div className='text-[30px] tablet:text-[40px] flex justify-center items-center'><HiOutlineDevicePhoneMobile /></div>
          <p className='italic font-bold'>Sürətli mobil <br />mağaza</p>
        </div>
      </div>
    </div>
  );
}

export default FooterTop;
