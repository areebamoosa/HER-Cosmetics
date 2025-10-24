import React from 'react'
import Nav from '../Navbar/Nav'
import img from '../../assets/virtualtry.webp'
import Product from './Product'

const Page = () => {
    return (
        <>
            <Nav />

            <div className='mt-8  w-full h-[600px] overflow-hidden '>
                <img src={img} alt="img" className=' w-full h-full object-cover' />
            </div>

            {/* <div>
                <div>
                    <img src={img} alt="img" className='' />
                </div>
            </div> */}

            <div className='m-20'>

            <Product/>
            </div>



        </>
    )
}

export default Page