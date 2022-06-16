import React, { useEffect, useState } from 'react'
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
function Sidebar() {
    const router = useRouter();
    const [downarrow, setdownarrow] = useState(true);
    const dropdown = () => {
        document.querySelector("#submenu").classList.toggle("hidden");
        document.querySelector("#arrow").classList.toggle("rotate-0");
        setdownarrow(!downarrow);
        console.log(downarrow)
    }
    const opeSidebar = () => {
        document.querySelector(".sidebar").classList.toggle("hidden");
    }
    const [login, setlogin] = useState(false)
    const logout = () => {
        window.localStorage.removeItem("token");
        router.push("/");
        console.log("logout");
    }
    useEffect(() => {
        let token = window.localStorage.getItem("token")
        if (token) setlogin(true)
        console.log(login)
    }, [login])
    return (
        <>
            <Head>
                <link href="/dist/tailwind.css" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css" />
            </Head>
            <span class="z-10 fixed  text-black text-4xl top-5 left-4 cursor-pointer" onClick={opeSidebar} >
                <i class="bi bi-filter-left px-2 bg-blue-200 rounded-md"></i>
            </span>
            <div class="z-10 sidebar hidden border shadow-lg fixed md:my-2 md:ml-2 top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-white" >
                <div class="text-gray-100 text-xl">
                    <div class="p-2.5 mt-1 flex items-center">
                        <i class="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
                        <h1 class="font-bold text-black text-[15px] ml-3">Vloger</h1>
                        <i class="bi bi-x cursor-pointer text-black ml-28 " onClick={opeSidebar}></i>
                    </div>
                    <div class="my-2 bg-gray-600 h-[1px]"></div>
                </div>
                <div class="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer border text-black" >
                    <i class="bi bi-search text-sm"></i>
                    <input type="text" placeholder="Search" class="text-[15px] ml-4 w-full bg-transparent focus:outline-none" />
                </div>
                <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 hover:text-white text-black" >
                    <i class="bi bi-house-door-fill"></i>
                    <Link href="/" ><span class="text-[15px] ml-4  font-bold">Home</span></Link>
                </div>
                <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 hover:text-white text-black">
                    <i class="bi bi-bookmark-fill"></i>
                    <Link href="/post/createpost" ><span class="text-[15px] ml-4  font-bold">Create post</span></Link>
                </div>
                <div class="my-4 bg-gray-600 h-[1px]"></div>
                <div onClick={dropdown} class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 hover:text-white ">
                    <i class="bi bi-chat-left-text-fill"></i>
                    <div class="flex justify-between w-full items-center">
                        <span class="text-[15px] ml-4  font-bold">Chatbox</span>
                        <span class="text-sm rotate-180" id="arrow">
                            <i class={`bi bi-chevron-${downarrow ? 'down' : 'up'}`}></i>
                        </span>
                    </div>
                </div>
                <div class="text-left text-sm mt-2 w-4/5 mx-auto  font-bold" id="submenu" >
                    <h1 class="cursor-pointer p-2 hover:bg-blue-600 hover:text-white rounded-md mt-1">Social</h1>
                    <h1 class="cursor-pointer p-2 hover:bg-blue-600 hover:text-white rounded-md mt-1">Personal</h1>
                    <h1 class="cursor-pointer p-2 hover:bg-blue-600 hover:text-white rounded-md mt-1">Friends</h1>
                </div>
                <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 hover:text-white " >
                    <i class="bi bi-box-arrow-in-right"></i>
                    {login && <Link href="" ><span onClick={logout} class="text-[15px] ml-4  font-bold">Logout</span></Link>}
                    {!login && <Link href="/components/auth/Login" ><span class="text-[15px] ml-4  font-bold">Login</span></Link>}

                </div>
            </div>

        </>
    )
}

export default Sidebar