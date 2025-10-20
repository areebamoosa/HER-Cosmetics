import React from 'react'
import Nav from '../Navbar/Nav'
import img from '../../assets/virtualtry.webp'
import Footer from '../Footer/Footer'

const Discover = () => {
    return (
        <>
            <Nav />

            <div className='mt-8  w-full h-[600px] overflow-hidden '>
                <img src={img} alt="img" className=' w-full h-full object-cover' />
            </div>

            <div className='flex flex-col justify-center items-center bg-white p-20'>

                <div className='flex headFont text-2xl gap-10 dark-pink '>
                    <h1>COSMETICS</h1>
                    <h1>FRAGRANCE</h1>
                    <h1>SKIN</h1>
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

            <Footer />

        </>
    )
}

export default Discover