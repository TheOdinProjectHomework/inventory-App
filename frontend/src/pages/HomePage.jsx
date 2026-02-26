import React from 'react'
import { Link } from 'react-router';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-5xl font-bold">
          Welcome to inventory-App
        </h1>

        <p className="text-gray-400 text-lg">
          Organize, track, and manage your products
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Link
            to="/categories"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
          >View Categories</Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage