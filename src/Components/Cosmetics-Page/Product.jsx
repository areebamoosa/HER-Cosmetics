import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Product = ({ id, title, price, desc, Img, hoverImg, smallImgs }) => {
    const [mainImg, setImg] = useState(Img);
    const navigate = useNavigate();

    // Navigate to the detailed page when clicking anywhere on the product card except small images
    const handleCardClick = () => {
        navigate(`/product/${id}`);
    };

    // Stopig navigation when clicking small images
    const handleSmallImgClick = (e, img) => {
        e.stopPropagation();
        setImg(img);
    };

    return (

        <div
            className="relative h-[560px] w-[400px]  bg-white rounded-lg transition-all duration-500 group shadow-md cursor-pointer"
            onClick={handleCardClick}
        >
            <div className="relative h-[400px] w-[400px] rounded-t-lg ">
                {/* Original Default Image */}
                <img
                    src={mainImg}
                    alt="prod"
                    className="absolute h-full w-full object-cover rounded-t-lg transition-opacity duration-200 hover:opacity-0"
                />
                {/* Hover Image */}
                <img
                    src={hoverImg}
                    alt="hovImg"
                    className="absolute top-0 left-0 h-full w-full object-cover rounded-t-lg opacity-0 transition-opacity duration-200 hover:opacity-100 "
                />
            </div>

            <div className="p-5 ">

                <div className="flex gap-1 cursor-pointer ">
                    {smallImgs.map((img, index) => (
                        <img
                            src={img}
                            alt="img"
                            key={index}
                            onClick={(e) => handleSmallImgClick(e, img)}
                            className={`w-[45px] h-[45px] object-cover border ${mainImg === img ? 'border-black' : 'border-gray-100'
                                }`}
                        />
                    ))}
                </div>

                <div className="flex gap-1 mt-2">
                    <i className="fa-solid fa-star" style={{ color: '#cccccc' }}></i>
                    <i className="fa-solid fa-star" style={{ color: '#cccccc' }}></i>
                    <i className="fa-solid fa-star" style={{ color: '#cccccc' }}></i>
                    <i className="fa-solid fa-star" style={{ color: '#cccccc' }}></i>
                    <i className="fa-solid fa-star" style={{ color: '#cccccc' }}></i>
                </div>

                <div className="flex justify-between mt-1">
                    <span className="font-semibold text-lg">{title}</span>
                    <div>
                        <i className="fa-solid fa-dollar-sign"></i>
                        <span className="font-semibold text-lg">{price}</span>
                    </div>
                </div>
                <p className="text-lg grey mt-[-2px] ">{desc}</p>
            </div>
        </div>
    );
};

export default Product;