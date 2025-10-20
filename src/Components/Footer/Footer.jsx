import React from 'react'

const Footer = () => {
    return (
        <>

            <div className='mt-[300px] flex flex-col justify-center items-center m-10'>


                <div className='text-black  flex flex-col gap-3 font'>

                    <h1 className='text-xl font-normal'>sign up for updates:</h1>

                    <div className='flex justify-center items-center gap-6'>

                        <input type="text" placeholder='email address' className='w-150 h-10 border p-4 rounded-sm border-black' />

                        <button className='w-40 h-10 border rounded-sm border-black grey cursor-pointer'>submit</button>

                    </div>

                    <div className='flex gap-1'>
                        <p className='grey'>by signing up you agree to our</p>
                        <p className='grey underline cursor-pointer'>terms</p>
                    </div>


                </div>

                <div className='text-3xl flex gap-10 mt-20 cursor-pointer'>

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

export default Footer