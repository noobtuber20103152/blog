import React from 'react'
import Image from "next/image"
function Mainblogcomponent(props) {
    const myLoader = ({ src }) => {
        return src;
    }
    const loder = ({ src }) => {
        return src;
    }
    return (
        <>
            <div className="container flex flex-col justify-center items-center my-20 ">
                <div className='lg:w-7/12 w-11/12'>
                    <div className='mb-10'>
                        <h1 className='text-base text-gray-600 font-medium text-center '>{props.author}</h1>
                        <h1 className='text-base text-gray-600  text-center '>{props.createdAt}</h1>
                    </div>
                    <div className="my-10 flex flex-col justify-center items-center">
                        <h1 className='md:text-5xl text-4xl text-center font-bold'>{props.title}</h1>
                        <p className='text-center w-full md:w-10/12 text-2xl fontsemibold text-gray-600 mt-5' >{props.shortdesc}</p>
                    </div>
                    <div className="mt-5">
                        <Image loader={myLoader} className="w-full rounded-lg h-[34rem]" src={props.bgimage?props.bgimage:"asdf"} height={500} width={1000} />
                    </div>
                    <div className='mt-5'>
                        {props.longdesc && props.longdesc?.map((e) => {
                            return <>
                                <p className='text-xl text-gray-600 font-semibold'>{e}</p>
                                <br />
                            </>
                        })}

                    </div>
                    <div className="mt-5">
                        <div className="container grid grid-cols-3 gap-2 mx-auto">
                            {props.otherimages && props.otherimages?.map((e) => {
                                return <>
                                    <div className="w-full rounded">
                                        <Image loader={loder} className="w-96 hover:scale-105 duration-500 hover:cursor-pointer h-96 rounded-lg " src={e?e:"asdfa"} height={600} width={1000} />
                                    </div>
                                </>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mainblogcomponent