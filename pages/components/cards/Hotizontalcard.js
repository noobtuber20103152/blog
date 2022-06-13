import React, { useState } from 'react'
import Link from "next/link"
import { BalloonHeart, BalloonHeartFill, HandThumbsUp, HandThumbsUpFill } from 'react-bootstrap-icons';
function Hotizontalcard() {
    const [like, setlike] = useState(false);
    const onclick = () => {
        setlike(!like);
    }
    return (
        <>
            <div className='flex justify-center '>
                <div class="flex justify-center my-6 w-full lg:w-10/12  ">
                    <div class="flex flex-col lg:flex-row justify-center rounded-lg bg-white ">
                        <div className='lg:w-3/12' >
                            <img class="h-[21rem] w-full lg:w-[21rem] object-cover rounded-lg " src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
                        </div>
                        <div class="lg:p-6 p-4 lg:w-9/12 flex justify-end  flex-col ">
                            <span className='text-base text-gray-700 mb-3' >July 17, 2022</span>

                            <Link href="../../blog/How-to-become-mern-stack-web-developer"><a class="text-gray-900 text-4xl lg:text-5xl w-full font-bold mb-22">How to become mern stack web developer.</a></Link>
                            <p class="text-gray-700 text-base w-12/12  mb-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem exercitationem, nobis quos beatae molestias adipisci mollitia fuga harum ipsam. Deserunt ex nobis aliquid. Amet, excepturi repellendus. Cum illo vero qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi corporis sed ipsum accusantium quo aspernatur unde rem illum, ea quaerat, ut voluptatem velit molestias earum libero, nulla saepe ad sapiente!
                            </p>

                            <div className='flex'>
                                {!like && <HandThumbsUp onClick={onclick} className='text-3xl hover:cursor-pointer' />}
                                {like && <HandThumbsUpFill onClick={onclick} className='text-3xl hover:cursor-pointer' fill='black' />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hotizontalcard