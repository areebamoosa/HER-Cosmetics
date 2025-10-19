import React, { useState } from 'react'
import lips from '../../assets/lips.avif'
import face from '../../assets/face.avif'
import eyes from '../../assets/eyes.avif'
import skin from '../../assets/skin.avif'

const Category = () => {

    const categories = [
        { img: lips, label: "LIPS" },
        { img: face, label: "FACE" },
        { img: eyes, label: "EYES" },
        { img: skin, label: "SKIN" }
    ]

    const [startIndex, setStartIndex] = useState(0);

    let visibleImgs = [];

    for (let i = 0; i < 3; i++) {
        const index = (startIndex + i) % categories.length;
        visibleImgs.push(categories[index]);
    }

    const next = () => {
        setStartIndex((prev) =>
            prev + 3 >= categories.length ? 0 : prev + 3
        );
    };

    const prev = () => {
        setStartIndex((prev) =>
            prev - 3 < 0 ? categories.length - 3 : prev - 3
        );
    };

    return (
        <>

            <div className='m-15'>


                <div>
                    <h1 className='dark-pink text-4xl flex justify-center items-center font-bold headFont'>SHOP SALE BY CATEGORY</h1>
                </div>


                <div className='flex justify-center items-center gap-6 mt-10 mx-auto max-w-[1800px]'>


                    <div >
                        <button onClick={prev} className="bg-white rounded-full w-10 h-10 shadow-md hover:bg-pink-400 hover:text-white transition-all duration-200"> <i className="fa-solid fa-arrow-left"></i></button>
                    </div>

                    <div className='flex gap-8'>

                        {
                            visibleImgs.map((item, index) => (


                                <div key={index} className='w-[550px] h-[750px] relative flex-shrink-0'>


                                    <img src={item.img} alt={item.label} className='w-[550px] h-[750px] object-cover rounded-xl  brightness-70' />

                                    <h2 className='absolute bottom-1/2 left-1/2 -translate-x-1/2 headFont font-semibold text-white text-3xl '> {item.label} </h2>

                                </div>
                            ))
                        }

                    </div>

                    <div>
                        <button onClick={next} className="bg-white rounded-full w-10 h-10  shadow-md hover:bg-pink-400 hover:text-white transition-all duration-200"> <i className="fa-solid fa-arrow-right"></i></button>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Category