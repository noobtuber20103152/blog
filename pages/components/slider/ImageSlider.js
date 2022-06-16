import React, { useEffect, useRef, useState } from 'react'
import Hotizontalcard from '../cards/Hotizontalcard'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function ImageSlider() {
    const [fetchdata, setfetchdata] = useState([]);
    useEffect(() => {
        async function fetchData() {
            let url = "http://localhost:3000/api/fetchdata/fetchdata";
            let data = await fetch(url, { method: "GET" });
            setfetchdata(await data.json());
            // console.log(await data.json());
        }
        fetchData()
    }, [])
    const slRef = useRef(null);
    // const [slide, setslide] = useState(2)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <h1 className='text-4xl text-center font-bold mt-20'>Trending</h1>
            <Slider className='mx-3' ref={slRef} {...settings} >
                {(fetchdata).map((e) => {
                    return <>
                        <div className=''>
                            <Hotizontalcard createdAt={e.createdAt.slice(0, 10)} bgimage={e.bgimage} title={e.title} shortdesc={e.shortdesc} />
                        </div>
                    </>
                })}
            </Slider>
        </>
    )
}

export default ImageSlider