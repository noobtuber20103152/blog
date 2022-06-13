import React, { useRef } from 'react'
import Hotizontalcard from '../cards/Hotizontalcard'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function ImageSlider() {
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
                <div className=''>
                    <Hotizontalcard />
                </div>
                <div className=''>
                    <Hotizontalcard />
                </div>
                <div className=''>
                    <Hotizontalcard />
                </div>
                <div className=''>
                    <Hotizontalcard />
                </div>
            </Slider>
        </>
    )
}

export default ImageSlider