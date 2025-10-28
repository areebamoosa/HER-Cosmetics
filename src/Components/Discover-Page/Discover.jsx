import React from 'react'
import Nav from '../Navbar/Nav'
import img from '../../assets/Discover.jpeg'

const Discover = () => {
    return (
        <>
            <Nav />

            <div className=' pt-[100px] w-full h-[600px]  overflow-hidden '>

                <div className='relative '>

                    <img src={img} alt="img" className=' w-full h-full object-cover' />

                    <div className="absolute bottom-[130px] left-[13%] -translate-x-1/5  ">
                        <h1 className='text-3xl Font text-white font-extrabold'>ABOUT THE</h1>
                        <h1 className='text-3xl Font text-white font-extrabold'>BRAND</h1>
                    </div>

                </div>

            </div>

            <div className='flex flex-col justify-center items-center bg-white p-10'>

                <div className='flex headFont text-2xl gap-10 dark-pink '>
                    <h1 className=' rounded-md light-pink px-2 py-2 '>COSMETICS</h1>
                    <h1 className='px-2 py-2'>FRAGRANCE</h1>
                    <h1 className='px-2 py-2'>SKIN</h1>
                </div>

                <div className='font text-lg flex flex-col justify-center w-250 gap-5 mt-10 '>
                    <p>
                        i created HER Cosmetics to give everyone access to the beauty products that i truly love and use every single day to create my favorite looks. whether i’m getting ready for an event or doing my own makeup at home, i’ve always believed that makeup isn’t just about how you look — it’s about how confident and empowered it makes you feel. i wanted to share that same feeling with all of you.
                    </p>

                    <p>
                        my collection features a range of versatile products — from our signature lip kits to radiant blushes, bronzers, highlighters, glosses, matte lipsticks, eye essentials, and everyday complexion must-haves. everything is clean, vegan, and made with skin-loving ingredients, without ever compromising on quality, color payoff, or performance.
                    </p>

                    <p>
                        and this is just the beginning! i’m working on some incredible new launches that i can’t wait for you to experience.
                    </p>

                    <p>
                        xo, A.M 💕
                    </p>

                    <p>
                        make sure you follow @hercosmetics to stay updated.
                    </p>

                </div>

            </div>

            {/* Customised Footer */}

            <div className='mt-[50px] flex flex-col justify-center items-center m-10'>


                <div className='text-3xl flex gap-10 mt-5 cursor-pointer'>

                    <i className="fa-brands fa-facebook-f" style={{ color: "#986e75" }}></i>
                    <i class="fa-brands fa-instagram" style={{ color: "#986e75" }}></i>
                    <i class="fa-brands fa-x-twitter" style={{ color: "#986e75" }}></i>
                    <i class="fa-brands fa-tiktok" style={{ color: "#986e75" }}></i>

                </div>


                <div className='flex gap-5 mt-20 text-lg grey font'>
                    <p>contact us</p>
                    <p>faq</p>
                    <p>shipping</p>
                    <p>order tracking</p>
                    <p>rewards</p>
                    <p>gift card balance</p>
                </div>

                <div className='flex gap-4 mt-15 text-base grey'>
                    <p className='underline cursor-pointer'>privacy policy</p>
                    <p className='underline cursor-pointer'>terms</p>
                    <p className='underline cursor-pointer'>accessibility</p>
                    <p className='underline cursor-pointer'>set my cookie choices</p>
                    <p className='underline cursor-pointer'>cookie policy</p>
                </div>


                <div className='mt-8'>

                    <p className='dark-pink font-medium font text-lg'>Developed with <i className="fa-regular fa-heart " style={{ color: "#986e75" }}></i> by A.M</p>
                </div>

            </div>
        </>
    )
}

export default Discover