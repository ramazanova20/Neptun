import React from 'react';
import img from "../../assets/img/neptunfooter.png";

function FooterBottom() {
  return (
    <div className='bg-white lg:py-[40px] h-[10px] tablet:h-[15px] desktop:h-[20px] flex justify-center items-center'>
      <img src={img} alt="footerimg" />
    </div>
  );
}

export default FooterBottom;
