import React from 'react'

const Header = () => {
    return (
        <div className="bg-black h-16  px-2 md:pl-16 md:pr-6 lg:px-20 flex items-center justify-between border-b  ">
            <div>
                <h1 className="font-black text-white uppercase text-xl tracking-wider font-">MaBeans.</h1>
            </div>
           <div>
               <ul className="text-white font-extralight flex space-x-9 hidden lg:flex">
                   <li>About</li>
                   <li>Attributs</li>
                   <li>Specs</li>
                   <li>Team</li>
                   <li>FAQ</li>
               </ul>
           </div>
           <div className="flex lg:space-x-5 space-x-3">
               <i className="fab fa-twitter text-xl text-white bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center hidden lg:flex"></i>
               <i className="fab fa-github-alt text-xl text-white flex items-center justify-center bg-blue-800 rounded-full h-8 w-8 hidden lg:flex"></i>
               <i className="fa fa-bars bg-red-500 text-xl text-white lg:hidden  rounded h-8 w-8 flex items-center justify-center "></i>
                         
           </div>
        </div>
    )
}

export default Header
