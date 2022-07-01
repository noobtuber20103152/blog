import React, { useState } from 'react'
import { AiOutlineShareAlt, AiFillFacebook, AiFillLinkedin, AiOutlineWhatsApp } from "react-icons/ai"
import { BsTwitter } from "react-icons/bs"
import {useRouter} from "next/router"
function Model() {
    const router = useRouter();
    const [url, seturl] = useState(`https://blogtuber.vercel.app${router.asPath}`)
    
    console.log(`https://blogtuber.vercel.app${router.asPath}`)
    const [display, setdisplay] = useState("hidden")
    const onclick1 = () => {
        if (display == "hidden") {
            setdisplay("block");
        }
        else {
            setdisplay("hidden");
        }
    }
    const onchange = () => {
        return;
    }
    return <>
        <AiOutlineShareAlt className='hover:cursor-pointer text-center text-3xl' onClick={onclick1} />
        <div className={`${display} overflow-y-auto md:w-7/12 w-10/12 h-auto border shadow-lg bg-white `}>
            <div className='flex flex-wrap justify-between '>
                <a href={`https://twitter.com/share?url=${url}`} rel="noreferrer" target="_blank" className="w-6/12 flex justify-start items-center px-2 py-4 hover:bg-[#f2f4f7]">
                    <BsTwitter className='text-2xl text-blue-500' />
                    <span className='mx-2 text-lg font-semibold' >Twitter</span>
                </a>
                <a href={`whatsapp://send?text=${url}`} rel="noreferrer" target="_blank" className="w-6/12 flex justify-start items-center px-2 py-4 hover:bg-[#f2f4f7]">
                    <AiOutlineWhatsApp className='text-2xl text-green-700' />
                    <span className='mx-2 text-lg font-semibold' >WhatsApp</span>
                </a>

                 <a href={`https://linkedin.com/shareArticle?url=${url}`}  rel="noreferrer" target="_blank" className="w-6/12 flex justify-start items-center px-2 py-4 hover:bg-[#f2f4f7]">
                   <AiFillLinkedin className='text-2xl text-blue-600' />
                    <span className='mx-2 text-lg font-semibold' >LinkedIn</span>
                </a> 
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} rel="noreferrer" target="_blank" className="w-6/12 flex justify-start items-center px-2 py-4 hover:bg-[#f2f4f7]">
                    <AiFillFacebook className='text-2xl text-blue-900' />
                    <span className='mx-2 text-lg font-semibold' >Facebook</span>
                </a>
            </div>
            <div className='my-2' >
                <hr />
            </div>
            <div className='my-0 flex justify-start flex-col px-4 pb-2'>
                <p className='text-start mb-1' >blog page link</p>
                <input onChange={onchange} value={window.location.href}  type="text" className='border rounded-sm text-sm bg-[#f2f4f7] w-12/12 outline-none py-3 px-2 ' />
            </div>

        </div>
    </>
}

export default Model