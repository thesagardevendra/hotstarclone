import React from 'react'

const Channel = ({channelimg}) => {
    return (
        <div className="mr-2">
           <img className="object-cover  lg:h-36 h-20 lg:w-60 xl:w-64 rounded-lg" src={channelimg} /> 
        </div>
    )
}

export default Channel
