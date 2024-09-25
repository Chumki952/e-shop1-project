import React from 'react'


const ProductData=[
    {
        id:1,
        img:"https://i.ibb.co.com/wRNrMrp/boat.jpg",
        title:"Boat Headphone",
        price:"110",
        aosDelay:"0",
 },
 {
  id:2,
  img:"https://i.ibb.co.com/CnhkV9P/watch.png",
  title:"Rocky Mountain",
  price:"300",
  aosDelay:"200",
},
{
  id:3,
  img:"https://i.ibb.co.com/RphCkXr/goggle1.jpg",
  title:"Goggles",
  price:"350",
  aosDelay:"400",
},
{
  id:4,
  img:"https://i.ibb.co.com/CsSrzxn/pined.jpg",
  title:"Printed",
  price:"300",
  aosDelay:"600",
},
]

const Products = () => {
  return (
    <div>
      <div className="container">
        {/*heading section*/}
        <div className='text-center mb-10 max-w-[600px] mx-auto space-y-2'>
        
            <h1  className='text-3xl font-bold lg:text-4xl'>Our Products</h1>
            <p className='text-gray-400 textsm'>Explore Our Products</p>
             {/*body section*/}
             <div className='mb-10'>
             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 '>
              {
                 ProductData.map((data) =>(
                  <div key={data.id}>
                     <div className='border-2 rounded-md border-gray-200 '>
                      <img src={data.img} className='h-[180p] w-[260px] object-cover bg-red-500' alt="" />
                      
                     </div>
                     <div className='leading-7 right-0'>
                      <h2 className='font-semibold mr-20'>{data.title}</h2>
                      <h2 className='font-bold mr-20 '>${data.price}</h2>
                     </div>
                 </div>
                  
                 ))
              }
             </div>
             </div>
        </div>
      </div>
    </div>
  )
}

export default Products