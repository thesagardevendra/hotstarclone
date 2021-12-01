import React from 'react'

const Footer = () => {
    return (
        <div className="m-5 flex lg:justify-between lg:flex-row flex-col text-white lg:space-y-0 space-y-8 space-x-8 text-gray-300">
            <div className="flex flex-col space-y-5">
               <ul className="flex text-sm flex-wrap justify-start capitalize whitespace-nowrap">
                   <li className="mr-4">About Disney+ hotstar</li>
                   <li className="mr-4">terms of use</li>
                   <li className="mr-4">privacy policy</li>
                   <li className="uppercase mr-4">faq</li>
                   <li className="mr-4">feedback</li>
                   <li className="mr-4">careers</li>
               </ul>
               <h1 className="text-sm">
               © 2021 STAR. All Rights Reserved. 
               </h1>
            </div>
            <div className="flex space-x-10">
            <div className="flex flex-col">
                <h1 className="whitespace-nowrap">Connect with us</h1>
                <div >
                    <i className="fab fa-facebook text-3xl mr-2"></i>
                    <i className="fab fa-twitter text-3xl" ></i>
                </div>
            </div>
            <div>
            <h1 className="whitespace-nowrap">Disney+ Hotstar App</h1>
                <div>
                    <i className="fab  fa-google-play text-2xl mr-2"></i>
                    <i className="fab fa-apple text-3xl"></i>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Footer
