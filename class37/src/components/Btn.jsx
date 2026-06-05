import React from 'react'

const Btn = ({ children, className = "" }) => {
  return (
    <div>
      <button className={`bg-primary font-bold py-3.5 px-6 rounded-full inline-flex items-center justify-center ${className}`}>
        {children}
      </button>
    </div>
  )
}

export default Btn
