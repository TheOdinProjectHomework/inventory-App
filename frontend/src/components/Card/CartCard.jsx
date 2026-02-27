import React from 'react'

const CartCard = ({ item }) => {
    const { title, image, category } = item;

  return (
    <div className="flex items-center bg-gray-800 border border-white/10 rounded-xl p-3 w-80 hover:border-white/30 transition mb-2">
      <img
        src={image ? image : "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
        alt={title}
        className="w-16 h-16 object-cover rounded-lg mr-4"
      />
      <div className="flex flex-col text-white text-left">
        <h3 className="font-semibold text-md">{title}</h3>
        <p className="text-sm text-gray-400">{category}</p>
      </div>
    </div>
  );
}

export default CartCard