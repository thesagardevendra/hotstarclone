import React from 'react'

const Genres = ({channelimg,Generscategory}) => {
    return (
        <div className="mr-2 relative">
           <img className="object-cover  lg:h-36 h-20 lg:w-60 xl:w-64 rounded-lg relative opacity-50" src={channelimg} /> 
           <h1 className="lg:top-14 top-8 left-7 absolute xl:left-20 lg:left-16 uppercase text-white font-semibold tracking-wider lg:text-xl text-sm flex justify-center items-center">
               {Generscategory}
           </h1>
        </div>
    )
}

export default Genres
