import React from 'react'
import Link from "next/link"
function Post(props) {
    return (
        <>
            
                <div className="w-1/3 p-px md:px-3">
                    <Link href={`/blog/${props.url?props.url.split(" ").join("-"):"page-not-found"}`}>
                        <a >
                            <article className="post bg-gray-100 text-white relative pb-full md:mb-6">
                                <img className="w-full h-full absolute left-0 top-0 object-cover" src={props.imgsrc ? props.imgsrc : "https://source.unsplash.com/random/900×700/?code"} alt="image" />
                                <i className="fas fa-square absolute right-0 top-0 m-1"></i>
                                <div className="overlay ease-in duration-500 bg-gray-900 bg-opacity-50 w-full h-full absolute left-0 top-0 hidden">
                                    <div className="flex justify-center items-center space-x-4 h-full">
                                        <span className="p-2 text-xl text-center font-medium"> {props.title} </span>
                                        {/* <span className="p-2"> <i className="fas fa-comment"></i> 2,909 </span> */}
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