import React from 'react'
import { DiscountIcon, InviteFriendIcon,ReferralIcon,RupeeIcon, WalletIcon } from '../icons/icons'
import {Link} from 'react-router-dom'

const Work = () => {
  return (
   <>
   <div className='sm:mx-48  mx-8 mt-10'>
    <div className='leading-5 font-semibold text-2xl text-[#800080]'>How does it work ?</div>
  <div className='sm:grid sm:grid-cols-2 block gap-12 sm:w-[60%] w-[80%]'>
    <div className='flex mt-6'>
    <div className='flex  px-4 py-6 bg-gray-100 rounded-full w-fit'>
        <div><InviteFriendIcon /></div>
    </div>
      <div className='pl-4 leading-6 text-base'>
      <div className=' font-medium'>Invite your Friends</div>
      <div className='font-normal'>Share the link tutedude.com with your friends</div>
      </div>

    </div>

    <div className='flex mt-6 '>
    <div className='flex  px-4 py-6 bg-gray-100 rounded-full w-fit'>
        <div><ReferralIcon /></div>
    </div>
      <div className='pl-4 text-base'>
      <div className=' font-medium'>Friend purchases any course</div>
      <div className='font-normal'>Using your REFERRAL CODE in the payments page</div>
      </div>
       </div>

      <div className='flex mt-6'>
    <div className='flex  px-4 py-6 bg-gray-100 rounded-full w-fit'>
        <div><RupeeIcon /></div>
    </div>
      <div className='pl-4 text-base'>
      <div className=' font-medium'>You get ₹ 200 as referral money</div>
      <div className='font-normal'>On total purchase the friend makes, into your wallet</div>
      </div>
      </div>

      <div className='flex mt-6 '>
    <div className='flex  px-4 py-6 bg-gray-100 rounded-full w-fit'>
        <div><DiscountIcon /></div>
    </div>
      <div className='pl-4 leading-6 text-base'>
      <div className=' font-medium'>Your Friend gets ₹ 200 Off</div>
      <div className='font-normal'>On his overall fee on successful purchase using your referral code</div>
      </div>
      </div>

      <div className='flex mt-6'>
    <div className='flex  px-4 py-6 bg-gray-100 rounded-full w-fit'>
        <div><WalletIcon /></div>
    </div>
      <div className='pl-4 leading-6 text-base'>
      <div className=' font-medium'>Transfer money from wallet</div>
      <div className='font-normal'>When the wallet balance reaches ₹200 or more, you can withdraw it</div>
     </div>
    </div>
    
    </div>
    <Link to="/refer"><div className='mt-10 font-medium text-[#800080] text-base'>Friends Who Enrolled</div></Link>
    <div className='mt-5 font-medium text-[#800080] text-base'>Terms & Conditions</div>
    </div>
   </>
  )
}

export default Work