import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartSideBar from './CartSideBar';
import amex from '../../assets/amex.svg'
import circle from '../../assets/circle.svg'
import visa from '../../assets/visa.svg'
import { useCart } from "./CartContext";

const CheckoutPage = () => {

  const { cart } = useCart();

  const [isCartOpen, setIsCartOpen] = useState(false);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (

    <>
      <div className='bg-white min-h-screen'>

        {/* Customised Nav for Checkout Page */}
        <div className='text-white flex justify-between items-center text-2xl  '>
          <div className='text-black flex justify-center items-center gap-2 ml-10 mt-5'>
            <p className='font'>us</p>
            <i className="fa-solid fa-dollar-sign"></i>
          </div>
          <h1 className='headFont text-3xl  text-black cursor-pointer mt-5'><Link to='/'><span className="inline-block animate-door-rotate">H</span>ER COSMETICS </Link>
          </h1>
          <div className='text-black flex justify-center items-center gap-12 text-2xl mr-10'>
            <button className='cursor-pointer mt-5' onClick={() => setIsCartOpen(!isCartOpen)}>
              <i className="fa-solid fa-bag-shopping"></i>
            </button>
          </div>
        </div>


        <div className="flex justify-center items-center min-h-[80vh] flex-col ">

          {/* Payment Methods */}

          <div className='mt-10'>

            <div className='flex justify-center items-center'>
              <p className='grey text-lg'>express checkout</p>
            </div>


            <div className='flex gap-2 mt-5 '>

              <div className='w-[100px] h-[50px] rounded-md'>
                <img src={visa} alt="visa" className='w-full h-full object-contain rounded-md cursor-pointer' />
              </div>
              <div className='w-[100px] h-[50px] rounded-md'>
                <img src={amex} alt="amex" className='w-full h-full object-contain rounded-md cursor-pointer' />
              </div>
              <div className='w-[100px] h-[50px] rounded-md'>
                <img src={circle} alt="circle" className='w-full h-full object-contain rounded-md cursor-pointer' />
              </div>

            </div>

          </div>

          <div className='flex justify-center items-center grey mt-5 gap-3'>

            <hr className='w-60 border border-col' />
            <p className='grey'>or</p>
            <hr className='w-60 border border-col' />

          </div>

          {/* Form */}

          <div className="w-[700px] p-6 flex-col ">

            <div className="flex gap-110 mb-4 mt-10">
              <h1 className="text-2xl font-semibold font">CONTACT</h1>
              <p className="underline cursor-pointer grey text-sm">Sign in</p>
            </div>

            <input type="text" placeholder='email' className='w-[600px] h-[50px] border p-4 rounded-md border-col' />

            <div className='flex gap-3 mt-5 ml-1'>
              <input type="checkbox" className='border border-col w-5' />
              <p className=' text-sm'>email me with news and offers</p>
            </div>

            <div className='mt-10'>
              <h1 className='text-2xl font-semibold font'>DELIVERY</h1>


              <div className='flex flex-col gap-4'>

                <select className='p-4  border border-col  w-[600px] h-[50px] rounded-md mt-5 grey'>
                  <option value="pakistan">Pakistan</option>
                  <option value="india">India</option>
                  <option value="usa">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="canada">Canada</option>
                </select>

                <div className='flex gap-2 '>
                  <input type="text" placeholder='first name' className='w-[295px] h-[50px] border border-col rounded-md grey p-4' />
                  <input type="text" placeholder='last name' className='w-[295px] h-[50px] border border-col rounded-md grey p-4' />
                </div>

                <input type="text" placeholder='address' className='w-[600px] h-[50px] border p-4 rounded-md border-col ' />
                <input type="text" placeholder='apartment,suite,etc.(optional)' className='w-[600px] h-[50px] border p-4 rounded-md border-col ' />

                <div className='flex gap-3'>
                  <input type="text" placeholder='city' className='w-[192px] h-[50px] p-4  border border-col rounded-md' />
                  <input type="text" placeholder='state' className='w-[192px] h-[50px] p-4  border border-col rounded-md' />
                  <input type="tel" placeholder='zipcode' className='w-[192px] h-[50px] p-4  border border-col rounded-md' />
                </div>

                <input type="tel" placeholder='phone' className='w-[600px] h-[50px] border p-4 rounded-md border-col ' />

              </div>


              <div className='flex gap-3 mt-3'>
                <input type="checkbox" className='border border-col w-5' />
                <p className='text-sm'>use shipping address as billing address</p>
              </div>

            </div>

            <div className='mt-10 '>

              <h1 className='text-2xl font-semibold font'>PAYMENT</h1>
              <p className='grey mt-3 text-sm'>All transactions are secure and encrypted.</p>

              <div className='border border-col rounded-md mt-5 '>

                <div className='flex justify-between p-4'>
                  <p>credit card</p>
                  <div className='flex gap-2 cursor-pointer'>
                    <img src={visa} alt="visa" />
                    <img src={amex} alt="visa" />
                    <img src={circle} alt="visa" />
                  </div>
                </div>

                <div className='grey-bg  flex justify-center items-center flex-col p-2'>


                  <input type="password" placeholder='card number' className='w-[600px] h-[50px] border p-4 rounded-md border-col mt-3 bg-white' />

                  <div className='flex gap-2'>
                    <input type="date" placeholder='expiration date(mm / yy)' className='w-[295px] h-[50px] border p-4 rounded-md border-col mt-3 bg-white' />
                    <input type="password" placeholder='secret code' className='w-[295px] h-[50px] border p-4 rounded-md border-col mt-3 bg-white' />
                  </div>

                  <input type="text" placeholder='name on card' className='w-[600px] h-[50px] border p-4 rounded-md border-col mt-3 bg-white mb-2' />
                </div>
              </div>
            </div>


            <div>

              <div className='flex gap-3 mt-3'>
                <input type="checkbox" className='border border-col w-5' />
                <p className='text-sm'>by placing this order, i agree to the <span className='underline grey mr-1'>terms</span>& <span className='underline grey'>privacy policy</span> </p>

              </div>

            </div>


            <div className='mt-10 p-2'>

              <div className='flex justify-between text-xl font-semibold  '>
                <p className='ml-1'>total</p>
                <span className='mr-5'>${total.toFixed(2)}</span>
              </div>

              <div>
                <button className="mt-5 w-[600px] bg-black text-white py-3 rounded-md  cursor-pointer"> pay now </button>
              </div>

            </div>

            <div className='grey mt-5 text-sm'>
              <p>your info will be saved to a Shop account. By continuing, you agree to Shop’s <span className='underline'>terms of service</span>
              </p>
              <p>and acknowledge the <span className='underline'>privacy policy</span>.</p>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Side Bar */}
      {isCartOpen && <CartSideBar onClose={() => setIsCartOpen(false)} />}
    </>
  )
}

export default CheckoutPage