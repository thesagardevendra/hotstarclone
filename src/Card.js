import React from 'react'

const Card = ({title,channel,genres,language,imagesrc,description}) => {
    return (
      
        <div className="bg-gray-900 w-screen rounded-lg relative">
          <div className="flex  justify-between">
            <div className="flex flex-col m-10  mx-28 mt-16 space-y-2 lg:block lg:w-1/4 hidden">
              <h1 className="text-gray-200 md:text-3xl text-md  font-bold whitespace-nowrap">
              {title}
              </h1>
              <div className="flex text-gray-400 space-x-1 font-semibold lg:text-lg text-sm whitespace-nbowrap">
              <span className="whitespace-nowrap">{channel}  </span>
              <span >{language} </span>
              <span className="whitespace-nowrap">{genres}</span>
              </div>
             
              <h1 className="text-gray-300 font-semibold  md:text-sm   text-sm tracking-wide">
             {description}
              </h1>
            </div>

            <div className="mr-20 relative hidden md:block">
            <div className="w-64  bg-gradient-to-l via-gray-900 to-gray-900 from-transparent  absolute h-full  z-10 ">
             </div>
            </div>
            
            <img className="rounded-lg md:rounded-r-lg z-0 lg:w-1/2 w-full object-cover"  src={imagesrc}/>
            
          </div>
        </div>
   
    )
}

export default Card


//<div className="h-72 w-52 bg-gray-400 p-2 flex flex-col m-6  rounded hover:shadow-xl transform hover:scale-110 hover:transition-shadow duration-500 hover:ease-in-out ring-gray-100 ring cursor-pointer">

     
//  {/* Image */}
//  <img src={imagesrc} className="object-cover h-40 w-full  rounded-lg" />


//  <div className="flex mt-10  justify-between items-center">
//  <div className="flex flex-col justify-center">
//    <h1 className="font-semibold whitespace-nowrap capitalize hidden md:block">{name}</h1>
//    <span>#{score}</span>  
//  </div>
//     <button className={btnstyle}>{strength}</button>
//  </div>

//  </div>