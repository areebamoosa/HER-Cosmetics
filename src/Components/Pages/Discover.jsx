import React from 'react'
import Nav from '../Navbar/Nav'
import img from '../../assets/virtualtry.webp'

const Discover = () => {
    return (
        <>

            <Nav />


            <div className='mt-8  w-full h-[600px] overflow-hidden '>
                <img src={img} alt="img" className=' w-full h-full object-cover' />
            </div>

        </>
    )
}

export default Discover