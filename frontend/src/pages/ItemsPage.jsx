import React from 'react'
import { useParams } from 'react-router'
import Header from '../components/common/Header';
import ItemCard from '../components/Card/ItemCard';

const ItemsPage = ({ cart, setCart }) => {
    let { category } = useParams();

    const items = [
        {
        title: "Phone",
        category: "Electronics"
        },
        {
        title: "Car",
        category: "Electronics"
        },
        {
        title: "Sandwich",
        category: "Kitchen"
        },
    ];

    const addToCart = (item) => {
        setCart([...cart, item]);
    }

  return (
    <div className="flex-1 overflow-auto">
        <Header title={category} />
        <main className='max-w-7xl mx-auto p-6 lg:px-8 flex flex-wrap'>
            {
                items.map((item, i) => (
                    <ItemCard key={i} item={item} handleAdd={addToCart} />
                ))
            }
        </main>
    </div>
  );
}

export default ItemsPage