import React, { useEffect, useState } from 'react'
import Head from "next/head"
import { useRouter } from "next/router"
import Sidebar from '../components/siderbar/Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from 'postcss';
import Mainblogcomponent from '../blog/Mainblogcomponent';
function Createpost() {
    const router = useRouter();
    const [btndisable, setbtndisable] = useState(true);
    const [userdata, setuserdata] = useState({ username: "" })
    const [date, setdate] = useState({year: new Date().getFullYear(), month:new Date().getMonth(), day: new Date().getDate()})
    const [form, setform] = useState(true);
    const livepreview = () => {
        setform(!form)
    }
    useEffect(() => {
        let token = window.localStorage.getItem("token");
        if (!token) {
            router.push("/components/auth/Login")
        }
        else {
            fetch("http://localhost:3000/api/auth/getuser", {
                method: "GET",
                headers: {
                    "token": window.localStorage.getItem("token")
                }
            })
                .then(response => response.json())
                .then(resdata => {
                    // console.log(resdata);
                    if (resdata.isLoggedIn == true) {
                        setuserdata({ username: resdata.username })
                    }
                    else {
                        router.push("/components/auth/Login")
                    }
                })
        }
    }, []);
    useEffect((e) => {
        let token = window.localStorage.getItem("token");
        if (!token) {
            router.push("/components/auth/Login")
        }
    }, [])
    const [data, setdata] = useState({ author: "", title: "", shortdesc: "", longdesc: "", bgimage: "", otherimages: "", tags: [] })
    const onchange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
        console.log(data);
    }
    const submitPost = (e) => {
        // console.log("clicked")

        data.author = userdata.username
        let token = window.localStorage.getItem("token");
        console.log(data);
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
        const resolveAfter2Sec = new Promise(resolve => setTimeout(resolve, 2000));
        toast.promise(
            resolveAfter2Sec,
            {
                pending: 'Post uploading...',
                success: 'Post uploaded👌',
                error: 'Promise rejected 🤯',
                position: "top-right"
            }
        )
        fetch("http://localhost:3000/api/post/uploadpost", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(resdata => {
                console.log(resdata)
                setTimeout(() => {
                    router.push("/")
                }, 5000);

            }).catch((err) => {
                console.log(err.message);
            })
    }
    useEffect(() => {
        if (data.title.length && data.shortdesc.length && data.longdesc.length && data.bgimage.length && data.otherimages.length && data.tags.length) {
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
            <ToastContainer />
            <div className='text-center mt-5'>
                <button onClick={livepreview} className={`bg-blue-600 mx-2 rounded-lg shadow-lg px-4 py-2 text-white`} >{form ? "Live Preview" : "Live Form"}</button>
            </div>
            {form && <div className="flex my-20  mx-2  justify-center items-center ">
                <div className="w-12/12">
                    <form className="w-full">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-2/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                    Blog title
                                </label>
                                <input value={data.title} name="title" onChange={onchange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Title" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                    Short description about blog
                                </label>
                                <textarea value={data.shortdesc} name="shortdesc"  onChange={onchange} className='focus:bg-white focus:outline-none p-2 resize-none focus:border-gray-500 w-full border bg-gray-200' id="" cols="30" rows="4"></textarea>
                            </div>
                            <div className="w-full px-3">
                                <label className=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                    Complete description about your blog( for new line type %^& )
                                </label>
                                <textarea value={data.longdesc} placeholder='' onChange={onchange} className='p-2 focus:outline-none focus:bg-white w-full focus:border-gray-500 border bg-gray-200' name="longdesc" id="" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="w-full  px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                                    background image link
                                </label>
                                <input value={data.bgimage} name="bgimage" onChange={onchange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="https://source.unsplash.com/random/900×700/?code" />
                            </div>

                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="w-full  px-3 mt-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                                    Other Images links (seperate links by , )
                                </label>
                                <textarea value={data.otherimages }onChange={onchange} className='focus:bg-white p-2 resize-none focus:outline-none focus:border-gray-500 w-full border bg-gray-200' name="otherimages" id="" cols="30" placeholder='https://source.unsplash.com/random/900×700/?code, https://source.unsplash.com/random/900×700/?cricket' rows="4"></textarea>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="w-full  px-3 mt-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                                    Tags (seperate tags by , )
                                </label>
                                <textarea value={data.tags} onChange={onchange} className='focus:bg-white focus:outline-none p-2 resize-none focus:border-gray-500 w-full border bg-gray-200' name="tags" id="" cols="30" placeholder='react js, javascript' rows="2"></textarea>
                            </div>
                        </div>
                        {form && <button onClick={submitPost} disabled={btndisable} className={`${btndisable ? 'bg-blue-400' : 'bg-blue-600'} rounded-lg shadow-lg px-4 py-2 text-white`} >Submit</button>}
                    </form>
                </div>
            </div>}

            {!form && <Mainblogcomponent author={userdata.username} createdAt={date.year+'-'+date.month+'-'+date.day} otherimages={data.otherimages.split(",")} bgimage={data.bgimage} longdesc={data.longdesc.split("%^&")} title={data.title} shortdesc={data.shortdesc} />}
        </>
    )
}

export default Createpost