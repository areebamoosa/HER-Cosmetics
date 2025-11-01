import React from 'react'
import Nav from '../Navbar/Nav'
import { productsDetails } from './AllProducts'
import { useParams } from 'react-router-dom'
import TransButton from '../Button/TransButton'
import vegan from '../../assets/vegan.webp'
import cruel from '../../assets/cruelty.webp'
import { useState } from 'react'
import Footer from '../Footer/Footer'
import Review from '../Reviews/Review'
import {useCart} from '../Cart/CartContext'

const ProductDetails = () => {
    
    const { id } = useParams();
    const { addToCart } = useCart();

    const product = productsDetails.find((p) => p.id === Number(id));
    
    if (!product) {
        return <div className="text-center mt-10 text-xl">Product not found </div>;
    }

    const { Img, title, smallImgs, hoverImg } = product;

    const [mainImg, setImg] = useState(Img);

    return (
        <>
            <Nav />

            <div className='flex justify-center items-center w-[2000px] h-[1000px] gap-20 pt-[150px] '>

                <div className='relative w-[700px] h-[800px] rounded-xl'>
                    <img src={mainImg} alt="prod" className='absolute h-full w-full object-cover rounded-t-lg transition-opacity duration-200 hover:opacity-0' />
                    <img src={hoverImg} alt="hovImg" className="absolute top-0 left-0 h-full w-full object-cover rounded-t-lg opacity-0 transition-opacity duration-200 hover:opacity-100 " />
                </div>

                <div className='w-[700px] h-[800px] flex flex-col  text-left p-10 '>


                    <div className='flex justify-between'>
                        <p className='text-3xl  font-semibold '>{title}</p>
                        <p className='font-bold text-2xl cursor-pointer'><i class="fa-regular fa-heart"></i></p>
                    </div>
                    <p className='mt-3 font grey'>7.9 fl oz | woody gourmand</p>


                    <div className='flex gap-1 cursor-pointer mt-4 '>
                        {smallImgs.map((img, index) => (
                            <img src={img} alt="img" key={index} onClick={() => setImg(img)} className={`w-[45px] h-[45px] object-cover `} />
                        ))}
                    </div>

                    <div className='flex mt-5 gap-1'>

                        <p><i class="fa-solid fa-star"></i></p>
                        <p><i class="fa-solid fa-star"></i></p>
                        <p><i class="fa-solid fa-star"></i></p>
                        <p><i class="fa-solid fa-star"></i></p>
                        <p><i class="fa-regular fa-star"></i></p>
                        <p className='grey'>(21) Reviews</p>
                    </div>

                    <div className='flex justify-center items-center mt-5'>
                    <TransButton onClick={() => addToCart(product)} text={"add to cart"} width="w-[600px]" />
                    </div>

                    <div className='mt-5'>
                        <h1 className='dark-pink font-medium text-xl'>details</h1>
                        <p className='grey mt-2'>velvety, warm, decadent. wrap yourself in my sweet éclair hair & body mist – a smooth, woody gourmand scent that lingers on the skin like a sweet memory. whipped chocolate cream accord swirls with notes of airy chantilly and delicate freesia petals, melting into a warm base of vanilla and woody amber accords. this cloud-like, airy mist is formulated with glycerin for up to 24 hours of skin hydration – no stickiness.</p>

                        <h2 className='dark-pink font-medium text-xl mt-5' >key notes:</h2>

                        <div className='grey p-3'>

                            <p>- opening: bergamot and chantilly accord</p>
                            <p>- heart: chocolate cream accord and freesia petals accord</p>
                            <p>- base: vanilla and woody amber accord</p>
                        </div>
                        <p className='grey mt-1'>fragrance family: woody gourmand</p>
                    </div>

                    <div className='mt-5'>
                        <h1 className='dark-pink font-medium text-xl'>ingrediants</h1>
                        <div className='flex justify-center items-center gap-5 mt-5'>
                            <img src={vegan} alt="" />
                            <img src={cruel} alt="" />
                        </div>
                        <div className='flex justify-center items-center gap-13 mt-3 grey text-xs'>
                            <p>vegan</p>
                            <p>creulty</p>
                        </div>
                    </div>
                </div>
            </div>
            <Review />
            <Footer />
        </>
    )
}

export default ProductDetails