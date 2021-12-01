import React from 'react'

const Main = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-7">
            <div className="mt-10">
                <h1 className="uppercase text-xl sm:w-full text-center md:text-4xl lg:text-4xl xl:text-6xl font-extrabold text-white">We all are in this together</h1>
            </div>
            <div>
                <h1 className="text-gray-400 text-sm text-center mx-10 md:text-lg md:mx-20 lg:text-xl">5000 confused beans who've somehow made their way into the metaverse. Only on solans</h1>
            </div>
            <div className="flex text-white space-x-3">
                <button className="uppercase font-semibold bg-gray-400 p-1 rounded hover:bg-red-600 px-2">buy a bean</button>
                <button className="uppercase font-semibold bg-gray-400 p-1 rounded hover:bg-red-600 px-2">create</button>
            </div>
        </div>
    )
}

export default Main
