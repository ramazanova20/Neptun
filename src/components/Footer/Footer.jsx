import React from 'react'
import FooterTop from './FooterTop'
import FooterBottom from './FooterBottom'
import FooterMain from './FooterMain'

function Footer() {
  return (
    <footer className= 'mt-[50px] bg-[#ff8300]'>
        <FooterTop />
        <FooterMain />
        <FooterBottom />
    </footer>
  )
}

export default Footer
