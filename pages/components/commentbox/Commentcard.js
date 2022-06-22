import React from 'react'

function Commentcard(props) {
    return (
        <>
            <div className="bg-slate-800 my-5 text-white rounded-lg  w-[50rem] space-y-6 p-10">
                <div className="flex space-x-4 items-center ">
                    <div className="w-12 h-12">
                        <img alt="avatar" src={props.image} className="rounded-full w-full h-full object-cover " />
                        <div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex space-x-2 items-center">
                            <h2 className="text-base"> {props.author} </h2>
                            <svg className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div className="  text-xs text-slate-400">posted an update</div>
                        </div>
                        {/* <p className=" text-xs text-slate-400">5 Minutes Ago</p> */}
                    </div>
                </div>
                <div>
                    <p className="text-sm leading-6 text-slate-300">{props.message}
                    </p>
                </div>
                {/* <div className="flex justify-between pt-5">
                    <svg className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                    </svg>
                    <div className="text-slate-400 text-sm"><p>23 Comments</p></div>
                </div> */}
            </div>

        </>
    )
}

export default Commentcard