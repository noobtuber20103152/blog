import React, { useEffect, useState } from 'react'
import Link from "next/link"
import Image from "next/image"
function Relatedcard() {
    const myLoader = ({ src }) => {
        return src;
    }
    const [data, setdata] = useState([]);
    useEffect((e)=>{
        async function fetchdata(){
               let url = ""
        }
    }, [])
    return (
        <>
            <div className='flex justify-center mx-2 '>
                <div class="flex justify-center my-6 w-full lg:w-10/12  ">
                    <div class="flex flex-col lg:flex-row justify-center rounded-lg bg-white ">
                        <div className='lg:w-2/12' >
                            <Image loader={myLoader} class="h-[12rem] w-full lg:w-[12rem] object-cover rounded-lg " src="https://source.unsplash.com/random/900×700/?code" height={1000} width={1000} alt="" />
                        </div>
                        <div class="lg:p-6 p-4 lg:w-9/12 flex justify-end  flex-col ">
                            <span className='text-base text-gray-700 mb-3' >July 17, 2022</span>

                            <Link href="../../blog/How-to-become-a-mern-stack-web-developer"><a class="text-gray-900 text-2xl w-full font-bold mb-22">How to become a mern stack web developer.</a></Link>
                            <p class="text-gray-700 text-base w-12/12  mt-2 mb-0">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem exercitationem, nobis quos beatae molestias adipisci mollitia fuga harum ipsam. Deserunt ex nobis aliquid. Amet, excepturi repellendus.
                            </p>
                            <p className='text-lg font-semibold text-gray-600 mb-4'>Ujjawal Rachhoya</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Relatedcard