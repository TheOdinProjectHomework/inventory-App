import { Route, Routes } from 'react-router';
import { Toaster } from "react-hot-toast";
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
  const BASEURL = import.meta.env.DEV ? "http://localhost:5000/api" : "/api";
  
  useEffect(() => {
    const getData = async () => {
      try {
        const req = await fetch(`${BASEURL}/category`);
        const res = await req.json();
        setCategories(res);
      } catch (error) {
        console.log("Error fetching categories: ", error);
      }
    };

    getData();
  }, []);


  return (
    <div className="flex h-screen overflow-hidden">
      <Toaster />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/categories"
          element={<Categories categories={categories} />}
        />
        <Route
          path="/categories/:category"
          element={<ItemsPage cart={cart} setCart={setCart} url={BASEURL} />}
        />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route
          path="/settings"
          element={<Settings categories={categories} url={BASEURL} />}
        />
      </Routes>
    </div>
  );
}

export default App
