import React from 'react'
import Image from "next/image"
function Header(props) {
    return (
        <>
            <header class="flex flex-wrap items-center p-4 md:py-8">
                <div class="md:w-3/12 md:ml-16">
                    <img class="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full border-2 border-pink-600 p-1" src={props.imgsrc ? props.imgsrc : "https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png"} alt="profile" />
                </div>
                <div class="w-8/12 md:w-7/12 ml-4">
                    <div class="md:flex md:flex-wrap md:items-center mb-4">
                        <h2 class="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0">{props.username ? props.username : "Your Name"}</h2>
                        <span class="inline-block fas fa-certificate fa-lg text-blue-500 relative mr-6 text-xl transform -translate-y-2" aria-hidden="true">
                            <i class="fas fa-check text-white text-xs absolute inset-x-0 first-line:marker:ml-1 mt-px"></i>
                        </span>
                        {/* <a href="#" class="bg-blue-500 px-2 py-1 text-white font-semibold text-sm rounded  text-center sm:inline-block  block">Follow</a> */}
                    </div>
                    <ul class="hidden md:flex space-x-8 mb-4">
                        <li className='text-gray-400'> <span class="font-semibold ">{props.postno} </span> posts </li>
                        {/* <li> <span class="font-semibold">40.5k</span> followers </li>
                                <li> <span class="font-semibold">302</span> following </li> */}
                    </ul>
                    <div class="hidden md:block">
                        <p>{props.about ? props.about : "Something tell about yourself"}</p>
                    </div>
                </div>
                <div class="md:hidden text-sm my-2">
                    <p>{props.about ? props.about : "How are you"}</p>
                </div>
            </header>
        </>
    )
}

export default Header