import Header from '../components/common/Header'
import CartCard from '../components/Card/CartCard';
import toast from 'react-hot-toast';
import { CircleCheck } from "lucide-react";

const Cart = ({ cart, setCart }) => {
    // to-do
    // handleDelete item from cart
    // buy button
    const handleBuy = () => {
      if(cart.length <= 0) return toast.error("Cart is empty");
      toast.success("Work in Progress...");
      setCart([]);
    }
    
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
        <button onClick={() => handleBuy()} className="btn btn-active btn-info w-80 rounded-2xl text-white">
          <CircleCheck />
            Confirm Transaction
        </button>
      </div>
    </div>
  );    
}

export default Cart