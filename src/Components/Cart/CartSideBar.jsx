import React from "react";
import { useCart } from "./CartContext";

const CartSideBar = ({onClose}) => {
  const { cart, removeFromCart } = useCart();

  return (
    <>

    <div className="fixed top-0 right-0 h-full w-[400px] bg-white shadow-2xl transform translate-x-0 transition-transform duration-500 z-50">

      <div>


        <div>  

          <span>Cart</span>  
          <button onClick={onClose}><i className="fa-solid fa-xmark text-3xl text-black"></i></button>

        </div>



      </div>

    </div>


    </>
  );
};

export default CartSideBar;



