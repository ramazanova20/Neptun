import React from 'react'
import { LuMoveRight } from "react-icons/lu";

function Three() {
  return (
    <>
        <div className='flex flex-row'>
            <div>
                <img src="https://neptun.az/image/cache/catalog/26.04.24/50-azn-50-bonus-1143x7272-370x225.png?v=9" alt="" />
                <div className='flex justify-between'>
                    <p>50 AZN   50 Bonus </p>
                    <LuMoveRight />
                </div>
            </div>
            <div>
                <img src="https://neptun.az/image/cache/catalog/2.2024/nes-cake-banner-sayt-370x225.jpg?v=9" alt="" />
                <div className='flex justify-between'>
                    <p>Neptunda Dadli Endirimler! </p>
                    <LuMoveRight />
                </div>
            </div>
            <div>
                <img src="https://neptun.az/image/cache/catalog/30.05.2024/banner2-370x225.jpg?v=9" alt="" />
                <div className='flex justify-between'>
                    <p>Heftesonu Endirimleri Neptunda! </p>
                    <LuMoveRight />
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Three