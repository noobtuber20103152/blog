import React from 'react'
import Link from "next/link"
function Post(props) {
    return (
        <>
            
                <div class="w-1/3 p-px md:px-3">
                    <Link href={`/blog/${props.url.split(" ").join("-")}`}>
                        <a >
                            <article class="post bg-gray-100 text-white relative pb-full md:mb-6">
                                <img class="w-full h-full absolute left-0 top-0 object-cover" src={props.imgsrc ? props.imgsrc : "https://source.unsplash.com/random/900×700/?code"} alt="image" />
                                <i class="fas fa-square absolute right-0 top-0 m-1"></i>
                                <div class="overlay ease-in duration-500 bg-gray-900 bg-opacity-50 w-full h-full absolute left-0 top-0 hidden">
                                    <div class="flex justify-center items-center space-x-4 h-full">
                                        <span class="p-2 text-xl text-center font-medium"> {props.title} </span>
                                        {/* <span class="p-2"> <i class="fas fa-comment"></i> 2,909 </span> */}
                                    </div>
                                </div>
                            </article>
                        </a>
                    </Link>
                </div>
        </>
    )
}

export default Post