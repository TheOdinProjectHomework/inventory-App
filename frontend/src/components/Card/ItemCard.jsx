import React from 'react'

const ItemCard = ({ item, handleAdd }) => {
    const { title } = item;

  return (
    <div className="card bg-base-100 w-60 shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={() => handleAdd(item)}>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard