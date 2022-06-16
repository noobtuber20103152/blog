import React from 'react'
import Link from "next/link"
function Verticlecard(props) {
    return (
        <>
            <div class="max-w-sm lg:mx-0 mx-4 rounded col-md-3 overflow-hidden mt-4">
                <img class="hover:scale-105 duration-500 hover:rounded-lg hover:cursor-pointer w-full h-60 rounded-lg" src={props.bgimage} alt="Sunset in the mountains" />
                <div class=" px-2 py-4">
                    <p className='text-base text-gray-600 ' >{props.createdAt}</p>
                    <Link href={`../../blog/${props.title.split(" ").join("-")}`}><a  class="font-bold text-xl mb-2">{props.title}</a></Link>
                    <p class="text-gray-700 text-base">
                        {props.shortdesc}
                    </p>
                    <p className='text-base mt-3 font-bold text-gray-600'>{props.author}</p>
                </div>

            </div>
        </>
    )
}

export default Verticlecard