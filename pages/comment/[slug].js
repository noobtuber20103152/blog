import React from 'react'
import Commentcard from '../components/commentbox/Commentcard'
import Sidebar from '../components/siderbar/Sidebar'
import { useRouter } from "next/router"
import Head from "next/head"
import { useEffect, useState } from 'react'
function index() {
    const router = useRouter();
    const { slug } = router.query;
    const [commentdata, setcommentdata] = useState([])
    useEffect(() => {
        async function fetchData() {
            let url = "http://localhost:3000/api/comment/fetchcomment";
            let data = await fetch(url, {
                method: "GET",
                headers: {
                    title: slug
                }
            });
            setcommentdata(await data.json())
        }
        fetchData();
    }, [])
    return (
        <>
            <Head>
                {/* <title>Commnet - {slug.split("-").join(" ")}</title> */}
            </Head>
            <Sidebar />
            <div class="h-full px-0 w-screen flex items-center flex-col justify-center  bg-white ">
                {commentdata && commentdata.map((e) => {
                    return <>
                        <Commentcard author={e.author} image={e.image} message={e.message} />
                    </>
                })}
                {commentdata.length==0 && <Commentcard author="Your_Name" image="https://cdn-icons-png.flaticon.com/512/21/21104.png" message="There is no comments till now" />}
            </div>

        </>
    )
}

export default index