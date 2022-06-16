import React, { useEffect, useState } from 'react'
import Link from "next/link"
import Image from "next/image"
function Relatedcard(props) {
    const myLoader = ({ src }) => {
        return src;
    }

    return (
        <>
            <div className='flex justify-center mx-2 '>
                <div class="flex justify-center my-6 w-full lg:w-10/12  ">
                    <div class="flex flex-col lg:flex-row justify-center rounded-lg bg-white ">
                        <div className='lg:w-2/12' >
                            <Image loader={myLoader} class=" hover:scale-105 duration-300 hover:cursor-pointer h-[12rem] w-12/12 lg:w-[12rem] object-cover rounded-lg " src={props.bgimage} height={1000} width={1000} alt="" />
                        </div>
                        <div class="lg:p-6 p-4 lg:w-9/12 flex justify-end  flex-col ">
                            <span className='text-base text-gray-700 mb-3' >{props.createdAt}</span>
````
                            <Link href={`../../blog/${props.title.split(" ").join("-")}`}><a class="text-gray-900 text-2xl w-full font-bold mb-22">{props.title}</a></Link>
                            <p class="text-gray-700 text-base w-12/12  mt-2 mb-0">
                                {props.shortdesc}
                            </p>
                            <p className='text-lg font-semibold text-gray-600 mb-4'>{props.author}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Relatedcard