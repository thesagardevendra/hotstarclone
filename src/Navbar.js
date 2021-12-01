import React from 'react'
import Login from './Login'

const Navbar = () => {
    return (
        <div>

       
        <div className="flex items-center justify-between p-5 xl:mx-16 " >
           <div className="flex items-center">
            <ul className="flex text-white space-x-6 items-center cursor-pointer">
                <li><i className="fa fa-bars text-xl text-gray-300"></i></li>
                <li><span className="text-blue-500 font-semibold">Disney+ Hotstar</span></li>
                <li className="font-semibold text-lg text-gray-300 hidden xl:block">TV</li>
                <li className="font-semibold text-lg text-gray-300 hidden xl:block">Movies</li>
                <li className="font-semibold text-lg text-gray-300 hidden xl:block">Sports</li>
                <li className="font-semibold text-lg text-gray-300 hidden xl:block">Disney<sup>+</sup></li>
                <li className="text-yellow-400 font-extrabold text-xl hidden xl:block">KiDS</li>
            </ul>
           </div> 
           <div className="flex space-x-6 items-center">
               <div className="hidden md:block border-b pb-1 text-gray-300 border-gray-300">
               <input className="outline-none bg-transparent lg:w-72 w-54  font-semibold tracking-wider" placeholder="Search" />
               <i className="fa text-sm fa-search  text-gray-600"></i>
               </div>
              <span className="text-white flex items-center uppercase text-xs lg:text-sm bg-blue-600 px-2 py-1 font-semibold tracking-wider rounded cursor-pointer ">Subscribe</span>
              <span className="uppercase text-gray-300 font-semibold tracking-wider text-sm lg:text-lg cursor-pointer">Login</span>  
           </div>
        </div>
        <Login />
        </div>
    )
}

export default Navbar
