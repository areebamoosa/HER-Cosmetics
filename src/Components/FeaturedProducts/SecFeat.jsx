import React from 'react'
import { useRef, useState } from 'react';
import Product from '../Cosmetics-Page/Product'
import { productsDetails as cosmetics } from '../Cosmetics-Page/AllProducts'

const SecFeat = () => {

    const secFeatured = [
        cosmetics[0], cosmetics[1], cosmetics[2], cosmetics[3]
    ]

    const sliderRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = () => {
        const slider = sliderRef.current;
        const scrollPosition = slider.scrollLeft;
        const width = slider.clientWidth;

        const index = Math.round(scrollPosition / width);
        setActiveIndex(index);
    };

    return (
        <>
            <div className='flex flex-col justify-center items-center mt-8'>

                <div
                    ref={sliderRef}
                    onScroll={handleScroll}
                    className=' flex  overflow-x-auto scrollbar-hide snap-x snap-mandatory  gap-3 px-1 sm:grid sm:grid-cols-2 sm:gap-2 sm:px-0 lg:grid lg:grid-cols-4 lg:gap-6'>
                    {secFeatured.map((prod) => (
                        <div key={prod.id} className="snap-center min-w-[100%] sm:min-w-0">
                            <div className='flex flex-col justify-center items-center'>
                                <Product {...prod} />
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <div className='flex justify-center items-center gap-1'>
                <div className='flex gap-2 mt-4 sm:hidden'>
                    {secFeatured.map((_, idx) => (
                        <div
                            key={idx}
                            className={`h-2 w-2 rounded-full transition-all duration-200 
                            ${idx === activeIndex ? 'bg-black scale-125' : 'bg-white border border-black'}`}></div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default SecFeat