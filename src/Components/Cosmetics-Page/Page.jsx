import React from 'react'
import Nav from '../Navbar/Nav'
import img from '../../assets/virtualtry.webp'
import AllProducts from './AllProducts'
import Button from '../Button/Button'
import Footer from '../Footer/Footer'

const Page = () => {
    return (
        <>
            <Nav />
            <div className='mt-8  w-full h-[600px] overflow-hidden '>
                <img src={img} alt="img" className=' w-full h-full object-cover' />
            </div>
            <div className='m-10'>
                <AllProducts />
            </div>

            <div className='mt-10 flex justify-center items-center'>
                <Button text={"load more"} />
            </div>
            <Footer />
        </>
    )
}

export default Page