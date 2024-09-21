import React from 'react'
import Button from '../Shared/Button'

const Catagory = () => {
  return (
    <div className='py-8 px-28'>
      <div className='container'>
     <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
         {/*first col */}
         <div className='py-10 pl-5 bg-gradient-to-br from-black/95
          to-black/90  text-white rounded-3xl relative h-[320px] ] flex items-end'>
            <div>
                <div className='mb-4'>
                    <p className='mb-[2px] text-gray-400'>Enjoy</p>
                    <p className='text-2xl font-semibold mb-[2px]'>With</p>
                    <p className='text-4xl xl:text-5xl font-bold opacity-20  italic pb-4'>Earphone</p>
                    <Button
                    text="Browse"
                    bgColor="bg-red-500"
                    textColor="text-white"
                    />
                </div>
            </div>
            <img src="https://i.ibb.co.com/tmLtW2P/banner2.png"
             className='w-[200px]   right-0 mx-auto  absolute  bottom-10' alt="" />
            
         </div>
        
          {/*second col */}
          <div className='py-10 pl-5 bg-gradient-to-br from-[#FFC700]/100
          to-[#FFC700]/100   text-white rounded-3xl relative h-[320px] ] flex items-end'>
            <div>
                <div className='mb-4'>
                    <p className='mb-[2px] text-gray-700'>Enjoy</p>
                    <p className='text-2xl font-semibold mb-[2px]'>With</p>
                    <p className='text-4xl xl:text-5xl font-bold opacity-50 italic pb-4'>Gadget</p>
                    <Button
                    text="Browse"
                    bgColor="bg-white"
                    textColor="text-[#FFC700]"
                    />
                </div>
            </div>
            <img src="https://i.ibb.co.com/N14HHh1/imge.png"
             className='w-[200px]    right-0 mx-auto  absolute top-16' alt="" />
            
         </div>
           {/*third col */}
           <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-[#FF0000]/100
          to-[#FF0000]/100  text-white rounded-3xl relative h-[320px] ] flex items-end'>
            <div>
                <div className='mb-4'>
                    <p className='mb-[2px] text-white'>Enjoy</p>
                    <p className='text-2xl font-semibold mb-[2px]'>With</p>
                    <p className='text-4xl xl:text-5xl font-bold opacity-50 italic pb-4'>laptop</p>
                    <Button
                    text="Browse"
                    bgColor="bg-white"
                    textColor="text-red-500"
                    />
                </div>
            </div>
            <img src="https://i.ibb.co.com/Lr6KGzj/laptop.png"
             className='w-[350px]  -right-0 mx-auto  absolute top-1/2 -translate-y-1/2' alt="" />
            
         </div>
     </div>
      </div>
    </div>
  )
}

export default Catagory
