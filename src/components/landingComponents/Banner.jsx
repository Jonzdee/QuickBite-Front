import React from 'react'
import banner from "../../assets/Images/banner.png"
function Banner() {
  return (
    <div className='w-full'>
     <img
     className='mx-auto w-full max-w-[1000px] h-auto object-contain'
      src={banner} 
      alt="banner" 
      srcset="" />

    </div>
  )
}

export default Banner