import React from 'react'
import { Link } from 'react-router-dom'
import Product from '../Cosmetics-Page/Product'
import { productsDetails as cosmetics } from '../Cosmetics-Page/AllProducts'

const SecFeat = () => {

    const secFeatured = [
        cosmetics[0], cosmetics[1], cosmetics[2], cosmetics[3]
    ]

    return (
        <>
            <div className='m-20'>
                <div className=' flex flex-col justify-center items-center mt-10'>
                    <div className='grid grid-cols-4 gap-8'>
                        {secFeatured.map((feat) => (
                            <Link to={`/product/${feat.id}`} key={feat.id} >
                                <Product {...feat} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecFeat