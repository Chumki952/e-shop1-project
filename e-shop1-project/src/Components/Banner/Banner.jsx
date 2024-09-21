import React from 'react'

const Banner = ({ item }) => {
  console.log(item)  // Check if item data is correctly passed

  return (
    <div className="min-h-[550px] flex justify-center items-center py-12">
      <div className="container">
        <div
        style={{backgroundColor: item?.bgColor}}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-yellow-400 text-white rounded-3xl p-8">
          {/* First Column */}
          <div className='p-6 sm:p-8'>
            <p className="text-sm font-bold">{item?.discount || "Default Discount"}</p>
            <h1 className="text-4xl uppercase lg:text-7xl font-bold">{item?.title || "Default Title"}</h1>
            <p className="text-sm">{item?.date || "Default Date"}</p>
          </div>

          {/* Second Column */}
          <div className=''>
            <img src={item?.img || "default-image-url.jpg"} alt={item?.img || "Default img"} className="w-[250px] md:w-[340px] mx-auto  object-cover" />
          </div>

          {/* Third Column */}
          <div className='flex flex-col justify-center gap-4 p-6 sm:p-8'>
            <p className='font-bold text-xl'>{item?.title2}</p>
            <h2 className="text-3xl sm:text-5xl font-bold">{item?.title3 || "Default Title 3"}</h2>
            <p className="text-sm mt-2">{item?.title4 || "Default Title 4"}</p>
            <div>
              <button className=' bg-white py-2 px-4 rounded-full text-yellow-500'>Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
