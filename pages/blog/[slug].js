import React, { useEffect, useState } from 'react'
import Mainblogcomponent from './Mainblogcomponent'
import Relatedcard from './Relatedcard'
import Head from "next/head"
import { useRouter } from "next/router"
import Sidebar from '../components/siderbar/Sidebar'
import Commentbox from '../components/commentbox/Commentbox'
function Blog() {
    const router = useRouter();
    const { slug } = router.query;
    // const [title, settitle] = useState(slug.split("-").join(" "));
    const [verticlecard, setverticlecard] = useState([]);
    const [userdata, setuserdata] = useState([])
    useEffect(() => {
        async function fetchData() {
            let url = "/api/fetchdata/fetchdata";
            let data = await fetch(url, { method: "GET" });
            setverticlecard(await data.json())
        }
        async function fetchuserdata() {
            let url = "/api/auth/getuser"
            let data = await fetch(url, {
                method: "GET",
                headers: {
                    "token": window.localStorage.getItem("token")
                }
            });
            console.log(data)
            setuserdata(await data.json());
        }
        fetchuserdata();
        fetchData()
        console.log(verticlecard)
    }, [])
    return (
        <>
            <Head>
                <title>{slug?.split('-')?.join(" ")}</title>
            </Head>
            <Sidebar />
            {verticlecard?.map((e) => {
                return <>
                    {e.title == slug?.split("-")?.join(" ") && <Mainblogcomponent otherimages={e.otherimages} author={e.author} title={e.title} createdAt={e.createdAt.slice(0, 10)} shortdesc={e.shortdesc} longdesc={e.longdesc} bgimage={e.bgimage} />}
                </>
            })}
            <div className='flex justify-center items-center'>
                <Commentbox isLoggedIn={userdata.isLoggedIn} title={slug} author={userdata.username} about={userdata.about} image={userdata.image} />
            </div>
            <div className='mt-10  mb-10 flex flex-col items-center'>
                <h1 className='text-4xl text-black font-bold'>More blogs</h1>
                {verticlecard?.map((e) => {
                    return <>
                        {e.title != slug?.split("-")?.join(" ") && <Relatedcard createdAt={e.createdAt.slice(0, 10)} title={e.title} bgimage={e.bgimage} shortdesc={e.shortdesc} author={e.author} />}
                    </>
                })}
            </div>
        </>
    )
}

export default Blog