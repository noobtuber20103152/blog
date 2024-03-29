import React, { useState } from 'react'
import Link from "next/link"
function Hotizontalcard(props) {
    return (
        <>
            <div className='flex justify-center '>
                <div className="flex justify-center my-6 w-full lg:w-10/12  ">
                    <div className="flex flex-col lg:flex-row justify-center rounded-lg bg-white ">
                        <div className='lg:w-3/12' >
                            <img className="h-[21rem] w-full lg:w-[21rem] object-cover rounded-lg " src={props.bgimage} alt="" />
                        </div>
                        <div className="lg:p-6 p-4 lg:w-9/12 flex justify-end  flex-col ">
                            <span className='text-base  font-medium text-gray-400 mb-3' > {props.author}  -  {props.createdAt}</span>
                            <Link href={`../../blog/${props.title ? props.title.split(" ").join("-") : "page-not-found"}`}><a className="text-gray-900 text-4xl lg:text-5xl w-full font-bold mb-22">{props.title}</a></Link>
                            <p className="text-gray-700 text-base w-12/12 font-medium  mt-2 mb-4">{props.shortdesc}
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Hotizontalcard;