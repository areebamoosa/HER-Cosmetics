import React from "react";
import { useCart } from "./CartContext";
import cartImg from '../../assets/cart.avif'
import free1 from '../../assets/free1.avif'
import free2 from '../../assets/free2.avif'
import free3 from '../../assets/free3.avif'
import free4 from '../../assets/free4.avif'
import r1 from '../../assets/pd5.webp'
import r2 from '../../assets/pd12h.webp'
import r3 from '../../assets/pd8s-3.webp'

const CartSideBar = ({ onClose }) => {
  const { cart, removeFromCart } = useCart();

  return (
    <>
      <div className="fixed top-0 right-0 h-full w-[600px] bg-white shadow-2xl transform translate-x-0 transition-transform duration-500 z-50 p-10 ">
        <div className="flex flex-col h-full overflow-y-auto">

          <div className="flex justify-between items-center">
            <span className="text-xl font-semibold">cart</span>
            <button onClick={onClose}><i className="fa-solid fa-xmark text-3xl text-black"></i></button>
          </div>

          <div className="flex-1 overflow-y-auto mb-40">

            <div className="flex justify-center items-center mt-5">
              <p className="grey text-lg">your order qualifies for free shipping</p>
            </div>
            <hr className="border-t border-black my-4" />

            <div className="flex rounded-lg p-5 light-pink justify-start items-start w-130 h-35 gap-5">
              <div className="w-25 h-25 rounded-md">
                <img src={cartImg} alt="cartImg" className="w-full h-full object-cover rounded-md" />
              </div>
              <div>
                <span className="text-lg font-medium">new! 12 days of her's advent calender 🎁</span>
                <p className="grey text-md">limited edition & online exclusive</p>
                <span className="text-lg font-medium underline hover:text-white cursor-pointer">shop now</span>
              </div>
            </div>

            <div className="mt-10">
              <div>
                {cart.length === 0 ? (
                  <>
                    <div className="flex justify-center items-center">
                      <p className="text-lg font-medium">Your cart is empty</p>
                    </div>
                    <p className="grey text-lg mt-5">recommended products</p>
                    <div className="mt-5 grid grid-cols-3">
                      <div className="flex flex-col justify-center items-center w-40 border border-col rounded-md gap-2 ">
                        <div className="w-40 h-32 rounded-md ">
                          <img src={r1} alt="recommended product" className="w-full h-full object-cover rounded-md" />
                        </div>
                        <div className="p-3 rounded-md ">
                          <p className="font-semibold">bare</p>
                          <p className="text-sm text-gray-600">38 shades</p>
                          <button className="bg-black text-white px-3 py-2 w-full rounded-md cursor-pointer mt-2">
                            add to cart
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-center w-40 border border-col rounded-md gap-2 ">
                        <div className="w-40 h-32 rounded-md ">
                          <img src={r2} alt="recommended product" className="w-full h-full object-cover rounded-md" />
                        </div>
                        <div className="p-3 rounded-md ">
                          <p className="font-semibold">bare</p>
                          <p className="text-sm text-gray-600">38 shades</p>
                          <button className="bg-black text-white px-3 py-2 w-full rounded-md cursor-pointer mt-2">
                            add to cart
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-center w-40 border border-col rounded-md gap-2 ">
                        <div className="w-40 h-32 rounded-md ">
                          <img src={r3} alt="recommended product" className="w-full h-full object-cover rounded-md" />
                        </div>
                        <div className="p-3 rounded-md ">
                          <p className="font-semibold">bare</p>
                          <p className="text-sm text-gray-600">38 shades</p>
                          <button className="bg-black text-white px-3 py-2 w-full rounded-md cursor-pointer mt-2">
                            add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col gap-6">
                    {cart.map((item) => (
                      <div className=" border border-col p-2 rounded-md ">
                        <div className="flex justify-between items-center ">
                          <div className="w-30 h-30 rounded-md">
                            <img src={item.Img} alt="itemImg" className="w-full h-full object-cover rounded-md" />
                          </div>
                          <div className=" mr-5  text-md font-semibold flex flex-col gap-2 items-center">
                            <div className="flex justify-center items-center">
                              <p>{item.title} - </p>
                              <p>36$</p>
                            </div>
                            <div className="border border-black px-4 py-2 rounded-md mt-5">
                              <button className="underline grey cursor-pointer" onClick={() => removeFromCart(item.id)}>
                                <i className="fa-solid fa-trash"></i> Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-10 mb-10 ">
              <span className="text-xl font-semibold ">1 free mini deluxe sample with any $40+ order</span>
              <p className="grey text-md mt-5">choose free samples (1 remaining)</p>
              <div className="flex gap-5 justify-center items-center mt-5">
                <div className="border border-col w-35 h-35 flex flex-col justify-center items-center rounded-md" >
                  <div className="w-25 h-25">
                    <img src={free1} alt="free1" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-sm font-semibold mt-2">rose bloom lip</p>
                </div>
                <div className="border border-col w-35 h-35 flex flex-col justify-center items-center rounded-md" >
                  <div className="w-25 h-25">
                    <img src={free2} alt="free1" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-sm font-semibold mt-2"> lip glaze deluxe</p>
                </div>
                <div className="border border-col w-35 h-35 flex flex-col justify-center items-center rounded-md" >
                  <div className="w-25 h-25">
                    <img src={free3} alt="free1" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-sm font-semibold mt-2">brown kylash</p>
                </div>
                <div className="border border-col w-35 h-35 flex flex-col justify-center items-center rounded-md" >
                  <div className="w-25 h-25">
                    <img src={free4} alt="free1" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-sm font-semibold mt-2">lash kylie</p>
                </div>
              </div>
            </div>
          </div>

          <div className="fixed bottom-0 left-0 p-5 w-full h-40 flex flex-col gap-2 bg-white">
            <div className="flex text-xl font-semibold justify-between items-center font">
              <p>estimated total</p>
              <span>$21</span>
            </div>
            <p className="grey">shipping & discounts calculated at checkout</p>
            <button className="bg-black text-white px-5 py-2 w-140 rounded-md cursor-pointer">checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSideBar;