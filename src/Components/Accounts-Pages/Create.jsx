import React from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'

const Create = () => {
    return (
        <>
            <Nav />

            <div className='flex flex-col justify-center items-center  mt-80 '>

                <h1 className='headFont dark-pink text-3xl'>CREATE AN ACCOUNT</h1>

                <div className='flex gap-2'>
                    <input type="text" placeholder='first name' className='w-60 h-10 bg-white grey p-6 rounded-sm mt-10 font' />
                    <input type="text" placeholder='last name' className='w-60 h-10 bg-white grey p-6 rounded-sm mt-10 font' />
                </div>

                <input type="email" placeholder='email' className='w-120 h-10 bg-white grey p-6 rounded-sm mt-5 font' />
                <input type="password" placeholder='password' className='w-120 h-10 bg-white grey p-6 rounded-sm mt-5 font' />


                <div className="flex items-start text-left leading-tight mt-8 gap-2 justify-center">

                    <input
                        type="checkbox"
                        className="  w-6 h-6 rounded-md border-2 border-black cursor-pointer " />


                    <div className="text-sm flex gap-2">
                        <p className='grey'>
                            please agree to our{" "}
                            <span className="underline cursor-pointer">terms, privacy policy,</span>  to create an account
                        </p>

                    </div>

                </div>

                <button className='w-120 h-10  p-2 border-1 rounded-sm border-black mt-8 cursor-pointer grey'>create account</button>

                <p className='mt-10 grey'>already have an account?</p>
                <p className='cursor-pointer underline grey'>login</p>

            </div>

            <div className='mt-[290px]'>
                <Footer />
            </div>
        </>
    )
}

export default Create