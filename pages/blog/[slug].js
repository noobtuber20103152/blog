import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from "next/head"
import Sidebar from '../components/siderbar/Sidebar'
function blog() {
    const router = useRouter();
    const { slug } = router.query
    console.log(slug)
    return (
        <>
            <Head>
                <title>{slug.split("-").join(" ")}</title>
            </Head>
            <Sidebar />
            <div className="container flex flex-col justify-center items-center my-20 ">
                <div className='lg:w-7/12 w-11/12'>
                    <div className='mb-10'>
                        <h1 className='text-base text-gray-600 font-medium text-center '>Ujjawal Rachhoya</h1>
                        <h1 className='text-base text-gray-600  text-center '>June 17, 2020</h1>
                    </div>
                    <div className="my-10 flex flex-col justify-center items-center">
                        <h1 className='md:text-5xl text-4xl text-center font-bold'>{slug.split("-").join(" ")}</h1>
                        <p className='text-center w-full md:w-10/12 text-2xl fontsemibold text-gray-600 mt-5' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad exercitationem tempora quo architecto cumque fugit iste debitis natus aut.</p>
                    </div>
                    <div className="mt-5">
                        <img className='w-full rounded-lg text-center h-[34rem] object-cover' src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Eiffel_Tower_Vertical.JPG" alt="" />
                    </div>
                    <div className='mt-5'>
                        <p className='text-xl text-gray-600 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugiat natus architecto beatae. Iure atque nostrum ipsam, non minima eligendi deserunt voluptatum autem, inventore neque alias nobis dolore sunt possimus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam minima, vero veniam quo nemo doloribus quibusdam asperiores inventore mollitia repellat? Nulla esse alias porro dignissimos eligendi nisi repellendus temporibus vel?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, sequi doloribus quasi reiciendis quis a est nisi impedit, ex itaque voluptatum ab voluptas aut quam laudantium excepturi similique vitae sed?Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, molestiae. Tempore et ipsum, in nostrum expedita officiis consectetur quasi. Provident, molestias sint error qui explicabo iste nulla fugiat modi rerum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta nam temporibus distinctio quidem reprehenderit, minima minus? Tempore, harum possimus distinctio veniam labore autem, suscipit obcaecati qui delectus a voluptatibus placeat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente omnis quibusdam animi molestiae, et doloribus dignissimos. Ad quaerat earum, alias, itaque dolores eius perspiciatis incidunt repudiandae expedita provident consequuntur unde! Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odit aliquam nisi eaque rerum voluptates alias ex eos? Eum repellendus ab ea eaque omnis nostrum deserunt excepturi, laudantium pariatur suscipit.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default blog