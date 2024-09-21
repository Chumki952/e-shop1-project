import React from 'react'
import Slider from 'react-slick'
import Button from '../Shared/Button'
const HeroData = [
    {
        id:1,
        img: 'https://i.ibb.co.com/R2TC2ZF/hero1.png',
        subtitle:"Beats solo",
        title: "Wireless",
        title2:"Headphone",
    },
    {
        id:2,
        img: 'https://i.ibb.co.com/hyxnxtw/hero2.png',
        subtitle:"Beats solo",
        title: "Wireless",
        title2:"Virtual",
      },

{
        id:3,
        img: 'https://i.ibb.co.com/HPzZyZW/hero3.png',
        subtitle:"Beats solo",
        title: "Branded",
        title2:"Laptops",
      },
]

const Hero = () => {

    const settings = {
        dots: false,
        arrows:false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
       //autoplay:true,
        autoplaySpeed:4000,
         cssEase:"ease-in-out",
         pauseOnHover:false,
         pauseOnFocus:true,
      };
  return (
    <div className='container mx-auto'>
      <div  className='overflow-hidden rounded-3xl  min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center'>
        <div className='container  pb-8 sm:pb-0'>
<Slider {...settings}>
{
    HeroData.map((data) =>(
     <div key={data.id}>
         <div className='grid grid-cols-1 sm:grid-cols-2 '>
            <div id='text-content' className=' flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0
             text-center sm:text-left order-2 mx-10 sm:orde relative z-10'>
                <h1 className='text-2xl sm:text-6xl lg:text-2xl font-bold'>{data.subtitle}</h1>
                <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>
                <h1 className='text-5xl uppercase text-white dark:text-white/5  sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold'>{data.title2}</h1>
                <div>
                  <Button
                   text="Shop By Catagory"
                   bgColor="bg-red-500"
                   textColor="text-white"
                  />
                </div>
            </div>
            <div id='img-section' className='order-1 sm:order-2'>
              <div>
                <img src={data.img} alt=""
                className='w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto 
 relative z-40'
                />

              </div>
            </div>
         </div>
     </div>
     ) )
}
</Slider>
</div>
      </div>
    </div>
  )
}

export default Hero