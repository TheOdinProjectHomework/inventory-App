import React, { useState } from 'react'
import { Link } from "react-router"
import { BarChart2, Menu, Settings, ShoppingBag, ShoppingCart, Home } from "lucide-react";

const SIDEBAR_ITEMS = [
  {
    name: "Home",
    icon: Home,
    color: "#6366F1",
    href: "/",
  },
  {
    name: "Categories",
    icon: ShoppingBag,
    color: "#8B5CF6",
    href: "/categories",
  },
  {
    name: "Cart",
    icon: ShoppingCart,
    color: "#F59E0B",
    href: "/cart",
  },
  {
    name: "Settings",
    icon: Settings,
    color: "#A83236",
    href: "/settings",
  },
];

const Sidebar = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(true);

    return (
        <div 
        className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${isSideBarOpen ? 'w-64' : 'w-20'}`} 
        animate={{ width: isSideBarOpen ? 256 : 80}}
        >
        <div className='h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex-col border-r border-gray-700'>
            <button
            onClick={() => setIsSideBarOpen(!isSideBarOpen)}
            className='p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit'
            >
                <Menu size={24} />
            </button>

            <nav>
            {SIDEBAR_ITEMS.map((item) => (
                <Link key={item.href} to={item.href}>
                <div className='flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700'>
                    <item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />
                    {isSideBarOpen && (
                        <span
                        className='ml-4 whitespace-nowrap'
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2, delay: 0.3 }}
                        >
                        {item.name}
                        </span>
                    )}
                </div>
                </Link>
            ))}
            </nav>
        </div>
        </div>
    );
}

export default Sidebar