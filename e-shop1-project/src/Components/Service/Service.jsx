import React from 'react'
import {FaCarSide, FaHeadphonesAlt, FaWallet, FaCheckCircle} from "react-icons/fa"
const ServiceData =[
    {
        id:1,
        icon:<FaCarSide className='text-4xl md:text-5xl text-red-500'/>,
        title:"Free Shipping",
        description:"Free Shiping on All Order"
    },
    {
        id:2,
        icon:<FaCheckCircle className='text-4xl md:text-5xl text-red-500'/> ,
        title:"Safe Money",
        description:"30 Days Money Back",
    },
    {
        id:3,
        icon:<FaWallet className='text-4xl md:text-5xl text-red-500'/> ,
        title:"Secure Payment",
        description:"All Payment Secure",
    },
    {
        id:4,
        icon:<FaHeadphonesAlt className='text-4xl md:text-5xl text-red-500'/> ,
        title:"Online Support 24/7",
        description:"Technical Support 24/7",
    },
]
const Service = () => {
  return (
    <div className='px-28'>
      <div className='container my-14 md:my-20'>
       <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8'>
        {
            ServiceData.map((data)=> (
                <div className='flex flex-col items-start sm:flex-row gap-4' key={data}>
                    {data.icon}
                    <div>
                        <h1 className='lg:text-xl font-bold'>{data.title}</h1>
                        <h2 className='text-gray-700 text-sm'>{data.description}</h2>
                    </div>
                </div>
         ))
        }
       </div>
      </div>
    </div>
  )
}

export default Service
