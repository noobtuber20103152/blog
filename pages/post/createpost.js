import React, { useEffect, useState } from 'react'
import Head from "next/head"
import { useRouter } from "next/router"
import Sidebar from '../components/siderbar/Sidebar';
function createpost() {
    const router = useRouter();
    const [btndisable, setbtndisable] = useState(true);
    useEffect((e) => {
        let token = window.localStorage.getItem("token");
        if (!token) router.push("/components/auth/Login")
    }, [])
    const [data, setdata] = useState({ author: "", title: "", shortdesc: "", longdesc: "", bgimage: "", otherimages: [], tags: [] })
    const onchange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
        console.log(data);
    }
    const submitPost = (e) => {
        // console.log("clicked")
        e.preventDefault();
        if (data.tags.length == 0) return;
        if (data.otherimages.length == 0) return;
        let tags = data.tags.split(",");
        const tagsarray = tags.map(element => {
            return element.trim();
        });
        let otherimages = data.otherimages.split(",");
        const otherimagesarray = otherimages.map(element => {
            return element.trim();
        })

        const longdesc = data.longdesc.split("%^&");
        const longdescarray = longdesc.map(element => {
            return element.trim();
        })
        data.longdesc = longdescarray;
        data.tags = tagsarray;
        data.otherimages = otherimagesarray;
        console.log(data)
        fetch("http://localhost:3000/api/post/uploadpost", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(resdata => {
                console.log(resdata)
                router.push("/")
            }).catch((err) => {
                console.log(err.message);
            })
    }
    useEffect(() => {
        if (data.author.length && data.title.length && data.shortdesc.length && data.longdesc.length && data.bgimage.length && data.otherimages.length && data.tags.length) {
            setbtndisable(false);
        }
        else {
            setbtndisable(true);
        }
    }, [data])
    return (
        <>
            <Head>
                <title>Create post</title>
            </Head>
            <Sidebar />
            <div className="flex my-20  mx-2  justify-center items-center ">
                <div className="w-12/12">
                    <form class="w-full">
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Author's Name
                                </label>
                                <input onChange={onchange} name="author" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Blog title
                                </label>
                                <input name="title" onChange={onchange} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Short description about blog
                                </label>
                                <textarea name="shortdesc" onChange={onchange} className='focus:bg-white p-2 resize-none focus:border-gray-500 w-full border bg-gray-200' id="" cols="30" rows="4"></textarea>
                            </div>
                            <div class="w-full px-3">
                                <label class=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Complete description about your blog( for new line type %^& )
                                </label>
                                <textarea placeholder='*Hey! this website is all about your thought %^& *Please star this website on github and open to contribute.' onChange={onchange} className='p-2 focus:bg-white w-full focus:border-gray-500 border bg-gray-200' name="longdesc" id="" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-2">
                            <div class="w-full  px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                                    background image link
                                </label>
                                <input name="bgimage" onChange={onchange} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="https://source.unsplash.com/random/900×700/?code" />
                            </div>

                        </div>
                        <div class="flex flex-wrap -mx-3 mb-2">
                            <div class="w-full  px-3 mt-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                                    Other Images links (seperate links by , )
                                </label>
                                <textarea onChange={onchange} className='focus:bg-white p-2 resize-none focus:border-gray-500 w-full border bg-gray-200' name="otherimages" id="" cols="30" placeholder='https://source.unsplash.com/random/900×700/?code, https://source.unsplash.com/random/900×700/?cricket' rows="4"></textarea>
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-2">
                            <div class="w-full  px-3 mt-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                                    Tags (seperate tags by , )
                                </label>
                                <textarea onChange={onchange} className='focus:bg-white p-2 resize-none focus:border-gray-500 w-full border bg-gray-200' name="tags" id="" cols="30" placeholder='react js, javascript' rows="2"></textarea>
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-2">
                            <div class="w-full  px-3 mt-6">
                                <div className="flex flex-wrap my-2">
                                    {data.bgimage && <img src={data.bgimage} height={100} width={600} className='rounded-lg ' alt="" />}
                                </div>
                            </div>
                        </div>
                        <button onClick={submitPost} disabled={btndisable} className={`${btndisable ? 'bg-blue-400' : 'bg-blue-600'} rounded-lg shadow-lg px-4 py-2 text-white`} >Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default createpost