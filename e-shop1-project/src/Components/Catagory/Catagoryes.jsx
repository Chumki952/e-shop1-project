import React from 'react'
import Button from '../Shared/Button'

const Catagoryes = () => {
  return (
    <div className='py-8 px-28'>
      <div className='container'>
     <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
         {/*first col */}
         <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-300/100
          to-red-300/100  text-white rounded-3xl relative h-[320px] ] flex items-end'>
            <div>
                <div className='mb-4'>
                    <p className='mb-[2px] text-white'>Enjoy</p>
                    <p className='text-2xl font-semibold mb-[2px]'>With</p>
                    <p className='text-4xl xl:text-5xl font-bold opacity-90 italic pb-4'>laptop</p>
                    <Button
                    text="Browse"
                    bgColor="bg-red-500"
                    textColor="text-white"
                    />
                </div>
            </div>
            <img src="https://i.ibb.co.com/8N5dy37/image4.png"
             className='w-[350px] -right-0 mx-auto  absolute top-1/2 -translate-y-1/2' alt="" />
            
         </div>
        
          {/*second col */}
          <div className='py-10 pl-5 bg-gradient-to-br from-green-500
          to-green-500  text-white rounded-3xl relative h-[320px] ] flex items-end'>
            <div>
                <div className='mb-4'>
                    <p className='mb-[2px] text-white'>Enjoy</p>
                    <p className='text-2xl font-semibold mb-[2px]'>With</p>
                    <p className='text-4xl xl:text-5xl font-bold opacity-50  italic pb-4'>Earphone</p>
                    <Button
                    text="Browse"
                    bgColor="bg-white"
                    textColor="text-green-500"
                    />
                </div>
            </div>
            <img src="https://i.ibb.co.com/zQkxprf/image5.png"
             className='w-[200px] h-30  right-0 mx-auto  absolute  bottom-10' alt="" />
            
         </div>
           {/*third col */}
           <div className='py-10 pl-5 bg-gradient-to-br from-gray-600/100
          to-gray-700/100   text-white rounded-3xl relative h-[320px] ] flex items-end'>
            <div>
                <div className='mb-4'>
                    <p className='mb-[2px] text-white'>Enjoy</p>
                    <p className='text-2xl font-semibold mb-[2px]'>With</p>
                    <p className='text-4xl xl:text-5xl font-bold opacity-40 italic pb-4'>Gadget</p>
                    <Button
                    text="Browse"
                    bgColor="bg-[#FF0000]"
                    textColor="text-white"
                    />
                </div>
            </div>
            <img src="https://i.ibb.co.com/jLkvyC1/image6.png"
             className='w-[200px]   right-0 mx-auto  absolute top-16' alt="" />
            
         </div>
     </div>
      </div>
    </div>
  )
}

export default Catagoryes
