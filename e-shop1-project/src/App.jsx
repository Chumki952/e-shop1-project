
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Catagory from './Components/Catagory/Catagory'
import Catagoryes from './Components/Catagory/Catagoryes'
import Service from './Components/Service/Service'
import Banner from './Components/Banner/Banner'
import bannerImage from "../public/images/baner.png"
import Products from './Components/Products/Products'


const BannerData= {
  discount:"30% Off",
  title: "Fine Smail",
  date: "10 Jan to 28 Jan",
  img:bannerImage,
  title2:"Air Solo Bus",
  title3: "Winter Sale",
  title4:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  
}
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Catagory></Catagory>
     <Catagoryes></Catagoryes>
     <Service></Service>
     <Banner item={BannerData} /> {/* Properly passing item prop */}
     <Products></Products>
    </div>
  )
}

export default App