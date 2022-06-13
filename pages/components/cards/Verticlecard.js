import React from 'react'
import Link from "next/link"
function Verticlecard() {
    return (
        <>
            <div class="max-w-sm lg:mx-0 mx-4 rounded col-md-3 overflow-hidden mt-4">
                <img class="w-full h-60 rounded-lg" src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" alt="Sunset in the mountains" />
                <div class=" px-2 py-4">
                    <p className='text-base text-gray-600 ' >July 17, 2020</p>
                    <Link href="../../blog/How-to-become-mern-stack-web-developer"><a  class="font-bold text-xl mb-2">How to become mern stack web developer.</a></Link>
                    <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                    <p className='text-base mt-3 font-bold text-gray-600'>Rohit Yadav</p>
                </div>

            </div>
        </>
    )
}

export default Verticlecard