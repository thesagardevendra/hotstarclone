import React from 'react'

const Login = () => {
    return (
        <div className="fixed bg-black w-full h-screen bg-opacity-50 z-20 flex justify-center items-center">
           <div className="bg-gray-900 h-1/2 w-1/3 rounded flex flex-col items-center relative">
                <i className="fa text-2xl fa-times  text-gray-200 right-0 absolute mt-2 mr-3"></i>
                <div>
                    <h1 className="text-gray-200 text-xl m-6 mt-10 absolute ">Login to continue</h1>
                </div>
                <div className="bg-black bg-opacity-10 ring-2 rounded p-2 text-center mx-28 mt-10">
                    <h1 className="font-semibold  text-blue-500">Have a Facebook/Email Account ?</h1>
                </div>
                <div>
                    <input className="bg-transparent border-b w-96" placeholder="Enter your mobile number" />

                </div>
           </div>
        </div>
    )
}

export default Login
