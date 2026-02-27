import React from 'react'
import Header from '../components/common/Header'
import CartCard from '../components/Card/CartCard';
import { CircleCheck } from "lucide-react";

const Cart = ({ cart }) => {
    console.log(cart);

    // to-do
    // handleDelete item from cart
    // buy button
    
  return (
    <div className="flex-1 overflow-auto">
      <Header title="Cart" />
      <h2 className="p-2.5 bg-gray-800">Transaction items ({cart.length})</h2>
      <main className="border border-gray-700 flex flex-col items-center h-120 p-2 overflow-auto">
        {cart.map((item, i) => (
          <CartCard key={i} item={item} />
        ))}
      </main>
      <div className="mt-auto w-full pt-2">
        <button className="btn btn-active btn-info w-80 rounded-2xl text-white">
          <CircleCheck />
            Confirm Transaction
        </button>
      </div>
    </div>
  );    
}

export default Cart