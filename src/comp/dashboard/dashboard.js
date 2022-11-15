import React from 'react'

const Dashboard = () => {
  return (
    <>
    <div className='leading-5 sm:mx-48 mt-4 mx-12 font-normal text-sm p-2'>{'UI/UX > Refer & Earn'}</div>

    <div className='sm:mx-48  mx-8 mt-10 sm:grid grid-cols-2 block gap-16'>
    <div className='border p-6 shadow-[0_20px_50px_rgba(8,_112,_184,_0.3)] rounded-2xl grid grid-cols-2  sm:grid-cols-3 sm:w-fit  sm:gap-10'>
                  <div>
                    <div className='leading-5 font-normal text-sm text-[#800080]'>Referral Earning</div>
                    <div className='font-medium text-3xl'>₹ 2,500</div>
                </div>
                <div>
                    <div className='leading-5 font-normal text-sm text-[#800080]'>Total Referrals</div>
                    <div className='font-medium text-3xl'>7</div>
                </div>
                
                <div className='pt-6 sm:pt-0'>
                    <div className='leading-5 font-normal text-sm text-[#800080]'>Wallet Balance</div>
                    <div className='font-medium text-3xl'>₹ 500</div>
                </div>
            
            <div className='mt-4 flex sm:col-span-3 justify-center sm:w-full w-auto'>
            <button className='bg-[#800080] font-medium sm:text-lg text-base text-white sm:px-4 px-2 sm:py-2  py-0 rounded-full text-bold'>Withdraw Balance</button>
          </div>
          </div>
      


        <div className='sm:mx-8 pt-4 text-[#800080] w-fit'> 
            <div className=' font-semibold text-2xl '>Your Referral Code</div>
            <article class="p-0.5 mx-auto my-3 max-w-sm rounded-xl bg-gradient-to-r from-[#FF864C] to-[#800080]">
        <div class="bg-white p-2 rounded-lg">
           <p className='px-16 font-medium text-xl' style={{letterSpacing:"1.5em"}}>EDCH54</p>
       </div>
       </article>
        </div>
        </div>
        
        
    </>
  )
}

export default Dashboard