import React from 'react'
import Logo from "../assets/Logo (3).png"
import Btn from './Btn'
import Container from './Container'
import Flex from './Flex'
import { MdKeyboardArrowDown } from "react-icons/md";



const NavBar = () => {
  return (
    <>
    <nav className='absolute top-0 left-0 w-full bg-[#ffffff29] backdrop-blur-[20px]'>
     <Container className="py-6.25">
        <Flex className="justify-between items-center">
         <div>
        <img src={Logo} alt="" />
      </div>
        <ul className='flex gap-12.5 text-white'>
            <li className='flex items-center gap-2'>Home <MdKeyboardArrowDown /></li>
            <li>About Us</li>
            <li>Schedule</li>
            <li>Blog</li>
            <li className='flex items-center gap-2'>Pages<MdKeyboardArrowDown /></li>
            <li>Contact Us</li>
        </ul>
        <div>
             <Btn>Join the Conference</Btn>
             
        </div>
         </Flex>
      </Container>
   
    </nav>
     
      
    </>
  )
}

export default NavBar
