import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from "next/head"
import Sidebar from '../components/siderbar/Sidebar'
import Image from "next/image"
import Link from "next/link"
import Relatedcard from "./Relatedcard"
function blog() {

    const myLoader = ({ src }) => {
        return src;
    }
    function loder({ src }) {
        return src;
    }
    const images = ["https://source.unsplash.com/random/900×700/?code", "https://source.unsplash.com/random/900×700/?cricket", "https://source.unsplash.com/random/900×700/?football", "https://source.unsplash.com/random/900×700/?music", "https://source.unsplash.com/random/900×700/?social"]
    // const router = useRouter();
    // const { slug } = router.query
    // console.log(slug)
    return (
        <>
            <Head>
                {/* <title>{slug.split("-").join(" ")}</title> */}
            </Head>
            <Sidebar />
            <div className="container flex flex-col justify-center items-center my-20 ">
                <div className='lg:w-7/12 w-11/12'>
                    <div className='mb-10'>
                        <h1 className='text-base text-gray-600 font-medium text-center '>Ujjawal Rachhoya</h1>
                        <h1 className='text-base text-gray-600  text-center '>June 17, 2020</h1>
                    </div>
                    <div className="my-10 flex flex-col justify-center items-center">
                        <h1 className='md:text-5xl text-4xl text-center font-bold'>How to become mern stack developer</h1>
                        <p className='text-center w-full md:w-10/12 text-2xl fontsemibold text-gray-600 mt-5' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad exercitationem tempora quo architecto cumque fugit iste debitis natus aut.</p>
                    </div>
                    <div className="mt-5">
                        <Image loader={myLoader} className="w-full rounded-lg h-[34rem]" src="https://source.unsplash.com/random/900×700/?code" height={500} width={1000} />
                    </div>
                    <div className='mt-5'>
                        <p className='text-xl text-gray-600 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugiat natus architecto beatae. Iure atque nostrum ipsam, non minima eligendi deserunt voluptatum autem, inventore neque alias nobis dolore sunt possimus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam minima, vero veniam quo nemo doloribus quibusdam asperiores inventore mollitia repellat? Nulla esse alias porro dignissimos eligendi nisi repellendus temporibus vel?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, sequi doloribus quasi reiciendis quis a est nisi impedit, ex itaque voluptatum ab voluptas aut quam laudantium excepturi similique vitae sed?Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, molestiae. Tempore et ipsum, in nostrum expedita officiis consectetur quasi. Provident, molestias sint error qui explicabo iste nulla fugiat modi rerum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta nam temporibus distinctio quidem reprehenderit, minima minus? Tempore, harum possimus distinctio veniam labore autem, suscipit obcaecati qui delectus a voluptatibus placeat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente omnis quibusdam animi molestiae, et doloribus dignissimos. Ad quaerat earum, alias, itaque dolores eius perspiciatis incidunt repudiandae expedita provident consequuntur unde! Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odit aliquam nisi eaque rerum voluptates alias ex eos? Eum repellendus ab ea eaque omnis nostrum deserunt excepturi, laudantium pariatur suscipit.</p>
                    </div>
                    <div className="mt-5">
                        <div class="container grid grid-cols-3 gap-2 mx-auto">
                            {images.map((e) => {
                                return <>
                                    <div class="w-full rounded">
                                        <Image loader={loder} className="w-96 hover:scale-105 duration-500 hover:cursor-pointer h-96 rounded-lg " src={e} height={600} width={1000} />
                                    </div>
                                </>
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-10  mb-10 flex flex-col items-center'>
                <h1 className='text-4xl text-black font-bold'>Related</h1>
                {[1, 2, 3].map(() => {
                    return <>
                        <Relatedcard />
                    </>
                })}
            </div>
        </>
    )
}

export default blog