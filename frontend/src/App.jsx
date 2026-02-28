import { Route, Routes } from 'react-router';
import './App.css'
import Sidebar from './components/sidebar/Sidebar';
import HomePage from './pages/HomePage';
import Categories from './pages/Categories';
import ItemsPage from './pages/ItemsPage';
import Cart from './pages/Cart';
import { useState } from 'react';
import { useEffect } from 'react';
import Settings from './pages/Settings';

function App() {

  const [cart, setCart] = useState([]);
  const [categories, setCategories] = useState([]);

  const getData = async () => {
    const req = await fetch(`http://localhost:5000/api/category`);
    const res = await req.json();
    setCategories(res);
  }

  useEffect(() => {
    getData();
  }, []);


  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<Categories categories={categories} />} />
        <Route path="/categories/:category" element={<ItemsPage cart={cart} setCart={setCart} />} />
        <Route path='/cart' element={<Cart cart={cart} />} />
        <Route path='/settings' element={<Settings categories={categories} />} />
      </Routes>
    </div>
  );
}

export default App
