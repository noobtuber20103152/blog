import React from 'react'
import Link from "next/link"
import Image from "next/image"
function Verticlecard(props) {
    const myLoder = ({src})=>{
        return src;
    }
    return (
        <>
            <div className="max-w-sm lg:mx-0 mx-4 rounded col-md-3 overflow-hidden mt-4">
                <Image loader={myLoder} height={500} width={1000} className="hover:scale-105 duration-500 hover:rounded-lg hover:cursor-pointer w-full h-60 rounded-lg" src={props.bgimage} alt="Sunset in the mountains" />
                <div className=" px-2 py-4">
                    <p className='text-base text-gray-600 ' >{props.createdAt}</p>
                    <Link href={`../../blog/${props.title.split(" ").join("-")}`}><a  className="font-bold text-xl mb-2">{props.title}</a></Link>
                    <p className="text-gray-700 text-[0.9rem]">
                        {props.shortdesc}
                    </p>
                    <p className='text-base mt-3 font-bold text-gray-600'>{props.author}</p>
                </div>

            </div>
        </>
    )
}

export default Verticlecard