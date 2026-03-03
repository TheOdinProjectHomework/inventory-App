import React from 'react'
import notFound from "../../assets/Image-not-found.png"

const ItemCard = ({ item, handleAdd }) => {
    const { name, image } = item;
    console.log(item);

  return (
    <div className="card bg-gray-800 w-55 shadow-sm m-2">
      <figure>
        <img className='w-54 h-48 object-cover rounded-t-lg'
          src={
            image?.trim()
              ? image
              : notFound
          }
          alt={name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={() => handleAdd(item)}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard