import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import Header from '../components/common/Header';
import ItemCard from '../components/Card/ItemCard';
import { useState } from 'react';
import toast from 'react-hot-toast';
import WindowAlert from '../components/common/WindowAlert';

const ItemsPage = ({ cart, setCart }) => {
    const [items, setItems] = useState([]);

    let { category } = useParams();
    console.log(category);
    
    useEffect(() => {
        const getItems = async () => {
            try {
                const req = await fetch(`http://localhost:5000/api/category/${category}/items`);
                const res = await req.json();
                setItems(res);
            } catch (error) {
                setItems([]);
                console.log(`Error fetching items in category: ${category}`, error);
            }
        };
        getItems();
    }, []);

    const addToCart = (item) => {
        toast.success("Item added to cart");
        setCart([...cart, item]);
    }

  return (
    <div className="flex-1 overflow-auto">
        <Header title={category} />
        <main className='max-w-7xl mx-auto p-6 lg:px-8 flex flex-wrap'>
            {
                items.length > 0 ?
                items.map((item) => (
                    <ItemCard key={item._id} item={item} handleAdd={addToCart} />
                )) : <WindowAlert />
            }
        </main>
    </div>
  );
}

export default ItemsPage