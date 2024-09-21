import React from 'react'
import { NavLink } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from './DarkMode';

const Navbar = () => {
  const DropDownLinks = [
    {
      id: 1,
      name: "Trending Products",
      link: "/#",
    },
    {
      id: 2,
      name: "Best Selling",
      link: "/#",
    },
    {
      id: 3,
      name: "Top Rated",
      link: "/#",
    },
  ];

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
      <div className='py-4 mx-12 flex justify-between items-center'>
        <div className='container flex items-center gap-5'>
          <h1 className='text-red-500 font-semibold text-3xl uppercase'>E-Shop</h1>
          <div>
            <ul className='flex items-center gap-5'>
              <NavLink to='/'>
                <li className='px-4 font-semibold text-xl text-gray-500 hover:text-black dark:text-white duration-200'>Home</li>
              </NavLink>
              <NavLink to='/shop'>
                <li className='px-4 font-semibold text-xl text-gray-500 hover:text-black dark:text-white duration-200'>Shop</li>
              </NavLink>
              <NavLink to='/about'>
                <li className='px-4 font-semibold text-xl text-gray-500 hover:text-black dark:text-white duration-200'>About</li>
              </NavLink>
              <NavLink to='/blog'>
                <li className='px-4 font-semibold text-xl text-gray-500 hover:text-black dark:text-white duration-200'>Blog</li>
              </NavLink>

              <div className='relative group '>
                <li className='py-2 flex items-center font-semibold text-xl text-gray-500 dark:hover:text-white cursor-pointer'>
                  Quick Links
                  <FaCaretDown className='ml-1 group-hover:rotate-180 duration-300' />
                </li>
                <div className='absolute top-full left-0 bg-white w-[200px] dark:bg-gray-800 shadow-md dark:text-white rounded-lg p-2 hidden group-hover:block'>
                  <ul className='space-y-2'>
                    {DropDownLinks.map((data) => (
                      <li key={data.id} className='py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700'>
                        <a className='text-gray-500 inline-block w-full dark:hover:text-white duration-200 p-2 hover:bg-red-500/20 font-semibold rounded-md' href={data.link}>{data.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ul>
          </div>
        </div>

        <div id='right-section' className='flex justify-between items-center gap-4'>
          <div className='relative group sm:block hidden'>
            <input type="text" placeholder='Search' className='search-bar' />
            <IoMdSearch
              aria-label='Search'
              className='text-2xl text-gray-600 group-hover:text-red-500 duration-200 dark:text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2'
            />
          </div>

          <button className='p-3 relative'>
            <FaCartShopping
              aria-label='Cart'
              className='text-2xl text-gray-600 dark:text-gray-400'
            />
            <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center text-xs justify-center'>
              4
            </div>
          </button>

          <div id='dark-mode'>
            <DarkMode />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
