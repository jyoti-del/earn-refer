import React from 'react'

const Card = () => {
  return (
   <>
    <div className="sm:mx-48 mx-12 mt-4 grid lg:grid-cols-3 sm:w-auto grid-cols-1 gap-4 " >
      <div className='border rounded-2xl w-auto text-white py-3 px-5 bg-gradient-to-l from-[#800080] to-[#FF864C]'>
      <div className='flex justify-between'>
        <div className='font-bold text-base'>Dhiraj Saxsena</div>
        <div className='font-normal text-sm'>14 Sep, 2022</div>
        </div>
        <div className='font-medium text-sm pt-2'>Courses Enrolled(6)</div>
        <div className='block my-4 p-1 '>
        <div className='flex gap-2 font-normal text-sm'>
            <div className='rounded-2xl border w-fit px-2 py-1'>UI/UX</div>
            <div className='rounded-2xl border w-fit px-2 py-1'>Photoshop</div>
            <div className='rounded-2xl border w-fit px-2 py-1'>Illustrator</div>
            </div>
            <div className='flex gap-3 mt-2 '>
            <div className='rounded-2xl border w-fit px-2 py-1'>Python</div>
            <div className='rounded-2xl border w-fit px-2 py-1'>MERN</div>
            <div className='rounded-2xl border w-fit px-2 py-1'>Java</div>
        </div>
        </div>
        <div className='flex gap-2'>
        <div className='font-normal text-base p-1'>Referral Amount</div>
        <div className='font-semibold text-2xl'>₹185</div>
        </div>
      </div>

      <div className='border rounded-2xl w-auto text-white py-3 px-5 bg-gradient-to-l from-[#800080] to-[#FF864C]'>
      <div className='flex justify-between'>
        <div className='font-bold text-base'>Subhash Mishra</div>
        <div className='font-normal text-sm'>15 Sep, 2022</div>
        </div>
        <div className='font-medium text-sm pt-2'>Courses Enrolled(23)</div>
        <div className='block my-4 p-1 '>
        <div className='flex gap-2 font-normal text-sm'>
            <div className='rounded-2xl border w-fit px-2 py-1'>UI/UX</div>
            <div className='rounded-2xl border w-fit px-2 py-1'>Photoshop</div>
            <div className='rounded-2xl border w-fit px-2 py-1'>Illustrator</div>
            </div>
            <div className='flex gap-3 mt-2 '>
            <div className='rounded-2xl border w-fit px-2 py-1'>Python</div>
            <div className='rounded-2xl border w-fit px-2 py-1'>MERN</div>
            <div className='rounded-2xl border w-fit px-2 py-1'>Java</div>
            <div className='rounded-2xl border w-fit px-2 py-1'>C++</div> 
        </div>
        </div>
        <div className='flex gap-2'>
        <div className='font-normal text-base p-1'>Referral Amount</div>
        <div className='font-semibold text-2xl'>₹485</div>
        </div>
      </div>

      <div className='border rounded-2xl w-auto text-white py-3 px-5 bg-gradient-to-l from-[#800080] to-[#FF864C]'>
      <div className='flex justify-between'>
        <div className='font-bold text-base'>Prafull Kumar</div>
        <div className='font-normal text-sm'>16 Sep, 2022</div>
        </div>
        <div className='font-medium text-sm pt-2'>Courses Enrolled(23)</div>
        <div className='block my-4 p-1 '>
        <div className='flex gap-2 font-normal text-sm'>
            <div className='rounded-2xl border w-fit px-2 py-1'>UI/UX</div>
            <div className='rounded-2xl border w-fit px-2 py-1'>Photoshop</div>
            <div className='rounded-2xl border w-fit px-2 py-1'>Illustrator</div>
            </div>
            <div className='flex gap-3 mt-2 '>
            <div className='rounded-2xl border w-fit px-2 py-1'>Python</div>
            <div className='rounded-2xl border w-fit px-2 py-1'>MERN</div>
            <div className='rounded-2xl border w-fit px-2 py-1'>Java</div>
            <div className='rounded-2xl border w-fit px-2 py-1'>C++</div>
        </div>
        </div>
        <div className='flex gap-2'>
        <div className='font-normal text-base p-1'>Referral Amount</div>
        <div className='font-semibold text-2xl'>₹485</div>
        </div>
      </div>
    </div>
    <div className='sm:mx-48 mx-12 mt-10 font-medium text-[#800080] text-base'>Terms & Conditions</div>

   </>
  )
}

export default Card