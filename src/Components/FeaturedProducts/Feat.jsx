import React, { useRef, useState } from 'react';
import Product from '../Skin-Page/Product';
import { productsDetails as skin } from '../Skin-Page/AllProducts';

const Feat = () => {
    const featured = [skin[0], skin[1], skin[2], skin[3]];

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
            <div className='m-6'>
                <div className='sm:ml-60 lg:ml-26 mt-12 ml-20'>
                    <h1 className='Font dark-pink text-2xl font-bold'>SALE BEST SELLERS</h1>
                </div>

                <div className='flex flex-col justify-center items-center mt-8'>

                    <div
                        ref={sliderRef}
                        onScroll={handleScroll}
                        className=' flex  overflow-x-auto scrollbar-hide snap-x snap-mandatory  gap-3 px-1 sm:grid sm:grid-cols-2 sm:gap-2 sm:px-0 lg:grid lg:grid-cols-4 lg:gap-6'>
                        {featured.map((prod) => (
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
                        {featured.map((_, idx) => (
                            <div
                                key={idx}
                                className={`h-2 w-2 rounded-full transition-all duration-200 
                                ${idx === activeIndex ? 'bg-black scale-125' : 'bg-white border border-black'}`}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Feat;