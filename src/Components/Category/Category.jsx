import React, { useState } from 'react'
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

    const [startIndex, setStartIndex] = useState(0);
    const visibleCount = 3;

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
        <div className="mt-10 ">
            <h1 className="dark-pink text-4xl flex justify-center items-center font-bold headFont mb-10">
                SHOP SALE BY CATEGORY
            </h1>

            <div className="flex justify-center items-center gap-6 m-2 max-w-[1800px]  ">

                {/* Left Previous Button */}
                <button
                    onClick={prev}
                    disabled={isPrevDisabled}
                    className={` px-3 py-1 rounded-full w-10 h-10 shadow-md transition-all duration-200 bg-white  hover:bg-pink-400 hover:text-white  cursor-pointer
                        ${isPrevDisabled ? 'bg-white text-gray-400 cursor-not-allowed' : 'bg-white hover:bg-pink-400 hover:text-white cursor-pointer'}`}
                >
                    <i className="fa-solid fa-arrow-left"></i>
                </button>

                <div className="flex gap-8">
                    {visibleImgs.map((item, index) => (
                        <div key={index} className="w-[500px] h-[700px] relative flex-shrink-0">
                            <img
                                src={item.img}
                                alt={item.label}
                                className="w-[500px] h-[700px] object-cover rounded-xl brightness-80"
                            />
                            <h2 className="absolute bottom-1/2 left-1/2 -translate-x-1/2 headFont font-semibold text-white text-3xl">
                                {item.label}
                            </h2>
                        </div>
                    ))}
                </div>

                {/* Right / Next Button */}
                <button
                    onClick={next}
                    disabled={isNextDisabled}
                    className={` px-3 py-1 rounded-full w-10 h-10 shadow-md transition-all duration-200 
                        ${isNextDisabled ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white hover:bg-pink-400 hover:text-white cursor-pointer'}`}
                >
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
}

export default Category;
