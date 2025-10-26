import React from 'react'
import img from '../../assets/1.png'
import AllProducts from './AllProducts'
import Button from '../Button/Button'
import Footer from '../Footer/Footer'
import NavSwitcher from '../Navbar/NavSwitcher'

const Page = () => {
    return (
        <>
            <NavSwitcher />
            <div className=' w-full h-[600px] overflow-hidden '>
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