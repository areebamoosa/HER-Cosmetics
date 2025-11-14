import React, { useState, useEffect } from 'react'
import fragrance from '../../assets/pd16.webp'
import lips from '../../assets/pd5s-4.webp'
import eyes from '../../assets/pd4.webp'
import skin from '../../assets/pd9h.webp'

const Category = () => {

    const categories = [
        { img: lips, label: "LIPS" },
        { img: fragrance, label: "FRAGRANCE" },
        { img: eyes, label: "EYES" },
        { img: skin, label: "SKIN" }
    ];

    const getVisibleCount = () => (window.innerWidth < 640 ? 1 : 3);

    const [visibleCount, setVisibleCount] = useState(getVisibleCount());
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const newCount = getVisibleCount();
            setVisibleCount(newCount);


            if (startIndex + newCount > categories.length) {
                setStartIndex(0);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [startIndex, categories.length]);

    const visibleImgs = categories.slice(startIndex, startIndex + visibleCount);

    const next = () => {
        if (startIndex + visibleCount < categories.length) {
            setStartIndex(prev => prev + 1);
        }
    };

    const prev = () => {
        if (startIndex > 0) {
            setStartIndex(prev => prev - 1);
        }
    };

    const isPrevDisabled = startIndex === 0;
    const isNextDisabled = startIndex + visibleCount >= categories.length;

    return (
        <div className="mt-10">
            <h1 className="dark-pink text-xl sm:text-3xl lg:text-4xl flex justify-center items-center font-bold headFont mb-10">
                SHOP SALE BY CATEGORY
            </h1>

            <div className="flex justify-center items-center gap-3 sm:gap-3 lg:gap-6 m-2 max-w-[1800px] w-full">

                {/* Left Button */}
                <button onClick={prev} disabled={isPrevDisabled} className={`px-3 py-1 rounded-full w-10 h-10 shadow-md transition-all duration-200 cursor-pointer
                        ${isPrevDisabled ? 'bg-white text-gray-400 cursor-not-allowed' : 'bg-white hover:bg-pink-400 hover:text-white'}`}
                >
                    <i className="fa-solid fa-arrow-left"></i>
                </button>

                <div className="flex gap-8">
                    {visibleImgs.map((item, index) => (
                        <div key={index} className=" relative flex-shrink-0 w-[300px] h-[380px] sm:w-50 sm:h-80 lg:w-[350px] lg:h-[550px] xl:w-[460px] xl:h-[700px]">
                            <img src={item.img} alt={item.label} className="w-full h-full object-cover rounded-xl brightness-80" />

                            <h2 className=" absolute bottom-1/2 left-1/2 -translate-x-1/2 headFont font-semibold text-white text-xl sm:text-2xl md:text-3xl">
                                {item.label}
                            </h2>
                        </div>
                    ))}
                </div>

                {/* Right Button */}
                <button onClick={next} disabled={isNextDisabled} className={`px-3 py-1 rounded-full w-10 h-10 shadow-md transition-all duration-200 cursor-pointer
                        ${isNextDisabled ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white hover:bg-pink-400 hover:text-white'}`}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>

            </div>
        </div>
    );
}

export default Category;