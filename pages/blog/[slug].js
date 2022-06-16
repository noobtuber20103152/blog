import React, { useEffect, useState } from 'react'
import Mainblogcomponent from './Mainblogcomponent'
import Relatedcard from './Relatedcard'
import Head from "next/head"
import { useRouter } from "next/router"
function blog() {
    const router = useRouter();
    const { slug } = router.query;
    const [verticlecard, setverticlecard] = useState([]);
    useEffect(() => {
        async function fetchData() {
            let url = "http://localhost:3000/api/fetchdata/fetchdata";
            let data = await fetch(url, { method: "GET"});
            setverticlecard(await data.json())
        }
        fetchData()
        console.log(verticlecard)
    }, [])
    return (


        <>
            <Head>
                <title>{slug.split('-').join(" ")}</title>
            </Head>
             {verticlecard.map((e)=>{
                return <>
                 {e.title==slug.split("-").join(" ") && <Mainblogcomponent otherimages={e.otherimages} author={e.author} title={e.title} createdAt={e.createdAt.slice(0,10)} shortdesc={e.shortdesc} longdesc={e.longdesc}  bgimage={e.bgimage} />}
                </>
             })}
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