import React from 'react'
import { GoDotFill } from "react-icons/go";


const SecHead = ({text,heading,className}) => {
  return (
    <div className='text-center'>
        

        <p className='text-sm font-semibold text-white'><GoDotFill className={`${className}`}/>{text}</p>
      <h2 className='text-5xl font-semibold leading-13.25 tracking-[0.96px] text-white'>{heading}</h2>
    </div>
  )
}

export default SecHead
