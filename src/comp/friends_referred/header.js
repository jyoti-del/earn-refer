import React from 'react'
import {Link} from 'react-router-dom'
import { GoBackIcon } from '../icons/icons'

const Header = () => {
  return (
    <>
    <div className="sm:mx-48 mx-12" >
    <div className=' mt-4 font-normal text-sm p-1'>{'UI/UX > Refer & Earn > Friends Referred'}</div>
    <Link to ="/"><div className='visible sm:invisible pt-5 sm:pt-0'><GoBackIcon /></div></Link>
    <div className='flex justify-between'>
    <div className='block'>
    <div className='mt-5 font-normal p-1 text-[#800080] text-base'>Your Referral Code</div>
    <div class=" border-[#DFDFDF] border-2 px-3 py-2 rounded-lg w-fit">
           <p className='font-medium text-base' style={{letterSpacing:"0.75em"}}>EDCH54</p>
       </div>
    </div>
    <div className='rounded-2xl p-4 mt-6 shadow-lg'>
        <div className='font-normal text-sm text-[#800080]'>Wallet Balance</div>
        <div className='font-medium text-base'>₹ 500</div>
    </div>
    </div>
    <div className='mt-16 font-semibold p-1 text-[#800080] text-xl'>Friends who enrolled
    <span className='text-xl font-normal text-gray-600'>(3)</span></div>

    </div>
    </>
  )
}

export default Header