import React from 'react'
import { Link } from 'react-router-dom'
import Product from '../Skin-Page/Product'
import { productsDetails as skin } from '../Skin-Page/AllProducts'

const Feat = () => {

    const featured = [
        skin[0], skin[1], skin[2], skin[3]
    ];

    return (
        <div className='m-20'>
            <div className='ml-6'>
                <h1 className='Font dark-pink text-3xl font-bold'>SALE BEST SELLERS</h1>
            </div>

            <div className='flex flex-col justify-center items-center mt-10'>
                <div className='grid grid-cols-4 gap-8'>
                    {featured.map((feat) => (
                        <Link to={`/skin/${feat.id}`} key={feat.id}>
                            <Product {...feat} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Feat;