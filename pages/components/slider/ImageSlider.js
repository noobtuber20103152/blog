import React, { useEffect, useRef, useState } from 'react'
import Hotizontalcard from '../cards/Hotizontalcard'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function ImageSlider() {
    const [fetchdata, setfetchdata] = useState([]);
    const [count, setcount] = useState(0);
    useEffect(() => {
        async function fetchData() {
            let url = "http://localhost:3000/api/fetchdata/fetchdata";
            let data = await fetch(url, { method: "GET" });
            setfetchdata(await data.json());
        }
        fetchData();
    }, [])
    const slRef = useRef(null);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <h1 className='text-4xl text-center font-bold mt-20'>Popular blogs</h1>
            <Slider className='md:mx-7 mx-6' ref={slRef} {...settings} >
                {(fetchdata).map((e) => {
                    return <>
                        <div className=''>
                            <Hotizontalcard author={e.author} createdAt={e.createdAt.slice(0, 10)} bgimage={e.bgimage} title={e.title} shortdesc={e.shortdesc} />
                        </div>
                    </>
                })}
            </Slider>
        </>
    )
}

export default ImageSlider