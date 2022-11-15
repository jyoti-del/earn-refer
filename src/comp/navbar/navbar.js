import React from 'react'
import { DropIcon, ProfileIcon,WhiteDropIcon } from '../icons/icons'

const Navbar = () => {
  return (
    <>
    <div className='grid grid-cols-2 lg:mx-20 p-2 mx-5 '>
       <div >
        <img src="images\image 1.png" alt="Logo"></img>
        </div>
        <div className='flex pt-5 font-medium non-italic text-lg justify-end gap-6 '>
          <div className='pr-6 text-[#800080]/25 sm:visible invisible'>My Assignment</div>
          <div className='pr-6 text-[#800080]/25 sm:visible invisible'>Chat with Mentor</div>
          <div className='flex gap-1 bg-[#800080] text-white sm:text-[#800080] sm:bg-white rounded-2xl justify-center pr-6 mb-7 p-0'>
          <span className='p-1 sm:visible invisible  '>
          <ProfileIcon /></span>
          <span className='pt-4 sm:pt-0'>ProfileName</span>
          <span className='pt-2 pl-1 sm:visible invisible'><DropIcon /></span>
          <span className='pt-7'><WhiteDropIcon /></span>
          </div>
          
        </div>
    </div>
    </>
  )
}





export default Navbar