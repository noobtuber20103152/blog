import React, { useState, useEffect } from 'react'
import Verticlecard from '../cards/Verticlecard'
export default function Blog() {
    const [verticlecard, setverticlecard] = useState([]);
    useEffect(() => {
        async function fetchData() {
            let url = "/api/fetchdata/fetchdata";
            let data = await fetch(url, { method: "GET" });
            setverticlecard(await data.json())
        }
        fetchData()
        console.log(verticlecard)
    }, [])
    return (
        <>
            <div className='flex flex-wrap justify-around mt-20 mx-0 md:mx-20'>
                {verticlecard.map((e) => {
                    return <>
                        <Verticlecard title={e.title} shortdesc={e.shortdesc} bgimage={e.bgimage} author={e.author} createdAt={e.createdAt.slice(0, 10)} />
                    </>
                })}
            </div>
        </>
    )
}
